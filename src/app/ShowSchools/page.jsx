"use client";
import { useEffect, useState } from "react";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  const fetchSchools = async () => {
    const res = await fetch("/api/GetSchools");
    const data = await res.json();
    setSchools(data);
  };

  const deleteSchool = async (id) => {
    await fetch(`/api/deleteSchool?id=${id}`, { method: "DELETE" });
    fetchSchools();
  };

  useEffect(() => {
    fetchSchools();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {schools.map((s) => (
        <div key={s.id} className="border p-4 rounded-lg shadow-md">
          <img
            src={s.image}
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <h2 className="font-bold text-lg">{s.name}</h2>
          <p>
            {s.address}, {s.city}
          </p>
          <p>{s.state}</p>
          <p>{s.contact}</p>
          <p>{s.email_id}</p>
        </div>
      ))}
    </div>
  );
}
