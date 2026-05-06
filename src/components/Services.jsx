import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const serviceDetails = [
  {
    title: "Maquiagem social",
    text: "Produções elegantes para festas, formaturas, fotos, eventos e momentos especiais.",
  },
  {
    title: "Produção para eventos",
    text: "Beleza pensada para combinar com roupa, ocasião, estilo e intenção.",
  },
  {
    title: "Automaquiagem",
    text: "Técnicas práticas para você se maquiar melhor no dia a dia, respeitando seus traços.",
  },
  {
    title: "Consultoria de imagem",
    text: "Orientação para alinhar aparência, estilo e comunicação visual com mais segurança.",
  },
  {
    title: "Atendimento a domicílio",
    text: "Mais conforto e praticidade para se preparar no seu espaço, com horário combinado.",
  },
];

function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#1f1713] px-6 py-28 text-white"
    >
      <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#d6b89f]/20 blur-[100px]" />
      <div className="absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full bg-white/10 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d6b89f]">
            Serviços
          </p>

          <h2 className="text-4xl font-medium leading-tight tracking-[-0.06em] md:text-6xl">
            Uma beleza construída com intenção, presença e cuidado.
          </h2>
        </div>

        <div className="border-y border-white/10">
          {serviceDetails.map((service, index) => {
            const isActive = activeService === index;

            return (
              <motion.div
                key={service.title}
                onMouseEnter={() => setActiveService(index)}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group relative cursor-pointer overflow-hidden border-b border-white/10 last:border-b-0"
              >
                <div
                  className={`absolute inset-0 transition duration-500 ${
                    isActive ? "bg-white/[0.05]" : "bg-transparent"
                  }`}
                />

                <div
                  className={`absolute left-0 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#d6b89f]/25 blur-3xl transition-all duration-700 ${
                    isActive
                      ? "translate-x-10 opacity-100"
                      : "-translate-x-20 opacity-0"
                  }`}
                />

                <div className="relative z-10 grid gap-6 py-9 md:grid-cols-[1fr_0.8fr_auto] md:items-center">
                  <h3
                    className={`font-['Sora'] text-2xl font-semibold leading-[1.05] tracking-[-0.03em] transition-all duration-500 md:text-2xl ${
                      isActive
                        ? "translate-x-3 text-white"
                        : "text-white/40 group-hover:text-white"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`max-w-xl leading-7 transition duration-500 ${
                      isActive
                        ? "translate-y-0 opacity-100 text-white/72"
                        : "translate-y-2 opacity-0 text-white/0 md:opacity-30 md:text-white/35"
                    }`}
                  >
                    {service.text}
                  </p>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl transition duration-500 ${
                      isActive
                        ? "rotate-0 opacity-100"
                        : "-rotate-45 opacity-30"
                    }`}
                  >
                    <FaArrowRight />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-white/50">
            Cada atendimento é pensado para valorizar sua imagem de forma leve,
            elegante e alinhada ao seu momento.
          </p>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/10 px-7 py-3 text-center text-sm font-medium text-white backdrop-blur-2xl transition hover:bg-white/20"
          >
            Falar sobre meu atendimento
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;