import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const nav = useNavigate();
  const next = new URLSearchParams(useLocation().search).get("next") || "/";

  function submit(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem("sf_user", JSON.stringify({ name, email }));
    nav(next, { replace: true });
  }

  return (
    <main className="min-h-[80vh] grid place-items-center bg-gray-50 px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="flex gap-2 mb-6">
          <button onClick={() => setMode("signup")} className={`flex-1 rounded-xl px-3 py-2 font-semibold ${mode==="signup"?"bg-green-600 text-white":"bg-gray-100"}`}>Sign up</button>
          <button onClick={() => setMode("login")}  className={`flex-1 rounded-xl px-3 py-2 font-semibold ${mode==="login" ?"bg-green-600 text-white":"bg-gray-100"}`}>Log in</button>
        </div>

        <form onSubmit={submit} className="space-y-4">
          {mode==="signup" && (
            <div>
              <label className="block text-sm font-medium mb-1">Full name</label>
              <input className="w-full rounded-xl border p-3" value={name} onChange={e=>setName(e.target.value)} required placeholder="Ada Lovelace" />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full rounded-xl border p-3" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="you@example.com" />
          </div>
          <button type="submit" className="w-full rounded-xl bg-green-700 text-white font-semibold py-3 hover:bg-green-800">
            {mode==="signup" ? "Create account" : "Continue"}
          </button>
        </form>
      </div>
    </main>
  );
}
