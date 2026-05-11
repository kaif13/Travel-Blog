import React, { memo } from "react";
import { X } from "lucide-react";

const ImageGalleryModal = memo(({ images, onClose }) => {
  if (!images || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 rounded-lg p-4 shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-auto relative animate-modalScale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button inside the box */}
        <div className="flex justify-end mb-2">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-900 rounded-full p-1 hover:bg-gray-300 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="rounded-md object-cover w-full h-24 sm:h-28 cursor-pointer"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/300x300/1E293B/94A3B8?text=Photo";
              }}
            />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes modalScale {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-modalScale {
            animation: modalScale 0.2s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
});

ImageGalleryModal.displayName = "ImageGalleryModal";
export default ImageGalleryModal;
