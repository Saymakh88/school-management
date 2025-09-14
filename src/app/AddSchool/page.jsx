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
    } else setStatus("error");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50 p-4">
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-blue-600">
          🏫 Add School
        </h1>
        {["name", "address", "city", "state", "contact", "email_id"].map(
          (field) => (
            <input
              key={field}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="w-full border p-3 rounded-lg"
              required
            />
          )
        )}
        <input
          type="file"
          name="image"
          accept="image/*"
          className="w-full border p-3 rounded-lg"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Save School
        </button>
        {status === "success" && (
          <p className="text-green-600 text-center">✅ School added!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center">❌ Something went wrong!</p>
        )}
      </form>
    </div>
  );
}
