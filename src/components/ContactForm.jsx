import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ynm3q9u",
        "template_xk6drjb",
        form.current,
        {
          publicKey: "3KV40xbddwh2CyRBG",
        }
      )
      .then(
        () => {
          alert("Thank you! Your enquiry has been submitted.");

          setFormData({
            name: "",
            phone: "",
            email: "",
            eventType: "",
            eventDate: "",
            message: "",
          });
        },
        (error) => {
          console.log("EmailJS Error:", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.form
      ref={form}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg"
    >
      <h2 className="font-serif text-4xl text-[#121212] mb-2">
        Let's Plan Your Event
      </h2>

      <p className="text-gray-600 mb-8">
        Tell us about your celebration and we'll get back to you as soon as
        possible.
      </p>

      {/* Name */}
      <div className="mb-5">
        <label className="block mb-2 font-medium text-gray-700">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#C8A24A]"
        />
      </div>


      {/* Phone */}
      <div className="mb-5">
        <label className="block mb-2 font-medium text-gray-700">
          Phone Number
        </label>

        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#C8A24A]"
        />
      </div>


      {/* Email */}
      <div className="mb-5">
        <label className="block mb-2 font-medium text-gray-700">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#C8A24A]"
        />
      </div>


      {/* Event Type */}
      <div className="mb-5">
        <label className="block mb-2 font-medium text-gray-700">
          Event Type
        </label>

        <select
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#C8A24A]"
        >
          <option value="">Select Event Type</option>
          <option>Wedding</option>
          <option>Birthday</option>
          <option>Corporate Event</option>
          <option>Destination Wedding</option>
          <option>Religious Event</option>
          <option>Theme Party</option>
          <option>School / College Event</option>
          <option>Product Launch</option>
          <option>Customized Event</option>
        </select>
      </div>


      {/* Event Date */}
      <div className="mb-5">
        <label className="block mb-2 font-medium text-gray-700">
          Event Date
        </label>

        <input
          type="date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#C8A24A]"
        />
      </div>


      {/* Message */}
      <div className="mb-8">
        <label className="block mb-2 font-medium text-gray-700">
          Message
        </label>

        <textarea
          rows="6"
          name="message"
          placeholder="Tell us about your event..."
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-3 rounded-lg resize-none focus:outline-none focus:border-[#C8A24A]"
        />
      </div>


      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#C8A24A] text-white py-4 rounded-lg font-medium hover:bg-[#b7923e] transition duration-300"
      >
        Send Enquiry
      </button>

    </motion.form>
  );
}