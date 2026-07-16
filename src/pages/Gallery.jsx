import GallerySection from "../components/GallerySection";

export default function Gallery() {
  return (
    <main className="bg-[#FAFAFA]">

      {/* Hero */}

      <section className="bg-[#121212] text-white pt-32 pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-[#C8A24A] text-sm">
            Gallery
          </p>

          <h1 className="font-serif text-6xl mt-5">
            Every Event
            <br />
            Tells A Story
          </h1>

          <p className="max-w-2xl mt-8 text-gray-300 leading-8">
            Explore some of the unforgettable celebrations,
            elegant decorations and beautiful memories we've
            had the privilege to create.
          </p>

        </div>

      </section>

      <GallerySection />

    </main>
  );
}