import { Coffee, Quote, Sun } from "lucide-react";
import { motion } from "motion/react";

function AboutSection({ navigateToTab }) {
  return (
    <motion.div
      key="about-page"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-3 sm:px-4"
      id="about-me-manifesto-view"
    >
      {/*  */}

      <div className="bg-brand-card p-5 sm:p-12 rounded-2xl sm:rounded-3xl border border-brand-border/60 shadow-md space-y-7 sm:space-y-8 font-sans leading-relaxed text-brand-text">
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 pb-7 sm:pb-8 border-b border-brand-border/60">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 ring-4 ring-brand-accent/30 shadow-md">
            <img
              src="https://res.cloudinary.com/dv6boe8ig/image/upload/v1771916168/IMG_E9633_2.JPG_rtx2lt.jpg"
              alt="Kaif - The Wandering Soul"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary">
              Hello, I'm Mohammad Kaif
            </h3>
            <p className="text-brand-accent-dark font-semibold text-sm uppercase tracking-wider">
              Dreamer • Traveller • Frontend Developer • Freelancer
            </p>
            <p className="text-brand-text/75 text-sm">
              Currently living in India, chasing sunsets, packing bags, and
              recording stories.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-primary mb-3 flex items-center gap-2">
              <Sun className="w-5 h-5 text-brand-accent" />
              The Origin of My Ultimate Travel Dream
            </h4>

            <p className="text-brand-text/85 text-sm sm:text-base">
              Some dreams are born from happiness. Some dreams are born from
              pain. My dream to travel across India came from both.
            </p>

            <p className="text-brand-text/85 text-sm sm:text-base pt-3">
              There was someone I loved very, very deeply. In my heart, I truly
              wanted to marry her. I had imagined a future, a life, and a story
              with her. But sometimes life does not move according to our plans.
              Some things are written differently by Allah, and I believe
              whatever Allah chooses is always better for me, even when my heart
              does not understand it immediately.
            </p>

            <p className="text-brand-text/85 text-sm sm:text-base pt-3">
              That chapter changed me. Instead of letting that pain break me, I
              decided to turn it into a journey. I made a promise to myself:
              before I step into marriage, I want to explore every state of
              India.
            </p>
          </div>

          <div className="bg-[#FFF8ED] p-6 rounded-2xl border border-brand-accent/15">
            <h5 className="font-serif text-lg font-bold text-brand-accent-dark mb-2 flex items-center gap-1.5">
              <Quote className="w-5 h-5" />
              The Core Philosophy
            </h5>
            <p className="text-brand-text/90 text-sm italic font-medium">
              "Pain gave me the reason. Travel gave me the direction. Allah gave
              me the patience. This journey is not about escaping life; it is
              about becoming stronger, softer, wiser, and more grateful with
              every road I walk."
            </p>
          </div>

          <p className="text-brand-text/85 text-sm sm:text-base pt-3">
            I want to meet new people, see new places, taste new food,
            understand different cultures, and collect memories that make my
            heart stronger. For me, travel is not just about visiting famous
            places or clicking photos. It is about healing, learning, growing,
            and discovering who I am outside of my comfort zone.
          </p>

          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-primary mb-3 flex items-center gap-2">
              <Coffee className="w-5 h-5 text-brand-accent" />
              What Memories Do I Gather?
            </h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-brand-text/80">
              <li className="flex items-start gap-2.5 bg-brand-bg p-3 rounded-xl border border-brand-border/40">
                <span className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0" />
                <span>
                  <strong>Roadside Chai & Food:</strong> Small stalls, local
                  dishes, simple meals, and the kind of food memories no luxury
                  restaurant can replace.
                </span>
              </li>

              <li className="flex items-start gap-2.5 bg-brand-bg p-3 rounded-xl border border-brand-border/40">
                <span className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0" />
                <span>
                  <strong>People & Conversations:</strong> Strangers,
                  travellers, locals, drivers, shopkeepers, and people whose
                  stories stay in the heart.
                </span>
              </li>

              <li className="flex items-start gap-2.5 bg-brand-bg p-3 rounded-xl border border-brand-border/40">
                <span className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0" />
                <span>
                  <strong>Nature & Silence:</strong> Mountains, rain, rivers,
                  old streets, sunsets, beaches, forests, and peaceful moments
                  where I can understand myself better.
                </span>
              </li>

              <li className="flex items-start gap-2.5 bg-brand-bg p-3 rounded-xl border border-brand-border/40">
                <span className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0" />
                <span>
                  <strong>Deeper Self-Discovery:</strong> Learning patience from
                  delays, courage from solo roads, gratitude from small moments,
                  and strength from pain.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-brand-border/60 text-center">
          <p className="font-handwritten text-2xl text-brand-accent-dark font-bold">
            "This is my Safarnama — a healing journey, a personal promise, and a
            dream before marriage."
          </p>

          <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <button
              onClick={() => navigateToTab("map")}
              className="bg-brand-primary text-white hover:bg-brand-accent hover:text-brand-primary px-6 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer"
            >
              Explore Active Map
            </button>

            <button
              onClick={() => navigateToTab("stories")}
              className="bg-brand-accent text-brand-primary hover:bg-brand-accent-dark hover:text-[#FFF8ED] px-6 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer"
            >
              Read Travel Stories
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutSection;
