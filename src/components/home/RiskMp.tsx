import React, { useMemo, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

/** ---------- Demo data (replace with your real figures) ---------- */
type Signal = "overall" | "drought" | "flood" | "temperature";

type Site = {
  name: string;
  country: string;
  coords: LatLngExpression;
  active: boolean;                     // <-- Suprefarm project present?
  base: Record<Signal, number>;        // 0..100 climate signal score
  hectares?: number;                   // optional, for display
};

const SITES: Site[] = [
  { name: "Ilora, Oyo",  country: "Nigeria", coords: [7.80, 3.90], active: true,  hectares: 15,
    base: { overall: 55, drought: 35, flood: 68, temperature: 62 } },
  { name: "Ilaji, Oyo",  country: "Nigeria", coords: [8.0523, 3.33735], active: true, hectares: 20,
    base: { overall: 52, drought: 32, flood: 64, temperature: 58 } },
  { name: "Iseyin, Oyo", country: "Nigeria", coords: [7.9667, 3.60], active: true, hectares: 12,
    base: { overall: 60, drought: 40, flood: 59, temperature: 66 } },
  // Add pipeline sites with active:false if you like
];

/** ---------- Helpers ---------- */
function trend(base: number, year: number) {
  // tiny illustrative trend vs 2023
  const t = Math.max(0, year - 2023) * 0.006;
  return Math.max(0, Math.min(100, Math.round(base * (1 + t))));
}

function colorFor(score: number) {
  if (score >= 70) return "#EF4444";  // High risk
  if (score >= 40) return "#F59E0B";  // Medium
  return "#10B981";                   // Low
}

function Pill({ dot, children }: { dot?: string; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold ring-1 ring-gray-200">
      {dot && <span className="h-2 w-2 rounded-full" style={{ background: dot }} />}
      {children}
    </span>
  );
}

/** ---------- Main ---------- */
export default function RiskMap() {
  const [signal, setSignal] = useState<Signal>("overall");
  const [year, setYear] = useState(2025);
  const [showProjects, setShowProjects] = useState(true);

  const points = useMemo(
    () =>
      SITES.map((s) => {
        const score = trend(s.base[signal], year);
        return { ...s, score, color: colorFor(score) };
      }),
    [signal, year]
  );

  const kpiActiveSites = points.filter((p) => p.active).length;
  const kpiPlannedHa = points.reduce((sum, p) => sum + (p.hectares || 0), 0);

  return (
    <section className="relative py-14 px-6 md:px-12 bg-gradient-to-b from-emerald-50/40 to-white">
        {/* Heading */}
<div className="max-w-7xl mx-auto text-center mb-8 md:mb-10">
  <div className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-semibold ring-1 ring-emerald-200">
    Global Coverage
  </div>

  <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
    <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
      Interactive Risk Map
    </span>
  </h1>

  <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
    Visualize climate signals and Suprefarm’s footprint across regions.
  </p>
</div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT: Map card */}
        <div className="rounded-3xl bg-white shadow-xl border border-gray-100 overflow-hidden">
          <div className="px-5 pt-4 pb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Climate Signals & Project Footprint</h3>
            <div className="hidden md:flex items-center gap-2">
              <Pill dot="#10B981">Projects</Pill>
              <Pill dot="#F59E0B">Growth</Pill>
              <Pill dot="#EF4444">Risk</Pill>
            </div>
          </div>

          <div className="relative">
            {/* Controls */}
            <div className="absolute left-3 top-3 z-[500] space-y-2">
              <div className="rounded-xl bg-white/95 backdrop-blur border border-gray-200 p-3 shadow-sm w-44">
                <div className="text-xs font-semibold text-gray-700 mb-2">Signal</div>
                {(["overall","drought","flood","temperature"] as Signal[]).map((k) => (
                  <label key={k} className="flex items-center gap-2 py-1 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="signal"
                      className="accent-emerald-600"
                      checked={signal === k}
                      onChange={() => setSignal(k)}
                    />
                    <span className="capitalize">{k}</span>
                  </label>
                ))}
              </div>

              <div className="rounded-xl bg-white/95 backdrop-blur border border-gray-200 p-3 shadow-sm w-44">
                <div className="text-xs font-semibold text-gray-700">
                  Year: <span className="text-emerald-700">{year}</span>
                </div>
                <input
                  type="range"
                  min={2023}
                  max={2030}
                  value={year}
                  onChange={(e) => setYear(parseInt(e.target.value, 10))}
                  className="w-full mt-2 accent-emerald-600"
                />
                <label className="mt-2 flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="accent-emerald-600"
                    checked={showProjects}
                    onChange={(e) => setShowProjects(e.target.checked)}
                  />
                  Show Suprefarm Projects
                </label>
              </div>
            </div>

            {/* Legend */}
            <div className="absolute right-3 bottom-3 z-[500] rounded-xl bg-white/95 backdrop-blur border border-gray-200 p-3 shadow-sm w-48">
              <div className="text-xs font-semibold text-gray-700 mb-2">Risk Level</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{background:"#EF4444"}}/> High (70–100)</div>
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{background:"#F59E0B"}}/> Medium (40–69)</div>
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{background:"#10B981"}}/> Low (0–39)</div>
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded ring-2 ring-emerald-600"/> Active Project</div>
              </div>
            </div>

            {/* Map */}
            <MapContainer center={[7.6, 3.7]} zoom={7} scrollWheelZoom={false} className="h-[420px] w-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              {points.map((p, i) => (
                <CircleMarker
                  key={i}
                  center={p.coords}
                  radius={10}
                  pathOptions={{ color: p.color, weight: 3, fillColor: p.color, fillOpacity: 0.25 }}
                >
                  <Tooltip direction="top" offset={[0, -8]} opacity={1}>
                    <div className="text-[12px] font-medium">{p.name}</div>
                    <div className="text-[11px] text-gray-700 capitalize">Signal ({signal}): <b>{p.score}</b></div>
                    {typeof p.hectares === "number" && (
                      <div className="text-[11px] text-gray-600">Hectares: {p.hectares}</div>
                    )}
                    {p.active && showProjects && (
                      <div className="text-[11px] text-emerald-700 font-semibold">Active project</div>
                    )}
                  </Tooltip>
                </CircleMarker>
              ))}
              {/* project rings */}
              {showProjects &&
                points.filter((p) => p.active).map((p, i) => (
                  <CircleMarker
                    key={`ring-${i}`}
                    center={p.coords}
                    radius={16}
                    pathOptions={{ color: "#059669", weight: 2, fillOpacity: 0 }}
                  />
                ))}
            </MapContainer>
          </div>

          <div className="px-5 py-2 text-right text-xs text-gray-500">Updated today</div>
        </div>

        {/* RIGHT: narrative & KPIs */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700 text-sm font-medium">
            Expanding Impact
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Mapping Climate Signals & Suprefarm Footprint
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Explore where Suprefarm operates today and how climate signals vary across our regions.
            Use the controls to switch between drought, flood, heat, or an overall signal and scrub through years.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-emerald-700">Active Sites</div>
              <div className="text-gray-800 text-lg">{kpiActiveSites}</div>
            </div>
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-emerald-700">Hectares Planned</div>
              <div className="text-gray-800 text-lg">{kpiPlannedHa.toLocaleString()}</div>
            </div>
          </div>

          <a
            href="/projects"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-white font-semibold shadow hover:bg-emerald-700 transition"
          >
            Explore Projects
          </a>
        </div>
      </div>
    </section>
  );
}
