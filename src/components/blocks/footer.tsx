import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {/* Servicios */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Servicios
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/soluciones"
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
              >
                Soluciones Integrales
              </Link>
              <Link
                href="/desarrollo"
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
              >
                Desarrollo de Software
              </Link>
              <Link
                href="/consultoria"
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
              >
                Consultoría
              </Link>
            </nav>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Empresa
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/about"
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
              >
                Sobre Nosotros
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
              >
                Contacto
              </Link>
              <Link
                href="/pricing"
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
              >
                Precios
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Legal
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/privacy"
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
              >
                Privacidad
              </Link>
              <Link
                href="/faq"
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
              >
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="container border-t border-border pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Hecho en Tegucigalpa, Honduras. © 2026 Koddix - Soluciones Digitales
          Integrales
        </p>
      </div>
    </footer>
  );
}