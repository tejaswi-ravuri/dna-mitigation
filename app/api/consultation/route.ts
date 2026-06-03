import { validateEmail, validatePhone, sendEmail, successResponse, errorResponse } from '@/lib/api-utils';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, firm, serviceType, preferredDate, message } = body;

    // Validation
    if (!name || !email || !phone || !message) {
      return errorResponse('Missing required fields', 400);
    }

    if (!validateEmail(email)) {
      return errorResponse('Invalid email address', 400);
    }

    if (!validatePhone(phone)) {
      return errorResponse('Invalid phone number', 400);
    }

    // Format the preferred date nicely
    const dateObj = preferredDate ? new Date(preferredDate) : null;
    const formattedDate = dateObj
      ? dateObj.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : 'To be determined';

    // Service type label
    const serviceTypeLabels: Record<string, string> = {
      general: 'General Sentencing Mitigation',
      psr: 'PSR Strategy & Preparation',
      alternative: 'Alternative Sentences',
      document: 'Document Preparation',
      appellate: 'Appellate Sentencing Issues',
    };

    const serviceLabel = serviceTypeLabels[serviceType] || serviceType;

    // Send confirmation email to client
    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #d4af37;">Consultation Booking Confirmation</h2>
        <p>Dear ${name},</p>
        <p>Thank you for scheduling a consultation with DNA Mitigation. We look forward to discussing your case.</p>
        
        <div style="background-color: #1a1a1a; border-left: 4px solid #d4af37; padding: 20px; margin: 20px 0;">
          <p><strong>Booking Details:</strong></p>
          <p>Service Type: ${serviceLabel}</p>
          <p>Preferred Date: ${formattedDate}</p>
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          ${firm ? `<p>Firm: ${firm}</p>` : ''}
        </div>

        <div style="background-color: #0a0a0a; border-left: 4px solid #d4af37; padding: 20px; margin: 20px 0;">
          <p><strong>Case Notes:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>

        <p><strong>What Happens Next:</strong></p>
        <ul style="line-height: 1.8;">
          <li>We will review your case details and confirm a consultation time</li>
          <li>You will receive an email with the confirmed consultation date and time</li>
          <li>Our team will prepare for your consultation by reviewing the information you provided</li>
          <li>During the consultation, we'll discuss your sentencing situation and mitigation strategy options</li>
        </ul>

        <p>If you need to reschedule or have any questions before your consultation, please don't hesitate to contact us.</p>
        
        <p>Best regards,<br/>DNA Mitigation Team</p>
      </div>
    `;

    await sendEmail(email, 'DNA Mitigation - Consultation Booking Confirmation', clientEmailHtml);

    // You could optionally store this in a database here
    // For now, we're just sending confirmation emails

    return successResponse(
      {
        message: 'Your consultation has been scheduled successfully',
        bookingReference: `CONS-${Date.now()}`,
        submittedAt: new Date().toISOString(),
      },
      201
    );
  } catch (error) {
    console.error('Consultation API error:', error);
    return errorResponse('Internal server error', 500);
  }
}
