"use client";

import Image from "next/image";

import { ArrowRight } from "lucide-react";
import Marquee from "react-fast-marquee";

import { DashedLine } from "../dashed-line";
import { FadeIn } from "../fade-in";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const items = [
  {
    quote: "Reducción de Costos Operativos",
    author: "Maria Mendoza",
    role: "Contabilidad",
    company: "ZAS CONTABLES Y ASOCIADOS",
    image: "/testimonials/chica2.png",
  },
  {
    quote: "Automatización de Procesos Críticos",
    author: "Ing. Roberto Zelaya",
    role: "Gerente IT",
    company: "Banco Promerica (Consultor Externo)",
    image: "/testimonials/joven3.png",
  },
  {
    quote: "Soporte Técnico Local 24/7",
    author: "Javier López",
    role: "Fundador",
    company: "Startup Honduras Tech",
    image: "/testimonials/joven4.png",
  },
  {
    quote: "Estrategia Digital a Medida",
    author: "Andrea Espinoza",
    role: "Gerente General",
    company: "Inversiones del Valle S. de R.L.",
    image: "/testimonials/chica4.png",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof items)[0];
}) => {
  return (
    <Card className="bg-muted mr-5 h-full w-[320px] shrink-0 overflow-hidden border-none rounded-none sm:w-[380px] lg:w-[420px]">
      <CardContent className="flex h-full flex-col p-0">
        <div className="relative h-[288px] lg:h-[328px]">
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between gap-10 p-6">
          <blockquote className="font-display text-lg leading-none! font-medium md:text-xl lg:text-2xl">
            {testimonial.quote}
          </blockquote>
          <div className="space-y-0.5">
            <div className="text-primary font-semibold">
              {testimonial.author}, {testimonial.role}
            </div>
            <div className="text-muted-foreground text-sm">
              {testimonial.company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <FadeIn>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              ¿Por qué elegir LINEAL HN?
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              Resultados reales para empresas que buscan innovación sin complicaciones técnicas.
            </p>
            <Button variant="outline" className="shadow-md">
              Lee las Historias de Nuestros Clientes <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="relative mt-8 md:mt-12 lg:mt-20">
            <div className="overflow-hidden">
              <Marquee
                speed={30}
                pauseOnHover
                gradient
                gradientColor="#ffffff"
                gradientWidth={100}
                direction="left"
                className="[&>div]:flex [&>div]:gap-0"
              >
                {/* Renderizar los testimonios dos veces para un loop suave */}
                {items.map((testimonial, index) => (
                  <TestimonialCard key={`first-${index}`} testimonial={testimonial} />
                ))}
                {items.map((testimonial, index) => (
                  <TestimonialCard key={`second-${index}`} testimonial={testimonial} />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </FadeIn>
  );
};