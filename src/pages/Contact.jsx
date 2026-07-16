import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import FAQ from "../components/FAQ";

export default function Contact() {
  return (
    <main className="bg-[#FAFAFA]">

      {/* Hero Section */}

      <section className="bg-[#121212] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-[#C8A24A] text-sm">
            Contact Us
          </p>

          <h1 className="font-serif text-5xl lg:text-6xl mt-5 leading-tight">
            Let's Start Planning
            <br />
            Your Special Event
          </h1>

          <p className="text-gray-300 mt-8 max-w-2xl leading-8">
            Every unforgettable celebration starts with a conversation.
            Tell us about your event, and our team will help turn
            your ideas into an unforgettable experience.
          </p>

        </div>
      </section>

      {/* Contact Section */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Contact Information */}

            <ContactInfo />

            {/* Contact Form */}

            <ContactForm />

          </div>

        </div>
      </section>

      {/* FAQ */}

      <FAQ />

    </main>
  );
}