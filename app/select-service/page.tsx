"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { PACKAGES, PackageId } from "@/lib/data/packages";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function GetQuotePage() {
  const router = useRouter();
  const [packageId, setPackageId] = useState<PackageId>("2day");
  const [form, setForm] = useState({
    attorneyName: "",
    lawFirm: "",
    email: "",
    phone: "",
    caseReference: "",
    notes: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");

  const selected = PACKAGES[packageId];
  const isEmailValid = EMAIL_REGEX.test(form.email.trim());
  const canSubmit = Boolean(
    form.attorneyName && form.lawFirm && form.email && isEmailValid,
  );

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function submitRequest() {
    if (!canSubmit) return;
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/quote-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, packageId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setConfirmationCode(data.confirmationCode);
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  // function copyRequestInstead() {
  //   const summary = [
  //     `Quote request — ${selected.name}`,
  //     `Attorney: ${form.attorneyName}`,
  //     `Law Firm: ${form.lawFirm}`,
  //     `Email: ${form.email}`,
  //     `Phone: ${form.phone || "—"}`,
  //     `Case Reference: ${form.caseReference || "—"}`,
  //     `Notes: ${form.notes || "—"}`,
  //   ].join("\n");
  //   navigator.clipboard.writeText(summary);
  // }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-foreground/75 antialiased">
      <Navbar />

      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-40 pb-10">
        <p className="text-[#c9a84c] text-xs tracking-widest uppercase font-bold mb-3">
          Primary Service — Get a Quote
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          Mitigation Video <span className="text-[#c9a84c]">Production</span>
        </h1>
        <div className="w-12 h-0.5 bg-[#c9a84c] mb-6" />
        <p className="leading-relaxed max-w-2xl text-sm">
          Select a production package below for an instant, all-inclusive
          flat-rate estimate.{" "}
          <span className="text-white font-semibold">
            No hourly billing. No hidden fees. No surprises
          </span>{" "}
          — regardless of how many rounds of edits your case requires.
        </p>
      </section>

      {/* Package selection */}
      <section className="max-w-5xl mx-auto px-6 pb-8">
        <div className="grid md:grid-cols-2 gap-6">
          {Object.values(PACKAGES).map((pkg) => {
            const isSelected = pkg.id === packageId;
            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setPackageId(pkg.id)}
                className={`relative text-left rounded-xl p-7 border transition-colors ${
                  isSelected
                    ? "border-[#c9a84c] bg-[#0d0d0d]"
                    : "border-gray-800/70 bg-[#111111]/60 hover:border-gray-700"
                }`}
              >
                {pkg.recommended && (
                  <span className="absolute -top-3 right-6 bg-[#c9a84c] text-[#0a0a0a] text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    Recommended
                  </span>
                )}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-[#c9a84c] text-xl font-semibold">
                    {pkg.name}
                  </h3>
                  <span
                    className={`mt-1 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected ? "border-[#c9a84c]" : "border-gray-600"
                    }`}
                  >
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                    )}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-4">{pkg.subtitle}</p>
                <p className="text-sm font-semibold text-white mb-1">
                  {pkg.interviews}
                </p>
                <p className="text-xs italic text-gray-500 mb-4">
                  Flat-rate pricing — included in your private quote
                </p>
                <div className="border-t border-gray-800 pt-4">
                  <p className="text-sm leading-relaxed text-gray-400">
                    {pkg.blurb}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Selected package + form */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="border border-gray-800/70 rounded-xl bg-[#111111]/60 p-8">
          <div className="flex flex-wrap justify-between gap-4 mb-6 pb-6 border-b border-gray-800">
            <div>
              <p className="text-[10px] tracking-widest text-gray-500 uppercase mb-1">
                Selected Package
              </p>
              <p className="text-white font-semibold">{selected.name}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest text-gray-500 uppercase mb-1">
                Interviews
              </p>
              <p className="text-white font-semibold">{selected.interviews}</p>
            </div>
          </div>

          {status === "success" ? (
            <div className="py-2">
              <h2 className="text-[#c9a84c] text-2xl font-semibold mb-3">
                Request sent
              </h2>
              <p className="leading-relaxed mb-2 text-sm">
                We&apos;ve received your request for the {selected.name}. A
                confidential quote is on its way to{" "}
                <span className="text-white">{form.email}</span>, usually within
                one business day.
              </p>
              <p className="leading-relaxed mb-6 text-sm text-gray-400">
                Your confirmation code:{" "}
                <span className="text-white font-semibold tracking-widest">
                  {confirmationCode}
                </span>{" "}
                — you&apos;ll need it to reserve your production date and pay
                your deposit.
              </p>
              <button
                type="button"
                onClick={() => router.push("/reserve-deposit")}
                className="px-7 py-3 bg-[#c9a84c] text-[#0a0a0a] rounded font-semibold text-sm tracking-widest uppercase hover:bg-[#b8963e] transition-colors"
              >
                Go to Reserve Production Date
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-[#c9a84c] text-2xl font-semibold mb-2">
                Your Quote — Delivered Privately
              </h2>
              <p className="leading-relaxed text-gray-400 mb-7 max-w-2xl text-sm">
                We don&apos;t publish flat-rate pricing publicly — every partner
                firm receives a confidential, all-inclusive quote directly by
                email, usually within one business day. It includes all filming,
                full post-production, and unlimited edit rounds.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <Field
                  label="Attorney Name"
                  placeholder="Jane Whitfield"
                  value={form.attorneyName}
                  onChange={(v) => update("attorneyName", v)}
                />
                <Field
                  label="Law Firm"
                  placeholder="Whitfield & Associates"
                  value={form.lawFirm}
                  onChange={(v) => update("lawFirm", v)}
                />
                <Field
                  label="Email"
                  placeholder="jane@whitfieldlaw.com"
                  type="email"
                  value={form.email}
                  onChange={(v) => update("email", v)}
                  error={
                    form.email && !isEmailValid
                      ? "Enter a valid email address."
                      : undefined
                  }
                />
                <Field
                  label="Phone (optional)"
                  placeholder="(555) 123-4567"
                  value={form.phone}
                  onChange={(v) => update("phone", v)}
                />
                <Field
                  label="Case Reference (optional)"
                  placeholder="U.S. v. ___, District"
                  value={form.caseReference}
                  onChange={(v) => update("caseReference", v)}
                />
              </div>

              <label className="block mb-2 text-[10px] tracking-widest text-gray-500 uppercase">
                Anything We Should Know? (optional)
              </label>
              <textarea
                rows={3}
                placeholder="Sentencing date, district, special circumstances..."
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                className="w-full mb-6 bg-[#0a0a0a] border border-gray-800 rounded px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#c9a84c]/60"
              />

              {error && <p className="text-sm text-red-400 mb-4">{error}</p>}

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  disabled={!canSubmit || status === "submitting"}
                  onClick={submitRequest}
                  className="px-7 py-3 bg-[#c9a84c] text-[#0a0a0a] rounded font-semibold text-sm tracking-widest uppercase hover:bg-[#b8963e] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {status === "submitting"
                    ? "Sending..."
                    : "Email This Quote Request"}
                </button>
                {/* <button
                  type="button"
                  onClick={copyRequestInstead}
                  className="px-7 py-3 border border-[#c9a84c]/50 text-[#c9a84c] rounded font-semibold text-sm tracking-widest uppercase hover:border-[#c9a84c] transition-colors"
                >
                  Copy Request Instead
                </button> */}
              </div>
            </>
          )}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-bold text-white mb-2">How It Works</h2>
        <p className="text-gray-400 mb-7 text-sm">
          A straightforward, three-step process from request to final cut.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-7">
          {[
            {
              step: "Step One",
              title: "Request your quote",
              body: "Select a package and send your case details. We confirm pricing and availability within one business day.",
            },
            {
              step: "Step Two",
              title: "Reserve your date",
              body: "A 50% deposit onboards us immediately. We begin pre-production right away — interview scheduling, letter procurement, and case planning.",
            },
            {
              step: "Step Three",
              title: "Film, then edit",
              body: "The remaining 50% is due once filming is complete, before editing begins — so our team can give the edit full, undivided focus.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="border border-gray-800/70 rounded-xl p-6 bg-[#111111]/60"
            >
              <p className="text-[#c9a84c] text-[10px] tracking-widest uppercase font-bold mb-2">
                {s.step}
              </p>
              <p className="text-white font-semibold mb-2 text-sm">{s.title}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="border border-[#c9a84c]/30 rounded-xl p-7 bg-[#0d0d0d]">
          <h3 className="text-[#c9a84c] font-semibold mb-2">
            What happens after you submit this request
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            We&apos;ll confirm your flat-rate quote directly by email, along
            with a secure private link to reserve your production date and pay
            your deposit online.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20 pt-6 border-t border-gray-800/70">
        <p className="text-sm text-gray-500">
          Need a larger production — multiple shoot days, 28+ interviews, or
          out-of-state travel?{" "}
          <a
            href="/contact"
            className="text-[#c9a84c] hover:text-[#b8963e] underline underline-offset-2"
          >
            Contact us directly
          </a>{" "}
          for a custom quote.
        </p>
      </section>
    </main>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block mb-2 text-[10px] tracking-widest text-gray-500 uppercase">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-[#0a0a0a] border rounded px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#c9a84c]/60 ${
          error ? "border-red-500/60" : "border-gray-800"
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
