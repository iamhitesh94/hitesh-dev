import nodemailer from 'nodemailer';

// This handles the POST request for sending emails
export async function POST(req) {
  try {
    // Parse the request body to get email data
    const { to, subject, html } = await req.json();

    // Create a transporter object using SMTP or a service like Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use any service like 'gmail', 'outlook', etc.
      auth: {
        user: process.env.SMTP_USER, // Your email address (from environment variables)
        pass: process.env.SMTP_PASS, // Your email password or app-specific password
      },
    });

    // Send the email
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html
    });

    // Return a successful response
    return new Response(JSON.stringify({ message: 'Email sent successfully!', 'success' : true}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Return an error response
    return new Response(JSON.stringify({ error: 'Failed to send email', details: error.message, 'success' : false }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
