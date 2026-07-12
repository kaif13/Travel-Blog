import { useState, useRef, useCallback } from "react";
import { CheckCircle2, Circle, Minus } from "lucide-react";

import {
  MAP_COLORS,
  MAP_DATA,
  VIEW_H,
  VIEW_W,
  VISITED_PLACES,
  VISITED_STATES,
} from "../data/indiaMapData";

function dist(t1, t2) {
  return Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
}

function PlacesPopup({ name, places, visitedPlaces = [], onClose }) {
  if (!name) return null;
  const visitedPlaceSet = new Set(visitedPlaces);
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm px-0 sm:px-4"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-sm max-h-[82svh] overflow-y-auto bg-brand-card border-t sm:border border-brand-border rounded-t-3xl sm:rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "slideUp 0.3s ease" }}
      >
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between mb-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-brand-primary pr-4"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              {name}
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 shrink-0 rounded-full bg-brand-bg text-brand-primary flex items-center justify-center text-lg border border-brand-border"
            >
              Ã—
            </button>
          </div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-brand-accent-dark text-xs uppercase tracking-widest font-bold">
              Places to roam
            </p>
            {visitedPlaces.length > 0 && (
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-highlight/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-highlight">
                <CheckCircle2 className="h-3 w-3" />
                Visited marked
              </span>
            )}
          </div>
          <ul className="space-y-2.5">
            {(places || []).map((p, i) => {
              const hasVisited = visitedPlaceSet.has(p);
              return (
                <li
                  key={i}
                  className={`flex items-center gap-3 text-[15px] border rounded-xl px-4 py-3 ${
                    hasVisited
                      ? "bg-brand-highlight/10 border-brand-highlight/25 text-brand-primary"
                      : "bg-brand-bg/70 border-brand-border text-brand-text/85"
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${
                      hasVisited
                        ? "bg-brand-highlight text-white"
                        : "bg-brand-accent/15 text-brand-accent-dark"
                    }`}
                    aria-label={hasVisited ? "Visited" : `Place ${i + 1}`}
                  >
                    {hasVisited ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                  </span>
                  <span className="flex-1">{p}</span>
                  {hasVisited ? (
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-highlight">
                      Yes
                    </span>
                  ) : (
                    <Circle className="h-3.5 w-3.5 text-brand-text/25" />
                  )}
                </li>
              );
            })}
            {(!places || places.length === 0) && (
              <li className="text-brand-text/45 text-sm italic">
                No places added yet for this region.
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function DetailedIndiaMap() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef({ dragging: false, lastX: 0, lastY: 0 });
  const pinchRef = useRef({ pinching: false, startDist: 0, startZoom: 1 });
  const svgRef = useRef(null);

  const clampZoom = (z) => Math.min(6, Math.max(1, z));

  const onWheel = useCallback((e) => {
    e.preventDefault();
    setZoom((z) => clampZoom(z - e.deltaY * 0.0015 * z));
  }, []);

  const onPointerDown = (e) => {
    setIsDragging(true);
    dragRef.current = { dragging: true, lastX: e.clientX, lastY: e.clientY };
  };
  const onPointerMove = (e) => {
    if (!dragRef.current.dragging) return;
    const dx = e.clientX - dragRef.current.lastX;
    const dy = e.clientY - dragRef.current.lastY;
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastY = e.clientY;
    setPan((p) => ({ x: p.x + dx, y: p.y + dy }));
  };
  const endDrag = () => {
    dragRef.current.dragging = false;
    setIsDragging(false);
  };

  const onTouchStart = (e) => {
    if (e.touches.length === 2) {
      pinchRef.current = {
        pinching: true,
        startDist: dist(e.touches[0], e.touches[1]),
        startZoom: zoom,
      };
    } else if (e.touches.length === 1) {
      setIsDragging(true);
      dragRef.current = {
        dragging: true,
        lastX: e.touches[0].clientX,
        lastY: e.touches[0].clientY,
      };
    }
  };
  const onTouchMove = (e) => {
    if (e.touches.length === 2 && pinchRef.current.pinching) {
      const d = dist(e.touches[0], e.touches[1]);
      const ratio = d / pinchRef.current.startDist;
      setZoom(clampZoom(pinchRef.current.startZoom * ratio));
    } else if (e.touches.length === 1 && dragRef.current.dragging) {
      const dx = e.touches[0].clientX - dragRef.current.lastX;
      const dy = e.touches[0].clientY - dragRef.current.lastY;
      dragRef.current.lastX = e.touches[0].clientX;
      dragRef.current.lastY = e.touches[0].clientY;
      setPan((p) => ({ x: p.x + dx, y: p.y + dy }));
    }
  };
  const onTouchEnd = (e) => {
    if (e.touches.length === 0) {
      dragRef.current.dragging = false;
      pinchRef.current.pinching = false;
      setIsDragging(false);
    }
  };

  const reset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const active = hovered || selected;

  return (
    <div
      className="h-[520px] min-h-[520px] w-full flex flex-col text-brand-text rounded-2xl overflow-hidden border border-brand-border/70 sm:h-[680px] sm:min-h-[640px]"
      style={{
        background:
          "radial-gradient(circle at 20% 0%, #ffffff 0%, #fff8ed 52%, #f7efe1 100%)",
        fontFamily:
          "'Work Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <style>{`@keyframes slideUp { from { transform: translateY(24px); opacity:0 } to { transform: translateY(0); opacity:1 } }`}</style>

      {/* header */}
      <div className="px-3 pt-4 pb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:pt-6">
        <div className="min-w-0">
          <h1
            className="text-xl sm:text-2xl font-bold text-brand-primary"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Interactive India Map
          </h1>
          <p className="text-brand-text/55 text-xs sm:text-sm mt-0.5">
            Tap any state or union territory to view roaming places
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setZoom((z) => clampZoom(z + 0.5))}
            className="w-8 h-8 rounded-full bg-brand-card border border-brand-border text-brand-primary text-lg leading-none flex items-center justify-center active:scale-95 transition hover:border-brand-accent"
            aria-label="zoom in"
          >
            +
          </button>
          <button
            onClick={() => setZoom((z) => clampZoom(z - 0.5))}
            className="w-8 h-8 rounded-full bg-brand-card border border-brand-border text-brand-primary text-lg leading-none flex items-center justify-center active:scale-95 transition hover:border-brand-accent"
            aria-label="zoom out"
          >
            <Minus className="h-4 w-4" />
          </button>
          <button
            onClick={reset}
            className="px-3 h-8 rounded-full bg-brand-card border border-brand-border text-brand-primary/70 text-xs font-semibold active:scale-95 transition hover:border-brand-accent"
          >
            Reset
          </button>
        </div>
      </div>

      {/* name banner */}
      <div className="px-3 h-9 flex items-center sm:px-5">
        {active ? (
          <span
            className="text-brand-accent-dark font-semibold text-base sm:text-lg transition"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {active}
          </span>
        ) : (
          <span className="text-brand-text/45 text-sm">
            Hover or tap a region to see its name & places
          </span>
        )}
      </div>

      {/* map */}
      <div
        className="flex-1 relative overflow-hidden touch-none select-none"
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <svg
          ref={svgRef}
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="w-full h-full cursor-grab active:cursor-grabbing"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "center center",
            transition: isDragging ? "none" : "transform 0.15s ease-out",
          }}
        >
          {MAP_DATA.states.map((s) => {
            const isActive = selected === s.name || hovered === s.name;
            const isVisited = VISITED_STATES.has(s.name);
            return (
              <path
                key={s.name}
                d={s.d}
                onMouseEnter={() => setHovered(s.name)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(s.name)}
                fill={
                  isActive
                    ? isVisited
                      ? MAP_COLORS.visitedActive
                      : MAP_COLORS.active
                    : isVisited
                      ? MAP_COLORS.visited
                      : MAP_COLORS.unvisited
                }
                fillOpacity={isActive ? 0.96 : isVisited ? 0.88 : 0.72}
                stroke={
                  isActive
                    ? MAP_COLORS.border
                    : isVisited
                      ? MAP_COLORS.visitedActive
                      : "#c2410c"
                }
                strokeOpacity={isActive ? 0.95 : isVisited ? 0.82 : 0.34}
                strokeWidth={isActive ? 1.6 : 0.8}
                style={{
                  cursor: "pointer",
                  transition: "fill-opacity 0.15s, stroke-opacity 0.15s",
                }}
              />
            );
          })}

          {/* Lakshadweep â€” tiny islands, shown as a marker since polygon is sub-pixel */}
          <g
            onMouseEnter={() => setHovered("Lakshadweep")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected("Lakshadweep")}
            style={{ cursor: "pointer" }}
          >
            <circle
              cx={MAP_DATA.lakshadweep.cx}
              cy={MAP_DATA.lakshadweep.cy}
              r={
                selected === "Lakshadweep" || hovered === "Lakshadweep" ? 7 : 5
              }
              fill={
                selected === "Lakshadweep" || hovered === "Lakshadweep"
                  ? MAP_COLORS.active
                  : MAP_COLORS.unvisited
              }
              fillOpacity={
                selected === "Lakshadweep" || hovered === "Lakshadweep"
                  ? 0.95
                  : 0.55
              }
              stroke={MAP_COLORS.border}
              strokeOpacity={0.6}
              strokeWidth={1}
            />
          </g>

          {/* permanent state name labels */}
          <g style={{ pointerEvents: "none" }}>
            {MAP_DATA.states.map((s) => (
              <text
                key={s.name + "-label"}
                x={s.cx}
                y={s.cy}
                textAnchor="middle"
                fontSize="9"
                fontFamily="'Work Sans', sans-serif"
                fontWeight="600"
                fill={VISITED_STATES.has(s.name) ? "#fff8ed" : MAP_COLORS.label}
                stroke={VISITED_STATES.has(s.name) ? "#102a43" : "#fff8ed"}
                strokeWidth="2"
                paintOrder="stroke"
                opacity="0.9"
              >
                {s.name}
              </text>
            ))}
            <text
              x={MAP_DATA.lakshadweep.cx}
              y={MAP_DATA.lakshadweep.cy - 9}
              textAnchor="middle"
              fontSize="9"
              fontWeight="600"
              fill={MAP_COLORS.label}
              stroke="#fff8ed"
              strokeWidth="2"
              paintOrder="stroke"
              opacity="0.9"
            >
              Lakshadweep
            </text>
          </g>
        </svg>
      </div>

      <div className="px-3 pt-2 pb-3 text-center text-[11px] text-brand-text/60 sm:px-5 sm:pb-4">
        <span className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full bg-white/70 px-3 py-2 border border-brand-border sm:gap-4 sm:px-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-highlight" />
            Visited
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f4d7a6] border border-brand-accent/30" />
            Yet to visit
          </span>
        </span>
      </div>

      <PlacesPopup
        name={selected}
        places={selected ? MAP_DATA.places[selected] : null}
        visitedPlaces={selected ? VISITED_PLACES[selected] : []}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}


