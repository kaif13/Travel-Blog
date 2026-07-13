import DetailedIndiaMap from "./DetailedIndiaMap";

export default function MapSection() {
  return (
    <section className="space-y-5" id="journey-map-section">
      <div
        className="bg-brand-card rounded-2xl shadow-md border border-brand-border/60 overflow-hidden"
        id="detailed-india-map-card"
      >
        <DetailedIndiaMap />
      </div>
    </section>
  );
}
