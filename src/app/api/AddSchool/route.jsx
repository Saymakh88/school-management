import { connectDB } from "@/lib/db";
import { writeFile } from "fs/promises";
import path from "path";
import fs from "fs";

export async function POST(req) {
  try {
    const form = await req.formData();
    const file = form.get("image");

    // Ensure folder exists
    const dir = path.join(process.cwd(), "public", "schoolImages");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(dir, file.name);
    await writeFile(filePath, buffer);

    const name = form.get("name");
    const address = form.get("address");
    const city = form.get("city");
    const state = form.get("state");
    const contact = form.get("contact");
    const email_id = form.get("email_id");

    const db = await connectDB();
    await db.execute(
      "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, address, city, state, contact, email_id, `/schoolImages/${file.name}`]
    );

    return new Response(JSON.stringify({ message: "School added successfully" }), { status: 200 });
  } catch (err) {
    console.error("Upload failed:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
