"use client";

import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export const About = () => {
  return (
    <section className="py-28 lg:py-32">
      <div className="container flex flex-col gap-10 md:gap-20">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge variant="outline">Sobre Nosotros</Badge>
              </div>
              <h1 className="max-w-lg text-3xl font-bold tracking-tighter md:text-4xl">
                ¿Por qué elegir Koddix?
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed tracking-tight">
                Resultados reales para empresas que buscan innovación sin complicaciones técnicas.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2">
                <div className="bg-primary/10 rounded-full p-1">
                  <Check className="text-primary h-4 w-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">Reducción de Costos Operativos</h3>
                  <p className="text-muted-foreground text-sm">
                    Maria Mendoza, Contabilidad - "Automatizamos reportes que nos tomaban días."
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-primary/10 rounded-full p-1">
                  <Check className="text-primary h-4 w-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">Automatización de Procesos Críticos</h3>
                  <p className="text-muted-foreground text-sm">
                    Ing. Roberto Zelaya, Gerente IT - "Integración perfecta con nuestros sistemas."
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-primary/10 rounded-full p-1">
                  <Check className="text-primary h-4 w-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">Soporte Técnico Local 24/7</h3>
                  <p className="text-muted-foreground text-sm">
                    Javier López, Fundador - "Siempre responden cuando los necesitamos."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};