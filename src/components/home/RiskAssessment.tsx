import React, { useMemo, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { motion, } from "framer-motion";
import { ArrowRight, Link } from "lucide-react";

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
export default function RiskMapSuprefarm() {
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



  return (
    <section className="relative py-14 px-6 md:px-12 bg-gradient-to-b from-emerald-50/40 to-white">
       <h1 className="mt-3 text-xl md:text-2xl font-extrabold tracking-tight mb-5">
    <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
    Risk Monitoring Map
    </span>
  </h1>
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-green-400 bg-green-50 px-3 py-1 text-green-700 text-sm font-medium mb-2 ">
    Expanding Impact
  </div> */}
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

  <div className="order-1 md:order-2">
    <div className="space-y-4">
      {[
        {
          icon: "🌱",
          title: "Instant Ownership Registration",
          desc: "Digital onboarding with KYC, e-signatures, and immediate issuance of ownership certificates.",
        },
        {
          icon: "🗂️",
          title: "Digital Title Verification",
          desc: "Integration with Nigeria and Ghana’s land registries to verify farmland before allocation.",
        },
        {
          icon: "💰",
          title: "Automated Ground Rent Billing",
          desc: "In-app alerts and auto-generated invoices linked to secure payment gateways.",
        },
        {
          icon: "🔗",
          title: "Blockchain Record-Keeping",
          desc: "Immutable ownership and transaction history to prevent disputes.",
        },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          className="rounded-2xl p-5 bg-gradient-to-br from-green-700 to-green-800 text-white shadow-xl border border-white/10 flex items-start gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: idx * 0.05 }}
        >
          <div className="text-2xl leading-none">{item.icon}</div>
          <div>
            <h4 className="font-semibold text-green-300 mb-1">
              {item.title}
            </h4>
            <p className="text-white/95">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
    <div className="mt-6">
      <CTA to="/what-we-do" variant="link">
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </CTA>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
function CTA({
    to,
    children,
    variant = "primary",
    className = "",
  }: {
    to: string;
    children: React.ReactNode;
    variant?: "primary" | "ghost" | "link" | "inverted";
    className?: string;
  }) {
    const base =
      "inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold transition-colors focus:outline-none focus-visible:ring-2";
    const styles: Record<string, string> = {
      primary: `${base} bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/30 focus-visible:ring-emerald-700/60`,
      ghost: `${base} border border-gray-300 text-gray-900 hover:bg-gray-100 focus-visible:ring-emerald-700/40`,
      link: `${base} p-0 h-auto text-emerald-700 hover:text-emerald-800`,
      inverted: `${base} bg-white text-emerald-700 hover:bg-gray-100 focus-visible:ring-white/70`,
    };
    return (
      <Link to={to} className={`${styles[variant]} ${className}`}>
        {children}
      </Link>
    );
  }