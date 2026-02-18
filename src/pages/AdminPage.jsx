import React, { useState, useEffect } from "react";

/* ===============================
CONFIG
================================ */

const API = "/.netlify/functions/updateTrip";

const GITHUB_RAW =
  "https://raw.githubusercontent.com/kaif13/Travel-Blog/main/src/data/trips.json";

/* ===============================
EMPTY TRIP
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
TIMELINE ITEM
================================ */

function TimelineItem({ item, index, updateItem, removeItem }) {
  const update = (field, value) =>
    updateItem(index, { ...item, [field]: value });

  const updateArray = (field, i, value) => {
    const arr = [...(item[field] || [])];
    arr[i] = value;
    update(field, arr);
  };

  const addArray = (field) => update(field, [...(item[field] || []), ""]);

  const removeArray = (field, i) => {
    const arr = [...(item[field] || [])];
    arr.splice(i, 1);
    update(field, arr);
  };

  return (
    <div className="bg-slate-800 border border-slate-700 p-4 rounded space-y-3">
      <div className="flex justify-between">
        <select
          className="input"
          value={item.type}
          onChange={(e) => update("type", e.target.value)}
        >
          <option value="day">Day</option>
          <option value="memory">Memory</option>
          <option value="quote">Quote</option>
          <option value="partner">Partner</option>
          <option value="end">End</option>
        </select>

        <button onClick={() => removeItem(index)} className="text-red-400">
          Delete
        </button>
      </div>

      {item.type === "memory" && (
        <>
          <input
            className="input"
            placeholder="Time"
            value={item.time || ""}
            onChange={(e) => update("time", e.target.value)}
          />

          <textarea
            className="input"
            placeholder="Description"
            value={item.description || ""}
            onChange={(e) => update("description", e.target.value)}
          />

          <p className="text-cyan-400">Images</p>
          {(item.images || []).map((img, i) => (
            <div key={i} className="flex gap-2">
              <input
                className="input"
                value={img}
                onChange={(e) => updateArray("images", i, e.target.value)}
              />
              <button onClick={() => removeArray("images", i)}>X</button>
            </div>
          ))}
          <button onClick={() => addArray("images")}>Add Image</button>

          <p className="text-cyan-400">Videos</p>
          {(item.videos || []).map((vid, i) => (
            <div key={i} className="flex gap-2">
              <input
                className="input"
                value={vid}
                onChange={(e) => updateArray("videos", i, e.target.value)}
              />
              <button onClick={() => removeArray("videos", i)}>X</button>
            </div>
          ))}
          <button onClick={() => addArray("videos")}>Add Video</button>
        </>
      )}
    </div>
  );
}

/* ===============================
ADMIN PAGE
================================ */

export default function AdminPage() {
  const [trips, setTrips] = useState([]);
  const [trip, setTrip] = useState(emptyTrip());
  const [saving, setSaving] = useState(false);

  /* LOAD FROM GITHUB */
  const loadTrips = async () => {
    const res = await fetch(GITHUB_RAW + "?t=" + Date.now());
    const data = await res.json();
    setTrips(data);
  };

  useEffect(() => {
    loadTrips();
  }, []);

  /* LOAD EXISTING */
  const loadTrip = (id) => {
    const t = trips.find((tr) => tr.id === id);
    setTrip(JSON.parse(JSON.stringify(t)));
  };

  /* DELETE */
  const deleteTrip = async (id) => {
    const filtered = trips.filter((t) => t.id !== id);

    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: "__replace_all__", data: filtered }),
    });

    await loadTrips();
    setTrip(emptyTrip());
  };

  /* SAVE */
  const saveTrip = async () => {
    if (!trip.id) return alert("Trip ID required");

    setSaving(true);

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trip),
      });

      const text = await res.text();

      if (!res.ok) throw new Error(text);

      alert("Saved successfully");

      await loadTrips();
      setTrip(emptyTrip());
    } catch (err) {
      alert(err.message);
    }

    setSaving(false);
  };

  /* TIMELINE */
  const updateDetail = (i, val) => {
    const arr = [...trip.details];
    arr[i] = val;
    setTrip({ ...trip, details: arr });
  };

  const removeDetail = (i) => {
    const arr = [...trip.details];
    arr.splice(i, 1);
    setTrip({ ...trip, details: arr });
  };

  const addDetail = () =>
    setTrip({
      ...trip,
      details: [...trip.details, { type: "memory", images: [], videos: [] }],
    });

  /* =============================== */

  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* SIDEBAR */}
      <div className="w-64 border-r border-slate-700 p-4 space-y-3">
        <button
          onClick={() => setTrip(emptyTrip())}
          className="btn-primary w-full"
        >
          + New Trip
        </button>

        {trips.map((t) => (
          <div
            key={t.id}
            className="flex justify-between bg-slate-800 p-2 rounded"
          >
            <span className="cursor-pointer" onClick={() => loadTrip(t.id)}>
              {t.title}
            </span>

            <button onClick={() => deleteTrip(t.id)} className="text-red-400">
              X
            </button>
          </div>
        ))}
      </div>

      {/* EDITOR */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
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
          placeholder="Cover image URL"
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

        <h2 className="text-xl font-bold">Timeline</h2>

        {trip.details.map((d, i) => (
          <TimelineItem
            key={i}
            item={d}
            index={i}
            updateItem={updateDetail}
            removeItem={removeDetail}
          />
        ))}

        <button onClick={addDetail} className="btn-primary">
          Add Timeline Item
        </button>

        <button
          onClick={saveTrip}
          disabled={saving}
          className="btn-primary w-full"
        >
          {saving ? "Saving..." : "Save Trip"}
        </button>
      </div>
    </div>
  );
}
