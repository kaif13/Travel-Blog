import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ProfileModal from "./components/ProfileModal";

import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import TripDetailPage from "./pages/TripDetailPage";
import AboutMePage from "./pages/AboutMePage";
import AdminPage from "./pages/AdminPage";

import { MOCK_TRIPS } from "./data/trips";

// ✅ Internal wrapper to use navigate inside Router
const AppContent = () => {
  const [userId] = useState("mock-user-001");
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [trips] = useState(MOCK_TRIPS);
  const [selectedTripId, setSelectedTripId] = useState(null);

  const navigate = useNavigate();

  const handleSelectTrip = (id) => {
    setSelectedTripId(id);
    navigate(`/trip/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setSelectedTripId(null);
    navigate("/");
  };

  const currentTrip = trips.find((t) => t.id === selectedTripId);

  return (
    <div className="min-h-screen text-gray-200 p-4 md:p-8 font-sans bg-slate-900">
      <style>
        {`
          body {
            background-image: url('https://images.unsplash.com/photo-1590915901311-1e2538b7899e?q=80&w=1974&auto-format&fit=crop');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
          }
        `}
      </style>

      {isProfileModalOpen && (
        <ProfileModal onClose={() => setIsProfileModalOpen(false)} />
      )}

      <main className="max-w-6xl mx-auto bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-6 md:p-12 rounded-lg shadow-2xl">
        <Navbar
          onShowGallery={() => navigate("/gallery")}
          onShowHome={handleBackToHome}
          onProfileClick={() => setIsProfileModalOpen(true)}
          onShowAbout={() => navigate("/about")}
        />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                trips={trips}
                onSelectTrip={handleSelectTrip}
                userId={userId}
              />
            }
          />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route
            path="/trip/:id"
            element={
              <TripDetailPage trip={currentTrip} onBack={handleBackToHome} />
            }
          />
          <Route
            path="/about"
            element={<AboutMePage onBack={handleBackToHome} />}
          />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>

      <footer className="mt-14 text-center text-gray-400 text-sm">
        <div className="flex flex-col items-center gap-2">
          <h1 className="tracking-wide">
            The Journey Blog · A Personal Travel Journal
          </h1>
          <p className="text-xs text-gray-500">
            Crafted with memories by{" "}
            <span className="text-cyan-400 font-medium">Mohammad Kaif</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
