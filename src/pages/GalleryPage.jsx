import React from "react";
import { GALLERY_IMAGES } from "../data/galleryImages";

const GalleryPage = () => (
  <div className="animate-in fade-in duration-500 px-2 sm:px-4 md:px-6">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-cyan-300 mb-8 sm:mb-10 md:mb-12 tracking-wider text-center">
      Photo Gallery
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5 md:gap-8 p-2 sm:p-3 md:p-4">
      {GALLERY_IMAGES.map((image, index) => (
        <div
          key={index}
          className="bg-white p-2 pb-7 sm:pb-8 md:pb-9 rounded-md shadow-lg
                     transform transition-transform duration-300
                     hover:scale-105 md:hover:scale-110
                     hover:rotate-0 hover:z-10
                     odd:rotate-[-1deg] sm:odd:rotate-[-2deg]
                     even:rotate-[1deg] sm:even:rotate-[2deg]
                     relative"
        >
          <img
            src={image.src}
            alt={image.caption}
            className="w-full aspect-square sm:aspect-[4/5] md:aspect-[3/4] object-cover border border-gray-200"
          />

          <p className="text-center text-xs sm:text-sm md:text-base text-gray-700 mt-2 font-semibold absolute bottom-2 left-0 right-0 px-1">
            {image.caption}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default GalleryPage;
