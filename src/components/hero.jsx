import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Luxury Event"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-2xl">

            {/* Gold Accent Line */}

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 90 }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-[#C8A24A] mb-8"
            />

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-white text-5xl md:text-7xl leading-tight"
            >
              Moments Designed.
              <br />
              Memories Crafted.
            </motion.h1>

            {/* Paragraph */}

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="text-gray-200 text-lg leading-8 mt-8"
            >
              Every celebration tells a story. We transform your ideas into
              unforgettable weddings, birthdays, corporate gatherings and
              bespoke experiences with creativity, elegance and flawless
              execution.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
              }}
              className="flex flex-wrap gap-5 mt-10"
            >
              <Link
                to="/services"
                className="bg-[#C8A24A] text-white px-8 py-4 hover:scale-105 transition duration-300"
              >
                Explore Services
              </Link>

              <Link
                to="/contact"
                className="border border-white text-white px-8 py-4 hover:bg-white hover:text-black transition duration-300"
              >
                Plan Your Event
              </Link>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white tracking-[0.3em] text-sm"
      >
        SCROLL
      </motion.div>

    </section>
  );
}