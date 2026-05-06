import { motion } from "framer-motion";

const steps = [
  {
    title: "Conversa inicial",
    text: "Entendemos o evento, seu estilo, suas referências e o resultado desejado.",
  },
  {
    title: "Direção da produção",
    text: "A maquiagem é pensada de acordo com sua imagem, ocasião, roupa e personalidade.",
  },
  {
    title: "Atendimento",
    text: "Um momento de cuidado, técnica e atenção aos detalhes para você se sentir segura.",
  },
  {
    title: "Resultado final",
    text: "Uma beleza alinhada com você, elegante nas fotos e confortável ao vivo.",
  },
];

function Process() {
  return (
    <section className="bg-[#f3e8df] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#a77c5b]">
            Como funciona
          </p>

          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            Um atendimento leve, organizado e feito para você.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-[1.5rem] bg-white p-7 shadow-xl shadow-[#2b211d]/5"
            >
              <span className="mb-8 block text-sm text-[#a77c5b]">
                0{index + 1}
              </span>

              <h3 className="text-xl font-semibold">{step.title}</h3>

              <p className="mt-4 leading-7 text-[#6d5a50]">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;