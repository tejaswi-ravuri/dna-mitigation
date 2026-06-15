"use client";
import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

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

// ─── Dynamic tagline logic ────────────────────────────────────────────────────

const CRIMINAL_PRACTICES = [
  "federal-sentencing",
  "white-collar",
  "narrative-mitigation",
];
const INJURY_PRACTICES = [
  "personal-injury",
  "workplace-injury",
  "wrongful-death",
];

function getTagline(from: string | null): { headline: string; sub: string } {
  const src = (from ?? "").toLowerCase();
  if (INJURY_PRACTICES.some((p) => src.includes(p))) {
    return {
      headline: "Reserve a 32-Minute Mitigation Strategy Session",
      sub: "Medical records document the injury. Video reveals the life it changed.",
    };
  }
  // Default (home, criminal practices, or unknown)
  return {
    headline: "Reserve a 32-Minute Mitigation Strategy Session",
    sub: "What if court met the person before reading the file?",
  };
}

// ─── Time Zone Helpers ────────────────────────────────────────────────────────

function parseTime(timeStr: string): {
  hour: number;
  minute: number;
  ampm: string;
} {
  const match = timeStr.trim().match(/^(\d+):(\d+)\s*(AM|PM)$/i);
  if (!match) return { hour: 0, minute: 0, ampm: "AM" };
  return {
    hour: parseInt(match[1], 10),
    minute: parseInt(match[2], 10),
    ampm: match[3].toUpperCase(),
  };
}

function formatHour(
  baseHour24: number,
  baseMinute: number,
  offsetHours: number,
): string {
  let total = baseHour24 * 60 + baseMinute + offsetHours * 60;
  total = ((total % 1440) + 1440) % 1440;
  const h24 = Math.floor(total / 60);
  const m = total % 60;
  const ampm = h24 >= 12 ? "PM" : "AM";
  let h12 = h24 % 12;
  if (h12 === 0) h12 = 12;
  return `${h12}:${m.toString().padStart(2, "0")} ${ampm}`;
}

function to24Hour(hour: number, minute: number, ampm: string): number {
  let h = hour;
  if (ampm === "AM" && h === 12) h = 0;
  if (ampm === "PM" && h !== 12) h += 12;
  return h;
}

function slotAllZones(slot: string): { PT: string; CT: string; ET: string } {
  const [startStr, endStr] = slot.split("–").map((s) => s.trim());
  const start = parseTime(startStr);
  const end = parseTime(endStr);
  const start24 = to24Hour(start.hour, start.minute, start.ampm);
  const end24 = to24Hour(end.hour, end.minute, end.ampm);

  const makeRange = (offset: number) =>
    `${formatHour(start24, start.minute, offset)} – ${formatHour(end24, end.minute, offset)}`;

  return {
    PT: makeRange(0),
    CT: makeRange(2),
    ET: makeRange(3),
  };
}

// ─── Calendar Helpers ─────────────────────────────────────────────────────────

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

// ─── Case Type Options ────────────────────────────────────────────────────────

const CRIMINAL_CASES = [
  "Antitrust Violations",
  "Bank Fraud",
  "Bribery / Public Corruption",
  "Computer / Cybercrime",
  "Conspiracy",
  "Drug Offense / Drug Trafficking",
  "Embezzlement",
  "False Statements",
  "Healthcare Fraud",
  "Identity Theft",
  "International Money Transmission",
  "Investment Fraud",
  "Kickback Violations",
  "Mail Fraud",
  "Money Laundering",
  "Mortgage Fraud",
  "PPP / COVID Relief Fraud",
  "RICO",
  "Securities Fraud",
  "Tax Fraud",
  "Theft of Government Funds",
  "Wire Fraud",
  "Other Federal Offense",
];

const INJURY_CASES = [
  "Amputation",
  "Construction Accident",
  "Industrial Accident",
  "Medical Malpractice",
  "Motor Vehicle Accident",
  "Paralysis / Quadriplegia",
  "Product Liability",
  "Severe Burn Injury",
  "Spinal Cord Injury",
  "Traumatic Brain Injury (TBI)",
  "Trucking Accident",
  "Workplace Accident",
  "Wrongful Death",
  "Other Catastrophic Injury",
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function BookConsultation() {
  const today = new Date();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const tagline = getTagline(from);

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

  // ─── Shared styles ────────────────────────────────────────────────────────

  const inputCls =
    "w-full border border-accent/20 bg-white/[0.03] px-3.5 py-[11px] text-[13px] text-white/85 outline-none transition-colors duration-150 focus:border-accent placeholder:text-white/20";
  const labelCls =
    "block mb-1.5 text-[10px] tracking-[0.1em] uppercase text-white/40";
  const btnGold =
    "inline-block bg-gradient-to-br from-[#F4D77A] via-[#C9A84C] to-[#A07D2E] text-[#0A0A0A] text-[11px] font-bold tracking-[2px] uppercase px-8 py-3.5 border-none cursor-pointer transition-[filter,opacity] duration-200 hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed no-underline";
  const btnOutline =
    "inline-block bg-transparent text-accent text-[11px] font-semibold tracking-[2px] uppercase px-7 py-3 border border-accent/40 cursor-pointer transition-colors duration-150 hover:bg-accent/[0.08] no-underline";

  // ─────────────────────────────────────────────────────────────────────────

  return (
    <>
      <Navbar />

      {/* ── Page header — dynamic tagline ── */}
      {/* <section className="bg-background pt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {tagline.headline}
            </h2>
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              {tagline.sub}
            </p>
          </motion.div>
        </div>
      </section> */}

      <section className="min-h-screen pt-40 pb-20 bg-[#0A0A0A] px-6">
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
                        className={`text-[10px] tracking-[0.08em] uppercase whitespace-nowrap
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
              <h2 className="text-[38px] font-semibold text-white mb-4">
                Consultation Confirmed
              </h2>
              <div className="inline-block bg-accent/[0.06] border border-accent/20 px-10 py-5 mb-8">
                <p className="text-base font-semibold text-white">
                  {selectedDate}
                </p>
                {selectedTime &&
                  (() => {
                    const zones = slotAllZones(selectedTime);
                    return (
                      <div className="mt-2 space-y-0.5">
                        <p className="text-sm text-accent font-semibold">
                          {zones.PT} PT
                        </p>
                        <p className="text-xs text-white/50">
                          {zones.CT} CT · {zones.ET} ET
                        </p>
                      </div>
                    );
                  })()}
              </div>
              <p className="text-[13px] font-light text-white/50 leading-relaxed max-w-[480px] mx-auto mb-10">
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
                  <h3 className="text-[26px] font-semibold text-white mb-6">
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
                      <span className="text-xl font-semibold text-white">
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
                          disabled={day === null || isDisabled(day as number)}
                          onClick={() => {
                            if (day && !isDisabled(day)) {
                              setSelectedDay(day);
                              setSelectedTime(null);
                            }
                          }}
                          className={`h-[38px] border-none text-[13px] transition-all duration-150
                            ${
                              day === null || isDisabled(day as number)
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

                  {/* Timezone note */}
                  <p className="text-[11px] tracking-[0.05em] text-white/30 mt-3">
                    * Weekends unavailable. Select your preferred time zone
                    below — all slots shown in PT, CT, and ET.
                  </p>

                  {/* Tagline injected here for criminal/injury context */}
                  <div className="mt-5 pt-5 border-t border-white/[0.06]">
                    <p className="text-[13px] font-semibold text-accent leading-snug">
                      {tagline.headline}
                    </p>
                    <p className="text-[12px] text-white/40 mt-1 italic">
                      {tagline.sub}
                    </p>
                  </div>
                </div>

                {/* Time slots */}
                <div>
                  <h3 className="text-[26px] font-semibold text-white mb-2">
                    Select a Time
                  </h3>

                  {/* Timezone legend */}
                  <div className="flex items-center gap-3 mb-5">
                    {(
                      ["PT — Pacific", "CT — Central", "ET — Eastern"] as const
                    ).map((label, i) => (
                      <span
                        key={label}
                        className={`text-[10px] tracking-[0.1em] uppercase font-semibold px-2 py-0.5 border ${i === 0 ? "border-accent text-accent" : "border-white/15 text-white/35"}`}
                      >
                        {label}
                      </span>
                    ))}
                  </div>

                  {!selectedDay ? (
                    <div className="h-[200px] flex items-center justify-center border border-dashed border-accent/20 text-[13px] text-white/25">
                      Please select a date first
                    </div>
                  ) : loadingSlots ? (
                    <div className="h-[200px] flex items-center justify-center text-[12px] tracking-[0.08em] uppercase text-accent">
                      Loading availability…
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {getAvailableSlots(
                        new Date(year, month, selectedDay),
                      ).map((slot) => {
                        const taken = bookedSlots.includes(slot);
                        const active = selectedTime === slot;
                        const zones = slotAllZones(slot);

                        return (
                          <button
                            key={slot}
                            disabled={taken}
                            onClick={() => !taken && setSelectedTime(slot)}
                            className={`w-full py-4 px-5 text-left transition-all duration-150 border
                              ${
                                active
                                  ? "border-accent bg-accent/10 cursor-pointer"
                                  : taken
                                    ? "border-accent/20 bg-transparent cursor-not-allowed opacity-40"
                                    : "border-accent/20 bg-white/[0.02] cursor-pointer hover:border-accent/50 hover:bg-accent/[0.06]"
                              }`}
                          >
                            {/* PT — primary */}
                            <div className="flex items-center justify-between mb-2.5">
                              <span
                                className={`text-[15px] font-bold tracking-wide ${active ? "text-accent" : taken ? "text-white/25 line-through" : "text-white/90"}`}
                              >
                                {zones.PT}
                              </span>
                              <span
                                className={`text-[10px] font-bold tracking-[0.12em] uppercase px-1.5 py-0.5 ${active ? "bg-accent/20 text-accent" : "bg-white/[0.06] text-white/40"}`}
                              >
                                Pacific Time
                              </span>
                            </div>

                            <div
                              className={`w-full h-px mb-2.5 ${active ? "bg-accent/20" : "bg-white/[0.05]"}`}
                            />

                            {/* CT / ET — secondary */}
                            <div className="grid grid-cols-2 gap-4">
                              {(
                                [
                                  ["CT", zones.CT, "Central Time"],
                                  ["ET", zones.ET, "Eastern Time"],
                                ] as const
                              ).map(([code, time, label]) => (
                                <div key={code}>
                                  <div
                                    className={`text-[9px] tracking-[0.12em] uppercase mb-0.5 ${active ? "text-accent/60" : "text-white/25"}`}
                                  >
                                    {label}
                                  </div>
                                  <div
                                    className={`text-[12px] font-semibold ${active ? "text-white/75" : taken ? "text-white/20 line-through" : "text-white/50"}`}
                                  >
                                    {time}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {taken && (
                              <div className="mt-2 text-[10px] tracking-[0.08em] uppercase text-white/25">
                                Unavailable
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Selected appointment summary */}
                  {selectedDay &&
                    selectedTime &&
                    (() => {
                      const zones = slotAllZones(selectedTime);
                      return (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 p-5 bg-accent/[0.06] border border-accent/20"
                        >
                          <p className="text-[10px] tracking-[0.1em] uppercase text-white/35 mb-2">
                            Selected Appointment
                          </p>
                          <p className="text-xl font-semibold text-white mb-3">
                            {selectedDate}
                          </p>
                          <div className="flex flex-col gap-1.5">
                            {(
                              [
                                ["PT", zones.PT, "Pacific"],
                                ["CT", zones.CT, "Central"],
                                ["ET", zones.ET, "Eastern"],
                              ] as const
                            ).map(([code, time, label], i) => (
                              <div
                                key={code}
                                className="flex items-baseline gap-2"
                              >
                                <span
                                  className={`text-[9px] tracking-[0.12em] uppercase font-bold w-5 ${i === 0 ? "text-accent" : "text-white/35"}`}
                                >
                                  {code}
                                </span>
                                <span
                                  className={`text-[12px] font-semibold ${i === 0 ? "text-white" : "text-white/50"}`}
                                >
                                  {time}
                                </span>
                                <span className="text-[10px] text-white/25">
                                  {label}
                                </span>
                              </div>
                            ))}
                          </div>
                          <p className="text-[12px] text-white/40 mt-3">
                            32-minute strategy consultation · Complimentary
                          </p>
                        </motion.div>
                      );
                    })()}
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
              <h3 className="text-[30px] font-semibold text-white mb-2">
                Your Information
              </h3>
              {selectedTime &&
                (() => {
                  const zones = slotAllZones(selectedTime);
                  return (
                    <p className="text-[12.5px] text-white/40 mb-10">
                      Appointment:{" "}
                      <strong className="text-accent">
                        {selectedDate} · {zones.PT} PT
                      </strong>
                      <span className="text-white/30 ml-2">
                        ({zones.CT} CT · {zones.ET} ET)
                      </span>
                    </p>
                  );
                })()}

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

                {/* Case type — grouped */}
                <div>
                  <label className={labelCls}>Case Type</label>
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
                    <optgroup
                      label="── Criminal Matters ──"
                      className="bg-[#0A0A0A] text-white/40 text-[11px]"
                    >
                      {CRIMINAL_CASES.map((c) => (
                        <option key={c} className="bg-[#0A0A0A] text-white/85">
                          {c}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup
                      label="── Personal Injury Matters ──"
                      className="bg-[#0A0A0A] text-white/40 text-[11px]"
                    >
                      {INJURY_CASES.map((c) => (
                        <option key={c} className="bg-[#0A0A0A] text-white/85">
                          {c}
                        </option>
                      ))}
                    </optgroup>
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
              <h3 className="text-[30px] font-semibold text-white mb-2">
                Confirm Your Booking
              </h3>
              <p className="text-[12.5px] text-white/40 mb-10">
                Review your appointment details below.
              </p>

              {submitError && (
                <div className="bg-red-900/20 border border-red-300/30 px-4 py-3.5 text-[12.5px] text-red-300 mb-6 leading-relaxed">
                  {submitError}
                </div>
              )}

              <div className="grid grid-cols-2 gap-6 mb-10">
                {/* Date & time — full width */}
                <div className="col-span-2 border-b border-white/[0.06] pb-4">
                  <div className="text-[10px] tracking-[0.1em] uppercase text-white/30 mb-2">
                    Date & Time
                  </div>
                  <div className="text-sm font-semibold text-white/85 mb-3">
                    {selectedDate}
                  </div>
                  {selectedTime &&
                    (() => {
                      const zones = slotAllZones(selectedTime);
                      return (
                        <div className="grid grid-cols-3 gap-4">
                          {(
                            [
                              ["PT", zones.PT, "Pacific"],
                              ["CT", zones.CT, "Central"],
                              ["ET", zones.ET, "Eastern"],
                            ] as const
                          ).map(([code, time, label], i) => (
                            <div
                              key={code}
                              className={`px-3 py-2 border ${i === 0 ? "border-accent/40 bg-accent/[0.06]" : "border-white/[0.08] bg-white/[0.02]"}`}
                            >
                              <div
                                className={`text-[9px] tracking-[0.12em] uppercase font-bold mb-1 ${i === 0 ? "text-accent" : "text-white/30"}`}
                              >
                                {code} — {label}
                              </div>
                              <div
                                className={`text-[12px] font-semibold ${i === 0 ? "text-white" : "text-white/55"}`}
                              >
                                {time}
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                </div>

                {[
                  { label: "Duration", val: "32-minute strategy consultation" },
                  { label: "Name", val: form.name },
                  { label: "Law Firm", val: form.firm || "—" },
                  { label: "Email", val: form.email },
                  { label: "Phone", val: form.phone },
                  { label: "Case Type", val: form.caseType || "—" },
                  { label: "Consultation Fee", val: "Complimentary" },
                ].map((f, i) => (
                  <div key={i} className="border-b border-white/[0.06] pb-4">
                    <div className="text-[10px] tracking-[0.1em] uppercase text-white/30 mb-1.5">
                      {f.label}
                    </div>
                    <div
                      className={`text-sm font-semibold ${f.label === "Consultation Fee" ? "text-accent" : "text-white/85"}`}
                    >
                      {f.val}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-accent/[0.04] border border-accent/15 p-6 mb-8">
                <p className="text-[12px] text-white/45 leading-relaxed">
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
    </>
  );
}
