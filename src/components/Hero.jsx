import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { siteData } from "../data/siteData";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-32 pt-32">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/src/assets/image-hero.png')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#d6b89f]">
            {siteData.role}
          </p>

          <h1 className="text-5xl font-semibold leading-tight text-white md:text-7xl">
            {siteData.hero.title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
            {siteData.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${siteData.whatsapp}`}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#2b211d] transition hover:bg-[#ead8cc]"
            >
              <FaWhatsapp />
              {siteData.hero.primaryCta}
            </a>

            <a
              href={siteData.instagram}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10"
            >
              <FaInstagram />
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;