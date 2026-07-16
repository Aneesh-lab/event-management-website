import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import faqData from "../data/faqData";

export default function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-[#C8A24A] text-sm">
            Frequently Asked Questions
          </p>

          <h2 className="font-serif text-5xl text-[#121212] mt-4">
            Everything You Need To Know
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-8">
            We've answered some of the most common questions our clients ask
            before planning their events.
          </p>

        </div>

        {/* FAQ List */}

        <div className="space-y-5">

          {faqData.map((faq) => {

            const isOpen = activeQuestion === faq.id;

            return (

              <motion.div
                key={faq.id}
                layout
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >

                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >

                  <span className="font-semibold text-lg text-[#121212]">
                    {faq.question}
                  </span>

                  <span className="text-[#C8A24A] text-lg">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>

                </button>

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >

                      <p className="px-6 pb-6 text-gray-600 leading-8">
                        {faq.answer}
                      </p>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}