import React, { useEffect, useState } from "react";
import { BookOpen, Book } from "lucide-react";

/**
 * Optimized LazyImage — FAST version
 */
function LazyImage({
  src,
  alt = "",
  className = "w-full h-40",
  fallbackSrc = "https://placehold.co/300x300/1E293B/94A3B8?text=Photo",
}) {
  const [loaded, setLoaded] = useState(false);
  const [showShimmer, setShowShimmer] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setShowShimmer(false);
    setErrored(false);

    const t = setTimeout(() => {
      if (!loaded) setShowShimmer(true);
    }, 150);

    return () => clearTimeout(t);
  }, [src]);

  const finalSrc = errored ? fallbackSrc : src;

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {showShimmer && !loaded && (
        <div className="absolute inset-0 bg-gray-300 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
      )}

      <img
        src={finalSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => {
          setLoaded(true);
          setShowShimmer(false);
        }}
        onError={() => {
          setErrored(true);
          setLoaded(true);
          setShowShimmer(false);
        }}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

const MemoryTimeline = ({ details = [] }) => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="relative border-l-2 border-cyan-700/50 ml-3 md:ml-5 pl-6 md:pl-8 mt-6">
      {details.map((item, index) => {
        if (item.type === "day") {
          return (
            <div key={index} className="mb-8 relative">
              <div className="absolute -left-16 md:-left-[5.2rem] top-0 bg-cyan-600 text-white w-20 md:w-28 py-1 px-2 text-center rounded-full text-xs font-bold shadow-lg">
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
              <div className="absolute -left-6 md:-left-8 -translate-x-1/2 bg-slate-900 border-4 border-cyan-500 rounded-full p-2 shadow-xl">
                <Icon className="w-4 md:w-5 h-4 md:h-5 text-cyan-400" />
              </div>

              <div className="bg-slate-800/70 p-4 md:p-5 rounded-lg shadow-md ml-1 md:ml-2 border border-slate-700">
                <p className="text-xs md:text-sm font-semibold text-gray-400 mb-1">
                  {item.time}
                </p>

                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>

                {/* Images */}
                {item.images?.length > 0 && (
                  <div className="mt-3 md:mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {item.images.map((imgSrc, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => window.open(imgSrc, "_blank")}
                        className="w-full rounded-lg overflow-hidden"
                      >
                        <LazyImage
                          src={imgSrc}
                          alt={`Trip moment ${imgIndex + 1}`}
                          className="w-full aspect-square sm:h-40 md:h-48"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Videos */}
                {item.videos?.length > 0 && (
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
              <div className="absolute -left-6 md:-left-8 -translate-x-1/2 bg-slate-900 border-4 border-cyan-500 rounded-full p-2 shadow-xl">
                <BookOpen className="w-4 md:w-5 h-4 md:h-5 text-cyan-400" />
              </div>
              <blockquote className="italic text-sm md:text-lg text-cyan-200 border-l-4 md:border-l-8 border-cyan-500 pl-4 md:pl-6 py-2 md:py-3 bg-slate-800/90 rounded-r-lg shadow-inner ml-1 md:ml-2">
                "{item.text}"
              </blockquote>
            </div>
          );
        }
        if (item.type === "partner") {
          return (
            <div key={index} className="mb-8 md:mb-10 relative">
              {/* Icon */}
              <div className="absolute -left-6 md:-left-8 -translate-x-1/2 bg-slate-900 border-4 border-cyan-500 rounded-full p-2 shadow-xl">
                <BookOpen className="w-4 md:w-5 h-4 md:h-5 text-cyan-400" />
              </div>

              {/* Content */}
              <div className="ml-1 md:ml-2 bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-center shadow-inner">
                <p className="text-xs uppercase tracking-widest text-cyan-400/70 mb-1">
                  {item.label || "Travel Partner"}
                </p>

                <p className="text-sm md:text-base text-cyan-200 font-light tracking-wide">
                  {Array.isArray(item.names)
                    ? item.names.join(" • ")
                    : item.text}
                </p>
              </div>
            </div>
          );
        }

        if (item.type === "end") {
          return (
            <div key={index} className="mt-10 relative">
              {/* Closed book icon */}
              <div className="absolute -left-6 md:-left-8 -translate-x-1/2 top-14 bg-slate-900 border-4 border-cyan-500 rounded-full p-2 shadow-xl">
                <Book className="w-4 md:w-5 h-4 md:h-5 text-cyan-400" />
              </div>

              <div className="ml-1 md:ml-2 text-center">
                <div className="text-cyan-400 text-xl tracking-widest mb-2">
                  • • •
                </div>
                <blockquote className="italic text-sm md:text-lg text-cyan-200 text-center py-4 px-6 bg-gradient-to-r from-slate-800/40 via-slate-800/70 to-slate-800/40 rounded-xl shadow-inner ml-1 md:ml-2">
                  “{item.text}”
                </blockquote>
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default MemoryTimeline;
