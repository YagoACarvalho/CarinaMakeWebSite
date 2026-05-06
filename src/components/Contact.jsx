import {
    FaInstagram,
    FaMapMarkerAlt,
  } from "react-icons/fa";
  
  import { IoLogoWhatsapp } from "react-icons/io";
  import { siteData } from "../data/siteData";
  
  function Contact() {
    return (
      <section
        id="contact"
        className="relative overflow-hidden bg-[#1f1713] px-6 py-28 text-white"
      >
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#d6b89f]/20 blur-[100px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-[100px]" />
  
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-12 border-y border-white/10 py-16 md:grid-cols-[1fr_0.9fr] md:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d6b89f]">
              </p>
  
              <h2 className="max-w-2xl text-4xl font-medium leading-tight text-white md:text-6xl">
                Sua próxima produção começa com uma conversa.
              </h2>
  
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                Conte sobre o evento, a data e o tipo de atendimento que você
                procura. A partir disso, a produção é pensada com calma,
                intenção e cuidado.
              </p>
            </div>
  
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_8px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
              <a
                href={`https://wa.me/${siteData.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-5 rounded-[1.5rem] px-5 py-5 transition hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-[1.35rem] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition duration-300 group-hover:scale-110">
                    <IoLogoWhatsapp />
                  </span>
  
                  <div>
                    <h3 className="text-lg font-semibold">
                      WhatsApp
                    </h3>
  
                    <p className="text-sm text-white/55 transition group-hover:text-white/75">
                      Consultar disponibilidade
                    </p>
                  </div>
                </div>
  
                <span className="text-sm text-[#d6b89f] transition group-hover:text-white">
                  Abrir
                </span>
              </a>
  
              <a
                href={siteData.instagram}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-5 rounded-[1.5rem] px-5 py-5 transition hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition group-hover:bg-white group-hover:text-[#1f1713]">
                    <FaInstagram />
                  </span>
  
                  <div>
                    <h3 className="text-lg font-semibold">
                      Instagram
                    </h3>
  
                    <p className="text-sm text-white/55 transition group-hover:text-white/75">
                      Ver trabalhos e bastidores
                    </p>
                  </div>
                </div>
  
                <span className="text-sm text-[#d6b89f] transition group-hover:text-white">
                  Ver
                </span>
              </a>
  
              <div className="flex items-center justify-between gap-5 rounded-[1.5rem] px-5 py-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl">
                    <FaMapMarkerAlt />
                  </span>
  
                  <div>
                    <h3 className="text-lg font-semibold">
                      Atendimento
                    </h3>
  
                    <p className="text-sm text-white/55">
                      {siteData.location}
                    </p>
                  </div>
                </div>
  
                <span className="text-sm text-[#d6b89f]">
                  RJ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;