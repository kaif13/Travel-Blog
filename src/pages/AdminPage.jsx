import { useState } from "react";
import { MOCK_TRIPS } from "../data/trips";

export default function AdminPage() {
  const tripIds = MOCK_TRIPS.map((trip) => trip.id);

  const firstTrip = MOCK_TRIPS.find((t) => t.id === tripIds[0])?.details || [];

  const [selectedTrip, setSelectedTrip] = useState(tripIds[0]);
  const [jsonText, setJsonText] = useState(JSON.stringify(firstTrip, null, 2));

  function handleTripChange(e) {
    const id = e.target.value;
    setSelectedTrip(id);

    const trip = MOCK_TRIPS.find((t) => t.id === id);
    setJsonText(JSON.stringify(trip?.details || [], null, 2));
  }

  async function saveChanges() {
    try {
      const parsed = JSON.parse(jsonText);

      await fetch("/.netlify/functions/updateTrip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tripId: selectedTrip,
          details: parsed,
        }),
      });

      alert("Trip updated. Netlify redeploying...");
    } catch {
      alert("Invalid JSON");
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Trip Editor</h1>

      <select
        value={selectedTrip}
        onChange={handleTripChange}
        className="border p-2 mb-4"
      >
        {tripIds.map((id) => (
          <option key={id}>{id}</option>
        ))}
      </select>

      <textarea
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
        className="w-full h-96 border p-3 font-mono"
      />

      <button
        onClick={saveChanges}
        className="mt-4 bg-cyan-600 text-white px-6 py-2 rounded"
      >
        Save Trip
      </button>
    </div>
  );
}
