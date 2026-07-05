import { motion, useReducedMotion } from "motion/react";

function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const words = [
    { text: "The", from: -64, delay: 0.08 },
    { text: "Journey", from: -64, delay: 0.26 },
    { text: "Continues...", from: 64, delay: 0.44 },
  ];

  return (
    <section
      className="relative isolate min-h-[72svh] overflow-hidden bg-black sm:min-h-[90svh]"
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
            className="h-full w-full object-cover object-center opacity-100"
            id="hero-bg-image"
            referrerPolicy="no-referrer"
          />
        </picture>
        <div className="absolute inset-0 bg-black/42" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/72 via-black/22 to-black/76" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/38 via-transparent to-black/38" />
      </div>

      <div className="flex min-h-[72svh] items-center justify-center px-4 pb-10 pt-20 text-center sm:min-h-[90svh] sm:px-6 sm:pb-14 sm:pt-24 lg:px-8">
        <h1
          aria-label="The Journey Continues"
          className="w-full max-w-[min(92vw,72rem)] font-serif text-[clamp(3.25rem,14vw,6rem)] font-black leading-[0.9] tracking-tight text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.82)] sm:text-[clamp(4.75rem,12vw,8.5rem)] sm:leading-[0.84] lg:text-[clamp(6rem,10vw,10.75rem)]"
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
                delay: word.delay,
                type: "spring",
                stiffness: 48,
                damping: 20,
                mass: 1.1,
              }}
              className="block whitespace-nowrap will-change-transform transform-gpu"
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
