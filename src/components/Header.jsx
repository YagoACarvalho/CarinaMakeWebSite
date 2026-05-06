import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { siteData } from "../data/siteData";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Contato", href: "#contact" },
  ];

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <div
        className={`mx-auto flex items-center justify-between rounded-full border border-white/20 bg-white/15 px-5 backdrop-blur-2xl transition-all duration-300 ${
          scrolled
            ? "max-w-5xl py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            : "max-w-6xl py-4 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
        }`}
      >
        <a
          href="#"
          className="text-sm font-semibold uppercase tracking-[0.25em] text-white md:text-[#2b211d]"
        > 
        <img
        src="/logo.png"
        alt="Carina Paes Leme"
        className="h-10 w-auto object-contain"
      />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`https://wa.me/${siteData.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="
            hidden md:block
            rounded-full
            bg-[#25D366]
            px-5 py-2.5
            text-sm font-semibold
            text-white
            shadow-[0_8px_24px_rgba(37,211,102,0.35)]
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:bg-[#1ebe5d]
          "
        >
          Agendar
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-6xl rounded-[2rem] border border-white/20 bg-white/15 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.16)] backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg"
              >
                {link.label}
              </a>
            ))}

            <a
              href={`https://wa.me/${siteData.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-white/85 px-5 py-3 text-center text-sm font-semibold text-[#2b211d]"
            >
              Agendar atendimento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;