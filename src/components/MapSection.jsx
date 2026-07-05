import DetailedIndiaMap from "./DetailedIndiaMap";

export default function MapSection() {
  return (
    <section className="space-y-5" id="journey-map-section">
      <div className="bg-brand-card rounded-2xl shadow-md border border-brand-border/60 overflow-hidden" id="detailed-india-map-card">
        <DetailedIndiaMap />
      </div>
      <p className="text-xs sm:text-sm text-brand-text/60 text-center max-w-3xl mx-auto">
        This map is fully local and self-contained, so it stays visible without fetching map data from GitHub or any external GeoJSON service.
      </p>
    </section>
  );
}
