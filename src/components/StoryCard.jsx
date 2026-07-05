import { MapPin, Users, Heart } from "lucide-react";
import { motion } from "motion/react";
function StoryCard({ story, onReadMore }) {
  const image = story.heroImage || story.image;
  const city = story.title?.replace(/^My Journey to\s+/i, "") || story.city || story.location;
  const subtitle = story.subtitle || story.mood;
  const description = story.travelLog || story.shortDescription;
  const food = story.stateFood || story.bestFood;

  return <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="bg-brand-card rounded-2xl overflow-hidden shadow-md border border-brand-border/60 flex flex-col h-full group"
    id={`story-card-${story.id}`}
  >{
    /* Card Image with Hover Zoom */
  }<div className="relative h-56 sm:h-64 overflow-hidden" id={`story-img-container-${story.id}`}><img
    src={image}
    alt={story.title || `${city}, ${story.state}`}
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    referrerPolicy="no-referrer"
    id={`story-img-${story.id}`}
  /><div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />{
    /* Category / Travel Type Badge */
  }<div className="absolute top-4 left-4 flex gap-2"><span className="bg-brand-accent text-brand-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1"><Users className="w-3.5 h-3.5" />{story.travelType}</span><span className="bg-[#FFF8ED]/95 backdrop-blur-sm text-brand-accent-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">{story.date}</span></div>{
    /* State and City Overlays */
  }<div className="absolute bottom-4 left-4 right-4 text-white"><div className="flex items-center gap-1 text-[#FFF8ED]/90 text-xs font-semibold uppercase tracking-wider mb-0.5"><MapPin className="w-3.5 h-3.5 text-brand-accent" />{story.state}</div><h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-brand-accent transition-colors duration-200">{city}</h3></div></div>{
    /* Card Content */
  }<div className="p-6 flex-grow flex flex-col justify-between" id={`story-body-${story.id}`}><div className="space-y-3">{
    /* Mood Badge */
  }<div className="flex items-center gap-1.5 text-xs text-brand-accent-dark font-semibold bg-brand-accent/10 px-2.5 py-1 rounded-md w-fit"><Heart className="w-3 h-3 fill-current" /><span>Mood: {subtitle}</span></div><p className="text-brand-text/80 text-sm leading-relaxed line-clamp-3">{description}</p></div>{
    /* Bottom Metadata & Button */
  }<div className="pt-5 mt-5 border-t border-brand-border/40 flex items-center justify-between"><div className="text-xs text-brand-text/60"><span className="font-semibold text-brand-primary block">Best Food</span><span className="line-clamp-1">{food}</span></div><button
    onClick={() => onReadMore(story.slug || story.id)}
    className="text-xs font-bold text-brand-accent hover:text-brand-accent-dark hover:underline flex items-center gap-1 cursor-pointer transition-all duration-200"
    id={`story-btn-${story.id}`}
  >
            Read Story →
          </button></div></div></motion.div>;
}
export {
  StoryCard as default
};
