import nodemailer from 'nodemailer';

// Validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

// Email sending
export const sendEmail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error };
  }
};

// Response helpers
export const successResponse = (data: any, statusCode = 200) => {
  return new Response(JSON.stringify({ success: true, data }), {
    status: statusCode,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const errorResponse = (message: string, statusCode = 400) => {
  return new Response(JSON.stringify({ success: false, error: message }), {
    status: statusCode,
    headers: { 'Content-Type': 'application/json' },
  });
};
