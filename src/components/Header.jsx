import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { siteData } from "../data/siteData";

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/40 bg-[#fbf7f2]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold uppercase tracking-[0.25em]">
          Carina
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[#6d5a50] md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#2b211d]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={`https://wa.me/${siteData.whatsapp}`}
            target="_blank"
            className="rounded-full bg-[#2b211d] px-5 py-2.5 text-sm text-white transition hover:bg-[#a77c5b]"
          >
            Agendar
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6c5b8] md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#e5d6cb] bg-[#fbf7f2] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5 text-[#6d5a50]">
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
              className="mt-2 rounded-full bg-[#2b211d] px-5 py-3 text-center text-sm text-white"
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