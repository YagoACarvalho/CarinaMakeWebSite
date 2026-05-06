import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

function Services() {
  return (
    <section id="services" className="bg-[#2b211d] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d6b89f]">
            Serviços
          </p>

          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            Produções para momentos que pedem presença, confiança e cuidado.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {siteData.services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7 backdrop-blur-md"
            >
              <span className="mb-8 block text-sm text-[#d6b89f]">
                0{index + 1}
              </span>

              <h3 className="text-2xl font-semibold">{service}</h3>

              <p className="mt-4 leading-7 text-white/70">
                Atendimento personalizado, com atenção aos detalhes e resultado
                alinhado ao seu estilo.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;