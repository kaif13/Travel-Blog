import React from "react";
import { Archive, MapPin, Calendar } from "lucide-react";
import MemoryTimeline from "../components/MemoryTimeline";

const TripDetailPage = ({ trip, onBack }) => {
  if (!trip) return null;
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <button
        onClick={onBack}
        className="text-cyan-400 hover:text-cyan-300 mb-6 flex items-center font-semibold transition duration-200"
      >
        <Archive className="w-5 h-5 mr-2" />
        Back to All Memories
      </button>
      <div className="relative overflow-hidden rounded-xl shadow-2xl mb-8">
        <img
          src={trip.coverImage}
          alt={trip.title}
          className="w-full h-80 object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/1200x400/1E293B/94A3B8?text=Trip+Cover";
          }}
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8">
          <h1 className="text-5xl font-extrabold text-white mb-2">
            {trip.title}
          </h1>
          <p className="text-xl text-cyan-200 font-medium flex items-center">
            <MapPin className="w-5 h-5 mr-2" /> {trip.location} |{" "}
            <Calendar className="w-5 h-5 ml-3 mr-2" /> {trip.date}
          </p>
        </div>
      </div>
      <blockquote className="text-3xl italic text-center text-cyan-100 my-12 px-4 py-6 border-y-2 border-cyan-700/50 bg-slate-900/50 shadow-inner">
        "{trip.quote}"
      </blockquote>
      <h2 className="text-3xl font-bold text-gray-100 mb-6 border-b pb-2 border-cyan-800">
        Trip Timeline
      </h2>
      <MemoryTimeline details={trip.details} />
    </div>
  );
};

export default TripDetailPage;
