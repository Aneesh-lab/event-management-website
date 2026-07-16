import { motion } from "framer-motion";
import { featuredServices } from "../data/services";

export default function FeaturedServices() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-end mb-16 flex-wrap gap-6">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#C8A24A] text-sm">
              Services
            </p>

            <h2 className="font-serif text-5xl mt-3">
              Crafted for Every Celebration
            </h2>
          </div>

         
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {featuredServices.map((service) => (

            <motion.div
              key={service.title}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group bg-white overflow-hidden"
            >

              <div className="overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="pt-6">

                <h3 className="font-serif text-2xl">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {service.description}
                </p>

                

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}