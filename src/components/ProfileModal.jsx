import React from "react";
import { X } from "lucide-react";

import PROFILE_IMAGE_URL from "../assets/kaif.jpg";

const ProfileModal = ({ onClose }) => (
  <div
    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={onClose}
  >
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <img
        src={PROFILE_IMAGE_URL}
        alt="Profile Full"
        className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl object-contain"
      />
      <button
        onClick={onClose}
        className="absolute -top-4 -right-4 bg-white text-black rounded-full p-1 shadow-lg"
      >
        <X size={24} />
      </button>
    </div>
  </div>
);

export default ProfileModal;
