import { useLocation, Link, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import {
  Lock,
  ShieldCheck,
  CreditCard,
  Banknote,
  Wallet,
  HelpCircle,
  ArrowLeft,
} from "lucide-react";

export default function PaymentPage() {
  const params = new URLSearchParams(useLocation().search);
  const mode = params.get("mode") || "pool"; // "acquire" | "pool"
  const plots = Number(params.get("plots") || 0);
  const acres = Number(params.get("acres") || 0);

  // --- Demo pricing (UI preview only; replace when backend arrives) ---
  const DEMO_PRICING = true;
  const PRICE_PER_PLOT_NGN = 50000;   // ₦50k — demo only
  const PRICE_PER_ACRE_NGN = 400000;  // ₦400k — demo only
  const FEES_NGN = 0;                 // demo only

  const subtotal = useMemo(() => {
    if (!DEMO_PRICING) return 0;
    return plots * PRICE_PER_PLOT_NGN + acres * PRICE_PER_ACRE_NGN;
  }, [plots, acres]);

  const total = useMemo(() => subtotal + FEES_NGN, [subtotal]);

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(n);

  const [method, setMethod] = useState<"card" | "transfer" | "wallet">("card");
  const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const location = useLocation();
const navigate = useNavigate();

function goToSignup() {
  const next = encodeURIComponent(location.pathname + location.search);
  navigate(`/auth?next=${next}`); // AuthPage default is signup
}


  return (
    <main className="min-h-[100vh] bg-white">
      {/* Top bar / breadcrumb */}
      <div className="border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/work-with-us" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-green-700">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div className="hidden md:flex items-center gap-3 text-xs">
            <ShieldCheck className="h-4 w-4 text-green-600" />
            <span className="text-gray-600">Secure • Encrypted • UI Preview</span>
          </div>
        </div>
      </div>

      {/* Progress stepper */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto py-6">
          <ol className="flex items-center gap-4 text-sm">
            <li className="flex items-center gap-2 text-green-700">
              <span className="h-6 w-6 grid place-items-center rounded-full bg-green-100">1</span>
              Selection
            </li>
            <div className="h-px flex-1 bg-gray-200" />
            <li className="flex items-center gap-2 text-green-700">
              <span className="h-6 w-6 grid place-items-center rounded-full bg-green-100">2</span>
              Account
            </li>
            <div className="h-px flex-1 bg-gray-200" />
            <li className="flex items-center gap-2 text-gray-800">
              <span className="h-6 w-6 grid place-items-center rounded-full bg-gray-100">3</span>
              Payment
            </li>
            <div className="h-px flex-1 bg-gray-200" />
            <li className="flex items-center gap-2 text-gray-800">
              <span className="h-6 w-6 grid place-items-center rounded-full bg-gray-100">4</span>
              Confirmation
            </li>
          </ol>
        </div>
      </section>

      {/* Main grid */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_.9fr] gap-10">
          {/* Left: details */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Checkout</h1>
            <p className="text-gray-600 mb-8">
              {mode === "acquire" ? "Acquiring land (co-owner unit)" : "Pooling funds to co-own"}
              {(plots || acres) ? (
                <>
                  {plots ? ` — ${plots} plot(s)` : ""}{acres ? ` — ${acres} acre(s)` : ""}
                </>
              ) : null}
            </p>

            {/* Contact / billing */}
            <div className="rounded-2xl border p-6 mb-8">
              <h2 className="font-semibold text-lg mb-4">Contact & Billing</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Email address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border p-3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Full name</label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ada Lovelace"
                    className="w-full rounded-xl border p-3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone (optional)</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="w-full rounded-xl border p-3"
                  />
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                We’ll send receipts and project updates to this email.
              </p>
            </div>

            {/* Payment methods */}
            <div className="rounded-2xl border p-6">
              <h2 className="font-semibold text-lg mb-4">Payment Method</h2>
              <div className="grid gap-3">
                <label className="flex items-center gap-3 rounded-xl border p-4 cursor-pointer hover:border-green-600">
                  <input
                    type="radio"
                    name="method"
                    className="accent-green-700"
                    checked={method === "card"}
                    onChange={() => setMethod("card")}
                  />
                  <CreditCard className="h-5 w-5 text-green-700" />
                  <span className="font-medium">Pay with Card</span>
                </label>

                <label className="flex items-center gap-3 rounded-xl border p-4 cursor-pointer hover:border-green-600">
                  <input
                    type="radio"
                    name="method"
                    className="accent-green-700"
                    checked={method === "transfer"}
                    onChange={() => setMethod("transfer")}
                  />
                  <Banknote className="h-5 w-5 text-green-700" />
                  <span className="font-medium">Bank Transfer</span>
                </label>

                <label className="flex items-center gap-3 rounded-xl border p-4 opacity-60">
                  <input
                    type="radio"
                    name="method"
                    disabled
                    className="accent-green-700"
                    onChange={() => setMethod("wallet")}
                  />
                  <Wallet className="h-5 w-5 text-green-700" />
                  <span className="font-medium">Wallet (coming soon)</span>
                </label>
              </div>

              {/* Terms */}
              <div className="mt-6 flex items-start gap-3">
                <input
                  id="agree"
                  type="checkbox"
                  className="mt-1 accent-green-700"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                />
                <label htmlFor="agree" className="text-sm text-gray-700">
                  I agree to the{" "}
                  <a className="underline text-green-700" href="#">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a className="underline text-green-700" href="#">
                    Privacy Policy
                  </a>.
                </label>
              </div>

              {/* Confirm button */}
              <button
                disabled={!agree || !email}
                className={`mt-6 w-full rounded-xl px-6 py-3 font-semibold text-white shadow-md transition
                  ${!agree || !email ? "bg-gray-300 cursor-not-allowed" : "bg-green-700 hover:bg-green-800"}`}
              >
                <span className="inline-flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Confirm & Pay (mock)
                </span>
              </button>

              <p className="mt-3 text-xs text-gray-500 inline-flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                This is a mock checkout for UI only. No real payment is processed.
              </p>
            </div>
          </div>

          {/* Right: summary */}
          <aside className="lg:sticky lg:top-6 h-max">
            <div className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Order Summary</h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Mode</span>
                  <span className="font-medium capitalize">{mode}</span>
                </div>

                {plots ? (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Plots</span>
                    <span className="font-medium">{plots}</span>
                  </div>
                ) : null}

                {acres ? (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Acres</span>
                    <span className="font-medium">{acres}</span>
                  </div>
                ) : null}

                <div className="h-px bg-gray-200 my-2" />

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">{DEMO_PRICING ? fmt(subtotal) : "—"}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Fees</span>
                  <span className="font-semibold">{DEMO_PRICING ? fmt(FEES_NGN) : "—"}</span>
                </div>

                <div className="flex items-center justify-between text-base">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-green-700">
                    {DEMO_PRICING ? fmt(total) : "To be calculated"}
                  </span>
                </div>

                <p className="text-[11px] text-gray-500">
                  * Demo pricing for UI preview. Actual pricing appears after backend integration.
                </p>
              </div>

              {/* Coupon UI (visual only) */}
              <div className="mt-6">
  <label className="block text-sm font-medium mb-1">Promo code</label>
  <div className="flex gap-2">
    <input className="flex-1 rounded-xl border p-3" placeholder="Enter code" />
    <button
      type="button"
      onClick={goToSignup}
      className="rounded-xl border px-4 hover:border-green-700"
      title="Create an account to apply codes"
    >
      Apply
    </button>
  </div>
</div>

            </div>

            {/* Trust box */}
            <div className="mt-4 rounded-2xl border p-4 bg-green-50 text-sm text-gray-700">
              <div className="flex items-center gap-2 font-medium">
                <ShieldCheck className="h-5 w-5 text-green-700" />
                Your data is protected
              </div>
              <p className="mt-1">
                We don’t share your information. All documents and payments are processed securely.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

