import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
function Navbar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled((current) => {
          const shouldBeScrolled = current
            ? window.scrollY > 8
            : window.scrollY > 40;
          return current === shouldBeScrolled ? current : shouldBeScrolled;
        });
        ticking = false;
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    { id: "home", label: "Home" },
    { id: "map", label: "Journey Map" },
    { id: "stories", label: "Travel Stories" },
    { id: "memories", label: "Memories" },
    { id: "upcoming", label: "Upcoming Trips" },
    { id: "about", label: "About Me" },
  ];
  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${scrolled ? "bg-[#FFF8ED]/95 backdrop-blur-md shadow-md border-[#E5E7EB]" : "bg-[#FFF8ED]/35 backdrop-blur-sm border-transparent"}`}
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo / Brand */}
          <div
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 cursor-pointer group"
            id="nav-logo"
          >
            <div>
              <span className="font-serif text-lg sm:text-2xl font-bold text-brand-primary tracking-tight block">
                Kaif<span className="text-brand-accent">Travel</span>Blog
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-brand-accent-dark font-medium -mt-1 block flex items-center gap-1">
                One Dream <Heart className="w-2.5 h-2.5 fill-current" /> Every
                State
              </span>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center space-x-1"
            id="nav-desktop-menu"
          >
            {navItems.map((item) => {
              const isActive =
                activeTab === item.id ||
                (item.id === "stories" && activeTab.startsWith("story-"));
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${isActive ? "text-brand-accent font-semibold" : "text-brand-primary/80 hover:text-brand-accent"}`}
                  id={`nav-item-${item.id}`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-accent"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-primary hover:text-brand-accent focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#FFF8ED] border-b border-brand-border/60 shadow-lg"
            id="nav-mobile-dropdown"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navItems.map((item) => {
                const isActive =
                  activeTab === item.id ||
                  (item.id === "stories" && activeTab.startsWith("story-"));
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${isActive ? "bg-brand-accent/10 text-brand-accent-dark font-semibold border-l-4 border-brand-accent" : "text-brand-primary hover:bg-brand-accent/5 hover:text-brand-accent"}`}
                    id={`nav-mobile-item-${item.id}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
export { Navbar as default };
