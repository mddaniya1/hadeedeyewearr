import { Clock, Glasses, MapPin, Phone } from "lucide-react";

// DEMO DATA — opening hours were reported by the owner (closing 10:30 PM) and
// still need verification before launch. The other three items use the
// verified address and phone number.
const ITEMS = [
  {
    icon: MapPin,
    title: "Visit our store",
    description:
      "Shop No. 7, Yaqoob Market, Hyderi, Block E, North Nazimabad, Karachi",
  },
  {
    icon: Phone,
    title: "Call or WhatsApp",
    description: "+92 336 3170239 — we're happy to help",
  },
  {
    icon: Glasses,
    title: "Prescription & designer",
    description: "Prescription glasses and designer frames in store",
  },
  {
    icon: Clock,
    title: "Open daily",
    description: "Until 10:30 PM (hours to be confirmed)",
  },
];

export function TrustStrip() {
  return (
    <section aria-label="Store information" className="border-t py-10 sm:py-12">
      <ul className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {ITEMS.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <item.icon className="mt-0.5 size-5 shrink-0" aria-hidden />
            <div>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
