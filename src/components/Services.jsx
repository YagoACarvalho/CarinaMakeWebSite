import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaPlus } from "react-icons/fa";

const serviceDetails = [
  {
    title: "Maquiagem social",
    text: "Produções elegantes para festas, formaturas, fotos, eventos e momentos especiais.",
  },
  {
    title: "Produção para eventos",
    text: "Uma beleza pensada para combinar com roupa, ocasião, estilo e intenção.",
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
  const [openService, setOpenService] = useState(0);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f6eee8] px-6 py-28 text-[#2b211d]"
    >
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#d6b89f]/35 blur-[100px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/70 blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:sticky md:top-32 md:h-fit"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#a77c5b]">
          </p>

          <h2 className="max-w-xl text-4xl font-medium leading-tight md:text-5xl">
            Atendimento pensado para valorizar sua imagem.
          </h2>

          <p className="mt-6 max-w-md text-lg leading-8 text-[#6d5a50]">
            Cada produção é construída a partir do seu estilo, da ocasião e da
            imagem que você deseja transmitir.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#d6c5b8] bg-[#274485] /45 px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition hover:bg-[#274485]/75"
          >
            Falar sobre atendimento
            <FaArrowRight className="text-xs" />
          </a>
        </motion.div>

        <div className="rounded-[2rem] border border-white/60 bg-white/35 p-4 shadow-[0_8px_40px_rgba(43,33,29,0.08)] backdrop-blur-2xl">
          {serviceDetails.map((service, index) => {
            const isOpen = openService === index;

            return (
              <motion.button
                key={service.title}
                type="button"
                onClick={() => setOpenService(isOpen ? null : index)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group w-full border-b border-[#d8c6b8]/70 px-5 py-6 text-left last:border-b-0"
              >
                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#2b211d] md:text-2xl">
                    {service.title}
                  </h3>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d6c5b8] bg-white/45 text-sm transition duration-300 ${
                      isOpen ? "rotate-45 bg-[#2b211d] text-white" : ""
                    }`}
                  >
                    <FaPlus />
                  </span>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      initial={{ height: 0, opacity: 0, y: -6 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="max-w-2xl overflow-hidden pt-4 leading-7 text-[#6d5a50]"
                    >
                      {service.text}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;