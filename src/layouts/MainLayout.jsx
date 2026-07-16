import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen">
        {children}
      </main>

     

  <WhatsAppButton />
      <Footer />
    </>
  );
} 