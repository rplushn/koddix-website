import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Globe } from "@/components/magicui/globe";

const navigationSections = [
  {
    title: "SERVICIOS",
    links: [
      { name: "Desarrollo de Software", href: "/desarrollo" },
      { name: "Soluciones Integrales", href: "/soluciones" },
      { name: "Consultoría", href: "/consultoria" },
    ],
  },
  {
    title: "EMPRESA",
    links: [
      { name: "Sobre Nosotros", href: "/about" },
      { name: "Contacto", href: "/contacto" },
      { name: "Precios", href: "/pricing" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { name: "Privacidad", href: "/privacy" },
      { name: "FAQ", href: "/faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-background relative overflow-hidden border-t">
      <div className="container relative z-20 pt-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-6 lg:max-w-md">
            <div>
              <Link href="/" className="inline-block">
                <h2 className="text-2xl font-black tracking-tight">
                  KODDIX <span className="font-normal text-muted-foreground">HONDURAS</span>
                </h2>
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">
                Ingeniería de software de clase mundial. Conectamos tu empresa con el futuro digital.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/50489502917" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-medium transition-colors hover:text-primary">
                <Phone className="h-4 w-4" /> <span>+504 8950-2917</span>
              </a>
              <a href="mailto:soporte@koddix.com" className="flex items-center gap-3 text-sm font-medium transition-colors hover:text-primary">
                <Mail className="h-4 w-4" /> <span>soporte@koddix.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> <span>Tegucigalpa, Honduras</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {navigationSections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">{section.title}</h3>
                <nav className="flex flex-col gap-2">
                  {section.links.map((link, linkIdx) => (
                    <Link key={linkIdx} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative h-60 w-full overflow-hidden lg:h-80 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <Globe className="absolute top-10 left-1/2 -translate-x-1/2 scale-[2] md:scale-[1.5] lg:top-16 lg:scale-[1.8] opacity-100" />
      </div>
    </footer>
  );
}
