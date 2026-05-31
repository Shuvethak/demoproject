import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#guru", label: "Guru" },
  { href: "#courses", label: "Courses" },
  { href: "#schedule", label: "Schedule" },
  { href: "#gallery", label: "Gallery" },
  { href: "#admission", label: "Admission" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--ivory)]/95 backdrop-blur border-b border-[color:color-mix(in_oklab,var(--gold)_25%,transparent)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <img src={logo} alt="Sri GuruKrupa NatyaKala Mandir" className="h-12 w-12 rounded-full ring-1 ring-[color:var(--gold)]/40" />
          <div className="leading-tight">
            <div
              className={`font-display text-[13px] tracking-[0.25em] uppercase ${
                scrolled ? "text-[color:var(--maroon-deep)]" : "text-[color:var(--ivory)]"
              }`}
            >
              Sri GuruKrupa
            </div>
            <div className={`text-[10px] tracking-[0.3em] uppercase ${scrolled ? "text-[color:var(--gold)]" : "text-[color:var(--gold-soft)]"}`}>
              NatyaKala Mandir
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[12px] tracking-[0.22em] uppercase font-medium transition-colors ${
                scrolled
                  ? "text-[color:var(--maroon-deep)] hover:text-[color:var(--gold)]"
                  : "text-[color:var(--ivory)] hover:text-[color:var(--gold)]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#admission" className="hidden lg:inline-flex btn-ghost-maroon" style={{
          color: scrolled ? "var(--maroon-deep)" : "var(--ivory)",
          borderColor: scrolled ? "color-mix(in oklab, var(--maroon-deep) 30%, transparent)" : "color-mix(in oklab, var(--gold) 60%, transparent)",
        }}>
          Book Trial
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 ${scrolled ? "text-[color:var(--maroon-deep)]" : "text-[color:var(--ivory)]"}`}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M3 7h18" /><path d="M3 12h18" /><path d="M3 17h18" /></>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[color:var(--ivory)] border-t border-[color:color-mix(in_oklab,var(--gold)_25%,transparent)]">
          <div className="container-x py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-[color:var(--maroon-deep)] tracking-[0.2em] uppercase text-xs">
                {l.label}
              </a>
            ))}
            <a href="#admission" onClick={() => setOpen(false)} className="btn-ghost-maroon w-fit">Book Trial</a>
          </div>
        </div>
      )}
    </header>
  );
}
