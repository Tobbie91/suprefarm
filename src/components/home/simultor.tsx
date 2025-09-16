import { useState, useMemo } from "react";

export default function SuprefarmSimulator() {
  // Inputs
  const [acres, setAcres] = useState(1);
  const [pricePerKeg, setPricePerKeg] = useState(50000); // Selling price per keg as dynamic state
  const [exchangeRate, setExchangeRate] = useState(1500); // Exchange rate as dynamic state
  const litersPerAcre = 10000;
  const kegSizeLiters = 25;
  const miscPercent = 25;

  // Helpers
  const toNumber = (v: number) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
  };

  const results = useMemo(() => {
    const a = Math.max(0, toNumber(acres));
    const lpa = Math.max(0, toNumber(litersPerAcre));
    const kegSize = Math.max(0.0001, toNumber(kegSizeLiters));
    const price = Math.max(0, toNumber(pricePerKeg)); // Using dynamic price
    const rate = Math.max(1, toNumber(exchangeRate)); // Using dynamic exchange rate
    const misc = Math.min(100, Math.max(0, toNumber(miscPercent)));

    const totalLiters = a * lpa;
    const totalKegs = Math.floor(totalLiters / kegSize);

    const grossNaira = totalKegs * price;
    const miscCharges = (misc / 100) * grossNaira;
    const netNaira = grossNaira - miscCharges;
    const netUSD = netNaira / rate;

    const litersPerAcreCalc = lpa;
    const kegsPerAcre = Math.floor(lpa / kegSize);
    const grossPerAcre = kegsPerAcre * price;
    const netPerAcre = grossPerAcre * (1 - misc / 100);

    return {
      totalLiters,
      totalKegs,
      grossNaira,
      miscCharges,
      netNaira,
      netUSD,
      litersPerAcreCalc,
      kegsPerAcre,
      grossPerAcre,
      netPerAcre,
    };
  }, [acres, pricePerKeg, exchangeRate]); // Recalculating when pricePerKeg or exchangeRate change

  const fmt = (n: number) =>
    n.toLocaleString(undefined, { maximumFractionDigits: 2 });

  // Increment/Decrement
  const increment = () => setAcres((v) => v + 1);
  const decrement = () => setAcres((v) => (v > 0 ? v - 1 : 0));
  const handleReset = () => setAcres(1);

  return (
    <div className="max-w-4xl mx-auto p-0">
      {/* OUTER CARD: general shadow + border */}
      <div className="rounded-3xl border border-gray-200 shadow-xl bg-white overflow-hidden">
        {/* Header */}
        <header className="px-6 pt-6 pb-4 text-center border-b border-gray-100">
          <h1 className="text-3xl font-bold">Suprefarm Acre Revenue Estimator</h1>
          <p className="text-sm text-slate-600 mt-1">
            Estimate palm oil production, kegs, revenue, and net returns for your co-ownership.
          </p>
        </header>

        {/* Body */}
        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Input Section (no heavy shadow; subtle border only) */}
            <section className="rounded-2xl p-6 border border-gray-100 bg-white">
              <h2 className="font-semibold mb-3 text-green-600">Adjust Acres</h2>

              <div className="flex items-center justify-between">
                <div className="text-center w-full">
                  <input
                    type="number"
                    min="1"
                    value={acres}
                    onChange={() => {}}
                    className="mt-2 w-full rounded-lg border px-3 py-2 text-center"
                    readOnly
                  />
                </div>

                <div className="flex flex-col ml-4 gap-2">
                  <button
                    onClick={increment}
                    className="flex items-center justify-center rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-700 hover:bg-emerald-100"
                    title="Increase acres"
                  >
                    ↑
                  </button>
                  <button
                    onClick={decrement}
                    className="flex items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-700 hover:bg-gray-100"
                    title="Decrease acres"
                  >
                    ↓
                  </button>
                </div>
              </div>

              <div className="text-center text-sm text-slate-600 mt-2">
                Current Value: {fmt(acres)} Acres
              </div>

              {/* Fixed Fields */}
              <div className="mt-6">
                <label className="block mb-3 text-sm text-slate-700">
                  Liters per Acre
                </label>
                <input
                  type="number"
                  value={litersPerAcre}
                  className="w-full rounded-lg border px-3 py-2 text-gray-500 bg-gray-100"
                  disabled
                />
                <p className="text-xs text-slate-500 mt-1">
                  Default: 10,000 L (≈ 4 tonnes)
                </p>

                <label className="block mt-3 mb-3 text-sm text-slate-700">
                  Keg Size (liters)
                </label>
                <input
                  type="number"
                  value={kegSizeLiters}
                  className="w-full rounded-lg border px-3 py-2 text-gray-500 bg-gray-100"
                  disabled
                />
                <p className="text-xs text-slate-500 mt-1">Default: 25 L</p>

                {/* Selling Price input (iterable) */}
                <label className="block mt-3 mb-3 text-sm text-slate-700">
                  Selling Price per Keg (₦)
                </label>
                <input
                  type="number"
                  value={pricePerKeg}
                  onChange={(e) => setPricePerKeg(Number(e.target.value))}
                  className="w-full rounded-lg border px-3 py-2 text-gray-500 bg-gray-100"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Default: ₦50,000
                </p>

                {/* Exchange Rate input (iterable) */}
                <label className="block mt-3 mb-3 text-sm text-slate-700">
                  Exchange Rate (₦ per $)
                </label>
                <input
                  type="number"
                  value={exchangeRate}
                  onChange={(e) => setExchangeRate(Number(e.target.value))}
                  className="w-full rounded-lg border px-3 py-2 text-gray-500 bg-gray-100"
                />
                <p className="text-xs text-slate-500 mt-1">Default: ₦1,500</p>

                <label className="block mt-3 mb-3 text-sm text-slate-700">
                Operational Costs (%)
                </label>
                <input
                  type="number"
                  value={miscPercent}
                  className="w-full rounded-lg border px-3 py-2 text-gray-500 bg-gray-100"
                  disabled
                />
                <p className="text-xs text-slate-500 mt-1">Default: 25%</p>
              </div>

              <div className="flex gap-3 justify-center mt-4">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-lg border hover:bg-slate-50"
                >
                  Reset
                </button>
              </div>
            </section>

            {/* Results Section (no heavy shadow; subtle border only) */}
            <section className="rounded-2xl p-6 border border-gray-100 bg-white">
              <h2 className="font-semibold mb-3 text-green-600">
                Simulation Results
              </h2>

              <div className="grid gap-3">
                {[
                  { label: "Total Liters", value: results.totalLiters, unit: "L" },
                  { label: "Total Kegs", value: results.totalKegs, unit: "kegs" },
                  { label: "Gross Sales (₦)", value: results.grossNaira, unit: "₦" },
                  { label: "Operational Costs (₦)", value: results.miscCharges, unit: "₦" },
                  { label: "Net Sales (₦)", value: results.netNaira, unit: "₦" },
                  { label: "Net (USD)", value: results.netUSD, unit: "$" },
                ].map((r, idx) => (
                  <div key={idx} className="p-4 rounded-xl border bg-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-xs text-slate-500">{r.label}</div>
                        <div className="text-lg font-medium">
                          {fmt(r.value as number)} {r.unit}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="text-xs text-slate-500 mt-2">
                  Note: Kegs are rounded down to whole units (partial kegs are not counted). Adjust inputs to change assumptions.
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
