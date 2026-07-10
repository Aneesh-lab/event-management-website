import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-28 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#121212] text-white rounded-3xl px-10 py-20 text-center"
        >
          <p className="uppercase tracking-[0.3em] text-[#C8A24A] text-sm">
            Let's Create Something Beautiful
          </p>

          <h2 className="font-serif text-5xl mt-5">
            Ready to Plan
            <br />
            Your Next Event?
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mt-8 leading-8">
            Whether you're planning a wedding, corporate gathering, birthday
            celebration or a completely custom experience, we're ready to help
            bring your vision to life.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <Link
              to="/contact"
              className="bg-[#C8A24A] px-8 py-4 text-white hover:scale-105 transition"
            >
              Contact Us
            </Link>

            <Link
              to="/services"
              className="border border-white px-8 py-4 hover:bg-white hover:text-black transition"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}