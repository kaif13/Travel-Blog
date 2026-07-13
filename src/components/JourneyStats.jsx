import { motion } from "motion/react";
import { Map, MapPin, Milestone } from "lucide-react";
import { JOURNEY_STATS } from "../data/indiaMapData";

function JourneyStats() {
  const {
    totalStates,
    totalUnionTerritories,
    visitedStates,
    visitedUnionTerritories,
    visitedCities,
  } = JOURNEY_STATS;

  const stats = [
    {
      label: "States",
      value: `${visitedStates} / ${totalStates}`,
      note: "visited so far",
      percentage: (visitedStates / totalStates) * 100,
      icon: MapPin,
    },
    {
      label: "Union Territories",
      value: `${visitedUnionTerritories} / ${totalUnionTerritories}`,
      note: "checked in",
      percentage:
        (visitedUnionTerritories / totalUnionTerritories) * 100,
      icon: Map,
    },
    {
      label: "Cities",
      value: visitedCities,
      note: "explored",
      percentage: Math.min((visitedCities / 28) * 100, 100),
      icon: Milestone,
    },
  ];

  const overallPercentage = Math.round((visitedStates / totalStates) * 100);
  const circumference = 2 * Math.PI * 48;
  const dashOffset = circumference - (overallPercentage / 100) * circumference;

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-brand-border/70 bg-white shadow-xl shadow-brand-primary/5 sm:rounded-[2rem]"
      id="journey-stats-container"
    >
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-brand-highlight via-brand-accent to-brand-accent-dark" />

      <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative bg-brand-primary p-5 text-white sm:p-8">
          <div className="absolute right-4 top-4 rounded-full border border-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent sm:right-5 sm:top-5 sm:px-3 sm:tracking-[0.22em]">
            Live log
          </div>

          <div className="flex min-h-56 flex-col justify-between sm:min-h-64">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-accent">
                Quest Index
              </span>
              <h3 className="mt-3 pr-16 font-serif text-2xl font-bold leading-tight tracking-tight sm:pr-0 sm:text-3xl">
                India before the next chapter.
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#FFF8ED]/72">
                A simple scorecard for the places already lived, the routes
                still open, and the memories worth keeping.
              </p>
            </div>

            <div className="mt-8 flex items-end justify-between gap-4 sm:gap-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">
                  Current count
                </p>
                <p className="mt-1 font-serif text-3xl font-bold text-brand-accent sm:text-4xl">
                  {visitedStates}
                  <span className="text-xl text-[#FFF8ED]/45">
                    /{totalStates}
                  </span>
                </p>
              </div>
              <div className="relative h-28 w-28 shrink-0 sm:h-32 sm:w-32">
                <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    fill="none"
                    stroke="rgba(255,248,237,0.14)"
                    strokeWidth="10"
                  />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="48"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: dashOffset }}
                    transition={{ duration: 1.3, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-serif text-3xl font-bold text-white sm:text-4xl">
                    {overallPercentage}%
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent">
                    done
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="grid gap-3">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="group rounded-2xl border border-brand-border/70 bg-brand-bg/60 p-3.5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md sm:p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-accent-dark shadow-sm ring-1 ring-brand-border/70 group-hover:bg-brand-accent group-hover:text-brand-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <div>
                          <p className="text-sm font-bold text-brand-primary">
                            {stat.label}
                          </p>
                          <p className="text-xs text-brand-text/55">
                            {stat.note}
                          </p>
                        </div>
                        <p className="font-serif text-xl font-bold text-brand-primary sm:text-2xl">
                          {stat.value}
                        </p>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white ring-1 ring-brand-border/70">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.percentage}%` }}
                          transition={{
                            duration: 1.1,
                            ease: "easeOut",
                            delay: 0.15 + idx * 0.08,
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-brand-highlight to-brand-accent"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-4 rounded-2xl border border-dashed border-brand-accent/40 bg-white px-4 py-3 text-sm font-medium text-brand-primary">
            Next target: keep adding real locations, real photos, and short
            notes instead of dummy travel cards.
          </div>
        </div>
      </div>
    </div>
  );
}

export default JourneyStats;
