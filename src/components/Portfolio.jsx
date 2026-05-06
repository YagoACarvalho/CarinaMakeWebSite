import { motion } from "framer-motion";

const portfolioItems = [
  "Maquiagem social",
  "Produção elegante",
  "Beleza natural",
  "Noiva",
  "Evento especial",
  "Consultoria visual",
];

function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#a77c5b]">
              Portfólio
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
              Beleza real, elegante e pensada para cada ocasião.
            </h2>
          </div>

          <a
            href="https://www.instagram.com/carinapaesleme/"
            target="_blank"
            className="rounded-full border border-[#d6c5b8] px-7 py-3 text-center text-sm font-medium transition hover:border-[#a77c5b]"
          >
            Ver Instagram
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[2rem] bg-[#ead8cc] p-4"
            >
              <div className="flex aspect-[4/5] items-end rounded-[1.5rem] bg-gradient-to-br from-[#caa993] to-[#f6eee8] p-5 transition duration-500 group-hover:scale-[1.03]">
                <span className="rounded-full bg-white/75 px-4 py-2 text-sm font-medium backdrop-blur">
                  {item}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;