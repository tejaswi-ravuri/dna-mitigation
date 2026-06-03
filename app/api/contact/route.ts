import { validateEmail, validatePhone, sendEmail, successResponse, errorResponse } from '@/lib/api-utils';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, firm, message } = body;

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

    // Send confirmation email to client
    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #d4af37;">Contact Confirmation</h2>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to DNA Mitigation. We have received your inquiry and will review it carefully.</p>
        
        <div style="background-color: #1a1a1a; border-left: 4px solid #d4af37; padding: 20px; margin: 20px 0;">
          <p><strong>Your Information:</strong></p>
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          ${firm ? `<p>Firm: ${firm}</p>` : ''}
          <p>Message: ${message}</p>
        </div>

        <p>We aim to respond to all inquiries within 24 business hours. If your matter is urgent, please call us directly.</p>
        
        <p>Best regards,<br/>DNA Mitigation Team</p>
      </div>
    `;

    // Send notification email to admin (optional - you can configure your email)
    // This demonstrates the flow but won't actually send without SMTP configured

    await sendEmail(email, 'DNA Mitigation - Contact Confirmation', clientEmailHtml);

    return successResponse(
      {
        message: 'Your contact form has been submitted successfully',
        submittedAt: new Date().toISOString(),
      },
      201
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return errorResponse('Internal server error', 500);
  }
}
