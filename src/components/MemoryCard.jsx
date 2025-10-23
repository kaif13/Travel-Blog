import React from "react";
import { MapPin, Calendar, BookOpen, Archive } from "lucide-react";

const MemoryCard = ({ trip, onSelectTrip }) => {
  const isUpcoming = trip.status === "upcoming";

  return (
    <div
      className={`bg-slate-800/50 backdrop-blur-md border border-slate-700 shadow-xl rounded-xl overflow-hidden transform transition-all duration-300 ${
        isUpcoming
          ? "cursor-not-allowed"
          : "hover:scale-[1.03] hover:shadow-cyan-500/30 cursor-pointer group"
      }`}
      onClick={() => !isUpcoming && onSelectTrip(trip.id)}
    >
      <div className={`relative ${isUpcoming ? "filter grayscale" : ""}`}>
        <img
          src={trip.coverImage}
          alt={trip.title}
          className="w-full h-48 object-cover transition duration-300 ease-in-out group-hover:opacity-90"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x400/1E293B/94A3B8?text=Image+Not+Found";
          }}
        />
        {isUpcoming && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-xl font-bold tracking-widest">
              UPCOMING
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-100 mb-2">{trip.title}</h3>
        <p className="text-sm text-gray-400 flex items-center mb-4">
          <MapPin className="w-4 h-4 mr-2 text-red-400" /> {trip.location} |{" "}
          <Calendar className="w-4 h-4 ml-3 mr-2 text-blue-400" /> {trip.date}
        </p>
        <blockquote className="italic text-gray-300 border-l-4 border-cyan-400 pl-4 py-1 my-3">
          "{trip.quote}"
        </blockquote>
        <button
          disabled={isUpcoming}
          className="mt-4 w-full text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed bg-cyan-600 hover:bg-cyan-700"
        >
          {isUpcoming ? "Coming Soon..." : "Explore Journey"}
        </button>
      </div>
    </div>
  );
};

export default MemoryCard;
