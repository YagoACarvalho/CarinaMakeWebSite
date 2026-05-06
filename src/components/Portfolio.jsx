import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

const portfolioItems = [
  { title: "Beleza natural", image: "/beleza-natural.jpeg" },
  { title: "Produção elegante", image: "/producao-elegante.jpeg" },
  { title: "Maquiagem social", image: "/make-social.jpeg" },
  { title: "Eventos especiais", image: "/evento-especial.jpeg" },
];

function Portfolio() {
  const carouselRef = useRef(null);

  function scrollCarousel(direction) {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  }

  return (
    <section id="portfolio" className="relative overflow-hidden px-6 py-28">
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#ead8cc]/60 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#d6b89f]/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#a77c5b]">
              Portfólio
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
              Produções com presença, naturalidade e identidade.
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scrollCarousel("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/35 text-[#2b211d] shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition hover:bg-white/60"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={() => scrollCarousel("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/35 text-[#2b211d] shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition hover:bg-white/60"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {portfolioItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group relative h-[460px] min-w-[290px] overflow-hidden rounded-[2rem] border border-white/30 bg-white/20 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:min-w-[340px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full rounded-[1.5rem] object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-3 rounded-[1.5rem] bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-80" />

              <div className="absolute bottom-7 left-7 right-7">
                <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-medium text-white shadow-[0_8px_24px_rgba(0,0,0,0.16)] backdrop-blur-2xl">
                  {item.title}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;