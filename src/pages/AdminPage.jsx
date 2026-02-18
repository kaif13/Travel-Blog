import React, { useEffect, useState } from "react";

const GITHUB_JSON =
  "https://raw.githubusercontent.com/kaif13/Travel-Blog/main/src/data/trips.json";

/* ===============================
   EMPTY TRIP TEMPLATE
================================ */
const emptyTrip = () => ({
  id: "",
  title: "",
  location: "",
  date: "",
  quote: "",
  coverImage: "",
  status: "completed",
  details: [],
});

/* ===============================
   ADMIN PAGE
================================ */
export default function AdminPage() {
  const [trips, setTrips] = useState([]);
  const [trip, setTrip] = useState(emptyTrip());
  const [loading, setLoading] = useState(false);

  /* ===============================
     LOAD TRIPS FROM GITHUB
  =================================*/
  const loadTrips = async () => {
    try {
      const res = await fetch(GITHUB_JSON + "?t=" + Date.now());
      const data = await res.json();
      setTrips(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load trips.json");
    }
  };

  useEffect(() => {
    loadTrips();
  }, []);

  /* ===============================
     LOAD TRIP FOR EDIT
  =================================*/
  const loadTrip = (id) => {
    const found = trips.find((t) => t.id === id);
    if (!found) return;
    setTrip(JSON.parse(JSON.stringify(found)));
  };

  /* ===============================
     SAVE TRIP (ADD OR EDIT)
  =================================*/
  const saveTrip = async () => {
    if (!trip.id) return alert("Trip ID required");

    try {
      setLoading(true);

      const res = await fetch("/.netlify/functions/updateTrip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trip),
      });

      if (!res.ok) throw new Error("Save failed");

      alert("Trip saved");

      await loadTrips();
      setTrip(emptyTrip());
    } catch (err) {
      console.error(err);
      alert("Save error");
    } finally {
      setLoading(false);
    }
  };

  /* ===============================
     DELETE TRIP WITH CONFIRMATION
  =================================*/
  const deleteTrip = async (tripId) => {
    const confirmId = prompt("Type Trip ID to confirm delete:\n" + tripId);

    if (confirmId !== tripId) {
      alert("Wrong ID. Delete cancelled.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/.netlify/functions/deleteTrip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tripId }),
      });

      if (!res.ok) throw new Error("Delete failed");

      alert("Trip deleted");

      await loadTrips();
      setTrip(emptyTrip());
    } catch (err) {
      console.error(err);
      alert("Delete error");
    } finally {
      setLoading(false);
    }
  };

  /* ===============================
     UI
  =================================*/
  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* SIDEBAR */}
      <div className="w-64 border-r border-slate-700 p-4 space-y-3 overflow-y-auto">
        <button
          onClick={() => setTrip(emptyTrip())}
          className="bg-cyan-600 w-full py-2 rounded"
        >
          + New Trip
        </button>

        {trips.map((t) => (
          <div
            key={t.id}
            className="bg-slate-800 p-2 rounded flex justify-between items-center"
          >
            <span className="cursor-pointer" onClick={() => loadTrip(t.id)}>
              {t.title || t.id}
            </span>

            <button onClick={() => deleteTrip(t.id)} className="text-red-400">
              X
            </button>
          </div>
        ))}
      </div>

      {/* EDITOR */}
      <div className="flex-1 p-6 space-y-3 overflow-y-auto">
        <input
          className="input"
          placeholder="Trip ID"
          value={trip.id}
          onChange={(e) => setTrip({ ...trip, id: e.target.value })}
        />

        <input
          className="input"
          placeholder="Title"
          value={trip.title}
          onChange={(e) => setTrip({ ...trip, title: e.target.value })}
        />

        <input
          className="input"
          placeholder="Location"
          value={trip.location}
          onChange={(e) => setTrip({ ...trip, location: e.target.value })}
        />

        <input
          className="input"
          placeholder="Date"
          value={trip.date}
          onChange={(e) => setTrip({ ...trip, date: e.target.value })}
        />

        <textarea
          className="input"
          placeholder="Quote"
          value={trip.quote}
          onChange={(e) => setTrip({ ...trip, quote: e.target.value })}
        />

        <input
          className="input"
          placeholder="Cover Image URL"
          value={trip.coverImage}
          onChange={(e) => setTrip({ ...trip, coverImage: e.target.value })}
        />

        <select
          className="input"
          value={trip.status}
          onChange={(e) => setTrip({ ...trip, status: e.target.value })}
        >
          <option value="completed">Completed</option>
          <option value="upcoming">Upcoming</option>
        </select>

        <button
          onClick={saveTrip}
          disabled={loading}
          className="bg-green-600 w-full py-3 rounded"
        >
          {loading ? "Saving..." : "Save Trip"}
        </button>
      </div>
    </div>
  );
}
