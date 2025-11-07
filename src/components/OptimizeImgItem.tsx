import { useEffect, useRef, useState } from 'react';

interface OptimizeImgItemProps {
    blurredSrc: string;
    src: string;
    alt: string;
    className?: string;
}

const OptimizeImgItem = ({
    blurredSrc,
    src,
    alt,
    className = '',
}: OptimizeImgItemProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const img = imgRef.current;
        if (!img) return;

        const handleLoad = () => {
            setIsLoaded(true);
        };

        // Check if image is already loaded (from cache)
        if (img.complete) {
            handleLoad();
        } else {
            img.addEventListener('load', handleLoad);
        }

        // Cleanup event listener
        return () => {
            img.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div
            className={`blurred-img relative w-full overflow-hidden bg-cover bg-center bg-no-repeat ${
                isLoaded ? 'loaded' : ''
            } ${className}`}
            style={{ backgroundImage: `url(${blurredSrc})` }}
        >
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                loading="lazy"
                className={`block aspect-auto w-full object-cover object-center transition-opacity duration-300 ease-in ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
            />
        </div>
    );
};

export default OptimizeImgItem;
