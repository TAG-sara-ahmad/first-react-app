import React from "react";
import TripCard from "./TripCard";

export default function TripsList() {
  const handleBookingClick = (tripId) => {
    console.log("تم الضغط على احجز الآن للرحلة رقم:", tripId);
    // هنا ممكن تفتحي فورم أو تعملي redirect
    alert(`فتح فورم الحجز للرحلة رقم ${tripId}`);
  };

  // api => data => [{id:1, date:'15-6-2025', title:'mlk'},{id:1, date:'15-6-2025', title:'mlk'},{id:1, date:'15-6-2025', title:'mlk'},{id:1, date:'15-6-2025', title:'mlk'}]
  const data = [
    { id: 1, date: "15-6-2025", title: "trip 1" },
    { id: 2, date: "16-6-2025", title: "trip 2" },
    { id: 3, date: "17-6-2025", title: "trip 3" },
    { id: 4, date: "18-6-2025", title: "trip 4" },
    { id: 5, date: "18-6-2025", title: "trip 5" },
    { id: 6, date: "18-6-2025", title: "trip 6" },
    { id: 7, date: "18-6-2025", title: "trip 7" },
    { id: 8, date: "18-6-2025", title: "trip 8" },
    { id: 9, date: "18-6-2025", title: "trip 8" },
    { id: 10, date: "18-6-2025", title: "trip 8" },
  ];
  return (
    <div className="flex justify-end flex-col items-end">
      <h2 className="bg-white p-3 ">رحلات متاحة:</h2>
      {data?.map((item, index) => {
        return (
          <TripCard
            key={item.id}
            id={item.id}
            title={item.title}
            date={item.date}
            onBook={handleBookingClick}
          />
        );
      })}
    </div>
  );
}
