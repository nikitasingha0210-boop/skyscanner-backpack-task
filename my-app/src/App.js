import React, { useState } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const days = [
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  ];

  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleContinue = () => {
    if (!selectedDate) {
      alert("Please select a date");
    } else {
      alert(`Selected date: ${selectedDate} August 2026`);
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <h1>Flight Schedule</h1>

      <p>Welcome to my SkyScanner Backpack task.</p>

      <div
        style={{
          marginTop: "30px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "20px",
          backgroundColor: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center" }}>August 2026</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "8px",
            textAlign: "center",
          }}
        >
          {days[0].map((day) => (
            <strong key={day}>{day}</strong>
          ))}

          {/* August 1, 2026 is Saturday */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={`empty-${index}`}></div>
          ))}

          {dates.map((date) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              style={{
                padding: "10px 5px",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor:
                  selectedDate === date ? "#00a698" : "white",
                color: selectedDate === date ? "white" : "#111",
                fontWeight: selectedDate === date ? "bold" : "normal",
              }}
            >
              {date}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleContinue}
        style={{
          marginTop: "25px",
          width: "100%",
          padding: "14px",
          backgroundColor: "#00a698",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Continue
      </button>

      {selectedDate && (
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Selected date: <strong>{selectedDate} August 2026</strong>
        </p>
      )}
    </div>
  );
}

export default App;

