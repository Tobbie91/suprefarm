import type { PropsWithChildren } from "react";

import { Navigate, useLocation } from "react-router-dom";

export default function AcquireGate({ children }: PropsWithChildren) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const mode = params.get("mode");        // "acquire" | "pool" | null
  const authed = !!localStorage.getItem("sf_user");

  if (mode === "acquire" && !authed) {
    const next = encodeURIComponent(location.pathname + location.search);
    return <Navigate to={`/auth?next=${next}`} replace />;
  }
  return <>{children}</>;
}
