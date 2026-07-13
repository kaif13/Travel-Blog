import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionHeading from "./components/SectionHeading";
import HomePage from "./components/HomePage";
import MapSection from "./components/MapSection";
import MustVisitPlaces from "./components/MustVisitPlaces";
import AboutSection from "./components/AboutSection";
import StoryCard from "./components/StoryCard";
import StoryDetail from "./components/StoryDetail";
import MemoryCard from "./components/MemoryCard";
import UpcomingTripCard from "./components/UpcomingTripCard";
import { upcomingTrips, memories } from "./data/travelData";
import travelStories from "./data/travelStories";
import { Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedStorySlug, setSelectedStorySlug] = useState(null);
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        if (hash.startsWith("story-")) {
          const id = hash.replace("story-", "");
          if (id) {
            setActiveTab("stories");
            setSelectedStorySlug(id);
          }
        } else {
          setActiveTab(
            hash === "contact" || hash === "blog" ? "stories" : hash,
          );
          setSelectedStorySlug(null);
        }
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  const navigateToTab = (tab) => {
    window.location.hash = tab;
    setActiveTab(tab);
    setSelectedStorySlug(null);
  };
  const navigateToStory = (slug) => {
    window.location.hash = `story-${slug}`;
    setActiveTab("stories");
    setSelectedStorySlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const tripStories = travelStories;
  const latestFeaturedStories = tripStories.slice(0, 3);
  const featuredMemories = memories.slice(0, 4);
  const featuredUpcoming = upcomingTrips.slice(0, 3);
  return (
    <div
      className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-accent/30 selection:text-brand-primary flex flex-col justify-between"
      id="applet-viewport"
    >
      {/* Dynamic Header & Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={navigateToTab} />
      {/* Main Page Body Frame */}
      <main className="flex-grow pt-20 pb-12 sm:pt-24 sm:pb-16" id="applet-main-content">
        <AnimatePresence mode="wait">
          {/* ==================== 1. HOME TAB ==================== */}
          {activeTab === "home" && (
            <HomePage
              featuredMemories={featuredMemories}
              featuredStories={latestFeaturedStories}
              featuredUpcoming={featuredUpcoming}
              navigateToStory={navigateToStory}
              navigateToTab={navigateToTab}
              totalStories={tripStories.length}
            />
          )}
          {/* ==================== 2. JOURNEY MAP TAB ==================== */}
          {activeTab === "map" && (
            <motion.div
              key="map-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8"
            >
              <SectionHeading
                title="The India Travel Atlas"
                subtitle="The interactive tracker mapping out states checked, targets planned, and future horizons."
                accent="Interactive Journey Map"
              />
              <MapSection
                onReadStory={navigateToStory}
                setActiveTab={navigateToTab}
              />
              <MustVisitPlaces />
            </motion.div>
          )}
          {/* ==================== 3. STORIES TAB ==================== */}
          {activeTab === "stories" && (
            <motion.div
              key="stories-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8"
            >
              {selectedStorySlug ? (
                // Detailed View of single travel story
                (() => {
                  const currentStory = tripStories.find(
                    (s) => s.slug === selectedStorySlug,
                  );
                  return currentStory ? (
                    <StoryDetail
                      story={currentStory}
                      onBack={() => {
                        window.location.hash = "stories";
                        setSelectedStorySlug(null);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    />
                  ) : (
                    <div className="text-center py-16 space-y-4">
                      <Info className="w-12 h-12 text-brand-accent mx-auto" />
                      <h4 className="font-serif text-xl font-bold">
                        Story not found
                      </h4>
                      <button
                        onClick={() => setSelectedStorySlug(null)}
                        className="text-brand-accent underline"
                      >
                        Back to all stories
                      </button>
                    </div>
                  );
                })()
              ) : (
                // Full list of stories
                <>
                  <SectionHeading
                    title="Travel Stories & Memoirs"
                    subtitle="Real trip-folder stories with short image-backed memories, road moments, mountain mornings, and human connection logs."
                    accent="The Travel Diaries"
                  />
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {tripStories.map((story) => (
                      <StoryCard
                        key={story.id}
                        story={story}
                        onReadMore={navigateToStory}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}
          {/* ==================== 4. MEMORIES TAB ==================== */}
          {activeTab === "memories" && (
            <motion.div
              key="memories-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8"
            >
              <SectionHeading
                title="The Visual Memory Album"
                subtitle="Candid snapshots and Polaroid captions capturing roadside local culinary delights, culture, and train rides."
                accent="Polaroid Gallery"
              />
              {/* Polaroid Grid */}
              <div
                className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
                id="polaroids-masonry-grid"
              >
                {memories.map((memory, index) => (
                  <MemoryCard key={memory.id} memory={memory} index={index} />
                ))}
              </div>
            </motion.div>
          )}
          {/* ==================== 5. UPCOMING TAB ==================== */}
          {activeTab === "upcoming" && (
            <motion.div
              key="upcoming-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8"
            >
              <SectionHeading
                title="Next Horizons"
                subtitle="Future expeditions waiting on the horizon, shown simply with a photo, a short description, and the reason I want to visit."
                accent="Upcoming Quest Plans"
              />
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-8">
                {upcomingTrips.map((trip) => (
                  <UpcomingTripCard key={trip.id} trip={trip} />
                ))}
              </div>
            </motion.div>
          )}
          {/* ==================== 6. ABOUT TAB ==================== */}
          {activeTab === "about" && (
            <AboutSection navigateToTab={navigateToTab} />
          )}
        </AnimatePresence>
      </main>
      {/* Styled Brand Footer */}
      <Footer setActiveTab={navigateToTab} />
    </div>
  );
}
export { App as default };
