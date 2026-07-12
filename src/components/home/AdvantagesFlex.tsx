import type { LucideIcon } from "lucide-react";
import { MapPin, Scale, Truck, Zap } from "lucide-react";

type Advantage = {
  title: string;
  lines: string[];
  icon: LucideIcon;
};

const advantages: Advantage[] = [
  {
    title: "Dépôt local",
    lines: ["Villaines-sous-Bois", "95570"],
    icon: MapPin,
  },
  {
    title: "Paiement immédiat",
    lines: ["Virement instantané", "sécurisé"],
    icon: Zap,
  },
  {
    title: "Pesée certifiée",
    lines: ["Bascule homologuée", "et transparente"],
    icon: Scale,
  },
  {
    title: "Interventions rapides",
    lines: ["Sur tout le Val-d’Oise", "et l’Île-de-France"],
    icon: Truck,
  },
];

export function AdvantagesFlex() {
  return (
    <section
      aria-label="Les avantages de C.I.L Recyclage"
      className="border-y border-slate-200 bg-white py-5 md:py-8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 md:flex-nowrap md:gap-5">
          {advantages.map(({ title, lines, icon: Icon }) => (
            <article
              key={title}
              className="group flex min-h-[220px] basis-[calc(50%-0.375rem)] flex-col items-center rounded-[20px] border border-[#E3E6EB] bg-white px-3 py-5 text-center shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition duration-300 motion-reduce:transform-none motion-reduce:transition-none hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)] md:min-h-[270px] md:basis-0 md:flex-1 md:px-6 md:py-8"
            >
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#FFF0E5] md:size-[72px]">
                <Icon
                  aria-hidden="true"
                  className="size-7 text-[#FF7417] md:size-8"
                  strokeWidth={1.8}
                />
              </div>

              <h3 className="mt-4 text-[15px] font-bold leading-tight text-[#242424] md:mt-5 md:text-lg">
                {title}
              </h3>

              <div className="mt-2 text-[12px] leading-5 text-[#737987] sm:text-[13px] md:text-[15px] md:leading-6">
                {lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </div>

              <span
                aria-hidden="true"
                className="mt-auto block h-1 w-10 rounded-full bg-[#FF7417] transition-all duration-300 motion-reduce:transition-none group-hover:w-14"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
