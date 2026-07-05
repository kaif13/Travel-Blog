import { MapPin, Star } from "lucide-react";
import { motion } from "motion/react";

const MUST_VISIT_PLACES = [
  {
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=900",
    note: "A must-see symbol of love, marble craft, and sunrise magic in Agra.",
  },
  {
    name: "Dal Lake",
    state: "Kashmir",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=900",
    note: "Calm water, shikaras, mountain air, and one of India's softest travel moods.",
  },
  {
    name: "Amer Fort",
    state: "Rajasthan",
    image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&q=80&w=900",
    note: "Royal courtyards, hilltop views, and the warm sandstone soul of Jaipur.",
  },
  {
    name: "Varanasi Ghats",
    state: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0db?auto=format&fit=crop&q=80&w=900",
    note: "Ancient river steps where sunrise, prayer, and human stories meet every day.",
  },
  {
    name: "Hampi",
    state: "Karnataka",
    image: "https://images.unsplash.com/photo-1600100397608-f010e42fa023?auto=format&fit=crop&q=80&w=900",
    note: "Boulder hills, temple ruins, and one of India's most cinematic heritage landscapes.",
  },
  {
    name: "Alleppey Backwaters",
    state: "Kerala",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=900",
    note: "Slow houseboat days, coconut palms, and water lanes that feel peaceful by design.",
  },
  {
    name: "Living Root Bridges",
    state: "Meghalaya",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=900",
    note: "Rainforest trails, green silence, and bridges grown patiently by hand and nature.",
  },
  {
    name: "Pangong Lake",
    state: "Ladakh",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=900",
    note: "Blue high-altitude water framed by bare mountains and big open sky.",
  },
  {
    name: "Golden Temple",
    state: "Punjab",
    image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&q=80&w=900",
    note: "A glowing spiritual landmark where devotion, service, and calm water meet in Amritsar.",
  },
  {
    name: "Mysore Palace",
    state: "Karnataka",
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=80&w=900",
    note: "Grand royal halls, evening lights, and one of India's most elegant palace experiences.",
  },
  {
    name: "Rann of Kutch",
    state: "Gujarat",
    image: "https://images.unsplash.com/photo-1580746738099-9b2a45b3d1f0?auto=format&fit=crop&q=80&w=900",
    note: "Endless white salt desert, folk culture, and surreal moonlit winter landscapes.",
  },
  {
    name: "Munnar Tea Gardens",
    state: "Kerala",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=900",
    note: "Rolling green tea hills, misty mornings, and slow roads through the Western Ghats.",
  },
  {
    name: "Konark Sun Temple",
    state: "Odisha",
    image: "https://images.unsplash.com/photo-1627894485200-8ef2a1ef2f2b?auto=format&fit=crop&q=80&w=900",
    note: "A stone chariot of history, sculpture, and coastal temple architecture.",
  },
  {
    name: "Gateway of India",
    state: "Maharashtra",
    image: "https://images.unsplash.com/photo-1562979314-bee7453e911c?auto=format&fit=crop&q=80&w=900",
    note: "Mumbai's classic waterfront icon, best enjoyed with sea breeze and city energy.",
  },
  {
    name: "Valley of Flowers",
    state: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=900",
    note: "A Himalayan trail filled with alpine flowers, clouds, and monsoon color.",
  },
  {
    name: "Kaziranga National Park",
    state: "Assam",
    image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&q=80&w=900",
    note: "Grasslands, wildlife safaris, and the famous one-horned rhinoceros of Assam.",
  },
  {
    name: "Charminar",
    state: "Telangana",
    image: "https://images.unsplash.com/photo-1623006772851-a8bf2c47d304?auto=format&fit=crop&q=80&w=900",
    note: "Hyderabad's old-city landmark, surrounded by bazaars, food, and heritage streets.",
  },
  {
    name: "Mahabalipuram",
    state: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=900",
    note: "Sea-facing stone temples, ancient carvings, and a beautiful coastal heritage walk.",
  },
  {
    name: "Darjeeling",
    state: "West Bengal",
    image: "https://images.unsplash.com/photo-1544634076-a90160ddf6e8?auto=format&fit=crop&q=80&w=900",
    note: "Tea estates, toy train charm, and Kanchenjunga views on clear mornings.",
  },
  {
    name: "Rishikesh",
    state: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=900",
    note: "Riverbanks, evening aarti, suspension bridges, and adventure by the Ganga.",
  },
];

function MustVisitPlaces() {
  return (
    <section className="mt-14 sm:mt-16" id="india-must-visit-places">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent-dark block">
            India Bucket List
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-primary mt-1">
            Famous Must-Visit Places
          </h3>
        </div>
        <p className="text-sm text-brand-text/70 max-w-xl leading-relaxed">
          A quick visual list of iconic places across India that deserve a pin on every travel map.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {MUST_VISIT_PLACES.map((place, index) => (
          <motion.article
            key={place.name}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            whileHover={{ y: -6 }}
            className="bg-brand-card rounded-2xl overflow-hidden border border-brand-border/60 shadow-sm group"
          >
            <div className="relative h-48 overflow-hidden bg-brand-bg">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-brand-accent">
                  <MapPin className="w-3.5 h-3.5" />
                  {place.state}
                </div>
                <h4 className="font-serif text-2xl font-bold leading-tight mt-1">{place.name}</h4>
              </div>
            </div>
            <div className="p-5 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-accent-dark bg-brand-accent/10 px-2.5 py-1 rounded-md">
                <Star className="w-3 h-3 fill-current" />
                Must Visit
              </div>
              <p className="text-sm text-brand-text/80 leading-relaxed">{place.note}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default MustVisitPlaces;
