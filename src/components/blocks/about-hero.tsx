"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

export const AboutHero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col items-center gap-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
        >
          Transformando ideas en soluciones digitales con Koddix
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl text-xl"
        >
          Somos un equipo apasionado por la tecnología y la innovación. Ayudamos a empresas en Honduras y el mundo a escalar sus operaciones.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button size="lg" className="rounded-full">
            Conoce al Equipo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};