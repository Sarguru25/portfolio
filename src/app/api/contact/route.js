import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import ContactMessage from "../../../models/ContactMessage";


export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  try {
    await connectDB();
    const newMessage = await ContactMessage.create({ name, email, subject, message });
    return NextResponse.json({ success: true, data: newMessage }, { status: 201 });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
