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
        <section className="logos bg-white py-15 w-full overflow-hidden whitespace-nowrap cursor-pointer">
            <div className="flex animate-slide logos-slide">
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
