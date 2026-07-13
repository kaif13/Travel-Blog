import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { motion } from "motion/react";

function MemoryCard({ memory, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const rotationDegrees =
    index % 3 === 0 ? "rotate-1" : index % 3 === 1 ? "-rotate-1" : "rotate-0.5";

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        whileHover={{
          scale: 1.03,
          rotate: 0,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: { duration: 0.2 },
        }}
        className={`group flex h-full flex-col justify-between rounded-lg border border-brand-border/40 bg-white p-2 pb-4 shadow-md transition-all duration-300 sm:p-4 sm:pb-7 ${rotationDegrees}`}
        id={`memory-card-${memory.id}`}
      >
        <div>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative block aspect-square w-full cursor-zoom-in overflow-hidden rounded border border-black/5 bg-gray-100"
            id={`memory-img-wrapper-${memory.id}`}
            aria-label={`Open ${memory.caption} image`}
          >
            <img
              src={memory.image}
              alt={memory.caption}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              id={`memory-img-${memory.id}`}
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute left-1.5 top-1.5 max-w-[calc(100%-0.75rem)] truncate rounded-md bg-brand-primary/90 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-[#FFF8ED] backdrop-blur-sm sm:left-3 sm:top-3 sm:px-2.5 sm:text-[10px]">
              {memory.location}
            </span>
          </button>

          <div className="mt-3 px-1 sm:mt-4" id={`memory-text-${memory.id}`}>
            <p className="line-clamp-3 text-center font-handwritten text-base font-semibold leading-snug text-[#102A43] transition-colors duration-200 group-hover:text-brand-accent sm:text-2xl">
              {memory.caption}
            </p>
          </div>
        </div>
      </motion.div>

      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`${memory.caption} full-screen image`}
            onClick={() => setIsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
              aria-label="Close full-screen image"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={memory.image}
              alt={memory.caption}
              className="max-h-[92vh] max-w-full object-contain"
              referrerPolicy="no-referrer"
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  );
}

export default MemoryCard;
