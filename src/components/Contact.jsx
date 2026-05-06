import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { siteData } from "../data/siteData";

function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[#2b211d] text-white">
        <div className="grid gap-10 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-14">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d6b89f]">
              Contato
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Vamos pensar na produção ideal para o seu momento?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Fale pelo WhatsApp para consultar datas disponíveis, tipos de
              atendimento e valores.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <a
              href={`https://wa.me/${siteData.whatsapp}`}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#2b211d] transition hover:bg-[#ead8cc]"
            >
              <FaWhatsapp />
              Chamar no WhatsApp
            </a>

            <a
              href={siteData.instagram}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:border-white"
            >
              <FaInstagram />
              Ver Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;