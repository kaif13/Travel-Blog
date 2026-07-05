import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Heart,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import { motion } from "motion/react";
function StoryDetail({ story, onBack }) {
  const title = story.title || `My Journey to ${story.city || story.location}`;
  const placeName =
    story.location?.split(",")[0] || story.city || story.state || "this place";
  const heroImage = story.heroImage || story.image;
  const subtitle = story.subtitle || story.mood;
  const stateFood = story.stateFood || story.bestFood;
  const favoriteSpot = story.favoriteSpot || story.bestMemory;
  const travelLog = story.travelLog || story.shortDescription;
  const checkpoints = story.checkpointsVisited || story.placesVisited || [];
  const memories =
    story.memories ||
    story.memoryNotes?.map((memory) => ({
      title: memory.title || memory.time,
      image: memory.image,
      caption: memory.caption || memory.text,
    })) ||
    [];
  const snapshotItems = [
    { label: "Duration", value: story.tripDuration },
    { label: "Route", value: story.travelRoute },
    { label: "Weather", value: story.weather },
    { label: "Best Time", value: story.bestTimeToVisit },
    { label: "Partner", value: story.travelPartner },
  ].filter((item) => item.value);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-8 sm:py-12"
      id={`story-detail-container-${story.id}`}
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="group flex items-center gap-2 text-brand-primary font-medium hover:text-brand-accent mb-6 sm:mb-8 transition-colors duration-200 cursor-pointer"
        id="story-detail-back-btn"
      >
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span>Back to Stories</span>
      </button>
      {/* Hero Header */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-lg h-80 sm:h-96 md:h-[450px] mb-8"
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
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 text-white space-y-2">
          <div className="flex items-center gap-2 text-brand-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>{story.location || `${story.state}, ${story.country || "India"}`}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-[#FFF8ED]/80 font-serif italic text-base sm:text-lg">
            " {subtitle} "
          </p>
        </div>
      </div>
      {/* Quick Trip Metadata Bar */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-brand-card p-4 sm:p-6 rounded-2xl border border-brand-border/60 shadow-sm mb-8"
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
      {snapshotItems.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-brand-card p-4 sm:p-6 rounded-2xl border border-brand-border/60 shadow-sm mb-8">
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
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        id="story-detail-body"
      >
        {/* Left Column: Story Text */}
        <div className="md:col-span-2 space-y-8" id="story-detail-narrative">
          {story.whyThisDestination && (
            <section className="bg-brand-card p-6 sm:p-8 rounded-2xl border border-brand-border/60 shadow-sm space-y-3">
              <h3 className="font-serif text-2xl font-bold text-brand-primary flex items-center gap-2">
                Why This Destination?
              </h3>
              <p className="text-brand-text/80 text-base leading-relaxed font-sans">
                {story.whyThisDestination}
              </p>
            </section>
          )}

          {story.howIReached && (
            <section className="bg-brand-card p-6 sm:p-8 rounded-2xl border border-brand-border/60 shadow-sm space-y-3">
              <h3 className="font-serif text-2xl font-bold text-brand-primary flex items-center gap-2">
                How I Reached
              </h3>
              <p className="text-brand-text/80 text-base leading-relaxed font-sans">
                {story.howIReached}
              </p>
            </section>
          )}

          {/* Detailed Narrative */}
          <section className="bg-brand-card p-6 sm:p-8 rounded-2xl border border-brand-border/60 shadow-sm space-y-3">
            <h3 className="font-serif text-2xl font-bold text-brand-primary flex items-center gap-2">
              The Travel Log & Diary
            </h3>
            <p className="text-brand-text/80 text-base leading-relaxed font-sans">
              {travelLog}
            </p>
          </section>
          {story.favoriteMoment && (
            <section className="bg-brand-card p-6 sm:p-8 rounded-2xl border border-brand-border/60 shadow-sm space-y-3">
              <h3 className="font-serif text-2xl font-bold text-brand-primary flex items-center gap-2">
                Favorite Moment
              </h3>
              <p className="text-brand-text/80 text-base leading-relaxed font-sans">
                {story.favoriteMoment}
              </p>
            </section>
          )}
          {/* The lesson learnt */}
          {story.whatWentWrong && (
            <section className="bg-brand-card p-6 sm:p-8 rounded-2xl border border-brand-border/60 shadow-sm space-y-3">
              <h3 className="font-serif text-2xl font-bold text-brand-primary flex items-center gap-2">
                What Went Wrong?
              </h3>
              <p className="text-brand-text/80 text-base leading-relaxed font-sans">
                {story.whatWentWrong}
              </p>
            </section>
          )}

          {(story.lifeLesson || story.lessonLearnt) && <section className="bg-brand-highlight/10 p-6 sm:p-8 rounded-2xl border border-brand-highlight/20 shadow-sm space-y-3">
            <h3 className="font-serif text-2xl font-bold text-brand-highlight flex items-center gap-2">
              <Heart className="w-5 h-5 fill-current text-brand-highlight" />{" "}
              Life Lesson Shared
            </h3>
            <p className="text-brand-text/80 text-base leading-relaxed italic font-sans font-medium">
              "{story.lifeLesson || story.lessonLearnt}"
            </p>
          </section>}
        </div>
        {/* Right Column: Mini Details, Highlights, Food & Mistakes */}
        <div className="space-y-6" id="story-detail-sidebar">
          {/* Key checkpoints */}
          {checkpoints.length > 0 && <div className="bg-brand-card p-6 rounded-2xl border border-brand-border/60 shadow-sm">
            <h4 className="font-serif text-lg font-bold text-brand-primary mb-4 pb-2 border-b border-brand-border/60">
              Checkpoints Visited
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
          </div>}
          {/* Funny mistake */}
          {(story.shortNote || story.whatWentWrong) && <div className="bg-amber-50 p-6 rounded-2xl border border-brand-accent/20 shadow-sm space-y-2">
            <h4 className="font-serif text-lg font-bold text-brand-accent-dark flex items-center gap-2">
              <AlertCircle className="w-5 h-5" /> Short Note
            </h4>
            <p className="text-brand-text/85 text-xs sm:text-sm leading-relaxed italic">
              "{story.shortNote || story.whatWentWrong}"
            </p>
          </div>}
          {story.recommendations?.length > 0 && (
            <div className="bg-brand-card p-6 rounded-2xl border border-brand-border/60 shadow-sm">
              <h4 className="font-serif text-lg font-bold text-brand-primary mb-4 pb-2 border-b border-brand-border/60">
                Recommendations
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
          className="mt-12 pt-8 border-t border-brand-border/60"
          id="story-detail-short-memories"
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary text-center mb-8">
            Short Memories from {placeName}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {memories.map((memory, index) => (
              <motion.div
                key={`${memory.title}-${index}`}
                whileHover={{ y: -4, scale: 1.01 }}
                className="bg-brand-card rounded-2xl overflow-hidden shadow-sm border border-brand-border/60"
              >
                <div className="h-56 overflow-hidden bg-brand-bg">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] text-brand-accent-dark font-bold uppercase tracking-widest">
                    {memory.title}
                  </span>
                  <p className="text-sm text-brand-text/85 leading-relaxed mt-2 line-clamp-4">
                    {memory.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
export { StoryDetail as default };
