import { ArrowLeft, Calendar, MapPin, Users, Heart, Sparkles, AlertCircle, RefreshCw } from "lucide-react";
import { motion } from "motion/react";
function StoryDetail({ story, onBack }) {
  return <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="max-w-4xl mx-auto px-4 py-8 sm:py-12"
    id={`story-detail-container-${story.id}`}
  >{
    /* Back Button */
  }<button
    onClick={onBack}
    className="group flex items-center gap-2 text-brand-primary font-medium hover:text-brand-accent mb-6 sm:mb-8 transition-colors duration-200 cursor-pointer"
    id="story-detail-back-btn"
  ><ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /><span>Back to Stories</span></button>{
    /* Hero Header */
  }<div className="relative rounded-3xl overflow-hidden shadow-lg h-80 sm:h-96 md:h-[450px] mb-8" id="story-detail-hero"><img
    src={story.image}
    alt={`${story.city}, ${story.state}`}
    className="w-full h-full object-cover"
    referrerPolicy="no-referrer"
    id="story-detail-hero-img"
  /><div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-[#102A43]/30 to-transparent" />{
    /* Header Text Overlay */
  }<div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 text-white space-y-2"><div className="flex items-center gap-2 text-brand-accent font-semibold text-xs sm:text-sm uppercase tracking-wider"><MapPin className="w-4 h-4" /><span>{story.state}, India</span></div><h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            My Journey to {story.city}</h1><p className="text-[#FFF8ED]/80 font-serif italic text-base sm:text-lg">
            " {story.mood} "
          </p></div></div>{
    /* Quick Trip Metadata Bar */
  }<div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-brand-card p-4 sm:p-6 rounded-2xl border border-brand-border/60 shadow-sm mb-8" id="story-detail-meta"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent"><Calendar className="w-5 h-5" /></div><div><span className="text-[10px] text-brand-text/55 font-bold uppercase block">Date</span><span className="text-sm font-semibold text-brand-primary">{story.date}</span></div></div><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent"><Users className="w-5 h-5" /></div><div><span className="text-[10px] text-brand-text/55 font-bold uppercase block">Travel Type</span><span className="text-sm font-semibold text-brand-primary">{story.travelType}</span></div></div><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent"><Heart className="w-5 h-5" /></div><div><span className="text-[10px] text-brand-text/55 font-bold uppercase block">State Food</span><span className="text-sm font-semibold text-brand-primary truncate max-w-[120px]" title={story.bestFood}>{story.bestFood}</span></div></div><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent"><Sparkles className="w-5 h-5" /></div><div><span className="text-[10px] text-brand-text/55 font-bold uppercase block">Favorite spot</span><span className="text-sm font-semibold text-brand-primary truncate max-w-[120px]" title={story.bestMemory}>{story.bestMemory.split("at").pop()?.trim() || "Local secret"}</span></div></div></div>{
    /* Main Content Layout */
  }<div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="story-detail-body">{
    /* Left Column: Story Text */
  }<div className="md:col-span-2 space-y-8" id="story-detail-narrative">{
    /* Why I went */
  }<section className="bg-brand-card p-6 sm:p-8 rounded-2xl border border-brand-border/60 shadow-sm space-y-3"><h3 className="font-serif text-2xl font-bold text-brand-primary flex items-center gap-2"><span className="text-brand-accent">01.</span> Why This Destination?
            </h3><p className="text-brand-text/80 text-base leading-relaxed font-sans">{story.whyIwent}</p></section>{
    /* First feelings */
  }<section className="bg-brand-card p-6 sm:p-8 rounded-2xl border border-brand-border/60 shadow-sm space-y-3"><h3 className="font-serif text-2xl font-bold text-brand-primary flex items-center gap-2"><span className="text-brand-accent">02.</span> The First Impression
            </h3><p className="text-brand-text/80 text-base leading-relaxed font-sans">{story.firstFeeling}</p></section>{
    /* Detailed Narrative */
  }<section className="bg-brand-card p-6 sm:p-8 rounded-2xl border border-brand-border/60 shadow-sm space-y-3"><h3 className="font-serif text-2xl font-bold text-brand-primary flex items-center gap-2"><span className="text-brand-accent">03.</span> The Travel Log & Diary
            </h3><p className="text-brand-text/80 text-base leading-relaxed font-sans">{story.shortDescription}</p>{story.source !== "locationNote" && <p className="text-brand-text/80 text-base leading-relaxed font-sans pt-2">
              Every day spent here felt like unfolding a new chapter of history. From the early morning local breakfast to the quiet starry walks, we got to see the authentic pulse of local lives. We talked to tea vendors, shared stories with homestay hosts, and watched how beautifully the ancient traditions merge with the modern world. It made me realize how diverse yet deeply connected India is.
            </p>}</section>{
    /* The lesson learnt */
  }<section className="bg-brand-highlight/10 p-6 sm:p-8 rounded-2xl border border-brand-highlight/20 shadow-sm space-y-3"><h3 className="font-serif text-2xl font-bold text-brand-highlight flex items-center gap-2"><Heart className="w-5 h-5 fill-current text-brand-highlight" /> Life Lesson Shared
            </h3><p className="text-brand-text/80 text-base leading-relaxed italic font-sans font-medium">
              "{story.lessonLearnt}"
            </p></section></div>{
    /* Right Column: Mini Details, Highlights, Food & Mistakes */
  }<div className="space-y-6" id="story-detail-sidebar">{
    /* Key checkpoints */
  }<div className="bg-brand-card p-6 rounded-2xl border border-brand-border/60 shadow-sm"><h4 className="font-serif text-lg font-bold text-brand-primary mb-4 pb-2 border-b border-brand-border/60">
              Checkpoints Visited
            </h4><ul className="space-y-2">{story.placesVisited.map((place, idx) => <li key={idx} className="flex items-center gap-2 text-sm text-brand-text/85"><span className="w-2 h-2 rounded-full bg-brand-accent" /><span>{place}</span></li>)}</ul></div>{
    /* Funny mistake */
  }<div className="bg-amber-50 p-6 rounded-2xl border border-brand-accent/20 shadow-sm space-y-2"><h4 className="font-serif text-lg font-bold text-brand-accent-dark flex items-center gap-2"><AlertCircle className="w-5 h-5" /> {story.source === "locationNote" ? "Short Note" : "Travel Blooper!"}
            </h4><p className="text-brand-text/85 text-xs sm:text-sm leading-relaxed italic">
              "{story.funnyMistake}"
            </p></div>{
    /* Best Memories & Food Highlights */
  }<div className="bg-brand-card p-6 rounded-2xl border border-brand-border/60 shadow-sm space-y-4"><div><span className="text-[10px] text-brand-accent-dark font-bold uppercase tracking-widest block mb-1">BEST MEMORY</span><p className="text-xs sm:text-sm text-brand-text/85 font-medium leading-relaxed">{story.bestMemory}</p></div><div className="pt-3 border-t border-brand-border/60"><span className="text-[10px] text-brand-accent-dark font-bold uppercase tracking-widest block mb-1">{story.source === "locationNote" ? "MEMORY TYPE" : "LOCAL FOOD RECOMMENDATION"}</span><p className="text-xs sm:text-sm text-brand-text/85 font-medium leading-relaxed">{story.bestFood}</p></div></div>{
    /* Re-visit recommendation */
  }<div className="bg-brand-primary text-[#FFF8ED] p-6 rounded-2xl shadow-sm text-center space-y-3"><RefreshCw className="w-8 h-8 text-brand-accent mx-auto animate-spin-slow" /><h4 className="font-serif text-lg font-bold">Would I visit again?</h4><p className="text-[#FFF8ED]/85 text-xs sm:text-sm">{story.visitAgain ? "Absolutely! A hundred times over. This place has left a small piece of itself in my soul." : "It was a beautiful one-time chapter, but the road calls to new, unexplored states!"}</p></div></div></div>{
    /* Photo Gallery Section */
  }{story.memoryNotes && story.memoryNotes.length > 0 && <section className="mt-12 pt-8 border-t border-brand-border/60" id="story-detail-short-memories"><h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary text-center mb-8">
            Short Memories from {story.city}</h3><div className="grid grid-cols-1 sm:grid-cols-2 gap-6">{story.memoryNotes.map((memory, index) => <motion.div
    key={`${memory.time}-${index}`}
    whileHover={{ y: -4, scale: 1.01 }}
    className="bg-brand-card rounded-2xl overflow-hidden shadow-sm border border-brand-border/60"
  ><div className="h-56 overflow-hidden bg-brand-bg"><img
    src={memory.image}
    alt={memory.text}
    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    referrerPolicy="no-referrer"
  /></div><div className="p-5"><span className="text-[10px] text-brand-accent-dark font-bold uppercase tracking-widest">{memory.time}</span><p className="text-sm text-brand-text/85 leading-relaxed mt-2 line-clamp-4">{memory.text}</p></div></motion.div>)}</div></section>}{
    /* Photo Gallery Section */
  }{story.gallery && story.gallery.length > 0 && <section className="mt-12 pt-8 border-t border-brand-border/60" id="story-detail-gallery"><h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary text-center mb-8">
            Memories Captured in {story.city}</h3><div className="grid grid-cols-1 sm:grid-cols-3 gap-6">{story.gallery.map((img, index) => <motion.div
    key={index}
    whileHover={{ rotate: index % 2 === 0 ? 1 : -1, scale: 1.02 }}
    className="bg-white p-3 pb-8 rounded-lg shadow-md border border-brand-border/40 rotate-1 group cursor-pointer"
    id={`story-detail-gallery-polaroid-${index}`}
  ><div className="overflow-hidden rounded h-64 mb-3"><img
    src={img}
    alt={`Gallery ${index}`}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    referrerPolicy="no-referrer"
  /></div><p className="font-handwritten text-xl text-center text-brand-primary/85 font-medium leading-none">{index === 0 ? "Breathtaking Views" : index === 1 ? "The Vibe check!" : "Smiles all around"}</p></motion.div>)}</div></section>}{
    /* Bottom Back Button */
  }<div className="flex justify-center mt-12"><button
    onClick={onBack}
    className="bg-brand-primary text-[#FFF8ED] hover:bg-brand-accent hover:text-brand-primary px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer"
  ><ArrowLeft className="w-5 h-5" /><span>Return to Travel Stories</span></button></div></motion.div>;
}
export {
  StoryDetail as default
};
