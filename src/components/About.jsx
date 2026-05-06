import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] bg-[#ead8cc] p-5"
        >
          <img
            src="/about-image.jpeg"
            alt="Carina Paes Leme"
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#a77c5b]">
           
          </p>

          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            Maquiagem pensada para valorizar sua imagem, não esconder quem você é.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#6d5a50]">
            O trabalho une técnica, escuta e sensibilidade para criar
            produções que respeitam o estilo, a ocasião e a personalidade de cada
            mulher.
          </p>

          <p className="mt-4 text-lg leading-8 text-[#6d5a50]">
            Seja para um evento especial, um momento profissional ou uma
            transformação de imagem, a proposta é construir uma beleza elegante,
            natural e segura.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;