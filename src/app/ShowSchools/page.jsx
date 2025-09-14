"use client";
import { useEffect, useState } from "react";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("/api/GetSchools")
      .then((res) => res.json())
      .then((data) => setSchools(data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 bg-gray-100 min-h-screen bg-gray-200">
      {schools.map((s) => (
        <div
          key={s.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={s.image}
            alt={s.name}
            className="w-full max-w-sm h-auto object-cover rounded-md"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-blue-600">{s.name}</h2>
            <p className="text-gray-600">{s.address}</p>
            <p className="text-gray-600">
              {s.city}, {s.state}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
