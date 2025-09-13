import { useState, useEffect, useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import {
  CloudRain,
  ThermometerSun,
  ThermometerSnowflake,
  Wind,
} from "lucide-react";
import green11 from "../../assets/images/green11.webp";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Title);

interface WeatherProps {
  lat: number;
  lng: number;
  locationName: string;
  videoUrl?: string;
  faqUrl: string;
  appUrl: string;
  posterUrl?: string;
}

/* -------- API (kept as-is, safe retries) -------- */
async function fetchForecast(lat: number, lng: number) {
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    throw new Error(`Invalid coordinates: lat=${lat}, lng=${lng}`);
  }
  const base = "https://api.open-meteo.com/v1/forecast";
  const common = {
    latitude: String(lat),
    longitude: String(lng),
    timezone: "Africa/Lagos",
    forecast_days: "7",
  };
  const tries = [
    { ...common, daily: ["temperature_2m_max","temperature_2m_min","precipitation_sum","windspeed_10m_max","precipitation_probability_max"].join(",") },
    { ...common, daily: ["temperature_2m_max","temperature_2m_min","precipitation_sum","windspeed_10m_max"].join(",") },
  ];
  let last = "";
  for (const p of tries) {
    const r = await fetch(`${base}?${new URLSearchParams(p).toString()}`);
    if (r.ok) return r.json();
    last = await r.text();
  }
  throw new Error(`Failed to load forecast (400): ${last}`);
}

/* -------- Small UI bits -------- */
function Skeleton() {
  return (
    <div className="animate-pulse space-y-3">
      <div className="h-24 bg-gray-200/70 rounded-xl" />
      <div className="grid grid-cols-2 gap-2">
        <div className="h-14 bg-gray-200/70 rounded-lg" />
        <div className="h-14 bg-gray-200/70 rounded-lg" />
      </div>
      <div className="h-32 bg-gray-200/70 rounded-xl" />
    </div>
  );
}

function Metric({
  icon, label, value,
}: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3">
      <div className="flex items-center gap-2 text-xs text-gray-500">{icon}{label}</div>
      <div className="mt-1 text-lg font-semibold text-gray-900">{value}</div>
    </div>
  );
}

function WeatherGraph({ daily }: { daily: any }) {
  const times: string[] = daily?.time ?? [];
  const labels = useMemo(
    () => times.slice(0, 7).map((t, i) => (i === 0 ? "Today" : new Date(t).toLocaleDateString(undefined, { weekday: "short" }))),
    [times]
  );
  const maxTemps: number[] = (daily?.temperature_2m_max ?? []).slice(0, 7);
  const minTemps: number[] = (daily?.temperature_2m_min ?? []).slice(0, 7);

  return (
    <div className="h-40 w-full">
      <Line
        data={{
          labels,
          datasets: [
            { label: "Max (°C)", data: maxTemps, borderColor: "#10B981", backgroundColor: "rgba(16,185,129,0.12)", fill: true, pointRadius: 2, borderWidth: 2, tension: 0.3 },
            { label: "Min (°C)", data: minTemps, borderColor: "#94A3B8", backgroundColor: "rgba(148,163,184,0.12)", fill: true, pointRadius: 2, borderWidth: 2, tension: 0.3 },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { mode: "index", intersect: false } },
          scales: {
            x: { grid: { display: false }, ticks: { maxRotation: 0 } },
            y: { grid: { color: "rgba(0,0,0,0.06)" }, ticks: { callback: (v) => `${v}°` as any } },
          },
        }}
      />
    </div>
  );
}

/* -------- SIDE-BY-SIDE CARD -------- */
const FarmWeather: React.FC<WeatherProps> = ({
  lat, lng, locationName, videoUrl, faqUrl, appUrl, posterUrl,
}) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetchForecast(lat, lng);
        if (mounted) { setData(res); setErr(null); }
      } catch (e: any) {
        if (mounted) setErr(e?.message || "Failed to load forecast");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [lat, lng]);

  const d = data?.daily;
  const t0 = 0;
  const maxToday = d?.temperature_2m_max?.[t0];
  const minToday = d?.temperature_2m_min?.[t0];
  const rainMm   = d?.precipitation_sum?.[t0];
  const windMax  = d?.windspeed_10m_max?.[t0];
  const rainProb = d?.precipitation_probability_max?.[t0];

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      {/* Split layout */}
      <div className="grid md:grid-cols-12">
        {/* Left: compact photo */}
        <div className="md:col-span-5">
          <div className="relative h-40 md:h-full md:min-h-[260px]">
            <img
              src={green11}
              alt={locationName}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/images/placeholder.jpg"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              {locationName}
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="md:col-span-7 p-5 md:p-6">
          {loading && <Skeleton />}
          {err && !loading && (
            <div className="rounded-lg bg-red-50 text-red-700 px-3 py-2 text-sm border border-red-200">
              Error: {err}
            </div>
          )}

          {!loading && !err && d && (
            <>
              {/* KPIs */}
              <div className="grid grid-cols-2 gap-3">
                <Metric icon={<ThermometerSun className="h-4 w-4 text-emerald-700" />} label="Max" value={maxToday != null ? `${Math.round(maxToday)}°C` : "—"} />
                <Metric icon={<ThermometerSnowflake className="h-4 w-4 text-amber-700" />} label="Min" value={minToday != null ? `${Math.round(minToday)}°C` : "—"} />
                <Metric icon={<CloudRain className="h-4 w-4 text-emerald-700" />} label="Rain" value={rainMm != null ? `${rainMm} mm` : "—"} />
                <Metric icon={<Wind className="h-4 w-4 text-sky-700" />} label="Wind" value={windMax != null ? `${Math.round(windMax)} km/h` : "—"} />
              </div>

              {/* Compact chart (capped width) */}
              <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/40 p-3 max-w-md">
                <div className="mb-1.5 flex items-center justify-between">
                  <div className="text-sm font-semibold text-emerald-900">7-Day Temperature</div>
                  {rainProb != null && <div className="text-xs text-emerald-700">Rain chance: {rainProb}%</div>}
                </div>
                <WeatherGraph daily={d} />
              </div>

              {/* Optional video (kept compact) */}
              {videoUrl && (
                <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 max-w-md">
                  <video
                    src={videoUrl}
                    poster={posterUrl || green11}
                    className="w-full"
                    controls
                    preload="metadata"
        
                    controlsList="nodownload noplaybackrate"
                  />
                </div>
              )}
            </>
          )}

          {/* CTAs */}
          <div className="mt-5 flex flex-col sm:flex-row gap-3 max-w-md">
            <a
              href={faqUrl}
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100"
            >
              Learn More
            </a>
            <a
              href={appUrl}
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmWeather;
