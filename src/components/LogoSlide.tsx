import {
    Macys,
    Three,
    MrBeast,
    Forbes,
    Budweiser,
    BarStool,
    MensHealth,
    Buzzfeed,
} from '../assets/index';

const LogoSlide = () => {
    const logos = [
        { src: Macys, alt: 'Macys' },
        { src: Three, alt: '3M' },
        { src: MrBeast, alt: 'MrBeast' },
        { src: Forbes, alt: 'Forbes' },
        { src: Budweiser, alt: 'Budweiser' },
        { src: BarStool, alt: 'BarStool' },
        { src: MensHealth, alt: 'MensHealth' },
        { src: Buzzfeed, alt: 'Buzzfeed' },
    ];
    return (
        <section className="logos bg-white py-15 w-full overflow-hidden whitespace-nowrap cursor-pointer relative before:absolute before:top-0 before:left-0 before:w-60 before:h-full before:bg-gradient-to-l before:from-transparent before:to-white after:absolute after:top-0 after:right-0 after:w-60 after:h-full after:bg-gradient-to-r after:from-transparent after:to-white">
            <div className="flex gap-x-10 animate-slide logos-slide">
                <div className="inline-flex gap-10 sm:gap-15 shrink-0">
                    {logos.map((logo) => (
                        <img
                            key={logo.alt}
                            src={logo.src}
                            alt={logo.alt}
                            className="h-8 sm:h-12.5"
                        />
                    ))}
                </div>

                {/*duplicate */}
                <div className="inline-flex gap-10 sm:gap-15 shrink-0">
                    {logos.map((logo) => (
                        <img
                            key={logo.alt}
                            src={logo.src}
                            alt={logo.alt}
                            className="h-8 sm:h-12.5"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default LogoSlide;
