import { useState, useEffect } from "react";

/**
 Props:
  - src: image URL
  - alt: alt text
  - className: optional wrapper classes (Tailwind)
  - slideCount: number of placeholder slides (default 3)
  - slideInterval: ms between slides (default 1200)
*/
export default function LazyImageCarousel({
  src,
  alt = "",
  className = "w-full h-full",
  slideCount = 3,
  slideInterval = 1200,
}) {
  const [loaded, setLoaded] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (!loaded) {
      const t = setInterval(() => {
        setSlideIndex((i) => (i + 1) % slideCount);
      }, slideInterval);
      return () => clearInterval(t);
    }
  }, [loaded, slideCount, slideInterval]);

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {/* Placeholder Carousel (uses only default Tailwind classes) */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          {[...Array(slideCount)].map((_, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                i === slideIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              aria-hidden="true"
            >
              {/* skeleton card */}
              <div className="w-[90%] h-[90%] rounded-lg bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse shadow-sm" />
            </div>
          ))}
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)} /* if image fails, hide placeholder */
      />
    </div>
  );
}
