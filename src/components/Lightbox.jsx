import {
    FaTimes,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

export default function Lightbox({
    images,
    currentIndex,
    setCurrentIndex,
    onClose,
}) {

    const previous = () => {
        setCurrentIndex(
            currentIndex === 0
                ? images.length - 1
                : currentIndex - 1
        );
    };

    const next = () => {
        setCurrentIndex(
            currentIndex === images.length - 1
                ? 0
                : currentIndex + 1
        );
    };

    return (

        <div className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center">

            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white text-3xl"
            >
                <FaTimes />
            </button>

            <button
                onClick={previous}
                className="absolute left-6 text-white text-3xl"
            >
                <FaChevronLeft />
            </button>

            <img
                src={images[currentIndex].image}
                alt={images[currentIndex].alt}
                className="max-w-[90vw] max-h-[88vh] object-contain"
            />

            <button
                onClick={next}
                className="absolute right-6 text-white text-3xl"
            >
                <FaChevronRight />
            </button>

        </div>

    );

}