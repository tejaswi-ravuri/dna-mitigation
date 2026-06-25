// lib/mailer.ts
// Single source of truth for all transactional emails.
// All emails use the black-and-gold DNA Mitigation brand.

import nodemailer from "nodemailer";
/* -------------------------------------------------------------------------- */
/*                               Transporter                                  */
/* -------------------------------------------------------------------------- */

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error("[SMTP] Connection error:", error);
  } else {
    console.log("[SMTP] Server is ready to send mail");
  }
});

/* -------------------------------------------------------------------------- */
/*                          Shared HTML primitives                             */
/* -------------------------------------------------------------------------- */

// Logo embedded as base64 so it shows in every client without external hosting.

function emailWrapper(bodyContent: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0"
               style="max-width:600px;width:100%;background:#0d0d0d;border:1px solid rgba(201,168,76,0.3);border-radius:12px;overflow:hidden;">

          <!-- HEADER -->
          <tr>
            <td style="background:#0a0a0a;padding:28px 40px;text-align:center;border-bottom:1px solid rgba(201,168,76,0.25);">
              <img src="/logo.png" alt="DNA Mitigation" width="260"
                   style="max-width:260px;width:100%;display:block;margin:0 auto;" />
            </td>
          </tr>

          <!-- GOLD ACCENT BAR -->
          <tr>
            <td style="height:3px;background:linear-gradient(135deg,#4f340d 0%,#8f6724 12%,#d6ae52 28%,#fff3bf 50%,#d9b45a 68%,#8f6724 88%,#4f340d 100%);"></td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:40px;">
              ${bodyContent}
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="height:1px;background:rgba(201,168,76,0.2);"></td>
          </tr>
          <tr>
            <td style="padding:24px 40px;text-align:center;">
              <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#8f6724;">
                DNA Mitigation · Early 3553(a) Mitigation Shapes the PSR
              </p>
              <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;color:#555;">
                This is a confidential communication intended solely for the addressee.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Gold-accented info table row */
function row(label: string, value: string): string {
  return `
  <tr>
    <td style="padding:10px 16px 10px 0;font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.05em;text-transform:uppercase;color:#8f6724;white-space:nowrap;vertical-align:top;">
      ${label}
    </td>
    <td style="padding:10px 0;font-family:Arial,sans-serif;font-size:14px;color:#e5e5e5;vertical-align:top;">
      <strong>${value}</strong>
    </td>
  </tr>`;
}

function infoTable(rows: string): string {
  return `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
         style="border:1px solid rgba(201,168,76,0.25);border-radius:8px;background:#111;margin:24px 0;padding:16px 20px;">
    ${rows}
  </table>`;
}

function goldButton(href: string, label: string): string {
  return `
  <table role="presentation" cellpadding="0" cellspacing="0" style="margin:28px auto 0;">
    <tr>
      <td style="background:linear-gradient(135deg,#4f340d 0%,#8f6724 12%,#d6ae52 28%,#fff3bf 50%,#d9b45a 68%);border-radius:6px;">
        <a href="${href}"
           style="display:inline-block;padding:14px 36px;font-family:Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#0a0a0a;text-decoration:none;">
          ${label}
        </a>
      </td>
    </tr>
  </table>`;
}

function headingBlock(eyebrow: string, title: string): string {
  return `
  <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#8f6724;">
    ${eyebrow}
  </p>
  <h1 style="margin:0 0 28px;font-size:24px;font-weight:400;color:#d9b45a;line-height:1.3;">
    ${title}
  </h1>`;
}

function bodyText(text: string): string {
  return `<p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;line-height:1.7;color:#ccc;">${text}</p>`;
}

function codeBlock(code: string): string {
  return `
  <div style="background:#111;border:1px solid rgba(201,168,76,0.4);border-radius:8px;padding:20px;text-align:center;margin:24px 0;">
    <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#8f6724;">
      Confirmation Code
    </p>
    <p style="margin:0;font-family:'Courier New',monospace;font-size:26px;font-weight:700;letter-spacing:5px;color:#d9b45a;">
      ${code}
    </p>
  </div>`;
}

/* -------------------------------------------------------------------------- */
/*                           1. Contact Form Emails                           */
/* -------------------------------------------------------------------------- */

export interface ContactDetails {
  name: string;
  email: string;
  phone: string;
  firm?: string;
  message: string;
}

/** Sent to the client after they submit the contact form */
export async function sendContactClientConfirmation(contact: ContactDetails) {
  const body = `
    ${headingBlock("Contact Received", "We've Got Your Message")}
    ${bodyText(`Dear ${contact.name},`)}
    ${bodyText("Thank you for reaching out to DNA Mitigation. We have received your inquiry and will review it carefully. Our team aims to respond within <strong style='color:#d9b45a;'>24 business hours</strong>.")}
    ${infoTable(
      [
        row("Name", contact.name),
        row("Email", contact.email),
        row("Phone", contact.phone),
        contact.firm ? row("Firm", contact.firm) : "",
        row("Message", contact.message.replace(/\n/g, "<br/>")),
      ].join(""),
    )}
    ${bodyText("If your matter is urgent, please call us directly.")}
    ${bodyText("— The DNA Mitigation Team")}
  `;

  await transporter.sendMail({
    from: `"DNA Mitigation" <${process.env.SMTP_FROM}>`,
    to: contact.email,
    subject: "DNA Mitigation — We've received your message",
    html: emailWrapper(body),
  });
}

/** Sent to admin when someone submits the contact form */
export async function sendContactAdminAlert(contact: ContactDetails) {
  const body = `
    ${headingBlock("New Inquiry", "Contact Form Submitted")}
    ${bodyText("Someone has submitted a contact form on the DNA Mitigation website. Details below:")}
    ${infoTable(
      [
        row("Name", contact.name),
        row(
          "Email",
          `<a href="mailto:${contact.email}" style="color:#d9b45a;">${contact.email}</a>`,
        ),
        row("Phone", contact.phone),
        contact.firm ? row("Firm", contact.firm) : "",
        row("Message", contact.message.replace(/\n/g, "<br/>")),
        row(
          "Submitted",
          new Date().toLocaleString("en-US", {
            timeZone: "America/Los_Angeles",
          }) + " PT",
        ),
      ].join(""),
    )}
  `;

  await transporter.sendMail({
    from: `"DNA Mitigation Website" <${process.env.SMTP_FROM}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact — ${contact.name}${contact.firm ? ` · ${contact.firm}` : ""}`,
    html: emailWrapper(body),
  });
}

/* -------------------------------------------------------------------------- */
/*                        2. Book Consultation Emails                         */
/* -------------------------------------------------------------------------- */

export interface BookingDetails {
  name: string;
  firm?: string;
  email: string;
  phone: string;
  caseType?: string;
  notes?: string;
  date: string;
  time: string;
}

/** Sent to the client after booking a consultation */
export async function sendClientConfirmation(booking: BookingDetails) {
  const body = `
    ${headingBlock("Consultation Confirmed", "Your Appointment is Scheduled")}
    ${bodyText(`Dear ${booking.name},`)}
    ${bodyText("Your free consultation has been confirmed. Our team will call you at the number on file at the scheduled time. Please keep this email for your records.")}
    ${infoTable(
      [
        row("Date", booking.date),
        row("Time", booking.time),
        row("Duration", "45 minutes"),
        row("Contact", booking.phone),
        booking.firm ? row("Firm", booking.firm) : "",
        booking.caseType ? row("Case Type", booking.caseType) : "",
      ].join(""),
    )}
    ${bodyText("If you need to reschedule, please reply to this email as soon as possible.")}
    ${bodyText("— The DNA Mitigation Team")}
  `;

  await transporter.sendMail({
    from: `"DNA Mitigation" <${process.env.SMTP_FROM}>`,
    to: booking.email,
    subject: `Consultation Confirmed — ${booking.date} at ${booking.time}`,
    html: emailWrapper(body),
  });
}

/** Sent to admin when a new consultation is booked */
export async function sendAdminNotification(booking: BookingDetails) {
  const body = `
    ${headingBlock("New Booking", "Consultation Scheduled")}
    ${bodyText("A new consultation has been booked through the website.")}
    ${infoTable(
      [
        row("Name", booking.name),
        row("Firm", booking.firm || "—"),
        row(
          "Email",
          `<a href="mailto:${booking.email}" style="color:#d9b45a;">${booking.email}</a>`,
        ),
        row("Phone", booking.phone),
        row("Date", booking.date),
        row("Time", booking.time),
        row("Case Type", booking.caseType || "—"),
        row("Notes", booking.notes || "—"),
      ].join(""),
    )}
  `;

  await transporter.sendMail({
    from: `"DNA Mitigation Bookings" <${process.env.SMTP_FROM}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Consultation — ${booking.name} · ${booking.date} ${booking.time}`,
    html: emailWrapper(body),
  });
}

/* -------------------------------------------------------------------------- */
/*                        3. Quote Request Emails                              */
/* -------------------------------------------------------------------------- */

export interface QuoteRequestEmailParams {
  to: string;
  attorneyName: string;
  lawFirm: string;
  confirmationCode: string;
  packageName: string;
  quotePageUrl: string; // e.g. https://yourdomain.com/pay-deposit
}

/** Sent to the client when they submit a quote request — contains their code */
export async function sendQuoteRequestClientEmail(
  params: QuoteRequestEmailParams,
) {
  const {
    to,
    attorneyName,
    lawFirm,
    confirmationCode,
    packageName,
    quotePageUrl,
  } = params;

  const body = `
    ${headingBlock("Quote Request Received", "We're Preparing Your Quote")}
    ${bodyText(`Dear ${attorneyName},`)}
    ${bodyText(`Thank you for your request on behalf of <strong style="color:#d9b45a;">${lawFirm}</strong>. We have received your inquiry for the <strong style="color:#d9b45a;">${packageName}</strong> package and will follow up with a confidential, all-inclusive quote within one business day.`)}
    ${bodyText("Use the code below to access your quote once it's ready:")}
    ${codeBlock(confirmationCode)}
    ${bodyText("Visit the link below and enter your confirmation code to view your quote, bank details, and production date options.")}
    ${goldButton(quotePageUrl, "View My Quote")}
    ${bodyText("<br/>If you did not make this request, please disregard this email.")}
    ${bodyText("— The DNA Mitigation Team")}
  `;

  await transporter.sendMail({
    from: `"DNA Mitigation" <${process.env.SMTP_FROM}>`,
    to,
    subject: `Quote Request Received — ${packageName}`,
    html: emailWrapper(body),
  });
}

export interface QuoteAdminAlertParams {
  attorneyName: string;
  lawFirm: string;
  email: string;
  phone?: string;
  packageName: string;
  packageId: string;
  confirmationCode: string;
  caseReference?: string;
  notes?: string;
}

/** Sent to admin when someone submits a quote request */
export async function sendQuoteAdminAlert(params: QuoteAdminAlertParams) {
  if (!process.env.ADMIN_EMAIL) return;

  const body = `
    ${headingBlock("New Quote Request", `${params.lawFirm} wants a quote`)}
    ${bodyText("A new quote request has been submitted. The client has been sent their confirmation code.")}
    ${infoTable(
      [
        row("Attorney", params.attorneyName),
        row("Law Firm", params.lawFirm),
        row(
          "Email",
          `<a href="mailto:${params.email}" style="color:#d9b45a;">${params.email}</a>`,
        ),
        row("Phone", params.phone || "—"),
        row("Package", `${params.packageName} (${params.packageId})`),
        row(
          "Code",
          `<span style="font-family:'Courier New',monospace;letter-spacing:3px;color:#d9b45a;">${params.confirmationCode}</span>`,
        ),
        row("Case Ref", params.caseReference || "—"),
        row("Notes", params.notes || "—"),
        row(
          "Submitted",
          new Date().toLocaleString("en-US", {
            timeZone: "America/Los_Angeles",
          }) + " PT",
        ),
      ].join(""),
    )}
    ${bodyText("<em style='color:#888;font-size:12px;'>Log into your dashboard or MongoDB to manage this request and update the quote status.</em>")}
  `;

  await transporter.sendMail({
    from: `"DNA Mitigation Website" <${process.env.SMTP_FROM}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Quote Request — ${params.lawFirm} (${params.packageName})`,
    html: emailWrapper(body),
  });
}

/* -------------------------------------------------------------------------- */
/*                         4. Deposit Notification                            */
/* -------------------------------------------------------------------------- */

export interface DepositAlertParams {
  attorneyName: string;
  lawFirm: string;
  packageName: string;
  confirmationCode: string;
}

export async function notifyAdminOfDepositClick(params: DepositAlertParams) {
  if (!process.env.ADMIN_EMAIL) return;

  const { attorneyName, lawFirm, packageName, confirmationCode } = params;

  const body = `
    ${headingBlock("Deposit Requested", `${lawFirm} wants to pay`)}
    ${bodyText(`<strong style="color:#d9b45a;">${attorneyName}</strong> at <strong style="color:#d9b45a;">${lawFirm}</strong> has clicked <em>"Pay Deposit Now"</em> on the quote page.`)}
    ${infoTable(
      [
        row("Attorney", attorneyName),
        row("Law Firm", lawFirm),
        row("Package", packageName),
        row(
          "Code",
          `<span style="font-family:'Courier New',monospace;letter-spacing:3px;color:#d9b45a;">${confirmationCode}</span>`,
        ),
        row(
          "Requested",
          new Date().toLocaleString("en-US", {
            timeZone: "America/Los_Angeles",
          }) + " PT",
        ),
      ].join(""),
    )}
    ${bodyText("<em style='color:#888;font-size:12px;'>No payment link is currently attached to this request. Update the <code>paymentLink</code> field in MongoDB to provide a direct link next time.</em>")}
  `;

  await transporter.sendMail({
    from: `"DNA Mitigation Website" <${process.env.SMTP_FROM}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `Deposit Requested — ${lawFirm} (${packageName})`,
    html: emailWrapper(body),
  });
}
