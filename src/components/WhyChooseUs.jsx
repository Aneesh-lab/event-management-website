import { motion } from "framer-motion";
import whyChooseUs from "../data/whyChooseUs";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#121212] text-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-sm text-[#C8A24A]">
            Why Choose Us
          </p>

          <h2 className="font-serif text-5xl leading-tight mt-4">
            Every Detail,
            <br />
            Thoughtfully Planned.
          </h2>

          <p className="mt-6 text-gray-300 leading-8">
            We don't just organize events—we craft memorable experiences through
            thoughtful planning, creative execution, and personalized service.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{ y: -10 }}
                className="group border border-white/10 p-8 transition-all duration-300 hover:border-[#C8A24A] hover:bg-white/5"
              >
                <div className="w-16 h-16 rounded-full border border-[#C8A24A]/40 flex items-center justify-center mb-8 group-hover:bg-[#C8A24A] transition-all duration-300">
                  <Icon className="text-3xl text-[#C8A24A] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-serif text-2xl mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-8">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}