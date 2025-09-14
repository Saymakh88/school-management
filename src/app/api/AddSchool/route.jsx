// src/app/api/addSchool/route.js
import { connectDB } from "@/lib/db";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    const form = await req.formData();
    const file = form.get("image"); // uploaded file

    // Save file to public/schoolImages/
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(
      process.cwd(),
      "public",
      "schoolImages",
      file.name
    );
    await writeFile(filePath, buffer);

    // get other fields
    const name = form.get("name");
    const address = form.get("address");
    const city = form.get("city");
    const state = form.get("state");
    const contact = form.get("contact");
    const email_id = form.get("email_id");

    // Save to DB with relative path

    const db = await connectDB();
    await db.execute(
      "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        address,
        city,
        state,
        contact,
        email_id,
        `/schoolImages/${file.name}`,
      ]
    );

    return new Response(
      JSON.stringify({ message: "School added successfully" }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Upload failed:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
