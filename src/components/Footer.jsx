import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { siteData } from "../data/siteData";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 pb-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-[#e5d6cb] pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold">{siteData.name}</h3>
          <p className="mt-1 text-sm text-[#6d5a50]">
            {siteData.role} • {siteData.location}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={siteData.instagram}
            target="_blank"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d6c5b8] text-[#2b211d] transition hover:border-[#a77c5b]"
          >
            <FaInstagram />
          </a>

          <a
            href={`https://wa.me/${siteData.whatsapp}`}
            target="_blank"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2b211d] text-white transition hover:bg-[#a77c5b]"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="text-sm text-[#6d5a50]">
          © {year} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;