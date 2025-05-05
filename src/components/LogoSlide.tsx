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
        <div className="bg-white w-full overflow-hidden px-15">
            <div className="whitespace-nowrap flex gap-10 shrink-0 w-full">
                {logos.map((logo) => (
                    <img src={logo.src} alt={logo.alt} className="h-12.5" />
                ))}
            </div>
        </div>
    );
};
export default LogoSlide;
