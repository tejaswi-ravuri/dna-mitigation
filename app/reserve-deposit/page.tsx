"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

type ViewState = "locked" | "unlocking" | "unlocked" | "error";
type ConfirmState = "idle" | "submitting" | "confirmed" | "error";

interface PackageInfo {
  name: string;
  interviews: string;
  totalFlat: number;
  depositAmount: number;
}

const BANK_DETAILS = {
  bankName: "Wells Fargo",
  accountName: "DNA Mitigation",
  accountNumber: "6665091234",
  routingNumber: "121042332",
};

export default function ReserveDepositPage() {
  const [code, setCode] = useState("");
  const [view, setView] = useState<ViewState>("locked");
  const [error, setError] = useState("");
  const [pkg, setPkg] = useState<PackageInfo | null>({
    name: "2-Day Documentary Package",
    interviews: "Up to 6 Interviews",
    totalFlat: 4500,
    depositAmount: 1500,
  });
  const [requestId, setRequestId] = useState("");
  const [confirmState, setConfirmState] = useState<ConfirmState>("idle");
  const [confirmError, setConfirmError] = useState("");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  async function unlock() {
    setView("unlocking");
    setError("");
    try {
      //   const res = await fetch("/api/verify-code", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({ code }),
      //   });
      //   const data = await res.json();
      //   if (!res.ok) throw new Error(data.error || "Something went wrong.");
      //   setPkg(data.package);
      //   setRequestId(data.requestId);
      setView("unlocked");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setView("error");
    }
  }

  async function confirmDepositSent() {
    setConfirmState("submitting");
    setConfirmError("");
    try {
      const res = await fetch("/api/deposit-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestId, code }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setConfirmState("confirmed");
    } catch (err) {
      setConfirmError(
        err instanceof Error ? err.message : "Something went wrong.",
      );
      setConfirmState("error");
    }
  }

  function copyToClipboard(label: string, value: string) {
    navigator.clipboard.writeText(value);
    setCopiedField(label);
    setTimeout(
      () => setCopiedField((prev) => (prev === label ? null : prev)),
      1500,
    );
  }

  const locked = view === "locked" || view === "unlocking" || view === "error";

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-foreground/75 antialiased">
      <Navbar />

      <div className="flex items-center justify-center px-6 pt-40 py-20">
        <div className="w-full max-w-md">
          <p className="text-[#c9a84c] text-xs tracking-widest uppercase font-bold mb-3 text-center">
            Private Production Link
          </p>
          <h1 className="text-3xl font-bold text-white mb-3 text-center">
            Reserve Your Production Date
          </h1>
          <p className="text-sm text-gray-400 text-center mb-10 leading-relaxed">
            Enter the confirmation code from your quote email to view your
            invoice and deposit instructions.
          </p>

          {locked ? (
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
                  if (view === "error") setView("locked");
                }}
                className="w-full mb-4 bg-[#0a0a0a] border border-gray-800 rounded px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#c9a84c]/60 tracking-widest"
              />
              {view === "error" && (
                <p className="text-sm text-red-400 mb-4">{error}</p>
              )}
              <button
                type="button"
                disabled={!code || view === "unlocking"}
                onClick={unlock}
                className="w-full px-7 py-3 bg-[#c9a84c] text-[#0a0a0a] rounded font-semibold text-sm tracking-widest uppercase hover:bg-[#b8963e] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {view === "unlocking" ? "Unlocking..." : "Unlock"}
              </button>
            </div>
          ) : (
            pkg && (
              <div className="border border-[#c9a84c]/40 rounded-xl bg-[#111111]/60 p-7">
                <div className="grid grid-cols-2 gap-y-3 mb-6 text-sm">
                  <span className="text-gray-500 uppercase text-[10px] tracking-widest self-center">
                    Package
                  </span>
                  <span className="text-white font-semibold text-right">
                    {pkg.name}
                  </span>
                  <span className="text-gray-500 uppercase text-[10px] tracking-widest self-center">
                    Interviews
                  </span>
                  <span className="text-white font-semibold text-right">
                    {pkg.interviews}
                  </span>
                  <span className="text-gray-500 uppercase text-[10px] tracking-widest self-center">
                    Total Flat Rate
                  </span>
                  <span className="text-white font-semibold text-right">
                    ${pkg.totalFlat.toLocaleString()} (flat — includes editing)
                  </span>
                </div>

                <div className="border-t border-gray-800 pt-6 mb-6 text-center">
                  <p className="text-3xl font-bold text-[#c9a84c] mb-1">
                    ${pkg.depositAmount.toLocaleString()} due today
                  </p>
                  <p className="text-xs text-gray-500">
                    Due now to reserve your date and begin pre-production
                  </p>
                </div>

                {confirmState === "confirmed" ? (
                  <div className="border border-[#c9a84c]/30 rounded-lg bg-[#0d0d0d] p-5 text-center">
                    <p className="text-[#c9a84c] font-semibold mb-2">
                      Thanks — we&apos;ll confirm receipt shortly
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Our team will verify the transfer and follow up by email
                      once your production date is officially reserved.
                      Transfers can take 1–2 business days to settle.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="border border-gray-800 rounded-lg bg-[#0a0a0a] p-5 mb-5">
                      <p className="text-[10px] tracking-widest text-gray-500 uppercase mb-4">
                        Payment Information — Bank Transfer (ACH / Wire)
                      </p>
                      <div className="space-y-3">
                        <BankRow
                          label="Bank"
                          value={BANK_DETAILS.bankName}
                          copied={copiedField === "bank"}
                          onCopy={() =>
                            copyToClipboard("bank", BANK_DETAILS.bankName)
                          }
                        />
                        <BankRow
                          label="Account Name"
                          value={BANK_DETAILS.accountName}
                          copied={copiedField === "name"}
                          onCopy={() =>
                            copyToClipboard("name", BANK_DETAILS.accountName)
                          }
                        />
                        <BankRow
                          label="Account Number"
                          value={BANK_DETAILS.accountNumber}
                          copied={copiedField === "account"}
                          onCopy={() =>
                            copyToClipboard(
                              "account",
                              BANK_DETAILS.accountNumber,
                            )
                          }
                        />
                        <BankRow
                          label="Routing Number (ACH)"
                          value={BANK_DETAILS.routingNumber}
                          copied={copiedField === "routing"}
                          onCopy={() =>
                            copyToClipboard(
                              "routing",
                              BANK_DETAILS.routingNumber,
                            )
                          }
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                        Please include your confirmation code (
                        <span className="text-gray-300">{code}</span>) as the
                        transfer memo so we can match your payment quickly.
                      </p>
                    </div>

                    {confirmState === "error" && (
                      <p className="text-sm text-red-400 mb-3">
                        {confirmError}
                      </p>
                    )}

                    <button
                      type="button"
                      disabled={confirmState === "submitting"}
                      onClick={confirmDepositSent}
                      className="w-full px-7 py-3 bg-[#c9a84c] text-[#0a0a0a] rounded font-semibold text-sm tracking-widest uppercase hover:bg-[#b8963e] transition-colors disabled:opacity-60 mb-3"
                    >
                      {confirmState === "submitting"
                        ? "Submitting..."
                        : "I've Sent the Deposit"}
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
              className="text-[#c9a84c]/80 hover:text-[#c9a84c] underline underline-offset-2"
            >
              Contact DNA Mitigation
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

function BankRow({
  label,
  value,
  copied,
  onCopy,
}: {
  label: string;
  value: string;
  copied: boolean;
  onCopy: () => void;
}) {
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
        onClick={onCopy}
        className="text-[10px] tracking-widest uppercase px-3 py-2 rounded border border-[#c9a84c]/40 text-[#c9a84c] hover:border-[#c9a84c] transition-colors shrink-0"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
