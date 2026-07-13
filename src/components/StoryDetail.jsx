import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowLeft,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Users,
  Heart,
  Sparkles,
  AlertCircle,
  X,
} from "lucide-react";
import { motion } from "motion/react";

function StoryDetail({ story, onBack }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const title = story.title || `My Journey to ${story.city || story.location}`;
  const placeName =
    story.location?.split(",")[0] || story.city || story.state || "this place";

  const heroImage = story.heroImage || story.image;
  const subtitle = story.subtitle || story.mood;
  const stateFood = story.stateFood || story.bestFood;
  const favoriteSpot = story.favoriteSpot || story.bestMemory;
  const travelLog = story.travelLog || story.shortDescription;
  const checkpoints = story.checkpointsVisited || story.placesVisited || [];

  const firstFeeling =
    story.firstFeeling || story.firstFeelingWhenArrived || story.arrivalFeeling;

  const foodMemory =
    story.foodMemory || story.foodIStillRemember || story.bestFoodExperience;

  const peopleMemory =
    story.peopleMet || story.peopleWhoMadeTripSpecial || story.travelPeople;

  const visitAgain =
    story.wouldVisitAgain || story.visitAgain || story.wouldIGoAgain;

  const moodTags = story.moodTags || story.tags || story.category || [];

  const memories =
    story.memories ||
    story.memoryNotes?.map((memory) => ({
      title: memory.title || memory.time,
      image: memory.image,
      caption: memory.caption || memory.text,
    })) ||
    [];

  const photoDiaryCount =
    memories.length < 10 ? 12 : Math.min(memories.length, 15);
  const photoDiaryMemories = memories.length
    ? Array.from(
        { length: photoDiaryCount },
        (_, index) => memories[index % memories.length],
      )
    : [];

  useEffect(() => {
    if (selectedPhotoIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedPhotoIndex(null);
      if (event.key === "ArrowLeft") {
        setSelectedPhotoIndex(
          (current) =>
            (current - 1 + photoDiaryMemories.length) %
            photoDiaryMemories.length,
        );
      }
      if (event.key === "ArrowRight") {
        setSelectedPhotoIndex(
          (current) => (current + 1) % photoDiaryMemories.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhotoIndex, photoDiaryMemories.length]);

  const snapshotItems = [
    { label: "Duration", value: story.tripDuration },
    { label: "Route", value: story.travelRoute },
    { label: "Weather", value: story.weather },
    { label: "Best Time", value: story.bestTimeToVisit },
    { label: "Partner", value: story.travelPartner },
    { label: "Budget", value: story.totalBudget },
  ].filter((item) => item.value);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-0 py-4 sm:px-4 sm:py-12"
      id={`story-detail-container-${story.id}`}
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="group mx-1 flex items-center gap-2 text-sm font-medium text-brand-primary hover:text-brand-accent mb-5 sm:mx-0 sm:mb-8 sm:text-base transition-colors duration-200 cursor-pointer"
        id="story-detail-back-btn"
      >
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span>Back to Stories</span>
      </button>

      {/* Hero Header */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96 md:h-[450px] mb-6 sm:rounded-3xl sm:mb-8"
        id="story-detail-hero"
      >
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          id="story-detail-hero-img"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-[#102A43]/30 to-transparent" />

        {/* Header Text Overlay */}
        <div className="absolute bottom-5 left-4 right-4 sm:bottom-10 sm:left-10 sm:right-10 text-white space-y-2">
          <div className="flex items-center gap-2 text-brand-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>
              {story.location || `${story.state}, ${story.country || "India"}`}
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-[#FFF8ED]/80 font-serif italic text-sm sm:text-lg">
            " {subtitle} "
          </p>
        </div>
      </div>

      {/* Quick Trip Metadata Bar */}
      <div
        className="grid grid-cols-2 gap-3 bg-brand-card p-4 sm:grid-cols-2 sm:gap-4 sm:p-6 md:grid-cols-4 rounded-2xl border border-brand-border/60 shadow-sm mb-6 sm:mb-8"
        id="story-detail-meta"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
            <Calendar className="w-5 h-5" />
          </div>

          <div>
            <span className="text-[10px] text-brand-text/55 font-bold uppercase block">
              Date
            </span>
            <span className="text-sm font-semibold text-brand-primary">
              {story.date}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
            <Users className="w-5 h-5" />
          </div>

          <div>
            <span className="text-[10px] text-brand-text/55 font-bold uppercase block">
              Travel Type
            </span>
            <span className="text-sm font-semibold text-brand-primary">
              {story.travelType}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
            <Heart className="w-5 h-5" />
          </div>

          <div>
            <span className="text-[10px] text-brand-text/55 font-bold uppercase block">
              State Food
            </span>
            <span
              className="text-sm font-semibold text-brand-primary truncate max-w-[120px]"
              title={stateFood}
            >
              {stateFood}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
            <Sparkles className="w-5 h-5" />
          </div>

          <div>
            <span className="text-[10px] text-brand-text/55 font-bold uppercase block">
              Favorite spot
            </span>
            <span
              className="text-sm font-semibold text-brand-primary truncate max-w-[120px]"
              title={favoriteSpot}
            >
              {favoriteSpot || "Local secret"}
            </span>
          </div>
        </div>
      </div>

      {/* Extra Snapshot Details */}
      {snapshotItems.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-brand-card p-4 sm:p-6 rounded-2xl border border-brand-border/60 shadow-sm mb-6 sm:mb-8">
          {snapshotItems.map((item) => (
            <div key={item.label}>
              <span className="text-[10px] text-brand-text/55 font-bold uppercase block">
                {item.label}
              </span>
              <span className="text-sm font-semibold text-brand-primary">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Main Content Layout */}
      <div
        className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        id="story-detail-body"
      >
        {/* Left Column: Story Text */}
        <div
          className="md:col-span-2 space-y-6 sm:space-y-8"
          id="story-detail-narrative"
        >
          {story.whyThisDestination && (
            <section className="bg-brand-card p-5 sm:p-8 rounded-2xl border border-brand-border/60 shadow-sm space-y-3">
              <h3 className="font-serif text-2xl font-bold text-brand-primary flex items-center gap-2">
                Why This Destination?
              </h3>
              <p className="text-brand-text/80 text-base leading-relaxed font-sans">
                {story.whyThisDestination}
              </p>
            </section>
          )}

          {story.howIReached && (
            <section className="bg-brand-card p-5 sm:p-8 rounded-2xl border border-brand-border/60 shadow-sm space-y-3">
              <h3 className="font-serif text-2xl font-bold text-brand-primary flex items-center gap-2">
                How I Reached
              </h3>
              <p className="text-brand-text/80 text-base leading-relaxed font-sans">
                {story.howIReached}
              </p>
            </section>
          )}

          {/* First Feeling Section */}
          {firstFeeling && (
            <section className="bg-brand-card p-5 sm:p-8 rounded-2xl border border-brand-border/60 shadow-sm space-y-3">
              <h3 className="font-serif text-2xl font-bold text-brand-primary flex items-center gap-2">
                First Feeling When I Arrived
              </h3>
              <p className="text-brand-text/80 text-base leading-relaxed font-sans">
                {firstFeeling}
              </p>
            </section>
          )}

          {/* Detailed Narrative */}
          <section className="bg-brand-card p-5 sm:p-8 rounded-2xl border border-brand-border/60 shadow-sm space-y-3">
            <h3 className="font-serif text-2xl font-bold text-brand-primary flex items-center gap-2">
              My Travel Diary
            </h3>
            <p className="text-brand-text/80 text-base leading-relaxed font-sans">
              {travelLog}
            </p>
          </section>

          {/* Food Memory */}
          {foodMemory && (
            <section className="bg-brand-card p-5 sm:p-8 rounded-2xl border border-brand-border/60 shadow-sm space-y-3">
              <h3 className="font-serif text-2xl font-bold text-brand-primary flex items-center gap-2">
                Food I Still Remember
              </h3>
              <p className="text-brand-text/80 text-base leading-relaxed font-sans">
                {foodMemory}
              </p>
            </section>
          )}

          {story.favoriteMoment && (
            <section className="bg-brand-card p-5 sm:p-8 rounded-2xl border border-brand-border/60 shadow-sm space-y-3">
              <h3 className="font-serif text-2xl font-bold text-brand-primary flex items-center gap-2">
                A Moment I Will Never Forget
              </h3>
              <p className="text-brand-text/80 text-base leading-relaxed font-sans">
                {story.favoriteMoment}
              </p>
            </section>
          )}

          {/* People Memory */}
          {peopleMemory && (
            <section className="bg-brand-card p-5 sm:p-8 rounded-2xl border border-brand-border/60 shadow-sm space-y-3">
              <h3 className="font-serif text-2xl font-bold text-brand-primary flex items-center gap-2">
                People Who Made This Trip Special
              </h3>
              <p className="text-brand-text/80 text-base leading-relaxed font-sans">
                {peopleMemory}
              </p>
            </section>
          )}

          {/* What Went Wrong */}
          {story.whatWentWrong && (
            <section className="bg-brand-card p-5 sm:p-8 rounded-2xl border border-brand-border/60 shadow-sm space-y-3">
              <h3 className="font-serif text-2xl font-bold text-brand-primary flex items-center gap-2">
                What Went Wrong?
              </h3>
              <p className="text-brand-text/80 text-base leading-relaxed font-sans">
                {story.whatWentWrong}
              </p>
            </section>
          )}

          {/* Life Lesson */}
          {(story.lifeLesson || story.lessonLearnt) && (
            <section className="bg-brand-highlight/10 p-5 sm:p-8 rounded-2xl border border-brand-highlight/20 shadow-sm space-y-3">
              <h3 className="font-serif text-2xl font-bold text-brand-highlight flex items-center gap-2">
                <Heart className="w-5 h-5 fill-current text-brand-highlight" />{" "}
                Life Lesson Shared
              </h3>
              <p className="text-brand-text/80 text-base leading-relaxed italic font-sans font-medium">
                "{story.lifeLesson || story.lessonLearnt}"
              </p>
            </section>
          )}

          {/* Would I Visit Again */}
          {visitAgain && (
            <section className="bg-brand-card p-5 sm:p-8 rounded-2xl border border-brand-border/60 shadow-sm space-y-3">
              <h3 className="font-serif text-2xl font-bold text-brand-primary flex items-center gap-2">
                Would I Visit Again?
              </h3>
              <p className="text-brand-text/80 text-base leading-relaxed font-sans">
                {visitAgain}
              </p>
            </section>
          )}
        </div>

        {/* Right Column: Mini Details, Highlights, Food & Mistakes */}
        <div className="space-y-6" id="story-detail-sidebar">
          {/* Key checkpoints */}
          {checkpoints.length > 0 && (
            <div className="bg-brand-card p-6 rounded-2xl border border-brand-border/60 shadow-sm">
              <h4 className="font-serif text-lg font-bold text-brand-primary mb-4 pb-2 border-b border-brand-border/60">
                Places I Walked Through
              </h4>

              <ul className="space-y-2">
                {checkpoints.map((place, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-brand-text/85"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-accent" />
                    <span>{place}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Short Note */}
          {story.shortNote && (
            <div className="bg-amber-50 p-6 rounded-2xl border border-brand-accent/20 shadow-sm space-y-2">
              <h4 className="font-serif text-lg font-bold text-brand-accent-dark flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Short Note
              </h4>
              <p className="text-brand-text/85 text-xs sm:text-sm leading-relaxed italic">
                "{story.shortNote}"
              </p>
            </div>
          )}

          {story.recommendations?.length > 0 && (
            <div className="bg-brand-card p-6 rounded-2xl border border-brand-border/60 shadow-sm">
              <h4 className="font-serif text-lg font-bold text-brand-primary mb-4 pb-2 border-b border-brand-border/60">
                My Honest Travel Notes
              </h4>

              <div className="space-y-3">
                {story.recommendations.map((item) => (
                  <div key={`${item.title}-${item.value}`}>
                    <span className="text-[10px] text-brand-accent-dark font-bold uppercase tracking-widest block">
                      {item.title}
                    </span>
                    <p className="text-sm text-brand-text/85 font-medium">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Photo Gallery Section */}
      {memories.length > 0 && (
        <section
          className="mt-10 pt-6 border-t border-brand-border/60 sm:mt-12 sm:pt-8"
          id="story-detail-short-memories"
        >
          <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-8">
            <h3 className="font-serif text-2xl font-bold text-brand-primary sm:text-3xl">
              Photo Diary from {placeName}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-text/65 sm:text-base">
              Tiny frames from the road, people, food, places, and moments I
              still remember.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-5">
            {photoDiaryMemories.map((memory, index) => (
              <motion.button
                type="button"
                key={`${memory.title || "memory"}-${index}`}
                onClick={() => setSelectedPhotoIndex(index)}
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-xl border border-brand-border/60 bg-brand-bg shadow-sm"
                aria-label={`Open ${memory.title || memory.caption || "travel memory"}`}
              >
                <img
                  src={memory.image}
                  alt={memory.title || memory.caption || "Travel memory"}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-2 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="line-clamp-1 text-[10px] font-bold uppercase tracking-wider text-[#FFF8ED] sm:text-xs">
                    {memory.title || memory.caption || "Travel memory"}
                  </span>
                  {memory.title && memory.caption && (
                    <p className="mt-0.5 line-clamp-1 text-[9px] text-[#FFF8ED]/75 sm:text-[10px]">
                      {memory.caption}
                    </p>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {selectedPhotoIndex !== null &&
            createPortal(
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-8"
                role="dialog"
                aria-modal="true"
                aria-label="Photo diary viewer"
                onClick={() => setSelectedPhotoIndex(null)}
              >
                <button
                  type="button"
                  onClick={() => setSelectedPhotoIndex(null)}
                  className="absolute right-3 top-3 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 sm:right-6 sm:top-6"
                  aria-label="Close photo viewer"
                >
                  <X className="h-6 w-6" />
                </button>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedPhotoIndex(
                      (selectedPhotoIndex - 1 + photoDiaryMemories.length) %
                        photoDiaryMemories.length,
                    );
                  }}
                  className="absolute left-2 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 sm:left-6"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-7 w-7" />
                </button>

                <div
                  className="flex max-h-[94vh] w-full max-w-5xl flex-col items-center"
                  onClick={(event) => event.stopPropagation()}
                >
                  <img
                    src={photoDiaryMemories[selectedPhotoIndex].image}
                    alt={
                      photoDiaryMemories[selectedPhotoIndex].title ||
                      photoDiaryMemories[selectedPhotoIndex].caption ||
                      "Travel memory"
                    }
                    className="max-h-[72vh] max-w-full rounded-lg object-contain shadow-2xl sm:max-h-[76vh]"
                    referrerPolicy="no-referrer"
                  />

                  <div className="mt-3 w-full max-w-2xl px-12 text-center text-white sm:mt-4">
                    <span className="text-xs font-bold tracking-widest text-brand-accent">
                      {selectedPhotoIndex + 1} / {photoDiaryMemories.length}
                    </span>
                    <h4 className="mt-1 font-serif text-lg font-bold sm:text-xl">
                      {photoDiaryMemories[selectedPhotoIndex].title ||
                        "Travel Memory"}
                    </h4>
                    {photoDiaryMemories[selectedPhotoIndex].caption && (
                      <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-white/75 sm:text-sm">
                        {photoDiaryMemories[selectedPhotoIndex].caption}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedPhotoIndex(
                      (selectedPhotoIndex + 1) % photoDiaryMemories.length,
                    );
                  }}
                  className="absolute right-2 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 sm:right-6"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-7 w-7" />
                </button>
              </motion.div>,
              document.body,
            )}
        </section>
      )}

      {/* Bottom Back Button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={onBack}
          className="bg-brand-primary text-[#FFF8ED] hover:bg-brand-accent hover:text-brand-primary px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Return to Travel Stories</span>
        </button>
      </div>
    </motion.div>
  );
}

export default StoryDetail;
