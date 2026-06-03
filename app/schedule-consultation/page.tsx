"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Constants ────────────────────────────────────────────────────────────────

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: (number | null)[] = Array(firstDay).fill(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);
  return days;
}

function formatDate(year: number, month: number, day: number) {
  return `${MONTHS[month]} ${day}, ${year}`;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function BookConsultation() {
  const today = new Date();

  const [step, setStep] = useState(1);
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    firm: "",
    email: "",
    phone: "",
    caseType: "",
    notes: "",
  });

  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);

  const calDays = getCalendarDays(year, month);
  const selectedDate = selectedDay
    ? formatDate(year, month, selectedDay)
    : null;

  const fetchBookedSlots = useCallback(async (date: string) => {
    setLoadingSlots(true);
    try {
      const res = await fetch(`/api/bookings?date=${encodeURIComponent(date)}`);
      const data = await res.json();
      setBookedSlots(data.bookedSlots ?? []);
    } catch {
      setBookedSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  }, []);

  useEffect(() => {
    if (selectedDate) fetchBookedSlots(selectedDate);
  }, [selectedDate, fetchBookedSlots]);

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else setMonth((m) => m - 1);
    setSelectedDay(null);
    setSelectedTime(null);
  };
  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else setMonth((m) => m + 1);
    setSelectedDay(null);
    setSelectedTime(null);
  };

  const isDisabled = (day: number) => {
    const d = new Date(year, month, day);
    const dow = d.getDay();
    const isPast =
      d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return dow === 0 || dow === 6 || isPast;
  };

  function getAvailableSlots(date: Date) {
    const day = date.getDay();
    if (day === 5) return ["8:13 AM – 8:45 AM", "2:28 PM – 3:00 PM"];
    return ["8:13 AM – 8:45 AM", "9:18 AM – 9:50 AM"];
  }

  const handleBook = async () => {
    if (!selectedDate || !selectedTime) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          date: selectedDate,
          time: selectedTime,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data.error ?? "Something went wrong. Please try again.");
        if (res.status === 409) {
          setSelectedTime(null);
          if (selectedDate) fetchBookedSlots(selectedDate);
          setStep(1);
        }
        return;
      }
      setBooked(true);
    } catch {
      setSubmitError(
        "Network error. Please check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  // ─── Reusable Tailwind class strings ─────────────────────────────────────────

  const inputCls =
    "w-full border border-accent/20 bg-white/[0.03] px-3.5 py-[11px]  text-[13px] text-white/85 outline-none transition-colors duration-150 focus:border-accent placeholder:text-white/20";

  const labelCls =
    "block mb-1.5  text-[10px] tracking-[0.1em] uppercase text-white/40";

  const btnGold =
    "inline-block bg-gradient-to-br from-[#F4D77A] via-[#C9A84C] to-[#A07D2E] text-[#0A0A0A]  text-[11px] font-bold tracking-[2px] uppercase px-8 py-3.5 border-none cursor-pointer transition-[filter,opacity] duration-200 hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed no-underline";

  const btnOutline =
    "inline-block bg-transparent text-accent  text-[11px] font-semibold tracking-[2px] uppercase px-7 py-3 border border-accent/40 cursor-pointer transition-colors duration-150 hover:bg-accent/[0.08] no-underline";

  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#0A0A0A] px-6 py-40">
        <div className="mx-auto max-w-[1000px]">
          {/* ── Progress bar ── */}
          {!booked && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center mb-14"
            >
              {["Select Date & Time", "Your Information", "Confirm"].map(
                (label, i) => (
                  <div key={i} className="flex items-center">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold transition-all
                        ${
                          step > i + 1
                            ? "bg-accent text-[#0A0A0A] border-none"
                            : step === i + 1
                              ? "bg-accent/15 text-accent border border-accent"
                              : "bg-transparent text-white/30 border border-white/15"
                        }`}
                      >
                        {step > i + 1 ? "✓" : i + 1}
                      </div>
                      <span
                        className={` text-[10px] tracking-[0.08em] uppercase whitespace-nowrap
                        ${step === i + 1 ? "text-accent" : "text-white/30"}`}
                      >
                        {label}
                      </span>
                    </div>
                    {i < 2 && (
                      <div
                        className={`w-20 h-px mx-2 mb-6 transition-colors
                        ${step > i + 1 ? "bg-accent" : "bg-accent/20"}`}
                      />
                    )}
                  </div>
                ),
              )}
            </motion.div>
          )}

          {/* ════════════ BOOKED CONFIRMATION ════════════ */}
          {booked ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/[0.03] border border-accent/20 px-12 py-20 text-center"
            >
              <div className="w-20 h-20 rounded-full border border-accent flex items-center justify-center mx-auto mb-8">
                <span className="text-accent text-4xl">✓</span>
              </div>
              <h2 className=" text-[38px] font-semibold text-white mb-4">
                Consultation Confirmed
              </h2>
              <div className="inline-block bg-accent/[0.06] border border-accent/20 px-10 py-5 mb-8">
                <p className=" text-base font-semibold text-white">
                  {selectedDate}
                </p>
                <p className=" text-sm text-accent mt-1">{selectedTime}</p>
              </div>
              <p className=" text-[13px] font-light text-white/50 leading-relaxed max-w-[480px] mx-auto mb-10">
                A confirmation has been sent to{" "}
                <strong className="text-white/80">{form.email}</strong>. Our
                team will call you at {form.phone} at the scheduled time.
              </p>
              <Link href="/" className={btnGold}>
                Return to Home
              </Link>
            </motion.div>
          ) : step === 1 ? (
            /* ════════════ STEP 1 — Date & Time ════════════ */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/[0.03] border border-accent/20 p-12"
            >
              <div className="grid grid-cols-2 gap-12">
                {/* Calendar */}
                <div>
                  <h3 className=" text-[26px] font-semibold text-white mb-6">
                    Select a Date
                  </h3>
                  <div className="border border-accent/20 p-6">
                    {/* Month nav */}
                    <div className="flex items-center justify-between mb-5">
                      <button
                        onClick={prevMonth}
                        className="w-9 h-9 bg-transparent border border-accent/30 text-accent text-base cursor-pointer hover:bg-accent/10 transition-colors"
                      >
                        ‹
                      </button>
                      <span className=" text-xl font-semibold text-white">
                        {MONTHS[month]} {year}
                      </span>
                      <button
                        onClick={nextMonth}
                        className="w-9 h-9 bg-transparent border border-accent/30 text-accent text-base cursor-pointer hover:bg-accent/10 transition-colors"
                      >
                        ›
                      </button>
                    </div>

                    {/* Day headers */}
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {DAYS.map((d) => (
                        <div
                          key={d}
                          className="text-center text-[10px] tracking-[0.1em] uppercase text-white/30 py-1"
                        >
                          {d}
                        </div>
                      ))}
                    </div>

                    {/* Date cells */}
                    <div className="grid grid-cols-7 gap-1">
                      {calDays.map((day, idx) => (
                        <button
                          key={idx}
                          disabled={day === null || isDisabled(day)}
                          onClick={() => {
                            if (day && !isDisabled(day)) {
                              setSelectedDay(day);
                              setSelectedTime(null);
                            }
                          }}
                          className={`h-[38px] border-none  text-[13px] transition-all duration-150
                            ${
                              day === null || isDisabled(day)
                                ? "bg-transparent text-white/15 cursor-default"
                                : selectedDay === day
                                  ? "bg-accent text-[#0A0A0A] font-bold cursor-pointer"
                                  : "bg-transparent text-white/75 cursor-pointer hover:bg-accent/15"
                            }`}
                        >
                          {day || ""}
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className=" text-[11px] tracking-[0.05em] text-white/30 mt-3">
                    * Weekends unavailable. All times in Pacific Time (PT).
                  </p>
                </div>

                {/* Time slots */}
                <div>
                  <h3 className=" text-[26px] font-semibold text-white mb-6">
                    Select a Time
                  </h3>

                  {!selectedDay ? (
                    <div className="h-[200px] flex items-center justify-center border border-dashed border-accent/20  text-[13px] text-white/25">
                      Please select a date first
                    </div>
                  ) : loadingSlots ? (
                    <div className="h-[200px] flex items-center justify-center  text-[12px] tracking-[0.08em] uppercase text-accent">
                      Loading availability…
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {getAvailableSlots(
                        new Date(year, month, selectedDay),
                      ).map((slot) => {
                        const taken = bookedSlots.includes(slot);
                        const active = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            disabled={taken}
                            onClick={() => !taken && setSelectedTime(slot)}
                            title={
                              taken ? "This slot is already booked" : undefined
                            }
                            className={`py-3 px-2  text-[12px] transition-all duration-150 border
                              ${
                                active
                                  ? "border-accent bg-accent/10 text-accent font-semibold cursor-pointer"
                                  : taken
                                    ? "border-accent/20 bg-transparent text-white/20 cursor-not-allowed line-through"
                                    : "border-accent/20 bg-white/[0.02] text-white/60 cursor-pointer hover:border-accent/50 hover:bg-accent/[0.06]"
                              }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {selectedDay && selectedTime && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 p-5 bg-accent/[0.06] border border-accent/20"
                    >
                      <p className=" text-[10px] tracking-[0.1em] uppercase text-white/35 mb-2">
                        Selected Appointment
                      </p>
                      <p className=" text-xl font-semibold text-white">
                        {selectedDate} · {selectedTime}
                      </p>
                      <p className=" text-[12px] text-white/40 mt-2">
                        32-minute strategy consultation · Complimentary
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button
                  disabled={!selectedDay || !selectedTime}
                  onClick={() => setStep(2)}
                  className={btnGold}
                >
                  Continue →
                </button>
              </div>
            </motion.div>
          ) : step === 2 ? (
            /* ════════════ STEP 2 — Your Information ════════════ */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/[0.03] border border-accent/20 p-12"
            >
              <h3 className=" text-[30px] font-semibold text-white mb-2">
                Your Information
              </h3>
              <p className=" text-[12.5px] text-white/40 mb-10">
                Appointment:{" "}
                <strong className="text-accent">
                  {selectedDate} · {selectedTime}
                </strong>
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(3);
                }}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Full Name *</label>
                    <input
                      className={inputCls}
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Law Firm</label>
                    <input
                      className={inputCls}
                      value={form.firm}
                      onChange={(e) =>
                        setForm({ ...form, firm: e.target.value })
                      }
                      placeholder="Firm name"
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Email *</label>
                    <input
                      className={inputCls}
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@firm.com"
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Phone *</label>
                    <input
                      className={inputCls}
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Case Type / Charge</label>
                  <select
                    className={inputCls}
                    value={form.caseType}
                    onChange={(e) =>
                      setForm({ ...form, caseType: e.target.value })
                    }
                  >
                    <option value="" className="bg-[#0A0A0A]">
                      Select case type…
                    </option>
                    <option className="bg-[#0A0A0A]">Wire Fraud</option>
                    <option className="bg-[#0A0A0A]">Drug Trafficking</option>
                    <option className="bg-[#0A0A0A]">Bank Fraud</option>
                    <option className="bg-[#0A0A0A]">Healthcare Fraud</option>
                    <option className="bg-[#0A0A0A]">Tax Fraud</option>
                    <option className="bg-[#0A0A0A]">Money Laundering</option>
                    <option className="bg-[#0A0A0A]">Securities Fraud</option>
                    <option className="bg-[#0A0A0A]">Conspiracy</option>
                    <option className="bg-[#0A0A0A]">
                      Other Federal Offense
                    </option>
                  </select>
                </div>

                <div>
                  <label className={labelCls}>Brief Case Notes</label>
                  <textarea
                    className={inputCls}
                    rows={4}
                    value={form.notes}
                    onChange={(e) =>
                      setForm({ ...form, notes: e.target.value })
                    }
                    placeholder="Sentencing date, district, any key factors…"
                    style={{ resize: "vertical" }}
                  />
                </div>

                <div className="flex justify-between mt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className={btnOutline}
                  >
                    ← Back
                  </button>
                  <button type="submit" className={btnGold}>
                    Review & Confirm →
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            /* ════════════ STEP 3 — Confirm ════════════ */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/[0.03] border border-accent/20 p-12"
            >
              <h3 className=" text-[30px] font-semibold text-white mb-2">
                Confirm Your Booking
              </h3>
              <p className=" text-[12.5px] text-white/40 mb-10">
                Review your appointment details below.
              </p>

              {submitError && (
                <div className="bg-red-900/20 border border-red-300/30 px-4 py-3.5  text-[12.5px] text-red-300 mb-6 leading-relaxed">
                  {submitError}
                </div>
              )}

              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  {
                    label: "Date & Time",
                    val: `${selectedDate} · ${selectedTime}`,
                  },
                  { label: "Duration", val: "32-minute strategy consultation" },
                  { label: "Name", val: form.name },
                  { label: "Law Firm", val: form.firm || "—" },
                  { label: "Email", val: form.email },
                  { label: "Phone", val: form.phone },
                  { label: "Case Type", val: form.caseType || "—" },
                  { label: "Consultation Fee", val: "Complimentary" },
                ].map((f, i) => (
                  <div key={i} className="border-b border-white/[0.06] pb-4">
                    <div className=" text-[10px] tracking-[0.1em] uppercase text-white/30 mb-1.5">
                      {f.label}
                    </div>
                    <div
                      className={` text-sm font-semibold ${f.label === "Consultation Fee" ? "text-accent" : "text-white/85"}`}
                    >
                      {f.val}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-accent/[0.04] border border-accent/15 p-6 mb-8">
                <p className=" text-[12px] text-white/45 leading-relaxed">
                  <strong className="text-white/65">Note:</strong> This is a
                  complimentary 32-minute strategy consultation. Our team will
                  reach out to confirm your appointment within 24 hours.
                </p>
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    setStep(2);
                    setSubmitError(null);
                  }}
                  className={btnOutline}
                >
                  ← Edit
                </button>
                <button
                  onClick={handleBook}
                  disabled={submitting}
                  className={btnGold}
                >
                  {submitting ? "Confirming…" : "Confirm Booking ✓"}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
