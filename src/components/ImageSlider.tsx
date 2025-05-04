import { useRef, useState } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

type ImageSliderProps = {
    imageUrls: string[];
};

const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
    const [imageIndex, setImageIndex] = useState(1); // Start at first real image
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    const images = [
        imageUrls[imageUrls.length - 1], // Clone last
        ...imageUrls,
        imageUrls[0], // Clone first
    ];

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (imageIndex === 0) {
            setImageIndex(imageUrls.length);
        } else if (imageIndex === imageUrls.length + 1) {
            setImageIndex(1);
        }
    };

    const showNextImage = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setImageIndex((prev) => prev + 1);
    };

    const showPrevImage = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setImageIndex((prev) => prev - 1);
    };

    //   const showNextImage = () => {
    //         setImageIndex((index) => {
    //             if (index === imageUrls.length - 1) {
    //                 return 0;
    //             }
    //             return index + 1;
    //         });
    //     };
    //
    //     const showPrevImage = () => {
    //         setImageIndex((index) => {
    //             if (index === 0) {
    //                 return imageUrls.length - 1;
    //             }
    //             return index - 1;
    //         });
    //     };

    return (
        <div className="w-full h-full relative">
            <div className="w-full aspect-10/6 relative overflow-hidden">
                <div
                    ref={sliderRef}
                    className="w-full h-full flex"
                    style={{
                        transform: `translateX(${-100 * imageIndex}%)`,
                        transition: isTransitioning
                            ? 'transform 0.5s ease-in-out'
                            : 'none',
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {images.map((url, idx) => (
                        <img
                            key={idx}
                            src={url}
                            alt={`image slider ${idx}`}
                            className="object-cover w-full h-full shrink-0 grow-0"
                        />
                    ))}
                </div>
                <button
                    onClick={showPrevImage}
                    className="absolute block inset-y-0 p-4 cursor-pointer left-0 *:stroke-white *:fill-black *:size-8 hover:bg-black/20 transition duration-300 ease-in-out hover:*:animate-squish"
                >
                    <ArrowBigLeft />
                </button>
                <button
                    onClick={showNextImage}
                    className="absolute block inset-y-0 p-4 cursor-pointer right-0 *:stroke-white *:fill-black *:size-8 hover:bg-black/20 transition duration-300 ease-in-out hover:*:animate-squish"
                >
                    <ArrowBigRight />
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
