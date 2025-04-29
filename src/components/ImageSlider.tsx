import { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

type ImageSliderProps = {
    imageUrls: string[];
};

const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
    const [imageIndex, setImageIndex] = useState(0);

    const showNextImage = () => {
        setImageIndex((index) => {
            if (index === imageUrls.length - 1) {
                return 0;
            }
            return index + 1;
        });
    };

    const showPrevImage = () => {
        setImageIndex((index) => {
            if (index === 0) {
                return imageUrls.length - 1;
            }
            return index - 1;
        });
    };

    return (
        <div className="w-full h-full relative">
            <div className="w-full aspect-10/6 relative">
                <img
                    src={imageUrls[imageIndex]}
                    alt={
                        imageIndex === 0
                            ? 'Image slider 1'
                            : `image slider ${imageIndex + 1}`
                    }
                    className="object-cover w-full h-full absolute inset-0"
                />
                <button
                    onClick={showPrevImage}
                    className="absolute block  inset-y-0 p-4 cursor-pointer left-0 *:stroke-white *:fill-black *:size-8 hover:bg-black/20 transition duration-300 ease-in-out"
                >
                    <ArrowBigLeft />
                </button>
                <button
                    onClick={showNextImage}
                    className="absolute block inset-y-0 p-4 cursor-pointer right-0 *:stroke-white *:fill-black *:size-8 hover:bg-black/20 transition duration-300 ease-in-out"
                >
                    <ArrowBigRight />
                </button>
            </div>
        </div>
    );
};
export default ImageSlider;
