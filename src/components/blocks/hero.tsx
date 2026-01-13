"use client";

import { ArrowRight, Terminal, Zap, Shield, Globe, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { handleWhatsAppClick } from "@/lib/whatsapp";

// Componente visual de "Código" para el Hero
const CodeWindow = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="relative w-full max-w-lg overflow-hidden rounded-xl border border-white/20 bg-black/90 shadow-2xl backdrop-blur-sm"
    >
      {/* Barra de título */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="size-3 rounded-full bg-[#ff5f56]" />
          <div className="size-3 rounded-full bg-[#ffbd2e]" />
          <div className="size-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="ml-4 flex items-center gap-2 rounded bg-black/50 px-2 py-0.5 text-xs text-muted-foreground">
          <Terminal className="size-3" />
          <span className="font-mono">koddix.config.ts</span>
        </div>
      </div>
      
      {/* Contenido del código */}
      <div className="p-6 font-mono text-sm leading-relaxed text-gray-300">
        <div className="space-y-1">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-purple-400">export</span> <span className="text-blue-400">const</span> <span className="text-yellow-300">Mission</span> <span className="text-white">=</span> <span className="text-yellow-300">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-white">{"{"}</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="pl-4"
          >
            <span className="text-purple-400">return</span> <span className="text-white">{"{"}</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="pl-8"
          >
            <span className="text-sky-300">innovation</span>: <span className="text-green-400">"Continuous"</span>,
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            className="pl-8"
          >
            <span className="text-sky-300">scalability</span>: <span className="text-blue-400">true</span>,
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
            className="pl-8"
          >
             <span className="text-sky-300">region</span>: <span className="text-green-400">"Honduras & Latam"</span>,
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="pl-4"
          >
            <span className="text-white">{"};"}</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
          >
            <span className="text-white">{"};"}</span>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 2.0 }}
             className="mt-4 border-t border-white/10 pt-4 text-xs text-gray-500"
          >
             {/* Terminal output simulation */}
             <div className="flex gap-2">
                <span className="text-green-500">➜</span>
                <span>Deploying to production...</span>
             </div>
             <div className="flex gap-2">
                <span className="text-green-500">➜</span>
                <span className="text-green-400">Success! Koddix is live. 🚀</span>
             </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-8 lg:py-12 mb-20 lg:mb-24">
      <div className="container relative z-10 mx-auto px-4">
        {/* Card Principal del Hero */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-900 px-6 pt-32 pb-24 shadow-sm md:px-12 lg:px-20 lg:pt-40 lg:pb-32 -mt-12">
          
          {/* Elementos decorativos de fondo */}
          <div className="absolute -left-20 -top-20 size-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />
          <div className="absolute -bottom-20 -right-20 size-96 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/20" />

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Columna Izquierda: Texto */}
            <div className="max-w-2xl mt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-zinc-800 shadow-sm backdrop-blur-sm dark:bg-white/10 dark:text-zinc-200">
                  <Globe className="size-4 text-blue-500" />
                  Soluciones Tecnológicas Integrales
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                // CHANGED: text-5xl -> text-4xl on mobile to prevent overflow/cutting off
                className="mt-6 text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight text-zinc-900 dark:text-white md:text-6xl lg:text-7xl"
              >
                Ingeniería de Software de Clase Mundial
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl"
              >
                Somos <span className="font-bold text-zinc-900 dark:text-white">Koddix</span>. Desarrollamos plataformas web, automatizamos procesos y conectamos tu empresa con el futuro digital.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button 
                  size="lg" 
                  onClick={handleWhatsAppClick} 
                  className="h-12 rounded-full px-8 text-base shadow-lg transition-transform hover:scale-105"
                >
                  Cotizar Proyecto
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="h-12 rounded-full border-zinc-300 px-8 text-base hover:bg-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-800"
                >
                  <a href="#soluciones" className="flex items-center gap-2">
                    Ver Servicios
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </motion.div>

              {/* Badges pequeños */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                // CHANGED: added flex-wrap to prevent horizontal overflow on small screens
                className="mt-12 flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="size-4 text-green-500" />
                  <span>Alta Escalabilidad</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="size-4 text-blue-500" />
                  <span>Seguridad Total</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="size-4 text-yellow-500" />
                  <span>Rendimiento Top</span>
                </div>
              </motion.div>
            </div>

            {/* Columna Derecha: Gráfico/Animación */}
            <div className="relative flex justify-center lg:justify-end">
               <CodeWindow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
