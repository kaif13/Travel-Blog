import React, { useEffect, useState } from "react";

/* ==============================
   CONFIG
============================== */

const GITHUB_RAW =
  "https://raw.githubusercontent.com/kaif13/Travel-Blog/main/src/data/trips.js";

const API = "/.netlify/functions/updateTrip";

/* ==============================
   HELPERS
============================== */

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

const extractTrips = (text) => {
  const match = text.match(/export const MOCK_TRIPS = (\[[\s\S]*?\]);/);
  if (!match) return [];
  return JSON.parse(match[1]);
};

/* ==============================
   TIMELINE EDITOR
============================== */

function TimelineItem({ item, index, update, remove }) {
  const change = (field, val) => update(index, { ...item, [field]: val });

  const updateArr = (field, i, val) => {
    const arr = [...(item[field] || [])];
    arr[i] = val;
    change(field, arr);
  };

  const addArr = (field) => change(field, [...(item[field] || []), ""]);

  const removeArr = (field, i) => {
    const arr = [...(item[field] || [])];
    arr.splice(i, 1);
    change(field, arr);
  };

  return (
    <div className="bg-slate-800 p-4 rounded space-y-3">
      <select
        className="input"
        value={item.type}
        onChange={(e) => change("type", e.target.value)}
      >
        <option value="day">Day</option>
        <option value="memory">Memory</option>
        <option value="quote">Quote</option>
        <option value="partner">Partner</option>
        <option value="end">End</option>
      </select>

      {item.type === "day" && (
        <>
          <input
            className="input"
            placeholder="Day"
            value={item.day || ""}
            onChange={(e) => change("day", e.target.value)}
          />
          <input
            className="input"
            placeholder="Title"
            value={item.title || ""}
            onChange={(e) => change("title", e.target.value)}
          />
        </>
      )}

      {item.type === "memory" && (
        <>
          <input
            className="input"
            placeholder="Time"
            value={item.time || ""}
            onChange={(e) => change("time", e.target.value)}
          />

          <textarea
            className="input"
            placeholder="Description"
            value={item.description || ""}
            onChange={(e) => change("description", e.target.value)}
          />

          <p className="text-cyan-400">Images</p>
          {(item.images || []).map((img, i) => (
            <div key={i} className="flex gap-2">
              <input
                className="input"
                value={img}
                onChange={(e) => updateArr("images", i, e.target.value)}
              />
              <button onClick={() => removeArr("images", i)}>X</button>
            </div>
          ))}
          <button onClick={() => addArr("images")}>Add Image</button>

          <p className="text-cyan-400">Videos</p>
          {(item.videos || []).map((v, i) => (
            <div key={i} className="flex gap-2">
              <input
                className="input"
                value={v}
                onChange={(e) => updateArr("videos", i, e.target.value)}
              />
              <button onClick={() => removeArr("videos", i)}>X</button>
            </div>
          ))}
          <button onClick={() => addArr("videos")}>Add Video</button>
        </>
      )}

      {(item.type === "quote" || item.type === "end") && (
        <textarea
          className="input"
          value={item.text || ""}
          onChange={(e) => change("text", e.target.value)}
        />
      )}

      {item.type === "partner" && (
        <textarea
          className="input"
          placeholder="Names comma separated"
          value={(item.names || []).join(",")}
          onChange={(e) =>
            change(
              "names",
              e.target.value.split(",").map((n) => n.trim()),
            )
          }
        />
      )}

      <button onClick={() => remove(index)} className="text-red-400">
        Delete Item
      </button>
    </div>
  );
}

/* ==============================
   ADMIN PAGE
============================== */

export default function AdminPage() {
  const [trips, setTrips] = useState([]);
  const [trip, setTrip] = useState(emptyTrip());
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  /* LOAD FROM GITHUB */
  useEffect(() => {
    const load = async () => {
      const res = await fetch(GITHUB_RAW + "?t=" + Date.now());
      const text = await res.text();
      setTrips(extractTrips(text));
      setLoading(false);
    };
    load();
  }, []);

  const loadTrip = (id) => {
    const t = trips.find((x) => x.id === id);
    setTrip(JSON.parse(JSON.stringify(t)));
  };

  const newTrip = () => setTrip(emptyTrip());

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

      alert("Saved successfully ✅");

      /* ⭐ IMPORTANT — reload trips */
      const reload = await fetch(GITHUB_RAW + "?t=" + Date.now());
      const fileText = await reload.text();
      const updatedTrips = extractTrips(fileText);

      setTrips(updatedTrips); // refresh sidebar
      setTrip(emptyTrip()); // clear form (optional)
    } catch (err) {
      alert("Save failed: " + err.message);
    }

    setSaving(false);
  };
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

  if (loading) return <div className="p-10">Loading trips...</div>;

  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* SIDEBAR */}
      <div className="w-64 border-r border-slate-700 p-4 space-y-3">
        <button onClick={newTrip} className="btn-primary w-full">
          + New Trip
        </button>

        {trips.map((t) => (
          <div key={t.id} className="bg-slate-800 p-2 rounded">
            <button onClick={() => loadTrip(t.id)}>{t.title || t.id}</button>
          </div>
        ))}
      </div>

      {/* EDITOR */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        <input
          className="input"
          placeholder="ID"
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
            update={updateDetail}
            remove={removeDetail}
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
