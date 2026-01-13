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
    <section className="flex min-h-[80vh] flex-col justify-center py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-center items-center gap-8 md:gap-14 lg:flex-row lg:gap-[60px]" style={{ paddingLeft: '6px', paddingRight: '6px', marginLeft: '150px', marginRight: '0px', marginTop: '60px' }}>
        {/* Left side - Main content */}
        <div className="flex-1" style={{ marginLeft: '-20px' }}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-foreground max-w-4xl text-6xl font-black leading-tight tracking-tight md:text-7xl"
            style={{ marginLeft: '0px' }}
          >
            Soluciones Tecnológicas Integrales para Honduras
          </motion.h1>

          <p className="text-muted-foreground mt-6 text-lg">
            Somos Koddix. Desarrollamos plataformas web, automatizamos procesos y conectamos tu empresa con las mejores APIs del mundo para reducir costos y escalar operaciones.
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
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10" style={{ marginRight: '0px', marginLeft: '100px' }}>
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
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
        className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24"
      >
        <div className="relative h-[793px] w-full">
          <Image
            src="/heroweb6.jpg"
            alt="hero"
            fill
            className="rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </motion.div>
    </section>
  );
};