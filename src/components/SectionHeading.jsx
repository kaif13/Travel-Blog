import { Compass } from "lucide-react";
function SectionHeading({ title, subtitle, accent, id }) {
  return <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4" id={id || "section-heading"}>{accent && <span className="text-xs font-bold uppercase tracking-widest text-brand-accent-dark block mb-2">{accent}</span>}<h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary tracking-tight relative inline-block mb-4">{title}<span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-accent rounded-full" /></h2><div className="flex items-center justify-center gap-2 text-brand-accent/60 my-3"><span className="w-12 h-px bg-current" /><Compass className="w-4 h-4 animate-spin-slow" /><span className="w-12 h-px bg-current" /></div><p className="text-brand-text/75 text-base sm:text-lg font-sans">{subtitle}</p></div>;
}
export {
  SectionHeading as default
};
