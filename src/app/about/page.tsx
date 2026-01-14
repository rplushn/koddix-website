"use client";

import { motion } from "motion/react";
import { Globe, Zap, Target } from "lucide-react";
import { Background } from "@/components/background";
import { About } from "@/components/blocks/about";
import { AboutHero } from "@/components/blocks/about-hero";
import { DashedLine } from "@/components/dashed-line";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <AboutHero />

        <About />
        
        <div className="pt-28 lg:pt-32">
          <DashedLine className="container max-w-5xl scale-x-115" />
          
          {/* Nuestra Historia */}
          <section className="container mt-28 lg:mt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6">
                Nuestra Historia
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fundada en Florida por hondureños visionarios, KODDIX nació con una misión clara: traer lo mejor de la tecnología mundial a Honduras. Queremos servir a empresas y negocios hondureños, cerrando la brecha tecnológica que antes parecía imposible de superar.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="h-full rounded-none">
                  <CardContent className="p-6">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-none bg-primary/10">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Visión Global</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Conectamos Honduras con las mejores prácticas y tecnologías del mundo, sin barreras ni limitaciones.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full rounded-none">
                  <CardContent className="p-6">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-none bg-primary/10">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Rapidez y Eficiencia</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Lo que antes tomaba meses, ahora se logra en semanas. Implementación ágil con resultados medibles.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="h-full rounded-none">
                  <CardContent className="p-6">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-none bg-primary/10">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Compromiso Local</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Nuestro propósito es impulsar el crecimiento de negocios hondureños con tecnología de clase mundial.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </Background>
  );
}