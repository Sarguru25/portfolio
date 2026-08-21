import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Helper function to add CORS headers
function withCors(response) {
  response.headers.set("Access-Control-Allow-Origin", "*"); // allow all origins
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "*");
  return response;
}

// Handle OPTIONS preflight request
export async function OPTIONS() {
  return withCors(new NextResponse(null, { status: 204 }));
}

// POST request
export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return withCors(
        NextResponse.json({ message: "Missing required fields" }, { status: 400 })
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sargurudurai25@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return withCors(
      NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 })
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return withCors(
      NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
    );
  }
}