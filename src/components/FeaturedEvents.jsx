import { motion } from "framer-motion";
import featuredEvents from "../data/featuredEvents";

export default function FeaturedEvents() {
  return (
    <section className="bg-[#FAFAFA] py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-sm text-[#C8A24A]">
            Featured Events
          </p>

          <h2 className="font-serif text-5xl leading-tight mt-4">
            Celebrations That Leave
            <br />
            Lasting Memories
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Every event tells a unique story. Here are some of the celebrations
            that inspire the experiences we create.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative lg:col-span-2 h-[550px] overflow-hidden group"
          >
            <img
              src={featuredEvents[0].image}
              alt={featuredEvents[0].title}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8">
              <p className="uppercase tracking-[0.3em] text-sm text-[#C8A24A]">
                {featuredEvents[0].category}
              </p>

              <h3 className="font-serif text-4xl text-white mt-2">
                {featuredEvents[0].title}
              </h3>
            </div>
          </motion.div>

          {/* Side Cards */}
          <div className="space-y-6">
            {featuredEvents.slice(1).map((event) => (
              <motion.div
                key={event.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative h-[170px] overflow-hidden group"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute bottom-5 left-5">
                  <p className="uppercase tracking-[0.25em] text-xs text-[#C8A24A]">
                    {event.category}
                  </p>

                  <h3 className="font-serif text-2xl text-white mt-1">
                    {event.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}