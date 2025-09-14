"use client";
import { useState } from "react";

export default function AddSchool() {
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("/api/AddSchool", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 px-4">
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-2">
          🏫 Add New School
        </h1>

        <input
          name="name"
          placeholder="School Name"
          className="w-full border p-3 rounded-lg"
          required
        />
        <input
          name="address"
          placeholder="Address"
          className="w-full border p-3 rounded-lg"
          required
        />
        <input
          name="city"
          placeholder="City"
          className="w-full border p-3 rounded-lg"
          required
        />
        <input
          name="state"
          placeholder="State"
          className="w-full border p-3 rounded-lg"
          required
        />
        <input
          name="contact"
          placeholder="Contact"
          className="w-full border p-3 rounded-lg"
          required
        />
        <input
          name="email_id"
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg"
          required
        />

        {/* File upload */}
        <input
          type="file"
          name="image"
          accept="image/*"
          className="w-full border p-3 rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Save School
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center mt-2">
            ✅ School added successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mt-2">
            ❌ Something went wrong!
          </p>
        )}
      </form>
    </div>
  );
}
