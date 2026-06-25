// Single source of truth for production packages, copy, and pricing.
//
// IMPORTANT: totalFlat / depositAmount below are placeholders (the 2-day
// numbers match your mockup; the 1-day numbers are an extrapolation).
// Update these to your real flat rates before going live.

export type PackageId = "1day" | "2day";

export interface ProductionPackage {
  id: PackageId;
  name: string;
  subtitle: string;
  interviews: string;
  totalFlat: number; // in dollars
  depositAmount: number; // in dollars, due today
  recommended?: boolean;
  blurb: string;
}

export const PACKAGES: Record<PackageId, ProductionPackage> = {
  "1day": {
    id: "1day",
    name: "1-Day Production",
    subtitle: "Single filming day",
    interviews: "10–14 interviews",
    totalFlat: 12000,
    depositAmount: 6000,
    blurb: "Best for cases with a smaller, well-defined circle of voices.",
  },
  "2day": {
    id: "2day",
    name: "2-Day Production",
    subtitle: "Chosen for ~80% of our cases",
    interviews: "15–28 interviews",
    totalFlat: 18000,
    depositAmount: 9000,
    recommended: true,
    blurb:
      "More contributors mean a fuller picture for the court — and a stronger record for a downward variance.",
  },
};

export function getPackage(id: string): ProductionPackage | undefined {
  return PACKAGES[id as PackageId];
}
