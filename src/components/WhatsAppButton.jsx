import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "918349106752";

  const message =
    "Hi, I'm interested in your event management services.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition duration-300">
        <FaWhatsapp className="text-white text-4xl" />
      </div>
    </a>
  );
}