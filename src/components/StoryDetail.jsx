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

      {/* Mood Tags */}
      {/* {moodTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {moodTags.map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="bg-brand-card text-brand-accent-dark border border-brand-accent/20 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )} */}

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
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary text-center mb-8">
            Moments I Still Carry from {placeName}
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

export default StoryDetail;
