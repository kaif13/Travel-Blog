import React from "react";
import { GALLERY_IMAGES } from "../data/galleryImages";

const GalleryPage = () => (
  <div className="animate-in fade-in duration-500">
    <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-300 mb-12 tracking-wider text-center">
      Photo Gallery
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8 p-4">
      {GALLERY_IMAGES.map((image, index) => (
        <div
          key={index}
          className="bg-white p-2 pb-8 rounded-md shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-0 hover:z-10 odd:rotate-[-2deg] even:rotate-[2deg] relative"
        >
          <img
            src={image.src}
            alt={image.caption}
            className="w-full h-auto object-cover border border-gray-200"
          />
          <p className="text-center text-sm text-gray-700 mt-2 font-semibold absolute bottom-2 left-0 right-0">
            {image.caption}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default GalleryPage;
