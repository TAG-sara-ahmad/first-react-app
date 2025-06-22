import React from "react";

export default function TripCard({ id, title, date, onBook }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>التاريخ: {date}</p>
      <button
        onClick={() => onBook(id)}
        className="border bg-sky-300 text-white p-4 rounded-md cursor-pointer"
      >
        احجز الآن
      </button>
    </div>
  );
}
