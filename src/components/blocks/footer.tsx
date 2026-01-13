import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Left Side - Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="inline-block">
              <span
                className="text-2xl font-black tracking-[-1.4px]"
                style={{
                  fontFamily: '"Roboto", -apple-system, BlinkMacSystemFont, sans-serif',
                }}
              >
                KODDIX
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Soluciones Tecnológicas Integrales
            </p>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Contacto
              </p>
              <a
                href="https://wa.me/50489502917"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                WhatsApp
              </a>
              <a
                href="mailto:hello@koddix.com"
                className="text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                hello@koddix.com
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Enlaces
              </p>
              <Link
                href="/contacto"
                className="text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                Contacto
              </Link>
              <Link
                href="/faq"
                className="text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 Koddix
          </p>
        </div>
      </div>
    </footer>
  );
}
