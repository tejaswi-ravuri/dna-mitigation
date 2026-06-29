"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";

// ── Types ──────────────────────────────────────────────────────────────────────
type Section = "fees" | "quote" | "reserve";
type PackageId = "1day" | "2day";

interface CartItem {
  name: string;
  detail: string;
  group: "video" | null;
}

const ITEMS: Record<string, CartItem> = {
  "1day": {
    name: "1-Day Mitigation Video Production",
    detail: "Single filming day · 10–14 interviews",
    group: "video",
  },
  "2day": {
    name: "2-Day Mitigation Video Production",
    detail: "~80% of cases · 15–28 interviews",
    group: "video",
  },
  letters: {
    name: "Character Testimonial Letters",
    detail: "Letter procurement & review",
    group: null,
  },
};

const BANK = {
  bankName: "Wells Fargo",
  accountName: "DNA Mitigation",
  accountNumber: "6665091234",
  routingNumber: "121042332",
};

// ── Helpers ────────────────────────────────────────────────────────────────────
function generateCode(pkg: PackageId) {
  const tag = pkg === "1day" ? "1DAY" : "2DAY";
  return `DNA-${tag}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
}

// ── Sub-components ─────────────────────────────────────────────────────────────
function AddBtn({
  itemKey,
  cart,
  onToggle,
}: {
  itemKey: string;
  cart: Record<string, boolean>;
  onToggle: (key: string) => void;
}) {
  const added = !!cart[itemKey];
  return (
    <button
      type="button"
      onClick={() => onToggle(itemKey)}
      className={`shrink-0 rounded-full font-bold text-xs tracking-wider uppercase px-4 py-2 transition-all duration-150 ${
        added
          ? "border border-[#c9952c] text-accent bg-transparent hover:bg-[#c9952c]/10"
          : "bg-[#c9952c] text-[#0a0a0a] hover:bg-accent hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(201,149,44,.25)]"
      }`}
    >
      {added ? "Added ✓" : "Add to Quote"}
    </button>
  );
}

function BankRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }
  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <p className="text-[10px] tracking-widest text-gray-500 uppercase mb-0.5">
          {label}
        </p>
        <p className="text-white font-semibold text-sm tracking-wide">
          {value}
        </p>
      </div>
      <button
        type="button"
        onClick={copy}
        className="text-[10px] tracking-widest uppercase px-3 py-2 rounded-full border border-[#c9952c]/40 text-[#c9952c] hover:border-[#c9952c] transition-colors shrink-0"
      >
        {copied ? "Copied ✓" : "Copy"}
      </button>
    </div>
  );
}

// ── Stepper ────────────────────────────────────────────────────────────────────
// const STEP_LABELS: Record<Section, string> = {
//   fees: "Service Fees",
//   quote: "Get a Quote",
//   reserve: "Reserve & Deposit",
// };
// const STEP_ORDER: Section[] = ["fees", "quote", "reserve"];

// function Stepper({
//   current,
//   onNav,
// }: {
//   current: Section;
//   onNav: (s: Section) => void;
// }) {
//   const currentIdx = STEP_ORDER.indexOf(current);
//   return (
//     <div className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-[#2a2620]">
//       <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-3">
//         {STEP_ORDER.map((step, i) => {
//           const active = i <= currentIdx;
//           return (
//             <div key={step} className="flex items-center gap-3 flex-1">
//               <button
//                 type="button"
//                 onClick={() => onNav(step)}
//                 className="flex items-center gap-2 group"
//               >
//                 <span
//                   className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
//                     active ? "bg-[#c9952c]" : "bg-[#2a2620]"
//                   }`}
//                 />
//                 <span
//                   className={`text-xs tracking-widest uppercase font-semibold hidden sm:block transition-colors duration-300 ${
//                     active ? "text-[#c9952c]" : "text-gray-600"
//                   }`}
//                 >
//                   {STEP_LABELS[step]}
//                 </span>
//               </button>
//               {i < STEP_ORDER.length - 1 && (
//                 <div className="flex-1 h-px bg-[#2a2620]" />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// ── Section 1 — Service Fees ───────────────────────────────────────────────────
function FeesSection({
  cart,
  onToggle,
  onProceed,
}: {
  cart: Record<string, boolean>;
  onToggle: (key: string) => void;
  onProceed: () => void;
}) {
  const cartKeys = Object.keys(cart).filter((k) => cart[k]);
  const count = cartKeys.length;

  return (
    <div>
      {/* Hero */}
      <section className="relative w-full min-h-[40vw] flex flex-col overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/payonlineBg.jpeg')" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.60) 45%, rgba(10,10,10,0.15) 100%), linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.90) 78%, #0a0a0a 100%)",
          }}
        />
        <div className="z-10 flex flex-col justify-center flex-1 px-8 lg:px-16 max-w-2xl mt-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-accent">
            Service Fees
          </h1>
          <div
            className="w-12 h-0.5 bg-[#c9952c] mb-6"
            style={{
              animation: "scaleX-in 0.5s 0.3s ease both",
              transformOrigin: "left",
            }}
          />
          <p className="text-base font-light leading-relaxed mb-3 max-w-sm text-white/75">
            Following your consultation, we recommend the scope most appropriate
            for your case and provide a flat-fee proposal.
          </p>
          <p className="text-[#c9a84c] font-semibold text-sm tracking-wide">
            No hourly billing. No hidden fees. No surprises.
          </p>
        </div>
      </section>

      {/* Spacer for overlapping card */}
      <div />
      {/* Service Cards */}
      <section className="max-w-5xl mx-auto px-6 pb-4">
        <p className="text-[11px] tracking-widest text-gray-500 uppercase font-semibold mb-5">
          Select Services for Your Quote
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Video Production */}
          <div className="border border-gray-800/70 rounded-xl p-7 bg-[#111111]/60 flex flex-col">
            <div className="flex items-start justify-between mb-1">
              <span className="text-[11px] tracking-widest text-gray-500 uppercase font-semibold">
                Our Core Offering
              </span>
              <span className="text-[10px] tracking-widest text-[#c9952c] font-bold border border-[#2a2620] rounded-full px-3 py-1 uppercase">
                Primary Service
              </span>
            </div>
            <h2 className="text-accent text-xl font-semibold mt-1 mb-4">
              Mitigation Video Production
            </h2>
            <hr className="border-[#221f1a] mb-4" />
            <div className="flex flex-col gap-4 flex-1">
              <p className="text-sm leading-relaxed text-white/80 font-medium">
                Letters describe remorse. A mitigation video lets the court see
                it.
              </p>
              <p className="text-sm leading-relaxed text-gray-400">
                We get there before the PSR, before the narrative sets. Across
                30+ federal indictments, we've built records of remorse,
                accountability, and character that paper alone can't carry.
              </p>
              <p className="text-sm font-semibold text-white/90">
                The court sees a person. Not a file.
              </p>

              <div className="flex flex-col gap-3 mt-2">
                {/* 1-Day */}
                <div className="border border-[#221f1a] rounded-xl p-4 hover:border-gray-700 transition duration-200">
                  <p className="text-accent font-bold text-sm mb-1">
                    1-Day Production
                  </p>
                  <p className="text-gray-400 text-xs mb-3">
                    Single filming day · 10–14 interviews
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-gray-500 text-xs">
                      Best for a smaller, well-defined circle of voices
                    </span>
                    <AddBtn itemKey="1day" cart={cart} onToggle={onToggle} />
                  </div>
                </div>
                {/* 2-Day */}
                <div className="border border-[#c9952c] rounded-xl p-4 relative">
                  <span className="absolute -top-3 right-4 bg-[#c9952c] text-[#0a0a0a] text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    Recommended
                  </span>
                  <p className="text-accent font-bold text-sm mb-1">
                    2-Day Production
                  </p>
                  <p className="text-gray-400 text-xs mb-3">
                    Chosen for ~80% of our cases · 15–28 interviews
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-gray-500 text-xs">
                      More contributors, a fuller picture for the court
                    </span>
                    <AddBtn itemKey="2day" cart={cart} onToggle={onToggle} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Character Letters */}
          <div className="border border-gray-800/70 rounded-xl p-7 bg-[#111111]/60 flex flex-col">
            <span className="text-[11px] tracking-widest text-gray-500 uppercase font-semibold mb-1">
              Also Available
            </span>
            <h2 className="text-accent text-xl font-semibold mt-1 mb-4">
              Character Testimonial Letters
            </h2>
            <hr className="border-[#221f1a] mb-4" />
            <div className="flex flex-col gap-4 flex-1">
              <p className="text-sm leading-relaxed text-white/80 font-medium">
                Letters that reinforce credibility, accountability, family
                responsibility, and the human context courts weigh under §
                3553(a).
              </p>
              <p className="text-sm leading-relaxed text-gray-400">
                Most fail for the same reason: they try too hard. Judges and
                probation officers have read hundreds full of exaggeration and
                emotional overreach — that noise quietly costs credibility.
              </p>
              <p className="text-sm leading-relaxed text-gray-400">
                Our approach is built on federal sentencing experience and
                post-case attorney debriefs. We know what courts respond to —
                and more importantly, what they tune out.
              </p>
              <p className="text-sm font-semibold text-white/90">
                The letters that land don't argue sentencing. They reveal human
                character.
              </p>
            </div>
            <div className="flex justify-end mt-5">
              <AddBtn itemKey="letters" cart={cart} onToggle={onToggle} />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Cart Bar */}
      {count && count > 0 && (
        <div className="sticky bottom-4 z-40 max-w-5xl mx-auto px-6 mt-6 pb-4">
          <div className="bg-[#151515]/95 backdrop-blur border border-[#c9952c] rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl flex-wrap gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="bg-[#c9952c] text-[#0a0a0a] font-bold text-sm rounded-full w-7 h-7 flex items-center justify-center">
                {count}
              </div>
              <div>
                <div className="text-sm text-white">
                  {count === 0 ? (
                    <span className="text-gray-500">No services added yet</span>
                  ) : (
                    <span>
                      {count} service{count > 1 ? "s" : ""} added
                    </span>
                  )}
                </div>
                {count > 0 && (
                  <div className="text-xs text-gray-400 mt-0.5">
                    {cartKeys.map((k) => ITEMS[k].name).join(" + ")}
                  </div>
                )}
              </div>
            </div>
            <button
              type="button"
              disabled={count === 0}
              onClick={onProceed}
              className="bg-[#c9952c] text-[#0a0a0a] rounded-full font-bold text-xs tracking-widest uppercase px-5 py-2.5 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-accent transition-colors"
            >
              Review &amp; Request Quote →
            </button>
          </div>
        </div>
      )}

      <div className="pb-16" />
    </div>
  );
}

// ── Section 2 — Get a Quote ────────────────────────────────────────────────────
function QuoteSection({
  cart,
  onBack,
  onSuccess,
}: {
  cart: Record<string, boolean>;
  onBack: () => void;
  onSuccess: (code: string, email: string) => void;
}) {
  const cartKeys = Object.keys(cart).filter((k) => cart[k]);
  const [selectedPkg, setSelectedPkg] = useState<PackageId>(
    cart["1day"] ? "1day" : "2day",
  );
  const [form, setForm] = useState({
    attorney: "",
    firm: "",
    email: "",
    phone: "",
    caseRef: "",
    notes: "",
  });
  const [emailErr, setEmailErr] = useState(false);
  const [formErr, setFormErr] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (field === "email") setEmailErr(false);
    setFormErr("");
  }

  async function submit() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.attorney || !form.firm || !form.email) {
      setFormErr("Please fill in Attorney Name, Law Firm, and Email.");
      return;
    }
    if (!emailRegex.test(form.email.trim())) {
      setEmailErr(true);
      return;
    }
    setSubmitting(true);
    // Simulate API call — replace with real fetch("/api/quote-request", ...)
    await new Promise((r) => setTimeout(r, 800));
    const code = generateCode(selectedPkg);
    setSubmitting(false);
    onSuccess(code, form.email.trim());
  }

  const pkgMeta: Record<
    PackageId,
    {
      label: string;
      interviews: string;
      subtitle: string;
      blurb: string;
      recommended?: boolean;
    }
  > = {
    "1day": {
      label: "1-Day Production",
      interviews: "Up to 14 Interviews",
      subtitle: "Single filming day · 10–14 interviews",
      blurb:
        "Best for a focused circle of voices — family, colleagues, community members who know the client most closely.",
    },
    "2day": {
      label: "2-Day Production",
      interviews: "Up to 28 Interviews",
      subtitle: "Chosen for ~80% of our cases · 15–28 interviews",
      blurb:
        "More contributors, a fuller picture for the court — the format we recommend for most federal cases.",
      recommended: true,
    },
  };

  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-40 pb-10">
        <p className="text-[#c9952c] text-xs tracking-widest uppercase font-bold mb-3">
          Your Quote — Delivered Privately
        </p>
        <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-5 leading-tight">
          Mitigation Video <span className="text-accent">Production</span>
        </h1>
        <div className="w-12 h-0.5 bg-[#c9952c] mb-6" />
        <p className="leading-relaxed max-w-2xl text-sm text-gray-400">
          Select a production package below for an instant, all-inclusive
          flat-rate estimate.{" "}
          <span className="text-white font-semibold">
            No hourly billing. No hidden fees. No surprises
          </span>{" "}
          — regardless of how many rounds of edits your case requires.
        </p>
      </section>

      {/* Package cards */}
      <section className="max-w-5xl mx-auto px-6 pb-8">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {(["1day", "2day"] as PackageId[]).map((pkg) => {
            const m = pkgMeta[pkg];
            const isSelected = selectedPkg === pkg;
            return (
              <button
                key={pkg}
                type="button"
                onClick={() => setSelectedPkg(pkg)}
                className={`relative text-left rounded-xl p-7 border transition-colors ${
                  isSelected
                    ? "border-[#c9952c] bg-[#151515]"
                    : "border-gray-800/70 bg-[#111111]/60 hover:border-gray-700"
                }`}
              >
                {m.recommended && (
                  <span className="absolute -top-3 right-6 bg-[#c9952c] text-[#0a0a0a] text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    Recommended
                  </span>
                )}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-accent text-xl font-semibold">
                    {m.label}
                  </h3>
                  <span
                    className={`mt-1 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${isSelected ? "border-[#c9952c]" : "border-gray-600"}`}
                  >
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#c9952c]" />
                    )}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-4">{m.subtitle}</p>
                <p className="text-sm font-semibold text-white mb-1">
                  {m.interviews}
                </p>
                <p className="text-xs italic text-gray-500 mb-4">
                  Flat-rate pricing — included in your private quote
                </p>
                <div className="border-t border-gray-800 pt-4">
                  <p className="text-sm leading-relaxed text-gray-400">
                    {m.blurb}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Form card */}
        <div className="border border-gray-800/70 rounded-xl bg-[#111111]/60 p-8">
          {/* Services summary */}
          <div className="flex flex-wrap justify-between gap-4 mb-6 pb-6 border-b border-gray-800">
            <div>
              <p className="text-[10px] tracking-widest text-gray-500 uppercase mb-1">
                Services Requested
              </p>
              <p className="text-white font-semibold text-sm">
                {cartKeys.length === 0
                  ? "—"
                  : cartKeys.map((k) => ITEMS[k].name).join(", ")}
              </p>
            </div>
            <button
              onClick={onBack}
              className="text-xs text-[#c9952c] underline underline-offset-2 hover:text-accent transition self-start"
            >
              ← Edit Services
            </button>
          </div>

          <h2 className="text-accent text-2xl font-semibold mb-2">
            Your Quote — Delivered Privately
          </h2>
          <p className="leading-relaxed text-gray-400 mb-7 max-w-2xl text-sm">
            We don't publish flat-rate pricing publicly — every partner firm
            receives a confidential, all-inclusive quote directly by email,
            usually within one business day. It includes all filming, full
            post-production, and unlimited edit rounds.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {[
              {
                id: "attorney",
                label: "Attorney Name",
                placeholder: "Jane Whitfield",
                key: "attorney" as const,
              },
              {
                id: "firm",
                label: "Law Firm",
                placeholder: "Whitfield & Associates",
                key: "firm" as const,
              },
              {
                id: "email",
                label: "Email",
                placeholder: "jane@whitfieldlaw.com",
                key: "email" as const,
                type: "email",
              },
              {
                id: "phone",
                label: "Phone (optional)",
                placeholder: "(555) 123-4567",
                key: "phone" as const,
              },
              {
                id: "caseRef",
                label: "Case Reference (optional)",
                placeholder: "U.S. v. ___, District",
                key: "caseRef" as const,
              },
            ].map((f) => (
              <div key={f.id}>
                <label className="block mb-2 text-[10px] tracking-widest text-gray-500 uppercase">
                  {f.label}
                </label>
                <input
                  type={f.type ?? "text"}
                  placeholder={f.placeholder}
                  value={form[f.key]}
                  onChange={(e) => update(f.key, e.target.value)}
                  className={`w-full bg-[#0a0a0a] border rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#c9952c]/60 transition-colors ${
                    f.key === "email" && emailErr
                      ? "border-red-500/60"
                      : "border-[#2a2620]"
                  }`}
                />
                {f.key === "email" && emailErr && (
                  <p className="mt-1 text-xs text-red-400">
                    Enter a valid email address.
                  </p>
                )}
              </div>
            ))}
          </div>

          <label className="block mb-2 text-[10px] tracking-widest text-gray-500 uppercase">
            Anything We Should Know? (optional)
          </label>
          <textarea
            rows={3}
            placeholder="Sentencing date, district, special circumstances..."
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            className="w-full mb-6 bg-[#0a0a0a] border border-[#2a2620] rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#c9952c]/60 resize-y"
          />

          {formErr && <p className="text-sm text-red-400 mb-4">{formErr}</p>}

          <button
            type="button"
            disabled={submitting}
            onClick={submit}
            className="px-7 py-3 bg-[#c9952c] text-[#0a0a0a] rounded font-semibold text-sm tracking-widest uppercase hover:bg-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {submitting ? "Sending..." : "Email This Quote Request"}
          </button>
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
              <p className="text-[#c9952c] text-[10px] tracking-widest uppercase font-bold mb-2">
                {s.step}
              </p>
              <p className="text-white font-semibold mb-2 text-sm">{s.title}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="border border-[#c9952c]/30 rounded-xl p-7 bg-[#151515]">
          <h3 className="text-[#c9952c] font-semibold mb-2">
            What happens after you submit
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            We'll confirm your flat-rate quote directly by email, along with a
            secure private link to reserve your production date and pay your
            deposit online.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20 pt-6 border-t border-gray-800/70">
        <p className="text-sm text-gray-500">
          Need a larger production — multiple shoot days, 28+ interviews, or
          out-of-state travel?{" "}
          <a
            href="/contact"
            className="text-[#c9952c] hover:text-accent underline underline-offset-2"
          >
            Contact us directly
          </a>{" "}
          for a custom quote.
        </p>
      </section>
    </div>
  );
}

// ── Section 2 — Success State ──────────────────────────────────────────────────
function QuoteSuccessSection({
  code,
  email,
  onProceed,
}: {
  code: string;
  email: string;
  onProceed: () => void;
}) {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 pb-20 pt-40">
      <div className="border border-gray-800/70 rounded-xl bg-[#111111]/60 p-8 max-w-2xl">
        <h2 className="text-accent text-2xl font-semibold mb-3">
          Request Sent
        </h2>
        <p className="leading-relaxed mb-2 text-sm text-white/75">
          We've received your request. A confidential quote is on its way to{" "}
          <span className="text-white">{email}</span>, usually within one
          business day.
        </p>
        <p className="leading-relaxed mb-6 text-sm text-gray-400">
          Your confirmation code:{" "}
          <span className="text-white font-semibold tracking-widest">
            {code}
          </span>{" "}
          — you'll need it to reserve your production date and pay your deposit.
        </p>
        <button
          type="button"
          onClick={onProceed}
          className="px-7 py-3 bg-[#c9952c] text-[#0a0a0a] rounded font-semibold text-sm tracking-widest uppercase hover:bg-accent transition-colors"
        >
          Reserve Production Date →
        </button>
      </div>
    </div>
  );
}

// ── Section 3 — Reserve & Deposit ─────────────────────────────────────────────
function ReserveSection({ prefillCode }: { prefillCode: string }) {
  const [code, setCode] = useState(prefillCode);
  const [view, setView] = useState<"locked" | "unlocking" | "unlocked">(
    prefillCode ? "unlocked" : "locked",
  );
  const [unlockErr, setUnlockErr] = useState("");
  const [pkg, setPkg] = useState(() =>
    prefillCode
      ? {
          name: prefillCode.includes("1DAY")
            ? "1-Day Documentary Package"
            : "2-Day Documentary Package",
          interviews: prefillCode.includes("1DAY")
            ? "Up to 14 Interviews"
            : "Up to 28 Interviews",
          totalFlat: prefillCode.includes("1DAY") ? 3500 : 4500,
          depositAmount: prefillCode.includes("1DAY") ? 1750 : 2250,
        }
      : null,
  );
  const [confirmed, setConfirmed] = useState(false);
  const [confirming, setConfirming] = useState(false);

  async function unlock() {
    if (!code.trim()) return;
    setView("unlocking");
    setUnlockErr("");
    await new Promise((r) => setTimeout(r, 700));
    const is1day = code.toUpperCase().includes("1DAY");
    const totalFlat = is1day ? 3500 : 4500;
    setPkg({
      name: is1day ? "1-Day Documentary Package" : "2-Day Documentary Package",
      interviews: is1day ? "Up to 14 Interviews" : "Up to 28 Interviews",
      totalFlat,
      depositAmount: Math.round(totalFlat * 0.5),
    });
    setView("unlocked");
  }

  async function confirmDeposit() {
    setConfirming(true);
    await new Promise((r) => setTimeout(r, 800));
    setConfirmed(true);
    setConfirming(false);
  }

  return (
    <div className="flex items-start justify-center px-6 py-20 pt-40 min-h-screen">
      <div className="w-full max-w-md">
        <p className="text-[#c9952c] text-xs tracking-widest uppercase font-bold mb-3 text-center">
          Private Production Link
        </p>
        <h1 className="text-3xl font-bold text-white mb-3 text-center">
          Reserve Your Production Date
        </h1>

        {view !== "unlocked" ? (
          <div className="border border-gray-800/70 rounded-xl bg-[#111111]/60 p-7">
            <label className="block mb-2 text-[10px] tracking-widest text-gray-500 uppercase">
              Confirmation Code
            </label>
            <input
              type="text"
              placeholder="e.g. DNA-2DAY-XXXX"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setUnlockErr("");
              }}
              className="w-full mb-4 bg-[#0a0a0a] border border-[#2a2620] rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#c9952c]/60 tracking-widest"
            />
            {unlockErr && (
              <p className="text-sm text-red-400 mb-4">{unlockErr}</p>
            )}
            <button
              type="button"
              disabled={!code.trim() || view === "unlocking"}
              onClick={unlock}
              className="w-full px-7 py-3 bg-[#c9952c] text-[#0a0a0a] rounded font-semibold text-sm tracking-widest uppercase hover:bg-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {view === "unlocking" ? "Unlocking..." : "Unlock"}
            </button>
          </div>
        ) : (
          pkg && (
            <div className="border border-[#c9952c]/40 rounded-xl bg-[#111111]/60 p-7">
              <div className="grid grid-cols-2 gap-y-3 mb-6 text-sm">
                {[
                  ["Package", pkg.name],
                  ["Interviews", pkg.interviews],
                  [
                    "Total Flat Rate",
                    `$${pkg.totalFlat.toLocaleString()} (flat — includes editing)`,
                  ],
                ].map(([label, val]) => (
                  <>
                    <span className="text-gray-500 uppercase text-[10px] tracking-widest self-center">
                      {label}
                    </span>
                    <span className="text-white font-semibold text-right">
                      {val}
                    </span>
                  </>
                ))}
              </div>

              <div className="border-t border-gray-800 pt-6 mb-6 text-center">
                <p className="text-3xl font-bold text-accent mb-1">
                  ${pkg.depositAmount.toLocaleString()} due today
                </p>
                <p className="text-xs text-gray-500">
                  Due now to reserve your date and begin pre-production
                </p>
              </div>

              {confirmed ? (
                <div className="border border-[#c9952c]/30 rounded-lg bg-[#151515] p-5 text-center">
                  <p className="text-[#c9952c] font-semibold mb-2">
                    Thanks — we'll confirm receipt shortly
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Our team will verify the transfer and follow up by email
                    once your production date is officially reserved. Transfers
                    can take 1–2 business days to settle.
                  </p>
                </div>
              ) : (
                <>
                  <div className="border border-gray-800 rounded-lg bg-[#0a0a0a] p-5 mb-5">
                    <p className="text-[10px] tracking-widest text-gray-500 uppercase mb-4">
                      Payment Information — Bank Transfer (ACH / Wire)
                    </p>
                    <div className="space-y-4">
                      <BankRow label="Bank" value={BANK.bankName} />
                      <BankRow label="Account Name" value={BANK.accountName} />
                      <BankRow
                        label="Account Number"
                        value={BANK.accountNumber}
                      />
                      <BankRow
                        label="Routing Number (ACH)"
                        value={BANK.routingNumber}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                      Please include your confirmation code (
                      <span className="text-gray-300">{code}</span>) as the
                      transfer memo so we can match your payment quickly.
                    </p>
                  </div>

                  <button
                    type="button"
                    disabled={confirming}
                    onClick={confirmDeposit}
                    className="w-full px-7 py-3 bg-[#c9952c] text-[#0a0a0a] rounded font-semibold text-sm tracking-widest uppercase hover:bg-accent transition-colors disabled:opacity-60 mb-3"
                  >
                    {confirming ? "Submitting..." : "I've Sent the Deposit"}
                  </button>
                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    Remaining $
                    {(pkg.totalFlat - pkg.depositAmount).toLocaleString()}{" "}
                    balance is due upon completion of filming, before editing
                    begins.
                  </p>
                </>
              )}
            </div>
          )
        )}

        <p className="text-xs text-gray-500 text-center mt-8 leading-relaxed">
          This is a private link generated for your firm — pricing is not
          published publicly. Questions?{" "}
          <a
            href="/contact"
            className="text-[#c9952c]/80 hover:text-[#c9952c] underline underline-offset-2"
          >
            Contact DNA Mitigation
          </a>
        </p>
      </div>
    </div>
  );
}

// ── Root Page ──────────────────────────────────────────────────────────────────
export default function PaymentCombinedPage() {
  const [section, setSection] = useState<Section>("fees");
  const [cart, setCart] = useState<Record<string, boolean>>({});
  const [confirmCode, setConfirmCode] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const toggleItem = useCallback((key: string) => {
    setCart((prev) => {
      const next = { ...prev };
      if (ITEMS[key].group === "video") {
        Object.keys(ITEMS).forEach((k) => {
          if (ITEMS[k].group === "video" && k !== key) delete next[k];
        });
      }
      if (next[key]) delete next[key];
      else next[key] = true;
      return next;
    });
  }, []);

  function goToSection(s: Section) {
    setSection(s);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleQuoteSuccess(code: string, email: string) {
    setConfirmCode(code);
    setConfirmEmail(email);
    setQuoteSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e7e3da] antialiased">
      <style>{`
        @keyframes scaleX-in { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #2a2620; border-radius: 3px; }
      `}</style>

      <Navbar />
      {/* <Stepper current={section} onNav={goToSection} /> */}

      {section === "fees" && (
        <FeesSection
          cart={cart}
          onToggle={toggleItem}
          onProceed={() => goToSection("quote")}
        />
      )}

      {section === "quote" && !quoteSubmitted && (
        <QuoteSection
          cart={cart}
          onBack={() => goToSection("fees")}
          onSuccess={handleQuoteSuccess}
        />
      )}

      {section === "quote" && quoteSubmitted && (
        <QuoteSuccessSection
          code={confirmCode}
          email={confirmEmail}
          onProceed={() => goToSection("reserve")}
        />
      )}

      {section === "reserve" && <ReserveSection prefillCode={confirmCode} />}
    </main>
  );
}
