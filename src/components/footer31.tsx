"use client";

import React from "react";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const NAVIGATION = [
  { label: "Inicio", href: "/" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Desarrollo", href: "/desarrollo" },
  { label: "Consultoría", href: "/consultoria" },
  { label: "Contacto", href: "/contacto" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/manuos" },
  { label: "WhatsApp", href: "https://wa.me/50489502917" },
];

const FOOTER_LINKS = [
  { label: "Privacidad", href: "/privacy" },
  { label: "FAQ", href: "/faq" },
];

interface Footer31Props {
  className?: string;
}

const Footer31 = ({ className }: Footer31Props) => {
  return (
    <section
      className={cn("bg-black text-white pt-32 pb-0 mb-0", className)}
    >
      <div className="container mx-auto max-w-7xl pb-0 mb-0">
        <div className="flex flex-col justify-between gap-15 lg:flex-row lg:items-start">
          <div className="flex flex-col gap-10">
            <p className="relative text-4xl font-medium tracking-tight lg:text-5xl text-white">
              Soluciones Digitales Integrales
            </p>
            <div className="space-y-1 text-sm font-light tracking-tight lg:text-base">
              <p>Contacto : </p>
              <a href="mailto:hello@manu.os" className="text-white hover:text-white/60">hello@manu.os</a>
            </div>
          </div>
          <div className="grid w-full max-w-md grid-cols-2 gap-10 text-sm font-light lg:text-base lg:ml-auto">
            <ul className="space-y-1">
              {NAVIGATION.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="tracking-tight text-white hover:text-white/60"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-1">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-1 tracking-tight text-white hover:text-white/60"
                  >
                    {item.label}{" "}
                    <ArrowUpRight className="size-3.5 text-white group-hover:text-white/60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-15 lg:flex-row lg:items-start">
          <div className="flex w-full max-w-md flex-col gap-10">
            <div className="space-y-1 text-sm font-light tracking-tight lg:text-base">
              <p>Sign up for newsletter : </p>
              <form className="flex w-full items-end border-b border-b-white/20">
                <Input
                  type="text"
                  placeholder="Name*"
                  className="mt-10 rounded-none border-0 !bg-transparent p-0 uppercase shadow-none placeholder:text-white/30 text-white focus-visible:ring-0 lg:text-base"
                />
                <Button type="submit" variant="ghost" className="text-white hover:text-white/60">
                  <ArrowRight className="text-white" />
                </Button>
              </form>
            </div>
          </div>
          <div className="grid w-full max-w-md grid-cols-2 gap-10 text-sm font-light lg:text-base lg:ml-auto">
            <div className="w-32 text-white">Tegucigalpa, Honduras</div>
            <ul className="space-y-1">
              {FOOTER_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-1 tracking-tight text-white hover:text-white/60"
                  >
                    {item.label}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-20 w-full lg:mt-32 pb-0 mb-0">
          <div className="w-full flex justify-center pb-0 mb-0">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[12rem] md:text-[20rem] font-black tracking-tighter text-center leading-none text-white mb-0 pb-0"
            >
              MANU.OS
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer31 };
