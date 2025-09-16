import {
  
    Mail,
    Phone,
    MessageCircle,


  } from "lucide-react";
  import { Link } from "react-router-dom";

export function QuickActions() {
    return (
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
        <a
          href="tel:+2348135169538"
          className="rounded-full bg-white shadow-lg border border-gray-200 p-3 hover:shadow-xl"
          aria-label="Call us"
        >
          <Phone className="h-5 w-5 text-emerald-700" />
        </a>
        <a
          href="https://wa.me/2348135169538?text=Hi%20Suprefarm"
          className="rounded-full bg-white shadow-lg border border-gray-200 p-3 hover:shadow-xl"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-5 w-5 text-emerald-700" />
        </a>
        <Link
          to="/contact"
          className="rounded-full bg-emerald-600 shadow-lg p-3 hover:bg-emerald-700"
          aria-label="Contact form"
        >
          <Mail className="h-5 w-5 text-white" />
        </Link>
      </div>
    );
  }