import React from "react";
import MemoryCard from "../components/MemoryCard";

const HomePage = ({ trips, onSelectTrip, userId }) => (
  <div>
    <div className="text-center mb-12 p-8 bg-slate-900/30 rounded-xl shadow-inner border border-slate-700">
      <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-300 mb-4 tracking-wider">
        The Journey Continues...
      </h1>
      <p className="text-xl md:text-2xl italic text-gray-300">
        "Memories are treasures that time cannot steal."
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {trips.map((trip) => (
        <MemoryCard key={trip.id} trip={trip} onSelectTrip={onSelectTrip} />
      ))}
    </div>
  </div>
);

export default HomePage;
