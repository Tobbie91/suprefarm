// src/components/NigeriaFarmModals.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Globe2, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type Farm = {
  slug: string;           // e.g. "ilora"
  name: string;           // e.g. "Ilora"
  description: string;    // short blurb
  image: string;          // URL (imported asset or public path)
  country: string;        // "nigeria"
};

interface Props {
  farmLocations: Farm[];
}

export default function NigeriaFarmModals({ farmLocations }: Props) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  // Only Ilora, Ilaji, Isehin
  const targetSlugs = useMemo(() => ["ilora", "ilaji", "iseyin"], []);
  const farms = useMemo(
    () =>
      farmLocations
        .filter(
          (f) =>
            f.country?.toLowerCase() === "nigeria" &&
            targetSlugs.includes(f.slug?.toLowerCase())
        )
        // keep order as in targetSlugs
        .sort(
          (a, b) =>
            targetSlugs.indexOf(a.slug.toLowerCase()) -
            targetSlugs.indexOf(b.slug.toLowerCase())
        ),
    [farmLocations, targetSlugs]
  );

  const active = farms.find((f) => f.slug === openSlug) || null;

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!openSlug) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [openSlug]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenSlug(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="focus-regions" className="py-16 px-6 md:px-12 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-emerald-800">
            Our Project Locations
          </h3>
          <p className="text-gray-700 mt-2">
            Active sites in <strong>Oyo State, Nigeria</strong>.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {farms.map((farm) => (
            <article
              key={farm.slug}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <div className="relative">
                <img
                  src={farm.image}
                  alt={farm.name}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-700" aria-hidden />
                  <h4 className="text-lg font-semibold text-gray-900">{farm.name}</h4>
                  <Globe2 className="h-4 w-4 text-emerald-700 ml-auto" aria-hidden />
                </div>
                <p className="text-gray-600 mt-1 line-clamp-2">{farm.description}</p>

                <div className="mt-4">
                  <button
                    onClick={() => setOpenSlug(farm.slug)}
                    className="text-sm text-emerald-700 hover:text-emerald-800 font-semibold"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <Modal onClose={() => setOpenSlug(null)}>
            <ModalContent farm={active} onClose={() => setOpenSlug(null)} />
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------- Modal primitives ---------- */

function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close when clicking outside panel
  const onBackdropClick = (e: React.MouseEvent) => {
    if (panelRef.current && e.target === e.currentTarget) onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={onBackdropClick}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      <motion.div
        ref={panelRef}
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-200"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ type: "spring", stiffness: 240, damping: 24 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function ModalContent({
  farm,
  onClose,
}: {
  farm: Farm;
  onClose: () => void;
}) {
  return (
    <div>
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow ring-1 ring-gray-200 hover:bg-white"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="relative h-56 w-full overflow-hidden">
        <img src={farm.image} alt={farm.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-emerald-700" aria-hidden />
          <h3 id={`modal-${farm.slug}-title`} className="text-xl font-semibold text-gray-900">
            {farm.name}
          </h3>
        </div>
        <p className="mt-2 text-gray-700">{farm.description}</p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            to={`/${farm.slug}`}
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold
                       text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm"
          >
            View full page <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <button
            onClick={onClose}
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold border border-gray-300 text-gray-800 hover:bg-gray-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
