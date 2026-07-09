import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="font-serif text-3xl text-[#C8A24A]">
            Royal Decorations and Event Management
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            Creating unforgettable celebrations with creativity,
            passion and personalized planning.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <div className="space-y-2">
            <Link to="/">Home</Link><br />
            <Link to="/about">About</Link><br />
            <Link to="/services">Services</Link><br />
            <Link to="/gallery">Gallery</Link><br />
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Our Services
          </h3>

          <div className="space-y-2 text-gray-300">
            <p>Wedding Planning</p>
            <p>Corporate Events</p>
            <p>Birthday Parties</p>
            <p>Destination Weddings</p>
            <p>Custom Events</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Contact
          </h3>

          <p>royalcateringanddecoration@gmail.com</p>
          <p>+91 83491 06752</p>

          <div className="flex gap-4 mt-5 text-xl">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
       Copyright © Royal Events Management 2026 • All Rights Reserved • Powered by <a href="https://www.linkedin.com/in/aneeshmishra2004" className="text-[#C8A24A] hover:underline">Aneesh Designs</a>
      </div>
    </footer>
  );
}