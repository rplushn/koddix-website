"use client";

import {
  CheckCircle2,
  Cloud,
  Shield,
  Code,
  BarChart3,
} from "lucide-react";
import Image from "next/image";

import { Background } from "@/components/background";
import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { handleWhatsAppClick } from "@/lib/whatsapp";

export default function ConsultoriaPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        {/* Hero Section */}
        <section className="container mb-28 lg:mb-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl tracking-tight md:text-4xl lg:text-[58px] mt-[100px]">
              Consultoría Tecnológica Especializada
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              Transformamos desafíos empresariales en soluciones tecnológicas
              escalables. Nuestro equipo de expertos analiza, diseña e
              implementa estrategias digitales a medida para tu negocio.
            </p>
            <div className="mt-8">
              <Button size="lg" onClick={handleWhatsAppClick}>
                Solicitar Consultoría
              </Button>
            </div>
          </div>
        </section>

        <DashedLine className="container max-w-5xl" />

        {/* Problema Section */}
        <section className="container mt-28 lg:mt-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl tracking-tight md:text-3xl lg:text-4xl">
                Identificamos y Resolvemos Problemas Reales
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Muchas empresas enfrentan desafíos operativos que limitan su
                crecimiento. Procesos manuales, sistemas desconectados y falta
                de visibilidad en tiempo real generan ineficiencias y costos
                ocultos.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Nuestra consultoría comienza con un análisis profundo de tus
                procesos actuales para identificar cuellos de botella,
                oportunidades de automatización y áreas de mejora.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/features/identificamos.jpg"
                alt="Consultoría y Soporte Local"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </section>

        <DashedLine className="container max-w-5xl mt-28 lg:mt-32" />

        {/* Metodología Section */}
        <section className="container mt-28 lg:mt-32">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-2xl tracking-tight md:text-3xl lg:text-4xl">
              Nuestra Metodología
            </h2>
            <p className="text-muted-foreground mt-4">
              Un proceso estructurado en tres fases para garantizar resultados
              medibles
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-4 flex size-16 items-center justify-center rounded-lg bg-muted text-3xl font-bold">
                  1
                </div>
                <CardTitle>1. Auditoría Profunda</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Analizamos tu infraestructura actual, código legado y cuellos
                  de botella operativos sin interrumpir tu negocio.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4 flex size-16 items-center justify-center rounded-lg bg-muted text-3xl font-bold">
                  2
                </div>
                <CardTitle>2. Diseño de Arquitectura</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Seleccionamos el stack tecnológico exacto (AWS, Vercel, Azure)
                  que equilibra costo, rendimiento y escalabilidad.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4 flex size-16 items-center justify-center rounded-lg bg-muted text-3xl font-bold">
                  3
                </div>
                <CardTitle>3. Plan de Acción</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Entregamos una hoja de ruta detallada con hitos, presupuestos
                  y tiempos de ejecución claros.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <DashedLine className="container max-w-5xl mt-28 lg:mt-32" />

        {/* Expertise Section */}
        <section className="container mt-28 lg:mt-32">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-2xl tracking-tight md:text-3xl lg:text-4xl">
              Áreas de Expertise
            </h2>
            <p className="text-muted-foreground mt-4">
              Especialización en tecnologías y metodologías modernas
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                    <Cloud className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Cloud & DevOps</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      Migración a la nube, reducción de costos AWS/Azure.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                    <Shield className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Ciberseguridad</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      Protección de datos críticos y cumplimiento normativo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                    <Code className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Modernización de Legacy
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      Transformamos sistemas viejos en plataformas web modernas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2 lg:col-span-3">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                    <BarChart3 className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Data Analytics</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      Dashboards ejecutivos para toma de decisiones.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <DashedLine className="container max-w-5xl mt-28 lg:mt-32" />

        {/* Entregables Section */}
        <section className="container mt-28 lg:mt-32">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-2xl tracking-tight md:text-3xl lg:text-4xl">
              Entregables de la Consultoría
            </h2>
            <p className="text-muted-foreground mt-4">
              Documentación completa y herramientas para implementar las
              soluciones propuestas
            </p>
          </div>
          <div className="mx-auto max-w-2xl">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold">Documento de Análisis</h3>
                      <p className="text-muted-foreground mt-1 text-sm">
                        Diagnóstico detallado con hallazgos y recomendaciones.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold">Roadmap de Implementación</h3>
                      <p className="text-muted-foreground mt-1 text-sm">
                        Plan de acción con fases, tiempos y recursos necesarios.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold">Prototipos y Mockups</h3>
                      <p className="text-muted-foreground mt-1 text-sm">
                        Diseños visuales de las soluciones propuestas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold">Sesión de Presentación</h3>
                      <p className="text-muted-foreground mt-1 text-sm">
                        Reunión ejecutiva para presentar resultados y próximos
                        pasos.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <DashedLine className="container max-w-5xl mt-28 lg:mt-32" />

        {/* CTA Final Section */}
        <section className="container mt-28 lg:mt-32 mb-28 lg:mb-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl tracking-tight md:text-3xl lg:text-4xl">
              ¿Listo para Transformar tu Negocio?
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Agenda una consultoría inicial sin compromiso. Analizaremos tus
              necesidades y te presentaremos un plan de acción personalizado.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" onClick={handleWhatsAppClick}>
                Agendar Consultoría Gratuita
              </Button>
              <Button size="lg" variant="outline">
                Ver Casos de Estudio
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Background>
  );
}
