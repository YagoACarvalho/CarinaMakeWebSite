import { motion } from "framer-motion";
import { FaRegCalendarCheck, FaRegComments, FaRegGem, FaRegSmile } from "react-icons/fa";

const steps = [
  {
    title: "Conversa inicial",
    icon: <FaRegComments />,
    text: "Você conta sobre o evento, seu estilo, suas referências e o que deseja transmitir.",
  },
  {
    title: "Direção da produção",
    icon: <FaRegGem />,
    text: "A maquiagem é pensada para combinar com sua roupa, ocasião, personalidade e imagem.",
  },
  {
    title: "Atendimento",
    icon: <FaRegCalendarCheck />,
    text: "Um momento leve, cuidadoso e organizado, com atenção aos detalhes do início ao fim.",
  },
  {
    title: "Resultado final",
    icon: <FaRegSmile />,
    text: "Uma beleza elegante, confortável ao vivo e marcante nas fotos.",
  },
];

function Process() {
  return (
    <section className="relative overflow-hidden bg-[#f3e8df] px-6 py-28">
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#d6b89f]/35 blur-[100px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/80 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#a77c5b]">
            </p>

            <h2 className="max-w-2xl text-4xl font-medium leading-tight md:text-5xl">
              Um atendimento pensado para você se sentir segura antes, durante e depois.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-[#6d5a50] md:justify-self-end">
            Mais do que maquiar, o processo é sobre entender seu momento e criar
            uma produção com intenção, conforto e presença.
          </p>
        </div>

        <div className="relative rounded-[2.5rem] border border-white/60 bg-white/35 p-5 shadow-[0_8px_40px_rgba(43,33,29,0.08)] backdrop-blur-2xl md:p-8">
          <div className="absolute left-10 right-10 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-[#a77c5b]/35 to-transparent md:block" />

          <div className="relative grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-[#fbf7f2]/70 p-7 shadow-[0_8px_28px_rgba(43,33,29,0.06)] transition duration-500 hover:-translate-y-2 hover:bg-white/90"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#d6b89f]/20 blur-2xl transition duration-500 group-hover:bg-[#d6b89f]/35" />

                <div className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#274485] text-xl text-white shadow-[0_10px_30px_rgba(39,68,133,0.35)] transition duration-500 group-hover:scale-110 group-hover:bg-[#3257a8]">
                  {step.icon}
                </div>

                <div className="relative z-10">
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#a77c5b]/70">
                    Etapa {index + 1}
                  </p>

                  <h3 className="text-xl font-semibold tracking-[-0.02em]">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#6d5a50]">
                    {step.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;