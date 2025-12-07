import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import ContactMessage from "../../../models/ContactMessage";

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
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !message) {
    return withCors(
      NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    );
  }

  try {
    await connectDB();
    const newMessage = await ContactMessage.create({ name, email, subject, message });
    return withCors(
      NextResponse.json({ success: true, data: newMessage }, { status: 201 })
    );
  } catch (error) {
    console.error("Error saving message:", error);
    return withCors(
      NextResponse.json({ success: false, message: "Server error" }, { status: 500 })
    );
  }
}

// GET request
export async function GET() {
  try {
    await connectDB();
    const messages = await ContactMessage.find().sort({ createdAt: -1 });

    return withCors(
      NextResponse.json({ success: true, data: messages }, { status: 200 })
    );
  } catch (error) {
    console.error("Error fetching messages:", error);
    return withCors(
      NextResponse.json({ success: false, message: "Server error" }, { status: 500 })
    );
  }
}
