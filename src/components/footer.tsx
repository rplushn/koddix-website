"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Footer31Props {
  className?: string;
}

export function Footer31({ className }: Footer31Props) {
  return (
    <footer className={cn("relative overflow-hidden bg-background", className)}>
      {/* SVG Decorativo de Fondo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.svg
          className="absolute -bottom-1/2 -right-1/2 h-[800px] w-[800px] text-muted/20"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <motion.circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.circle
            cx="200"
            cy="200"
            r="100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
          />
          <motion.circle
            cx="200"
            cy="200"
            r="50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, delay: 0.9 }}
          />
        </motion.svg>
      </div>

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Columna Principal - Branding */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-2xl font-bold tracking-tight">
              MANU.OS
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md text-sm leading-relaxed">
              Soluciones Digitales Integrales. Transformamos ideas en realidad
              digital, escalando tu negocio con tecnología de vanguardia.
            </p>
            <div className="flex flex-col gap-3">
              <motion.a
                href="mailto:hello@manu.os"
                className="text-muted-foreground flex items-center gap-2 text-sm transition-colors hover:text-foreground"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Mail className="h-4 w-4" />
                hello@manu.os
              </motion.a>
              <motion.a
                href="tel:+50489502917"
                className="text-muted-foreground flex items-center gap-2 text-sm transition-colors hover:text-foreground"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Phone className="h-4 w-4" />
                +504 8950.2917
              </motion.a>
              <motion.div
                className="text-muted-foreground flex items-start gap-2 text-sm"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Tegucigalpa, Honduras</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Columna - Servicios */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Servicios
            </h4>
            <nav className="flex flex-col gap-3">
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link
                  href="/soluciones"
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                >
                  Soluciones Integrales
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link
                  href="/desarrollo"
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                >
                  Desarrollo de Software
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link
                  href="/consultoria"
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                >
                  Consultoría
                </Link>
              </motion.div>
            </nav>
          </motion.div>

          {/* Columna - Empresa */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Empresa
            </h4>
            <nav className="flex flex-col gap-3">
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link
                  href="/about"
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                >
                  Sobre Nosotros
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link
                  href="/contacto"
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                >
                  Contacto
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link
                  href="/pricing"
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                >
                  Precios
                </Link>
              </motion.div>
            </nav>
          </motion.div>

          {/* Columna - Newsletter */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-muted-foreground mb-4 text-sm">
              Suscríbete para recibir actualizaciones y ofertas exclusivas.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 border-border bg-background"
              />
              <Button
                type="submit"
                className="group"
                size="default"
              >
                Suscribirse
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Línea Divisoria */}
        <motion.div
          className="my-12 border-t border-border"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Footer Bottom */}
        <motion.div
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-muted-foreground text-center text-sm md:text-left">
            © {new Date().getFullYear()} MANU.OS - Soluciones Digitales
            Integrales. Todos los derechos reservados.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/privacy"
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
              >
                Privacidad
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/faq"
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
              >
                FAQ
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}
