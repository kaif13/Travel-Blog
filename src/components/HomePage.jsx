import {
  ChevronRight,
} from "lucide-react";
import { motion } from "motion/react";
import HeroSection from "./HeroSection";
import JourneyStats from "./JourneyStats";
import MapSection from "./MapSection";
import MemoryCard from "./MemoryCard";
import StoryCard from "./StoryCard";
import UpcomingTripCard from "./UpcomingTripCard";

const SectionIntro = ({ eyebrow, title, text, actionLabel, onAction }) => (
  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div className="max-w-2xl">
      <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-accent-dark">
        {eyebrow}
      </span>
      <h2 className="mt-2 font-serif text-2xl font-bold leading-tight tracking-tight text-brand-primary sm:text-4xl">
        {title}
      </h2>
      {text && (
        <p className="mt-3 text-sm leading-7 text-brand-text/70 sm:text-base">
          {text}
        </p>
      )}
    </div>
    {actionLabel && (
      <button
        onClick={onAction}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-accent/30 bg-white px-4 py-2.5 text-sm font-bold text-brand-primary shadow-sm transition hover:-translate-y-0.5 hover:border-brand-accent hover:text-brand-accent-dark sm:px-5"
      >
        <span>{actionLabel}</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    )}
  </div>
);

function HomePage({
  featuredMemories,
  featuredStories,
  featuredUpcoming,
  navigateToStory,
  navigateToTab,
  totalStories,
}) {
  return (
    <motion.div
      key="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <HeroSection />

      <section className="py-12 sm:py-20" id="journey-progress-anchor">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-10">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-accent-dark">
                Progress Log
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight text-brand-primary sm:text-5xl">
                A cleaner count of where the road has taken me.
              </h2>
              <p className="mt-5 text-base leading-8 text-brand-text/75">
                A focused checkpoint view of visited states, explored cities,
                captured photos, and the bigger goal of exploring India state by
                state.
              </p>
            </div>
            <JourneyStats />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20" id="home-map-preview-sec">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Visual Atlas"
            title="My Journey Map Overview"
            text="The same interactive India map, framed simply so the visited-state colors and location markers stay the main focus."
            actionLabel="Open full map"
            onAction={() => navigateToTab("map")}
          />
          <div className="mt-8">
            <MapSection
              onReadStory={navigateToStory}
              setActiveTab={navigateToTab}
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20" id="home-stories-sec">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Travel Chronicles"
            title="Latest Diary Logs"
            text="Short location stories from places that already became part of the travel notebook."
            actionLabel={`Read all ${totalStories} logs`}
            onAction={() => navigateToTab("stories")}
          />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featuredStories.map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                onReadMore={navigateToStory}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7efe1] py-12 sm:py-20" id="home-memories-sec">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Camera Rolls"
            title="Memory Frames"
            text="A quick photo wall from the gallery, keeping only short captions and real travel images."
            actionLabel="View photo catalog"
            onAction={() => navigateToTab("memories")}
          />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {featuredMemories.map((memory, index) => (
              <MemoryCard key={memory.id} memory={memory} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20" id="home-upcoming-sec">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Next Destinations"
            title="Upcoming Places On My Mind"
            text="Simple future trip cards with one image, a short description, and the reason each place is calling."
            actionLabel="View upcoming trips"
            onAction={() => navigateToTab("upcoming")}
          />
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {featuredUpcoming.map((trip) => (
              <UpcomingTripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default HomePage;
