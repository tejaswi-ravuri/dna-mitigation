"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingBookButton() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={`/schedule-consultation?from=${pathname}`}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gold-metallic rounded-lg text-[#0A0A0A] font-bold text-[11px] tracking-[2px] uppercase shadow-lg hover:brightness-110 hover:shadow-xl hover:scale-105 transition-all duration-200"
      >
        {/* <svg
          className="w-3.5 h-3.5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg> */}
        Book Consultation
      </Link>
    </div>
  );
}
