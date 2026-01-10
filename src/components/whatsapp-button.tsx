"use client";

import { MessageCircle } from "lucide-react";

import { handleWhatsAppClick } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 animate-pulse"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8" fill="white" />
    </button>
  );
}
