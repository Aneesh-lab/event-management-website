import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-[#FAFAFA] py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">

        {/* Left Side Content */}

        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#C8A24A] mb-4">
            Who We Are
          </p>

          <h2 className="font-serif text-5xl leading-tight text-[#121212]">
            We design experiences,
            <br />
            not just events.
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            Every celebration has a unique story, and we believe it deserves a
            unique experience. From intimate family gatherings to luxurious
            weddings and professional corporate events, we combine creativity,
            thoughtful planning, and flawless coordination to make every moment
            unforgettable.
          </p>
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="border-l-4 border-[#C8A24A] pl-6">
            <h3 className="font-serif text-2xl mb-3">Our Mission</h3>

            <p className="text-gray-600 leading-7">
              To create memorable events that reflect every client's vision with
              creativity, elegance, and precision.
            </p>
          </div>

          <div className="border-l-4 border-[#C8A24A] pl-6">
            <h3 className="font-serif text-2xl mb-3">Our Vision</h3>

            <p className="text-gray-600 leading-7">
              To become a trusted event partner known for personalized planning,
              exceptional execution, and meaningful celebrations.
            </p>
          </div>

          <div className="border-l-4 border-[#C8A24A] pl-6">
            <h3 className="font-serif text-2xl mb-3">Our Values</h3>

            <p className="text-gray-600 leading-7">
              Creativity • Transparency • Dedication • Excellence • Attention to
              Detail
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}