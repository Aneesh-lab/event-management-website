import { useState } from "react";
import { motion } from "framer-motion";
import galleryData from "../data/galleryData";
import Lightbox from "./Lightbox";

export default function GallerySection() {

    const [selectedImage, setSelectedImage] = useState(null);

    return (

        <section className="bg-[#FAFAFA] py-28">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto">

                    <p className="uppercase tracking-[0.3em] text-[#C8A24A] text-sm">

                        Gallery

                    </p>

                    <h2 className="font-serif text-5xl mt-4">

                        Moments That Speak
                        <br />
                        For Themselves

                    </h2>

                    <p className="text-gray-600 mt-6 leading-8">

                        Every celebration tells a story.
                        Explore some of the beautiful moments
                        we've had the privilege to create.

                    </p>

                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mt-20 space-y-6">

                    {galleryData.map((photo, index) => (

                        <motion.div
                            key={photo.id}
                            whileHover={{
                                scale: 1.02
                            }}
                            className="overflow-hidden cursor-pointer break-inside-avoid group"
                            onClick={() => setSelectedImage(index)}
                        >

                            <img
                                src={photo.image}
                                alt={photo.alt}
                                loading="lazy"
                                className="w-full object-cover transition duration-700 group-hover:scale-110"
                            />

                        </motion.div>

                    ))}

                </div>

            </div>

            {selectedImage !== null && (

                <Lightbox
                    images={galleryData}
                    currentIndex={selectedImage}
                    setCurrentIndex={setSelectedImage}
                    onClose={() => setSelectedImage(null)}
                />

            )}

        </section>

    );

}