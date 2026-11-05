import { MessageCircle } from "lucide-react";
import { whatsappContactLink } from "@/lib/config";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappContactLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami melalui WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-forest-950 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
        Chat dengan kami
      </span>
    </a>
  );
}
