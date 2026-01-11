"use client";

import Image from "next/image";
import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";
import { motion } from "motion/react";
import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { handleWhatsAppClick } from "@/lib/whatsapp";

const features = [
  {
    title: "Procesos a Medida",
    description: "Diseñamos flujos de trabajo digitales que se adaptan a tu operación real, no al revés.",
    icon: CircleDot,
  },
  {
    title: "Integración Total",
    description: "Conectamos ventas, operaciones y finanzas en una sola plataforma unificada.",
    icon: Blend,
  },
  {
    title: "Resultados Medibles",
    description: "Entregas por fases concretas y KPIs claros desde el día uno.",
    icon: Diamond,
  },
  {
    title: "Visibilidad en Tiempo Real",
    description: "Dashboards ejecutivos para tomar decisiones basadas en datos, no en intuición.",
    icon: ChartNoAxesColumn,
  },
];

export const Hero = () => {
  return (
    // CAMBIO RADICAL 1: w-full y overflow-hidden forzado aquí
    <section className="relative w-full max-w-[100vw] overflow-x-hidden flex flex-col justify-center pt-32 pb-28 lg:py-32 lg:pt-44">
      
      {/* CAMBIO RADICAL 2: px-4 obligatorio y w-full explícito */}
      <div className="container w-full px-4 md:px-6 mx-auto flex flex-col justify-between gap-10 lg:flex-row lg:gap-20">
        
        {/* Left side */}
        <div className="flex-1 w-full max-w-full">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            // CAMBIO RADICAL 3: text-4xl en móvil, y break-words para partir palabras largas si es necesario
            className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight break-words hyphens-auto"
          >
            Soluciones Tecnológicas Integrales para Honduras
          </motion.h1>

          <p className="text-muted-foreground mt-6 text-lg max-w-2xl">
            Somos MANU.OS. Desarrollamos plataformas web, automatizamos procesos y conectamos tu empresa con las mejores APIs del mundo para reducir costos y escalar operaciones.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button onClick={handleWhatsAppClick}>
              Agendar Consultoría
            </Button>
            <Button
              variant="outline"
              className="gap-2 shadow-md"
              asChild
            >
              <a href="#soluciones">
                Ver Servicios
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 w-full">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          {/* CAMBIO RADICAL 4: Ocultar dashed line horizontal si causa problemas de ancho */}
          <div className="lg:hidden w-full overflow-hidden">
             <DashedLine orientation="horizontal" className="w-full" />
          </div>

          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-3 items-start w-full">
                <Icon className="text-foreground mt-1 size-5 shrink-0" />
                <div className="flex-1 min-w-0"> {/* min-w-0 permite que el flex hijo se encoja */}
                  <h2 className="font-semibold text-foreground leading-tight">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1 break-words">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 w-full px-4 md:px-0 md:mt-20 lg:container lg:mx-auto"
      >
        <div className="relative aspect-[4/5] md:aspect-[16/9] w-full max-h-[800px] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/heroweb6.jpg"
            alt="hero"
            fill
            className="object-cover object-top"
          />
        </div>
      </motion.div>
    </section>
  );
};
