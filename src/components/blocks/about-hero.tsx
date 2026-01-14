"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { handleWhatsAppClick } from "@/lib/whatsapp";

export const AboutHero = () => {
  return (
    <section className="container py-20 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center" style={{ paddingTop: '100px' }}>
        {/* Columna Izquierda - Texto */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Tecnología Mundial al Alcance de Honduras
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
            LINEAL nació para ayudar a empresas y negocios hondureños a implementar tecnología de clase mundial de forma práctica y accesible.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Reducimos la brecha entre lo que antes parecía imposible, costoso y de proyectos largos, a tener las APIs mundiales integradas en plataformas propias construidas con los mismos códigos que usan HOY las empresas TOP del mundo.
          </p>
          <div className="pt-4">
            <Button size="lg" onClick={handleWhatsAppClick}>
              Contáctanos
            </Button>
          </div>
        </motion.div>

        {/* Columna Derecha - Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-none shadow-2xl">
            <Image
              src="/features/frontend1.jpg"
              alt="Equipo LINEAL"
              width={700}
              height={500}
              className="rounded-none object-cover w-full h-[400px] lg:h-[500px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};