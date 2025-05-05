import { car1, car3, car2, car4, car5 } from './assets/index';
import ImageSlider from './components/ImageSlider.tsx';
import LogoSlide from './components/LogoSlide.tsx';

const IMAGES = [car1, car2, car3, car4, car5];

const App = () => {
    return (
        <>
            <div className="w-full max-w-7xl mx-auto h-125 mt-10">
                <ImageSlider imageUrls={IMAGES} />
            </div>
            {/*Logo Carousel */}
            <div className="mt-80 py-5 px-0 bg-carousel h-1/2 relative">
                <LogoSlide />
            </div>
        </>
    );
};

export default App;
