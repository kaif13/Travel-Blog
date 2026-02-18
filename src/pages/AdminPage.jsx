import React, { useEffect, useState } from "react";

/* ================================
   CONFIG
================================ */

const ADMIN_PASSWORD = "kaif123"; // 🔐 change password

const GITHUB_JSON =
  "https://raw.githubusercontent.com/kaif13/Travel-Blog/main/src/data/trips.json";

/* ================================
   HELPERS
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

/* ================================
   TIMELINE EDITOR
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
    <div className="bg-slate-800 p-4 rounded space-y-3">
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

      {item.type === "quote" && (
        <textarea
          className="input"
          value={item.text || ""}
          onChange={(e) => update("text", e.target.value)}
        />
      )}

      {item.type === "end" && (
        <textarea
          className="input"
          value={item.text || ""}
          onChange={(e) => update("text", e.target.value)}
        />
      )}
    </div>
  );
}

/* ================================
   ADMIN PAGE
================================ */

export default function AdminPage() {
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState("");

  const [trips, setTrips] = useState([]);
  const [trip, setTrip] = useState(emptyTrip());
  const [loading, setLoading] = useState(false);

  /* ================================
     LOAD TRIPS FROM GITHUB
  ================================= */

  const loadTrips = async () => {
    const res = await fetch(GITHUB_JSON + "?t=" + Date.now(), {
      cache: "no-store",
    });
    const data = await res.json();
    setTrips(data);
  };

  useEffect(() => {
    if (isAuth) loadTrips();
  }, [isAuth]);

  /* ================================
     CRUD
  ================================= */

  const loadTrip = (id) => {
    const t = trips.find((x) => x.id === id);
    setTrip(JSON.parse(JSON.stringify(t)));
  };

  const newTrip = () => setTrip(emptyTrip());

  const saveTrip = async () => {
    setLoading(true);

    const res = await fetch("/.netlify/functions/updateTrip", {
      method: "POST",
      body: JSON.stringify(trip),
    });

    if (!res.ok) {
      alert("Save failed");
      setLoading(false);
      return;
    }

    alert("Saved");
    await loadTrips();
    setLoading(false);
  };

  const deleteTrip = async (id) => {
    const confirmId = prompt("Type trip id to delete: " + id);
    if (confirmId !== id) return;

    setLoading(true);

    const res = await fetch("/.netlify/functions/deleteTrip", {
      method: "POST",
      body: JSON.stringify({ tripId: id }),
    });

    if (!res.ok) {
      alert("Delete failed");
      setLoading(false);
      return;
    }

    alert("Deleted");
    await loadTrips();
    setTrip(emptyTrip());
    setLoading(false);
  };

  /* ================================
     TIMELINE
  ================================= */

  const updateDetail = (i, val) => {
    const arr = [...trip.details];
    arr[i] = val;
    setTrip({ ...trip, details: arr });
  };

  const deleteDetail = (i) => {
    const arr = [...trip.details];
    arr.splice(i, 1);
    setTrip({ ...trip, details: arr });
  };

  const addDetail = () =>
    setTrip({
      ...trip,
      details: [...trip.details, { type: "memory", images: [], videos: [] }],
    });

  /* ================================
     LOGIN SCREEN
  ================================= */

  if (!isAuth) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="bg-slate-800 p-8 rounded space-y-4 w-80">
          <h2 className="text-xl font-bold text-center">Admin Login</h2>

          <input
            type="password"
            className="input w-full"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="btn-primary w-full"
            onClick={() => {
              if (password === ADMIN_PASSWORD) setIsAuth(true);
              else alert("Wrong password");
            }}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  /* ================================
     MAIN UI
  ================================= */

  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* SIDEBAR */}
      <div className="w-64 border-r border-slate-700 p-4 space-y-3">
        <button onClick={newTrip} className="btn-primary w-full">
          + New Trip
        </button>

        {trips.map((t) => (
          <div key={t.id} className="flex justify-between bg-slate-800 p-2">
            <span onClick={() => loadTrip(t.id)} className="cursor-pointer">
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

        <h2 className="text-xl font-bold">Timeline</h2>

        {trip.details.map((d, i) => (
          <TimelineItem
            key={i}
            item={d}
            index={i}
            updateItem={updateDetail}
            removeItem={deleteDetail}
          />
        ))}

        <button onClick={addDetail} className="btn-primary">
          Add Timeline Item
        </button>

        <button onClick={saveTrip} className="btn-primary w-full">
          {loading ? "Saving..." : "Save Trip"}
        </button>
      </div>
    </div>
  );
}
