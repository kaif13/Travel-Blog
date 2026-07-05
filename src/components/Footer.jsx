import { BookOpen, Compass, Heart, MapPin } from "lucide-react";

function Footer({ setActiveTab }) {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "map", label: "Journey Map" },
    { id: "stories", label: "Travel Stories" },
    { id: "memories", label: "Visual Gallery" },
    { id: "upcoming", label: "Upcoming Trips" },
    { id: "about", label: "My Mission" },
  ];

  const navigate = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-brand-primary text-[#FFF8ED] pt-16 pb-8 border-t border-brand-accent/20"
      id="main-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4" id="footer-brand">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("home")}
            >
              <span className="font-serif text-2xl font-bold tracking-tight">
                Kaif<span className="text-brand-accent">Travel</span>Blog
              </span>
            </div>
            <p className="text-[#FFF8ED]/75 text-sm leading-relaxed max-w-sm">
              One dream. Every Indian state. A lifetime of memories before
              marriage. Documenting my emotional and adventurous travel journey
              to explore all 28 states and 8 Union Territories of India.
            </p>
            <div
              className="flex items-center gap-2 text-brand-accent text-sm font-medium"
              id="footer-stats-badge"
            >
              <MapPin className="w-4 h-4" />
              <span>Current Milestone: 5 / 28 States Explored</span>
            </div>
          </div>

          <div className="space-y-4" id="footer-links">
            <h3 className="font-serif text-lg font-semibold text-brand-accent tracking-wide">
              Explore the Journey
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-[#FFF8ED]/80">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => navigate(link.id)}
                    className="hover:text-brand-accent hover:underline transition-all duration-200 text-left py-1 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4" id="footer-trip-stories">
            <h3 className="font-serif text-lg font-semibold text-brand-accent tracking-wide">
              Travel Stories
            </h3>
            <p className="text-[#FFF8ED]/75 text-sm leading-relaxed">
              Browse full travel stories plus the shorter photo-backed memories
              from the trip folder.
            </p>
            <button
              onClick={() => navigate("stories")}
              className="inline-flex items-center gap-2 bg-[#FFF8ED]/10 hover:bg-brand-accent hover:text-brand-primary text-[#FFF8ED] px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Open Stories</span>
            </button>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-[#FFF8ED]/15 text-center text-xs text-[#FFF8ED]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {currentYear} KaifTravelBlog. Made with pride and passion in
            India.
          </p>
          <p className="flex items-center gap-1">
            Chasing sunset dreams before wedding bells{" "}
            <Heart className="w-3.5 h-3.5 text-brand-accent fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
