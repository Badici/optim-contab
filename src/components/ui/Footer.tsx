import Image from "next/image";
import { Container } from "./Container";

const links = [
  { href: "#despre", label: "Despre noi" },
  { href: "#servicii", label: "Servicii" },
  { href: "#parteneri", label: "Parteneri" },
  { href: "#testimoniale", label: "Testimoniale" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="OptimContab"
              width={100}
              height={100}
              className="h-[100px] w-[100px] object-contain"
            />
            <p className="max-w-sm text-sm leading-6 text-black/70">
            Optimizăm contabilitatea, oferind claritate, rapiditate și sprijin constant.
            </p>
          </div>

          <div className="grid gap-3 text-sm">
            <p className="font-semibold text-[color:var(--brand-ink)]">
              Linkuri rapide
            </p>
            <ul className="grid gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-black/70 transition-colors hover:text-black"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-3 text-sm">
            <p className="font-semibold text-[color:var(--brand-ink)]">
              Contact
            </p>
            <div className="grid gap-2 text-black/70">
              <p>
                <span className="font-medium text-black">Telefon:</span>{" "}
                <a className="hover:text-black" href="tel:+40787819954">
                  +40 787 819 954
                </a>
              </p>
              <p>
                <span className="font-medium text-black">Email:</span>{" "}
                <a className="hover:text-black" href="mailto:ancamoisescu2000@yahoo.com">
                  ancamoisescu2000@yahoo.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-black/5 py-6 text-xs text-black/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} OptimContab. Toate drepturile rezervate.</p>
        </div>
      </Container>
    </footer>
  );
}

