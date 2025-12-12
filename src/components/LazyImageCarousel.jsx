// LazyImageCarousel.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Props:
 * - images: array of image URLs (required)
 * - className: tailwind classes for outer container (e.g. "w-full h-80")
 * - spinnerDelay: ms before showing shimmer (default 150)
 * - fallbackSrc: optional fallback image URL shown on error
 */
export default function LazyImageCarousel({
  images = [],
  className = "",
  spinnerDelay = 150,
  fallbackSrc = null,
  imgAlt = (i) => `carousel-${i}`,
}) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [showShimmer, setShowShimmer] = useState(false);
  const [errored, setErrored] = useState(false);

  const imgRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    // reset on image change
    setLoaded(false);
    setErrored(false);
    setShowShimmer(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // if images array empty -> no need to show shimmer
    if (!images || images.length === 0) {
      return;
    }

    // If image element already loaded from cache, mark loaded immediately
    const imgEl = imgRef.current;
    if (imgEl && imgEl.complete && imgEl.naturalWidth !== 0) {
      setLoaded(true);
      setShowShimmer(false);
      return;
    }

    // show shimmer only after spinnerDelay
    timerRef.current = setTimeout(() => setShowShimmer(true), spinnerDelay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [index, images, spinnerDelay]);

  function handleLoad() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setLoaded(true);
    setShowShimmer(false);
    setErrored(false);
  }

  function handleError() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setErrored(true);
    setLoaded(true); // treat as loaded so shimmer hides
    setShowShimmer(false);
  }

  // basic prev/next (kept simple)
  function prev() {
    if (!images || images.length === 0) return;
    setIndex((p) => (p - 1 + images.length) % images.length);
  }
  function next() {
    if (!images || images.length === 0) return;
    setIndex((p) => (p + 1) % images.length);
  }

  // If no images, show a friendly placeholder box
  if (!images || images.length === 0) {
    return (
      <div
        className={`relative w-full h-64 flex items-center justify-center bg-gray-200 text-gray-600 ${className}`}
      >
        No image
      </div>
    );
  }

  const currentSrc = errored && fallbackSrc ? fallbackSrc : images[index];

  return (
    <div className={`relative w-full ${className}`}>
      {/* Ensure container has visible height even if parent forgot to set it:
          parent can still override via className like h-80 */}
      <div className="w-full h-full min-h-[12rem] relative overflow-hidden rounded-lg bg-gray-200">
        {/* Shimmer placeholder */}
        {showShimmer && !loaded && (
          <div className="absolute inset-0 bg-gray-300 overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
        )}

        {/* Actual image (or fallback) */}
        <img
          ref={imgRef}
          src={currentSrc}
          alt={typeof imgAlt === "function" ? imgAlt(index) : imgAlt}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: "translateZ(0)" }} // sometimes helps rendering
        />
      </div>

      {/* Controls (small) */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full shadow hover:bg-white"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full shadow hover:bg-white"
      >
        ›
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
