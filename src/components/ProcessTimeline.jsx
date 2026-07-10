import { motion } from "framer-motion";
import processSteps from "../data/processSteps";

export default function ProcessTimeline() {
  return (
    <section className="bg-[#121212] text-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-[#C8A24A] text-sm">
            Our Process
          </p>

          <h2 className="font-serif text-5xl mt-4">
            From Vision to Celebration
          </h2>

          <p className="mt-6 text-gray-300 leading-8">
            Every successful event follows a carefully planned journey. Here's
            how we bring your celebration to life.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-[#C8A24A]/30"></div>

          <div className="grid lg:grid-cols-5 gap-12 relative">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                  }}
                  className="relative text-center"
                >
                  {/* Circle */}
                  <div className="mx-auto w-20 h-20 rounded-full bg-[#C8A24A] flex items-center justify-center text-3xl text-white relative z-10">
                    <Icon />
                  </div>

                  <h3 className="font-serif text-2xl mt-8">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-gray-300 leading-7 text-sm">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}