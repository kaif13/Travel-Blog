import { Calendar, MapPin, Sparkles, Users } from "lucide-react";
import { motion } from "motion/react";

function UpcomingTripCard({ trip }) {
  const title = trip.destination.split("(")[0].trim();
  const subtitle = trip.destination.match(/\(([^)]+)\)/)?.[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="bg-brand-card rounded-2xl overflow-hidden shadow-md border border-brand-border/60 h-full group"
      id={`upcoming-trip-${trip.id}`}
    >
      <div className="relative h-64 overflow-hidden" id={`upcoming-image-container-${trip.id}`}>
        <img
          src={trip.image}
          alt={trip.destination}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
          id={`upcoming-img-${trip.id}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="bg-brand-accent text-brand-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-brand-accent shadow-sm">
            {trip.status}
          </span>
        </div>
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <div className="flex items-center gap-1.5 text-xs text-brand-accent font-semibold mb-1 uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5" />
            <span>{trip.expectedMonth}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h3>
          {subtitle && <p className="text-xs text-[#FFF8ED]/80 italic mt-1">{subtitle}</p>}
        </div>
      </div>

      <div className="p-6 space-y-5" id={`upcoming-details-${trip.id}`}>
        <div className="flex flex-wrap items-center gap-3 text-xs text-brand-text/75 font-medium pb-3 border-b border-brand-border/40">
          <div className="flex items-center gap-1 text-brand-primary">
            <MapPin className="w-3.5 h-3.5 text-brand-accent" />
            <span>{trip.state}</span>
          </div>
          <span className="text-brand-border">•</span>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-brand-accent" />
            <span>{trip.travelType}</span>
          </div>
        </div>

        <div>
          <span className="text-[10px] font-bold text-brand-accent-dark uppercase tracking-widest block mb-1">
            Short description
          </span>
          <p className="text-brand-text/80 text-sm leading-relaxed">{trip.reason}</p>
        </div>

        <div className="bg-[#FFF8ED] p-4 rounded-xl border border-brand-accent/15 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] font-bold text-brand-accent-dark uppercase tracking-widest block mb-1">
              Why visit
            </span>
            <p className="text-brand-text/90 text-sm italic font-medium">"{trip.dreamMoment}"</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default UpcomingTripCard;
