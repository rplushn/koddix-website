import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Company = {
  name: string;
  logo: string;
  width: number;
  height: number;
  href: string;
  useText?: boolean;
};

export const Logos = () => {
  const topRowCompanies = [
    {
      name: "WhatsApp Business API",
      logo: "/logos/whatsapp-icon.svg",
      width: 150,
      height: 40,
      href: "https://business.whatsapp.com",
    },
    {
      name: "Google Analytics 4",
      logo: "/logos/google.svg",
      width: 150,
      height: 40,
      href: "https://analytics.google.com",
    },
    {
      name: "Microsoft Excel / 365",
      logo: "/logos/excel.svg",
      width: 120,
      height: 30,
      href: "https://www.microsoft.com/microsoft-365",
    },
    {
      name: "OpenAI",
      logo: "/logos/openai.svg",
      width: 120,
      height: 30,
      href: "https://openai.com",
    },
  ];

  const bottomRowCompanies = [
    {
      name: "Next.js",
      logo: "/logos/nextjs.svg",
      width: 100,
      height: 30,
      href: "https://nextjs.org",
      useText: true,
    },
    {
      name: "React",
      logo: "/logos/react.svg",
      width: 100,
      height: 30,
      href: "https://react.dev",
      useText: true,
    },
    {
      name: "Google Ads",
      logo: "/logos/google-ads.svg",
      width: 120,
      height: 30,
      href: "https://ads.google.com",
      useText: true,
    },
  ];

  return (
    <section className="pb-28 lg:pb-32 overflow-hidden">
      <div className="container space-y-10 lg:space-y-16">
        <div className="text-center px-4 max-w-5xl mx-auto">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-[4rem] leading-[1.1]">
            Integramos tu empresa con las mejores tecnologías globales.
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl mt-6 whitespace-nowrap overflow-hidden text-ellipsis w-full">
            Conectamos tus sistemas locales con el ecosistema digital mundial para potenciar tu crecimiento.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          <LogoRow companies={topRowCompanies} />
          <LogoRow companies={bottomRowCompanies} direction="right" />
        </div>
      </div>
    </section>
  );
};

type LogoRowProps = {
  companies: Company[];
  direction?: "left" | "right";
};

const LogoRow = ({ companies, direction = "left" }: LogoRowProps) => {
  const isReverse = direction === "right";
  const animationClass = isReverse ? "animate-scroll-reverse" : "animate-scroll";

  // Función para renderizar un set de logos
  const renderLogos = () => (
    <div className="flex shrink-0 items-center gap-16 lg:gap-24 px-8 lg:px-12">
      {companies.map((company, index) => (
        <Link
          href={company.href}
          target="_blank"
          key={`${company.name}-${index}`}
          className="shrink-0 flex items-center justify-center"
        >
          {company.useText ? (
            <div className="text-muted-foreground whitespace-nowrap text-sm font-medium opacity-50 transition-opacity hover:opacity-100">
              {company.name}
            </div>
          ) : (
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={company.width}
              height={company.height}
              className="h-8 w-auto max-w-[150px] object-contain opacity-50 transition-opacity hover:opacity-100 dark:opacity-100 dark:invert"
            />
          )}
        </Link>
      ))}
    </div>
  );

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
      }}
    >
      <div className={cn("flex w-max", animationClass)}>
        {/* Renderizamos 4 copias para asegurar el loop infinito en pantallas grandes */}
        {renderLogos()}
        {renderLogos()}
        {renderLogos()}
        {renderLogos()}
      </div>
    </div>
  );
};