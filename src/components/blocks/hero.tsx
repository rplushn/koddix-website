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
    // FIX 1: 'overflow-hidden' aquí es CLAVE para cortar cualquier desbordamiento fantasma
    <section className="flex min-h-[80vh] flex-col justify-center pt-32 pb-28 lg:py-32 lg:pt-44 overflow-hidden w-full">
      
      {/* FIX 2: Agregado 'px-5' para que el texto no toque los bordes en móvil */}
      <div className="container px-5 mx-auto flex flex-col justify-between gap-10 md:gap-14 lg:flex-row lg:gap-20">
        
        {/* Left side - Main content */}
        <div className="flex-1 z-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            // FIX 3: IMPORTANTE: text-4xl en móvil (no 6xl) para que 'Tecnológicas' quepa en pantalla
            // break-words asegura que si una palabra es muy larga, se parta en vez de romper el layout
            className="text-foreground max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight break-words"
          >
            Soluciones Tecnológicas Integrales para Honduras
          </motion.h1>

          <p className="text-muted-foreground mt-6 text-lg max-w-2xl">
            Somos MANU.OS. Desarrollamos plataformas web, automatizamos procesos y conectamos tu empresa con las mejores APIs del mundo para reducir costos y escalar operaciones.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button onClick={handleWhatsAppClick}>
              Agendar Consultoría
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="#soluciones"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Ver Servicios
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          {/* FIX 4: Asegurar que la línea punteada no sea más ancha que el contenedor */}
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden w-full max-w-full"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5 items-start">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold leading-tight">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm mt-1">
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
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-12 w-full px-5 md:px-0 md:mt-20 lg:container lg:mx-auto lg:mt-24"
      >
        <div className="relative aspect-[4/5] md:aspect-[16/9] w-full max-h-[800px] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/heroweb6.jpg"
            alt="hero"
            fill
            className="object-cover object-left-top"
          />
        </div>
      </motion.div>
    </section>
  );
};
