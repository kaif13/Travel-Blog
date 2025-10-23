import React from "react";
import { BookOpen } from "lucide-react";

const MemoryTimeline = ({ details }) => {
  return (
    <div className="relative border-l-2 border-cyan-700/50 ml-3 md:ml-5 pl-6 md:pl-8 mt-6">
      {details.map((item, index) => {
        if (item.type === "day") {
          return (
            <div key={index} className="mb-8 relative">
              <div className="absolute -left-16 md:-left-[5.2rem] top-0 bg-cyan-600 text-white w-20 md:w-28 py-1 px-2 text-center rounded-full text-xs md:text-xs font-bold shadow-lg">
                DAY {item.day}
              </div>
              <h4 className="text-lg md:text-2xl font-bold text-gray-100 pt-1 mb-3 ml-12 md:ml-14">
                {item.title}
              </h4>
            </div>
          );
        }

        if (item.type === "memory") {
          const Icon = item.icon || BookOpen;
          return (
            <div key={index} className="mb-8 md:mb-10 relative">
              <div className="absolute -left-6 md:-left-8 transform -translate-x-1/2 bg-slate-900 border-4 border-cyan-500 rounded-full p-2 shadow-xl">
                <Icon className="w-4 md:w-5 h-4 md:h-5 text-cyan-400" />
              </div>

              <div className="bg-slate-800/70 p-4 md:p-5 rounded-lg shadow-md ml-1 md:ml-2 border border-slate-700">
                <p className="text-xs md:text-sm font-semibold text-gray-400 mb-1">
                  {item.time}
                </p>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>

                {/* 📸 Images Section */}
                {item.images && item.images.length > 0 && (
                  <div className="mt-3 md:mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {item.images.map((imgSrc, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={imgSrc}
                        alt={`Trip moment ${imgIndex + 1}`}
                        className="rounded-lg object-cover w-full h-40 sm:h-48 shadow-inner"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://placehold.co/300x300/1E293B/94A3B8?text=Photo";
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* 🎥 Videos Section - auto play + loop + muted */}
                {item.videos && item.videos.length > 0 && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.videos.map((videoSrc, vidIndex) => (
                      <video
                        key={vidIndex}
                        src={videoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="rounded-lg w-full h-52 sm:h-64 object-cover border border-slate-700 shadow-md"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        }

        if (item.type === "quote") {
          return (
            <div key={index} className="mb-8 md:mb-10 relative">
              <div className="absolute -left-8 md:-left-10 transform -translate-x-1/2 bg-slate-900 border-4 border-cyan-500 rounded-full p-2 shadow-xl">
                <BookOpen className="w-4 md:w-5 h-4 md:h-5 text-cyan-400" />
              </div>
              <blockquote className="italic text-sm md:text-lg text-cyan-200 border-l-4 md:border-l-8 border-cyan-500 pl-4 md:pl-6 py-2 md:py-3 bg-slate-800/90 rounded-r-lg shadow-inner ml-1 md:ml-2">
                "{item.text}"
              </blockquote>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default MemoryTimeline;
