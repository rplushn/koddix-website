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
        <div className="text-center">
          <h2 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl">
            Integramos tu empresa con las mejores tecnologías globales.
            <br className="max-md:hidden" />
            <span className="text-muted-foreground">
              Conectamos tus sistemas locales con el ecosistema digital mundial para potenciar tu crecimiento.
            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          {/* Top row - 4 logos */}
          <LogoRow companies={topRowCompanies} gridClassName="grid-cols-4" />

          {/* Bottom row - 3 logos */}
          <LogoRow
            companies={bottomRowCompanies}
            gridClassName="grid-cols-3"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

type LogoRowProps = {
  companies: Company[];
  gridClassName: string;
  direction?: "left" | "right";
};

const LogoRow = ({ companies, gridClassName, direction }: LogoRowProps) => {
  // Renderizar un grupo de logos
  const renderLogoGroup = (groupIndex: number) => (
    <div
      key={groupIndex}
      className="flex shrink-0 items-center gap-x-16 lg:gap-x-20"
    >
      {companies.map((company, index) => (
        <Link
          href={company.href}
          target="_blank"
          key={`${company.name}-${groupIndex}-${index}`}
          className="shrink-0 flex items-center justify-center transition-opacity hover:opacity-70"
        >
          {company.useText ? (
            <div className="text-muted-foreground whitespace-nowrap text-sm font-medium opacity-50 transition-opacity hover:opacity-70">
              {company.name}
            </div>
          ) : (
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={company.width}
              height={company.height}
              className="h-8 w-auto max-w-[150px] object-contain opacity-50 transition-opacity hover:opacity-70 dark:opacity-100 dark:invert"
            />
          )}
        </Link>
      ))}
    </div>
  );

  const isReverse = direction === "right";
  const animationClass = isReverse
    ? "animate-scroll-reverse"
    : "animate-scroll";

  return (
    <div className="relative w-full overflow-hidden mx-auto max-w-7xl">
      {/* Contenedor deslizante con dos grupos idénticos y mask-image para fade */}
      <div
        className={cn(
          "flex items-center relative z-0",
          animationClass,
          "hover:[animation-play-state:paused]",
        )}
        style={{
          width: "fit-content",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        {renderLogoGroup(0)}
        {renderLogoGroup(1)}
      </div>
    </div>
  );
};
