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
import { Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const locationStories = [
  {
    id: "kashmir",
    source: "locationNote",
    state: "Kashmir",
    city: "Kashmir",
    status: "visited",
    date: "January 2026",
    travelType: "Friends",
    mood: "Snowy & Dreamlike",
    bestFood: "Kahwa, warm snacks, and roadside chai",
    bestMemory: "The first close view of snowy mountains after a long, tiring journey.",
    image: "https://as1.ftcdn.net/v2/jpg/08/11/21/58/1000_F_811215833_3LzM3KM2oRNS2zuIP4sQCpGHqZabrJUW.jpg",
    shortDescription: "Kashmir felt like a slow white dream: cold roads, quiet water, snow in the distance, and friends laughing through every delay.",
    whyIwent: "I wanted to see the kind of winter that makes everything pause for a moment. Kashmir had always lived in my imagination as snow, silence, and soft mountain light.",
    firstFeeling: "The first feeling was disbelief. Even the cold felt beautiful because every turn of the road opened into another frame worth remembering.",
    placesVisited: ["Srinagar", "Dal Lake", "Sonamarg", "Gulmarg", "Pahalgam"],
    funnyMistake: "The plan looked simple on paper, but Kashmir teaches you quickly that weather, roads, and timing have their own personality.",
    lessonLearnt: "Some places do not need loud adventure. They stay with you because they make you quiet inside.",
    gallery: [
      "https://as1.ftcdn.net/v2/jpg/08/11/21/58/1000_F_811215833_3LzM3KM2oRNS2zuIP4sQCpGHqZabrJUW.jpg",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=900",
    ],
    memoryNotes: [
      { time: "Snow roads", text: "The mountains looked unreal from the road, like the whole day had been painted in white and blue.", image: "https://as1.ftcdn.net/v2/jpg/08/11/21/58/1000_F_811215833_3LzM3KM2oRNS2zuIP4sQCpGHqZabrJUW.jpg" },
      { time: "Lake calm", text: "A quiet moment near the water made the whole trip feel softer after the rush of travel.", image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=900" },
    ],
    visitAgain: true,
  },
  {
    id: "nainital",
    source: "locationNote",
    state: "Uttarakhand",
    city: "Nainital",
    status: "visited",
    date: "May 2025",
    travelType: "Friends",
    mood: "Peaceful & Breezy",
    bestFood: "Maggie, tea, and hill-station snacks",
    bestMemory: "Watching the lake sit quietly between the hills while the evening slowed down.",
    image: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1767075171/Nainitaal-Bg_fckfb8.avif",
    shortDescription: "Nainital was calm in the best way: lake reflections, small roads, cool wind, and the feeling that time had stopped moving too fast.",
    whyIwent: "I wanted a hill trip that felt easy on the heart. Nainital had that simple charm of water, hills, and slow walks.",
    firstFeeling: "The lake gave the first impression: quiet, open, and gentle. It felt like a place where even tired thoughts could sit down and rest.",
    placesVisited: ["Naini Lake", "Snow View Point", "Bhimtal", "Cave Garden", "Naina Peak"],
    funnyMistake: "Hill roads always look shorter on maps. In real life, every turn asks for patience and one more tea break.",
    lessonLearnt: "Peace is sometimes just a lake, a cool breeze, and no hurry to be anywhere else.",
    gallery: [
      "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1767075171/Nainitaal-Bg_fckfb8.avif",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=900",
    ],
    memoryNotes: [
      { time: "Lake evening", text: "The lake held the hills like a mirror, and everything around it felt quiet without trying.", image: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1767075171/Nainitaal-Bg_fckfb8.avif" },
      { time: "Hill roads", text: "The best part was not one spot, but the little roads, snack stops, and sudden views between places.", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=900" },
    ],
    visitAgain: true,
  },
  {
    id: "rajgir",
    source: "locationNote",
    state: "Bihar",
    city: "Rajgir",
    status: "visited",
    date: "January 2026",
    travelType: "Friends",
    mood: "Ancient & Calm",
    bestFood: "Simple local food after long walks",
    bestMemory: "Walking between old hills and feeling how quietly history lives there.",
    image: "https://media.istockphoto.com/id/2175930297/photo/scattered-votive-stupas-at-number-3-temple-of-nalanda-university-archeological-ruins-site.webp?a=1&b=1&s=612x612&w=0&k=20&c=6p-sTXMbhxx0_3eDt1W9ka_iYaJ2L2Ocl8i1rpgZWIM=",
    shortDescription: "Rajgir felt different from a normal tourist stop. It was slower, older, and quieter, with hills that seemed to keep their stories private.",
    whyIwent: "I wanted to see a place where history, faith, and landscape meet without noise. Rajgir felt like the right kind of old-world pause.",
    firstFeeling: "The first feeling was stillness. Not empty stillness, but the kind that makes you look around more carefully.",
    placesVisited: ["Rajgir Hills", "Nalanda Ruins", "Vishwa Shanti Stupa", "Hot Springs", "Local viewpoints"],
    funnyMistake: "We expected a small casual visit, but Rajgir has a way of stretching time. Every path made us stop longer than planned.",
    lessonLearnt: "Old places do not shout. They wait for you to slow down enough to hear them.",
    gallery: [
      "https://media.istockphoto.com/id/2175930297/photo/scattered-votive-stupas-at-number-3-temple-of-nalanda-university-archeological-ruins-site.webp?a=1&b=1&s=612x612&w=0&k=20&c=6p-sTXMbhxx0_3eDt1W9ka_iYaJ2L2Ocl8i1rpgZWIM=",
      "https://images.unsplash.com/photo-1627894485200-8ef2a1ef2f2b?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&q=80&w=900",
    ],
    memoryNotes: [
      { time: "Old stones", text: "The ruins did not feel empty. They felt like pages of a book left open under the sun.", image: "https://media.istockphoto.com/id/2175930297/photo/scattered-votive-stupas-at-number-3-temple-of-nalanda-university-archeological-ruins-site.webp?a=1&b=1&s=612x612&w=0&k=20&c=6p-sTXMbhxx0_3eDt1W9ka_iYaJ2L2Ocl8i1rpgZWIM=" },
      { time: "Quiet hills", text: "Rajgir's hills made the day feel peaceful, like the place was asking everyone to speak softly.", image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&q=80&w=900" },
    ],
    visitAgain: true,
  },
  {
    id: "jibhi",
    source: "locationNote",
    state: "Himachal Pradesh",
    city: "Jibhi",
    status: "visited",
    date: "April 2026",
    travelType: "Friends",
    mood: "Forest Calm",
    bestFood: "Mountain snacks, tea, and homestay food",
    bestMemory: "The sound of flowing water following us through the valley.",
    image: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1772706921/best-time-to-visit_qg2c92.avif",
    shortDescription: "Jibhi was all forest air, wooden homes, narrow paths, and that rare feeling of being far from the rush without feeling lost.",
    whyIwent: "I wanted a mountain place that was quieter than the usual crowd. Jibhi sounded like the kind of valley where small moments become the trip.",
    firstFeeling: "The first feeling was freshness: cold air, green slopes, and the steady sound of water somewhere nearby.",
    placesVisited: ["Jibhi Valley", "Mini Thailand", "Jalori Pass", "Chaini Kothi", "Forest trails"],
    funnyMistake: "Mountain weather kept changing the mood of the day, and our plans had to learn how to bend with it.",
    lessonLearnt: "The best mountain memories are often small: a warm cup, a narrow trail, and friends walking without checking the time.",
    gallery: [
      "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1772706921/best-time-to-visit_qg2c92.avif",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&q=80&w=900",
    ],
    memoryNotes: [
      { time: "Forest path", text: "The trees made every walk feel slower and better, as if the valley had its own quiet rhythm.", image: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1772706921/best-time-to-visit_qg2c92.avif" },
      { time: "Mountain pause", text: "A simple stop for tea felt bigger than planned because the view did half the talking.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=900" },
    ],
    visitAgain: true,
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedStoryId, setSelectedStoryId] = useState(null);
  const [selectedMemoryCategory, setSelectedMemoryCategory] = useState("All");
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        if (hash.startsWith("story-")) {
          const id = hash.replace("story-", "");
          if (id) {
            setActiveTab("stories");
            setSelectedStoryId(id);
          }
        } else {
          setActiveTab(hash === "contact" || hash === "blog" ? "stories" : hash);
          setSelectedStoryId(null);
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
    setSelectedStoryId(null);
  };
  const navigateToStory = (id) => {
    window.location.hash = `story-${id}`;
    setActiveTab("stories");
    setSelectedStoryId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const tripStories = locationStories;
  const latestFeaturedStories = tripStories.slice(0, 3);
  const featuredMemories = memories.slice(0, 4);
  const featuredUpcoming = upcomingTrips.slice(0, 3);
  const memoryCategories = ["All", ...new Set(memories.map((memory) => memory.category))];
  const filteredMemories = selectedMemoryCategory === "All" ? memories : memories.filter((m) => m.category === selectedMemoryCategory);
  return <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-accent/30 selection:text-brand-primary flex flex-col justify-between" id="applet-viewport">{
    /* Dynamic Header & Navigation */
  }<Navbar activeTab={activeTab} setActiveTab={navigateToTab} />{
    /* Main Page Body Frame */
  }<main className="flex-grow pt-24 pb-16" id="applet-main-content"><AnimatePresence mode="wait">{
    /* ==================== 1. HOME TAB ==================== */
  }{activeTab === "home" && <HomePage
    featuredMemories={featuredMemories}
    featuredStories={latestFeaturedStories}
    featuredUpcoming={featuredUpcoming}
    navigateToStory={navigateToStory}
    navigateToTab={navigateToTab}
    totalStories={tripStories.length}
  />}{
    /* ==================== 2. JOURNEY MAP TAB ==================== */
  }{activeTab === "map" && <motion.div
    key="map-page"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  ><SectionHeading
    title="The India Travel Atlas"
    subtitle="The interactive tracker mapping out states checked, targets planned, and future horizons."
    accent="Interactive Journey Map"
  /><MapSection onReadStory={navigateToStory} setActiveTab={navigateToTab} /><MustVisitPlaces /></motion.div>}{
    /* ==================== 3. STORIES TAB ==================== */
  }{activeTab === "stories" && <motion.div
    key="stories-page"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  >{selectedStoryId ? (
    // Detailed View of single travel story
    (() => {
      const currentStory = tripStories.find((s) => s.id === selectedStoryId);
      return currentStory ? <StoryDetail
        story={currentStory}
        onBack={() => {
          window.location.hash = "stories";
          setSelectedStoryId(null);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      /> : <div className="text-center py-16 space-y-4"><Info className="w-12 h-12 text-brand-accent mx-auto" /><h4 className="font-serif text-xl font-bold">Story not found</h4><button onClick={() => setSelectedStoryId(null)} className="text-brand-accent underline">
                        Back to all stories
                      </button></div>;
    })()
  ) : (
    // Full list of stories
    <><SectionHeading
      title="Travel Stories & Memoirs"
      subtitle="Real trip-folder stories with short image-backed memories, road moments, mountain mornings, and human connection logs."
      accent="The Travel Diaries"
    /><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{tripStories.map((story) => <StoryCard key={story.id} story={story} onReadMore={navigateToStory} />)}</div></>
  )}</motion.div>}{
    /* ==================== 4. MEMORIES TAB ==================== */
  }{activeTab === "memories" && <motion.div
    key="memories-page"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  ><SectionHeading
    title="The Visual Memory Album"
    subtitle="Candid snapshots and Polaroid captions capturing roadside local culinary delights, culture, and train rides."
    accent="Polaroid Gallery"
  />{
    /* Filtering Menu */
  }<div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto" id="memories-category-filters">{memoryCategories.map((cat) => <button
    key={cat}
    onClick={() => setSelectedMemoryCategory(cat)}
    className={`px-4 py-2 text-xs sm:text-sm rounded-full border transition-all duration-200 cursor-pointer font-medium ${selectedMemoryCategory === cat ? "bg-brand-primary text-white border-brand-primary font-semibold shadow-sm" : "bg-white text-brand-primary border-brand-border hover:bg-brand-accent/10"}`}
  >{cat}</button>)}</div>{
    /* Polaroid Grid */
  }<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="polaroids-masonry-grid">{filteredMemories.map((memory, index) => <MemoryCard key={memory.id} memory={memory} index={index} />)}</div></motion.div>}{
    /* ==================== 5. UPCOMING TAB ==================== */
  }{activeTab === "upcoming" && <motion.div
    key="upcoming-page"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  ><SectionHeading
    title="Next Horizons"
    subtitle="Future expeditions waiting on the horizon, shown simply with a photo, a short description, and the reason I want to visit."
    accent="Upcoming Quest Plans"
  /><div className="grid grid-cols-1 xl:grid-cols-2 gap-8">{upcomingTrips.map((trip) => <UpcomingTripCard key={trip.id} trip={trip} />)}</div></motion.div>}{
    /* ==================== 6. ABOUT TAB ==================== */
  }{activeTab === "about" && <AboutSection navigateToTab={navigateToTab} />}</AnimatePresence></main>{
    /* Styled Brand Footer */
  }<Footer setActiveTab={navigateToTab} /></div>;
}
export {
  App as default
};

