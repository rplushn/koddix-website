"use client";

import {
  Code,
  Layout,
  Zap,
  Database,
  Shield,
  CheckCircle2,
  ArrowRight,
  Rocket,
  Cloud,
  Server,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

import { Background } from "@/components/background";
import { DashedLine } from "@/components/dashed-line";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  handleWhatsAppClick,
  handleWhatsAppDevelopmentClick,
} from "@/lib/whatsapp";

const devopsSteps = [
  { label: "Planificación", icon: Layout },
  { label: "Diseño", icon: Code },
  { label: "Desarrollo", icon: Zap },
  { label: "Testing", icon: Shield },
  { label: "Despliegue", icon: Rocket },
  { label: "Mantenimiento", icon: Server },
];

const projectTypes = [
  {
    title: "Plataformas SaaS",
    description:
      "Aplicaciones multi-tenant escalables con suscripciones y facturación integrada.",
  },
  {
    title: "E-commerce Headless",
    description:
      "Tiendas online de alto rendimiento con arquitectura desacoplada y APIs potentes.",
  },
  {
    title: "Dashboards Administrativos",
    description:
      "Interfaces de gestión con visualización de datos en tiempo real y analytics avanzados.",
  },
  {
    title: "Aplicaciones Progresivas (PWA)",
    description:
      "Apps web que funcionan offline, con notificaciones push y experiencia nativa.",
  },
];

const qualityChecklist = [
  "Código limpio",
  "Testing Automatizado",
  "Encriptación de datos",
  "Cumplimiento GDPR",
];

const cloudProviders = ["Vercel", "AWS", "Docker"];

// Componente Marquee Infinito para DevOps
const DevOpsMarquee = () => {
  // Duplicamos el array para crear el efecto infinito
  const duplicatedSteps = [...devopsSteps, ...devopsSteps];

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-scroll gap-4 md:gap-6 lg:gap-8 w-fit">
        {duplicatedSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={`${step.label}-${index}`} className="flex shrink-0 items-center gap-2">
              <div className="flex flex-col items-center gap-2">
                <div className="flex size-12 items-center justify-center rounded-lg border bg-background">
                  <Icon className="size-5" style={{ fontSize: '30px' }} />
                </div>
                <span className="text-muted-foreground text-sm font-medium" style={{ fontSize: '20px' }}>
                  {step.label}
                </span>
              </div>
              {index < duplicatedSteps.length - 1 && (
                <ArrowRight className="text-muted-foreground hidden size-4 md:block" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Componente de ventana de código simulada
const CodeWindow = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-border/50 bg-[#1e1e1e] shadow-lg">
      {/* Barra de título de ventana */}
      <div className="flex items-center gap-2 border-b border-border/20 bg-[#252526] px-4 py-2">
        <div className="flex gap-1.5">
          <div className="size-3 rounded-full bg-[#ff5f56]" />
          <div className="size-3 rounded-full bg-[#ffbd2e]" />
          <div className="size-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="ml-2 font-mono text-xs text-gray-400">
          App.tsx
        </span>
      </div>
      {/* Código simulado */}
      <div className="p-4 font-mono text-sm">
        <div className="space-y-1">
          <div>
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#4ec9b0]">App</span>{" "}
            <span className="text-[#d4d4d4]">=</span>{" "}
            <span className="text-[#569cd6]">()</span>{" "}
            <span className="text-[#d4d4d4]">=&gt;</span>{" "}
            <span className="text-[#d4d4d4]">{"{"}</span>
          </div>
          <div className="pl-4">
            <span className="text-[#569cd6]">return</span>{" "}
            <span className="text-[#d4d4d4]">(</span>
          </div>
          <div className="pl-8">
            <span className="text-[#ce9178]">&lt;div</span>{" "}
            <span className="text-[#9cdcfe]">className</span>
            <span className="text-[#d4d4d4]">=</span>
            <span className="text-[#ce9178]">"container"</span>
            <span className="text-[#ce9178]">&gt;</span>
          </div>
          <div className="pl-12">
            <span className="text-[#ce9178]">&lt;h1</span>
            <span className="text-[#ce9178]">&gt;</span>
            <span className="text-[#d4d4d4]">Hello World</span>
            <span className="text-[#ce9178]">&lt;/h1&gt;</span>
          </div>
          <div className="pl-8">
            <span className="text-[#ce9178]">&lt;/div&gt;</span>
          </div>
          <div className="pl-4">
            <span className="text-[#d4d4d4]">);</span>
          </div>
          <div>
            <span className="text-[#d4d4d4]">{"};"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DesarrolloPage() {
  return (
    <>
      <div className="py-28 lg:py-32 lg:pt-44" style={{ paddingTop: '0px' }}>
      <Background>
        {/* Hero Bicolumna */}
        <FadeIn>
          <section className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-20" style={{ marginBottom: '0px' }}>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center" style={{ paddingTop: '200px', marginTop: '0px' }}>
              {/* Columna Izquierda */}
              <div>
                <h1 className="mb-4 text-4xl tracking-tight md:text-5xl lg:text-6xl" style={{ fontSize: '70px' }}>
                  Ingeniería de Software de Clase Mundial
                </h1>
                <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
                  Construimos aplicaciones web y móviles rápidas, seguras y
                  escalables.
                </p>
                <Button size="lg" onClick={handleWhatsAppClick}>
                  Cotizar Proyecto
                </Button>
              </div>
              {/* Columna Derecha - Ventana de Código */}
              <div className="order-first lg:order-last">
                <CodeWindow />
              </div>
            </div>
          </section>
        </FadeIn>

        <DashedLine className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl" />

        {/* DevOps Lifecycle - Marquee Infinito */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-20"
        >
          <DevOpsMarquee />
        </motion.section>

        <DashedLine className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl" />

        {/* Sección Frontend */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-20"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-4 text-3xl tracking-tight md:text-4xl lg:text-5xl"
              >
                Experiencias de Usuario Fluidas
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground mb-6 text-lg leading-relaxed"
              >
                Construimos interfaces modernas con las tecnologías más rápidas
                del mercado.
              </motion.p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="grid gap-5 md:grid-cols-3 lg:grid-cols-1"
              >
                {[
                  { title: "Next.js", desc: "SSR y SSG para máximo rendimiento" },
                  { title: "React", desc: "Componentes reutilizables y eficientes" },
                  { title: "Tailwind CSS", desc: "Estilos utility-first y responsive" },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.title}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg border p-4"
                  >
                    <div className="mb-2 font-mono text-base font-semibold">
                      {tech.title}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {tech.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6 flex flex-wrap gap-2"
              >
                {["Performance", "SEO", "Accessibility"].map((tag) => (
                  <span
                    key={tag}
                    className="text-muted-foreground rounded border border-border/50 bg-muted/30 px-3 py-1 font-mono text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-64 overflow-hidden rounded-xl shadow-lg lg:h-80"
            >
              <Image
                src="/features/desarrolloweb.jpg"
                alt="Desarrollo Frontend Moderno"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </motion.section>

        <DashedLine className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl" />

        {/* Sección Backend */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-20"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-64 overflow-hidden rounded-xl shadow-lg lg:h-80 lg:order-1"
            >
              <Image
                src="/resource-allocation/desarrolloamedida.jpg"
                alt="Arquitectura Backend Escalable"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
            </motion.div>
            <div className="rounded-2xl bg-muted/30 p-8 md:p-12 lg:order-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-4 text-3xl tracking-tight md:text-4xl lg:text-5xl"
              >
                Arquitecturas Robustas
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground mb-6 text-lg leading-relaxed"
              >
                Backends escalables diseñados para manejar millones de
                peticiones.
              </motion.p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="grid gap-5 md:grid-cols-3 lg:grid-cols-1"
              >
                {[
                  { title: "APIs REST/GraphQL", desc: "Endpoints optimizados y documentados" },
                  { title: "SQL/NoSQL", desc: "Bases de datos según necesidad" },
                  { title: "Auth Segura", desc: "JWT, OAuth2, y encriptación" },
                ].map((tech) => (
                  <motion.div
                    key={tech.title}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg border border-border/50 bg-background p-4"
                  >
                    <div className="mb-2 font-mono text-base font-semibold">
                      {tech.title}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {tech.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        <DashedLine className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl" />

        {/* Grid de Tipos de Proyecto */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-20"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid gap-6 md:grid-cols-2 lg:gap-8"
          >
            {projectTypes.map((project) => (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card className="h-full border-border/50 transition-colors hover:bg-muted/30">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-2xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <DashedLine className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl" />

        {/* Calidad y Seguridad */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-20"
        >
          <div className="mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-center text-3xl tracking-tight md:text-4xl lg:text-5xl"
            >
              Calidad y Seguridad
            </motion.h2>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="grid gap-4 md:grid-cols-2 lg:grid-cols-1"
              >
                {qualityChecklist.map((item) => (
                  <motion.div
                    key={item}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 rounded-lg border border-border/50 p-4"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-primary" />
                    <span className="font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative h-64 overflow-hidden rounded-xl shadow-lg lg:h-80"
              >
                <Image
                  src="/resource-allocation/soportelocal.jpg"
                  alt="Soporte y Calidad"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <DashedLine className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl" />

        {/* Infraestructura Cloud */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-20"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 text-center text-base font-medium uppercase tracking-wider text-muted-foreground"
          >
            Despliegue Global
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {cloudProviders.map((provider) => (
              <motion.div
                key={provider}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 rounded-lg border border-border/50 bg-background px-6 py-3"
              >
                <Cloud className="size-5" />
                <span className="font-mono text-lg font-semibold">
                  {provider}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <DashedLine className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl" />

        {/* CTA Final */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl border border-border/50 bg-primary p-8 text-center text-white md:p-12 lg:p-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 text-3xl tracking-tight md:text-4xl lg:text-5xl"
            >
              De la idea al código en tiempo récord
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground mb-8 text-base leading-relaxed md:text-lg"
            >
              Conversa directamente con nuestros ingenieros sobre tu proyecto.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                size="lg"
                onClick={handleWhatsAppDevelopmentClick}
                className="bg-white text-primary hover:bg-white/90"
              >
                Hablar con un Ingeniero
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>
      </Background>
      </div>
    </>
  );
}
