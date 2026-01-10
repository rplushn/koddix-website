"use client";

import {
  CornerDownRight,
  Mail,
  Smartphone,
  DollarSign,
  LifeBuoy,
  Handshake,
  MapPin,
  MessageCircle,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { handleWhatsAppClick } from "@/lib/whatsapp";

interface Contact16Props {
  className?: string;
}

const Contact16 = ({ className }: Contact16Props) => {
  return (
    <section
      className={cn("dark bg-background py-20 text-foreground", className)}
    >
      <div className="container">
        <h1 className="text-5xl font-semibold tracking-tight lg:text-8xl">
          Envíanos un Mensaje
          <sup>*</sup>
        </h1>
        <div className="mt-20 flex flex-col justify-between gap-10 lg:flex-row">
          <div className="w-full max-w-md">
            <p className="tracking-tight text-muted-foreground/50">
            Tu proyecto merece la mejor atención. Ya sea que tengas una idea disruptiva o necesites optimizar tus operaciones actuales, estamos aquí para escucharte. Cuéntanos brevemente tu desafío y un experto te contactará en menos de 24 horas.
            </p>
            <div className="mt-10 flex flex-col gap-6">
              <a
                className="flex items-center gap-3 text-foreground hover:text-foreground/80 transition-colors"
                href="https://wa.me/50489502917"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Smartphone className="h-6 w-6" />
                <span className="text-2xl font-bold md:text-3xl">
                  +504 8950.2917
                </span>
              </a>
              <a
                className="flex items-center gap-1 text-foreground/40 hover:text-foreground transition-colors"
                href="mailto:hola@manuos.io"
              >
                <Mail className="h-4 w-4" /> hola@manuos.io
              </a>
            </div>
          </div>
          <form className="col-span-4 flex w-full flex-col gap-2 lg:pl-30">
            <Input
              type="text"
              placeholder="Nombre*"
              className="h-19 rounded-none border-0 border-b border-b-foreground/15 !bg-transparent placeholder:text-foreground/20 focus-visible:ring-0"
            />
            <Input
              type="email"
              placeholder="Telefono*"
              className="h-19 rounded-none border-0 border-b border-b-foreground/15 !bg-transparent placeholder:text-foreground/20 focus-visible:ring-0"
            />
            <Input
              type="text"
              placeholder="Mensaje (Algo super breve de tu proyecto)"
              className="h-19 rounded-none border-0 border-b border-b-foreground/15 !bg-transparent placeholder:text-foreground/20 focus-visible:ring-0"
            />
            <Button
              variant="ghost"
              className="mt-15 flex h-15 items-center justify-start gap-2 text-base"
            >
              <CornerDownRight className="size-6" />
              Queremos escucharte
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="dark bg-background py-20 text-foreground lg:py-32">
        <div className="container">
          <div className="mt-[150px] grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Columna Izquierda */}
            <div className="space-y-8">
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                Conectemos tu Visión con la Realidad
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
                Estamos listos para escalar tu negocio. Elige tu canal preferido
                y empecemos hoy mismo.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chatear en WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    document
                      .getElementById("contact-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Llamada
                </Button>
              </div>
            </div>

            {/* Columna Derecha */}
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-2xl"
              >
                <Image
                  src="/features/soportelocal.jpg"
                  alt="Contacto MANU.OS"
                  width={600}
                  height={500}
                  className="h-full w-full rounded-2xl object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario Section */}
      <div id="contact-form">
        <Contact16 />
      </div>

      {/* Ubicación Section */}
      <section className="dark bg-background py-20 text-foreground">
        <div className="container">
          <h2 className="mb-12 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Nuestra Base de Operaciones
          </h2>
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative h-[400px] w-full md:h-[500px]">
              <Image
                src="/features/tegucigalpa.jpg"
                alt="Ubicación Tegucigalpa"
                fill
                className="object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-6 left-6 rounded-lg bg-background/95 px-6 py-4 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-lg font-semibold">
                    Tegucigalpa, Honduras
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canales de Atención Section */}
      <section className="dark bg-background py-20 text-foreground">
        <div className="container">
          <h2 className="mb-12 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Canales de Atención
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border/50 bg-background/50 transition-colors hover:bg-background/80">
              <CardContent className="p-6">
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Ventas</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Para nuevos proyectos
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  className="w-full"
                >
                  Contactar
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-background/50 transition-colors hover:bg-background/80">
              <CardContent className="p-6">
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <LifeBuoy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Soporte</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Para clientes actuales
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  className="w-full"
                >
                  Contactar
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-background/50 transition-colors hover:bg-background/80">
              <CardContent className="p-6">
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Alianzas</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Para partners y proveedores
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  className="w-full"
                >
                  Contactar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Rápido Section */}
      <section className="dark bg-background py-20 text-foreground">
        <div className="container max-w-3xl">
          <h2 className="mb-12 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Preguntas Frecuentes
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                ¿Cuál es el tiempo de respuesta?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Respondemos todas las consultas en un plazo máximo de 24 horas
                hábiles. Para proyectos urgentes, ofrecemos respuesta en menos
                de 4 horas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                ¿Trabajan con clientes internacionales?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, trabajamos con clientes de todo el mundo. Ofrecemos
                servicios remotos y adaptamos nuestros horarios para facilitar
                la comunicación en diferentes zonas horarias.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                ¿Ofrecen consultoría presencial?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, ofrecemos consultoría presencial en Tegucigalpa y áreas
                metropolitanas. Para otras ubicaciones, coordinamos visitas
                según la necesidad del proyecto.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="dark bg-background py-20 text-foreground">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-3xl border border-border/50 bg-background/50 p-12 text-center backdrop-blur-sm">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              No dejes tu proyecto para mañana
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Comienza hoy mismo. Nuestro equipo está listo para ayudarte.
            </p>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Chatear ahora
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
