import { connectDB } from "@/lib/mongodb";
import QuoteRequest from "@/app/models/QuoteRequest";

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function randomSuffix(length = 4): string {
  let out = "";
  for (let i = 0; i < length; i++) {
    out += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  return out;
}

/**
 * Generates a unique confirmation code of the form DNA-2DAY-XXXX or DNA-1DAY-XXXX.
 * Checks against the DB to guarantee uniqueness. Retries up to 5 times.
 */
export async function generateConfirmationCode(
  packageId: string,
): Promise<string> {
  await connectDB();

  const tag = packageId === "2day" ? "2DAY" : "1DAY";

  for (let attempt = 0; attempt < 5; attempt++) {
    const code = `DNA-${tag}-${randomSuffix()}`;

    const existing = await QuoteRequest.findOne({ confirmationCode: code });
    if (!existing) {
      return code;
    }
  }

  throw new Error(
    "Could not generate a unique confirmation code after 5 attempts.",
  );
}
