"use client";

import Image from "next/image";

import {
  Code,
  Database,
  Smartphone,
  Workflow,
} from "lucide-react";
import { motion } from "motion/react";

import { Background } from "@/components/background";
import { DashedLine } from "@/components/dashed-line";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { handleWhatsAppClick } from "@/lib/whatsapp";

const services = [
  {
    title: "Desarrollo a Medida",
    description:
      "Plataformas web escalables construidas con tecnologías modernas y mejores prácticas.",
    icon: Code,
  },
  {
    title: "Automatización IA",
    description:
      "Procesos inteligentes que reducen trabajo manual y aumentan la productividad.",
    icon: Workflow,
  },
  {
    title: "Integración de APIs",
    description:
      "Conectamos tus herramientas favoritas en un ecosistema unificado y eficiente.",
    icon: Database,
  },
  {
    title: "Auditoría Tecnológica",
    description:
      "Análisis profundo de tu infraestructura para identificar oportunidades de mejora.",
    icon: Smartphone,
  },
];

const techStack = [
  "Next.js",
  "React",
  "Node.js",
  "Python",
  "AWS",
  "Vercel",
  "TypeScript",
  "PostgreSQL",
];

const methodology = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Analizamos tu infraestructura actual, procesos y necesidades específicas para diseñar la solución óptima.",
  },
  {
    number: "02",
    title: "Ejecución Ágil",
    description:
      "Desarrollamos e implementamos soluciones en sprints cortos con entregas incrementales y feedback continuo.",
  },
  {
    number: "03",
    title: "Escalado",
    description:
      "Aseguramos que tu plataforma crezca contigo, optimizando rendimiento y costos a medida que escalas.",
  },
];

export default function SolucionesPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        {/* Hero Section */}
        <FadeIn>
          <section className="container mb-28 lg:mb-32">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-3xl tracking-tight md:text-4xl lg:text-6xl mt-[100px]">
                Transformamos Complejidad en Eficiencia
              </h1>
              <p className="text-muted-foreground mt-6 text-lg leading-relaxed md:text-xl">
                Arquitectura de software y automatización de procesos diseñados
                para el crecimiento empresarial.
              </p>
            </div>
          </section>
        </FadeIn>

        <DashedLine className="container max-w-5xl" />

        {/* Bento Grid de Servicios */}
        <FadeIn delay={0.2}>
          <section className="container mt-28 lg:mt-32">
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <Card className="h-full transition-colors hover:bg-muted/50">
                      <CardContent className="p-6 md:p-8">
                        <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-muted">
                          <Icon className="size-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </FadeIn>

        <DashedLine className="container max-w-5xl mt-28 lg:mt-32" />

        {/* Deep Dive - Zig Zag */}
        <section className="container mt-28 lg:mt-32">
          {/* Bloque 1: Texto izquierda, Imagen derecha */}
          <FadeIn>
            <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-2xl tracking-tight md:text-3xl lg:text-4xl">
                  Desarrollo Web de Alto Rendimiento
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Construimos aplicaciones web modernas que no solo se ven bien,
                  sino que funcionan excepcionalmente. Utilizamos frameworks
                  de última generación para garantizar velocidad, seguridad y
                  escalabilidad.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cada proyecto es una oportunidad de crear algo que realmente
                  impulse tu negocio hacia adelante, con código limpio y
                  arquitectura sólida.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/features/desarrolloweb3.jpg"
                  alt="Innovación Tecnológica"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-xl object-cover w-full h-[400px]"
                />
              </div>
            </div>
          </FadeIn>

          {/* Bloque 2: Imagen izquierda, Texto derecha */}
          <FadeIn delay={0.2}>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="relative overflow-hidden rounded-2xl shadow-xl lg:order-1">
                <Image
                  src="/features/desarrolloweb2.jpg"
                  alt="Procesos a Medida"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-xl object-cover w-full h-[400px]"
                />
              </div>
              <div className="lg:order-2">
                <h2 className="mb-4 text-2xl tracking-tight md:text-3xl lg:text-4xl">
                  Automatización de Procesos Operativos
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Eliminamos tareas repetitivas y manuales mediante
                  automatización inteligente. Nuestras soluciones integran IA y
                  machine learning para optimizar flujos de trabajo complejos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Desde integraciones API hasta bots conversacionales, creamos
                  sistemas que trabajan 24/7 para liberar tiempo de tu equipo y
                  reducir errores humanos.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        <DashedLine className="container max-w-5xl mt-28 lg:mt-32" />

        {/* Stack Tecnológico */}
        <FadeIn delay={0.2}>
          <section className="container mt-28 lg:mt-32">
            <h3 className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Nuestro Arsenal Tecnológico
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <div className="rounded-lg border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50">
                    {tech}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeIn>

        <DashedLine className="container max-w-5xl mt-28 lg:mt-32" />

        {/* Metodología */}
        <FadeIn delay={0.2}>
          <section className="container mt-28 lg:mt-32">
            <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
              {methodology.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="text-center"
                >
                  <div className="mb-4 text-5xl font-bold tracking-tight text-muted-foreground md:text-6xl lg:text-7xl">
                    {step.number}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeIn>

        <DashedLine className="container max-w-5xl mt-28 lg:mt-32" />

        {/* CTA Final */}
        <FadeIn delay={0.2}>
          <section className="container mt-28 lg:mt-32 mb-28 lg:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="rounded-3xl bg-primary p-8 text-center text-white md:p-12 lg:p-16"
            >
              <h2 className="mb-4 text-2xl tracking-tight md:text-3xl lg:text-4xl">
                ¿Listo para modernizar tu empresa?
              </h2>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed md:text-base">
                Agenda una consultoría gratuita y descubre cómo podemos
                transformar tus procesos operativos.
              </p>
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-white text-primary hover:bg-white/90"
              >
                Agendar Consultoría
              </Button>
            </motion.div>
          </section>
        </FadeIn>
      </div>
    </Background>
  );
}
