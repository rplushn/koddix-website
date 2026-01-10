"use client";

import { Check } from "lucide-react";

import { FadeIn } from "../fade-in";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { handleWhatsAppClick } from "@/lib/whatsapp";

const plans = [
  {
    name: "Diagnóstico",
    subtitle: "Gratuito",
    description: "Conoce el estado actual de tu tecnología sin costo.",
    features: [
      "Auditoría Inicial",
      "Reporte de Hallazgos",
      "Propuesta de Mejora",
      "Sin Compromiso",
    ],
    buttonText: "Solicitar Ahora",
    buttonVariant: "outline" as const,
  },
  {
    name: "Pymes",
    subtitle: "A Cotizar",
    description: "Digitalización rápida para negocios en crecimiento.",
    features: [
      "Sitio Web Moderno",
      "Integración WhatsApp API",
      "Correo Corporativo",
      "Soporte Técnico 8/5",
    ],
    buttonText: "Cotizar Proyecto",
    buttonVariant: "default" as const,
  },
  {
    name: "Corporativo",
    subtitle: "A Medida",
    description: "Infraestructura robusta para operaciones críticas.",
    features: [
      "Desarrollo de Software Custom",
      "Integraciones ERP/SAP",
      "Ciberseguridad Avanzada",
      "Soporte Prioritario 24/7",
    ],
    buttonText: "Contactar Ventas",
    buttonVariant: "outline" as const,
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  return (
    <FadeIn>
      <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Planes de Servicio
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Elige el nivel de acompañamiento que tu empresa necesita hoy.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card key={plan.name}>
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-muted-foreground text-lg font-medium">
                      {plan.subtitle}
                    </div>
                  </div>
                </div>

                <span className="text-muted-foreground text-sm">
                  {plan.description}
                </span>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={plan.buttonVariant}
                  onClick={handleWhatsAppClick}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </FadeIn>
  );
};
