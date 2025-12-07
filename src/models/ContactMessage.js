import mongoose from "mongoose";

const ContactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});



// Avoid model overwrite on hot reload in development
export default mongoose.models.ContactMessage ||
  mongoose.model("ContactMessage", ContactMessageSchema);
