"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  logo?: React.ReactNode
  navigation?: {
    name: string
    href: string
  }[]
  action?: {
    label: string
    href: string
  }
}

export function Navbar({
  logo = <span className="text-lg font-bold">MANU.OS</span>,
  navigation = [
    { name: "Soluciones", href: "#soluciones" },
    { name: "Procesos", href: "#procesos" },
    { name: "Precios", href: "/pricing" },
  ],
  action = {
    label: "Agendar Consultoría",
    href: "#contacto",
  },
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
       className={cn(
         // FIX NUCLEAR: Márgenes seguros para móvil
         "fixed top-6 z-50 transition-all duration-300",
         "left-4 right-4", 
         "max-w-2xl mx-auto" 
       )}
    >
      <nav
        className={cn(
          "flex items-center justify-between rounded-full px-6 py-3 transition-all",
          isScrolled || isMenuOpen
            ? "bg-background/80 border shadow-md backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-2">
          {logo}
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild size="sm" className="rounded-full">
            <Link href={action.href}>{action.label}</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute left-0 right-0 top-full mt-2 rounded-2xl border bg-background/95 p-4 shadow-xl backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t">
                <Button asChild className="w-full rounded-xl" size="lg">
                  <Link href={action.href} onClick={() => setIsMenuOpen(false)}>
                    {action.label}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
