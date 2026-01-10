import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Servicios",
    questions: [
      {
        question: "¿Cuánto tiempo toma desarrollar una plataforma a medida?",
        answer:
          "Depende de la complejidad. Un sitio corporativo toma de 2 a 4 semanas, mientras que una plataforma a medida (ERP/CRM) puede tomar de 2 a 3 meses. Entregamos cronogramas detallados desde el día uno.",
      },
      {
        question: "¿Ofrecen mantenimiento después de entregar el proyecto?",
        answer:
          "Sí. Todos nuestros desarrollos incluyen 3 meses de garantía técnica. Después, ofrecemos planes de soporte mensual para actualizaciones, seguridad y mejoras continuas.",
      },
      {
        question: "¿Pueden integrar Inteligencia Artificial en mi negocio?",
        answer:
          "Absolutamente. Implementamos chatbots de atención al cliente, análisis de datos predictivo y automatización de procesos usando las últimas APIs de OpenAI y Anthropic.",
      },
    ],
  },
  {
    title: "Pagos y Facturación",
    questions: [
      {
        question: "¿Aceptan pagos en Lempiras y Dólares?",
        answer:
          "Aceptamos ambas monedas mediante transferencia bancaria local (BAC, Ficohsa, Atlántida) o tarjeta de crédito corporativa.",
      },
      {
        question: "¿Emiten factura válida para el SAR?",
        answer:
          "Sí, somos una empresa legalmente constituida en Honduras. Emitimos factura CAI válida para todos sus efectos fiscales.",
      },
    ],
  },
  {
    title: "Garantía y Soporte",
    questions: [
      {
        question: "¿Qué incluye la garantía de sus desarrollos?",
        answer:
          "Corrección de cualquier error de código (bug) que aparezca durante los primeros 90 días, sin costo adicional.",
      },
      {
        question: "¿Cómo reporto un fallo crítico en mi sistema?",
        answer:
          "Nuestros clientes tienen acceso a un canal de soporte prioritario vía WhatsApp y Email con tiempos de respuesta garantizados menores a 4 horas.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32 bg-white", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                ¿Tienes Preguntas?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                ¿Tienes Preguntas?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              Resolvemos tus dudas principales aquí. Si necesitas más detalles,{" "}
              <Link href="/contacto" className="underline underline-offset-4">
                contáctanos
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
