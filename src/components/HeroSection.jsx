import { motion, useReducedMotion } from "motion/react";

function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const words = [
    { text: "The", from: -120, delay: 0.1 },
    { text: "Journey", from: -120, delay: 0.28 },
    { text: "Continues...", from: 120, delay: 0.46 },
  ];

  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden bg-brand-primary"
      id="homepage-hero"
    >
      <div className="absolute inset-0 -z-10">
        <picture>
          <source
            media="(max-width: 639px)"
            srcSet="https://res.cloudinary.com/dv6boe8ig/image/upload/v1783181064/Untitled_design_1_u3fvnn.png"
          />
          <img
            src="https://res.cloudinary.com/dv6boe8ig/image/upload/v1783178632/Untitled_design_rh16yx.png"
            alt="Sunlit mountain valley"
            className="h-full w-full scale-105 object-cover object-[center_38%] opacity-90 blur-[2px] sm:object-center"
            id="hero-bg-image"
            referrerPolicy="no-referrer"
          />
        </picture>
        <div className="absolute inset-0 bg-black/28" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-black/5 to-black/18" />
      </div>

      <div className="flex min-h-[100svh] items-center justify-center px-4 pb-12 pt-24 text-center sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pt-24">
        <h1
          aria-label="The Journey Continues"
          className="w-full max-w-[min(94vw,88rem)] font-serif text-[clamp(3.5rem,min(17vw,15svh),6.8rem)] font-black leading-[0.82] tracking-tight text-[#FFF8ED] drop-shadow-[0_10px_28px_rgba(0,0,0,0.65)] sm:text-[clamp(5.25rem,min(16vw,18svh),10rem)] sm:leading-[0.78] lg:text-[clamp(7rem,min(13vw,21svh),13.75rem)]"
          id="hero-main-title"
        >
          {words.map((word) => (
            <motion.span
              key={word.text}
              aria-hidden="true"
              initial={
                shouldReduceMotion ? false : { opacity: 0, x: word.from }
              }
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.85,
                delay: word.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block whitespace-nowrap"
            >
              {word.text}
            </motion.span>
          ))}
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
