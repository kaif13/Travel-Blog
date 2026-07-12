import { MapPin, Calendar, Heart } from "lucide-react";
import { motion } from "motion/react";
function MemoryCard({ memory, index }) {
  const rotationDegrees = index % 3 === 0 ? "rotate-1" : index % 3 === 1 ? "-rotate-1" : "rotate-0.5";
  return <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 15 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    whileHover={{
      scale: 1.03,
      rotate: 0,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 }
    }}
    className={`bg-white p-3 pb-6 sm:p-4 sm:pb-7 rounded-lg shadow-md border border-brand-border/40 ${rotationDegrees} transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between`}
    id={`memory-card-${memory.id}`}
  ><div>{
    /* Memory Photo */
  }<div className="relative aspect-square overflow-hidden rounded bg-gray-100 border border-black/5" id={`memory-img-wrapper-${memory.id}`}><img
    src={memory.image}
    alt={memory.caption}
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    referrerPolicy="no-referrer"
    id={`memory-img-${memory.id}`}
  /><div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />{
    /* Category overlay */
  }<span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-brand-primary/90 backdrop-blur-sm text-[#FFF8ED] text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase">{memory.category}</span>{
    /* Mood tag overlay */
  }<span className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-brand-accent/90 backdrop-blur-sm text-brand-primary text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm"><Heart className="w-2.5 h-2.5 fill-current" />{memory.mood}</span></div>{
    /* Polaroid caption text */
  }<div className="mt-4 px-1" id={`memory-text-${memory.id}`}><p className="font-handwritten text-xl sm:text-2xl text-[#102A43] leading-snug font-semibold text-center line-clamp-3 group-hover:text-brand-accent transition-colors duration-200">{memory.caption}</p></div></div>{
    /* Polaroid Footer */
  }<div className="mt-4 pt-3 border-t border-dashed border-gray-200 flex flex-wrap items-center justify-between gap-2 text-xs text-brand-text/60 px-1 font-sans"><div className="min-w-0 flex items-center gap-1 font-medium text-brand-primary/80"><MapPin className="w-3.5 h-3.5 shrink-0 text-brand-accent" /><span className="truncate max-w-[160px] sm:max-w-[130px]">{memory.location}</span></div><div className="flex shrink-0 items-center gap-1 font-medium"><Calendar className="w-3.5 h-3.5" /><span>{memory.date}</span></div></div></motion.div>;
}
export {
  MemoryCard as default
};
