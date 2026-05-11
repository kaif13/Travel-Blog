import React, { useState, useCallback, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";

import Navbar from "./components/Navbar";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const TripDetailPage = lazy(() => import("./pages/TripDetailPage"));
const AboutMePage = lazy(() => import("./pages/AboutMePage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const ProfileModal = lazy(() => import("./components/ProfileModal"));

/* ✅ CHANGED: Import from separate trip files */
import tripsData from "./data/trips/tripsData.js";

/* ==============================
LOADING FALLBACK
============================== */

function PageFallback() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
  );
}

/* ==============================
TRIP DETAIL WRAPPER
Reads ID from URL
============================== */

function TripPage({ trips, onBack }) {
  const { id } = useParams();
  const trip = trips.find((t) => t.id === id);
  return <TripDetailPage trip={trip} onBack={onBack} />;
}

/* ==============================
APP CONTENT
============================== */

const AppContent = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  /* ✅ TRIPS STATE FROM SEPARATE FILES */
  const navigate = useNavigate();

  /* ========================= */

  const handleSelectTrip = useCallback(
    (id) => {
      navigate(`/trip/${id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [navigate],
  );

  const handleBackToHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleShowGallery = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  const handleShowAbout = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const handleProfileClick = useCallback(() => {
    setIsProfileModalOpen(true);
  }, []);

  const handleProfileClose = useCallback(() => {
    setIsProfileModalOpen(false);
  }, []);

  /* ========================= */

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
        <Suspense fallback={null}>
          <ProfileModal onClose={handleProfileClose} />
        </Suspense>
      )}

      <main className="max-w-6xl mx-auto bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-6 md:p-12 rounded-lg shadow-2xl">
        <Navbar
          onShowGallery={handleShowGallery}
          onShowHome={handleBackToHome}
          onProfileClick={handleProfileClick}
          onShowAbout={handleShowAbout}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<PageFallback />}>
                <HomePage trips={tripsData} onSelectTrip={handleSelectTrip} />
              </Suspense>
            }
          />

          <Route
            path="/gallery"
            element={
              <Suspense fallback={<PageFallback />}>
                <GalleryPage />
              </Suspense>
            }
          />

          {/* ✅ FIXED TRIP ROUTE */}
          <Route
            path="/trip/:id"
            element={
              <Suspense fallback={<PageFallback />}>
                <TripPage trips={tripsData} onBack={handleBackToHome} />
              </Suspense>
            }
          />

          <Route
            path="/about"
            element={
              <Suspense fallback={<PageFallback />}>
                <AboutMePage onBack={handleBackToHome} />
              </Suspense>
            }
          />

          <Route
            path="/admin"
            element={
              <Suspense fallback={<PageFallback />}>
                <AdminPage />
              </Suspense>
            }
          />
        </Routes>
      </main>

      <footer className="mt-14 text-gray-400 text-sm">
        <div className="relative flex flex-col items-center">
          {/* Responsive Back Button */}

          {/* Centered Footer Content */}
          <div className="flex flex-col items-center gap-2">
            <h1 className="tracking-wide text-base">
              The Journey Blog · A Personal Travel Journal
            </h1>
            <p className="text-sm text-gray-500">
              Crafted with memories by
              <span className="text-cyan-400 font-medium"> Mohammad Kaif</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* ==============================
APP ROOT
============================== */

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
