import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="space-y-8">

      {/* Heading */}
      <div>
        <p className="uppercase tracking-[0.3em] text-[#C8A24A] text-sm">
          Contact Information
        </p>

        <h2 className="font-serif text-4xl text-[#121212] mt-3">
          Let's Create
          <br />
          Something Memorable
        </h2>

        <p className="text-gray-600 leading-8 mt-6">
          We'd love to hear about your celebration.
          Whether it's a wedding, birthday, corporate event
          or a completely customized experience,
          our team is ready to help.
        </p>
      </div>

      {/* Contact Cards */}

      <div className="space-y-5">

        {/* Phone */}

        <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#C8A24A] transition">

          <div className="w-14 h-14 rounded-full bg-[#C8A24A] text-white flex items-center justify-center text-xl">
            <FaPhoneAlt />
          </div>

          <div>
            <h3 className="font-semibold text-lg text-[#121212]">
              Phone
            </h3>

            <p className="text-gray-600 mt-2">
              +91 83491 06752
            </p>
          </div>

        </div>

        {/* Email */}

        <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#C8A24A] transition">

          <div className="w-14 h-14 rounded-full bg-[#C8A24A] text-white flex items-center justify-center text-xl">
            <FaEnvelope />
          </div>

          <div>
            <h3 className="font-semibold text-lg text-[#121212]">
              Email
            </h3>

            <p className="text-gray-600 mt-2">
              royalcateringanddecoration@gmail.com
            </p>
          </div>

        </div>

        {/* Address */}

        <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#C8A24A] transition">

          <div className="w-14 h-14 rounded-full bg-[#C8A24A] text-white flex items-center justify-center text-xl">
            <FaMapMarkerAlt />
          </div>

          <div>
            <h3 className="font-semibold text-lg text-[#121212]">
              Office
            </h3>

            <p className="text-gray-600 mt-2">
              Rewa,
              Madhya Pradesh,
              India
            </p>
          </div>

        </div>

        {/* Working Hours */}

        <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#C8A24A] transition">

          <div className="w-14 h-14 rounded-full bg-[#C8A24A] text-white flex items-center justify-center text-xl">
            <FaClock />
          </div>

          <div>
            <h3 className="font-semibold text-lg text-[#121212]">
              Working Hours
            </h3>

            <p className="text-gray-600 mt-2">
              Monday – Sunday
              <br />
              9:00 AM – 8:00 PM
            </p>
          </div>

        </div>

      </div>

      {/* Social Media */}

      <div>

        <h3 className="font-semibold text-xl text-[#121212] mb-5">
          Follow Us
        </h3>

        <div className="flex gap-4">

          <a
            href="https://www.instagram.com/royal_catering_and_decorations?igsh=cDE2bGZreWduemZi"
            className="w-12 h-12 rounded-full bg-[#121212] text-white flex items-center justify-center hover:bg-[#C8A24A] transition"
          >
            <FaInstagram />
          </a>

         

          <a
            href="https://wa.me/918349106752"
            className="w-12 h-12 rounded-full bg-[#121212] text-white flex items-center justify-center hover:bg-[#25D366] transition"
          >
            <FaWhatsapp />
          </a>

        </div>

      </div>

    </div>
  );
}