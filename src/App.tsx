import { car1, car3, car2, car4, car5 } from './assets/index';
import ImageSlider from './components/ImageSlider.tsx';
import LogoSlide from './components/LogoSlide.tsx';
import SplideCarousel from './components/splide/SplideCarousel.tsx';
import SwipeImageCarousel from './components/swippers/SwipeImageCarousel.tsx';
import OptimizeImgContainer from './components/OptimizeImgContainer.tsx';

const IMAGES = [car1, car2, car3, car4, car5];

const App = () => {
    return (
        <main className="min-h-screen">
            <div className="w-full max-w-7xl mx-auto h-125 mt-10">
                <ImageSlider imageUrls={IMAGES} />
            </div>
            {/*Logo Carousel */}
            <div className="lg:mt-80 pt-20 px-0 bg-carousel h-80 relative">
                <LogoSlide />
            </div>

            <div className="md:mt-40 mb-20 container ">
                <SplideCarousel />
            </div>

            <div className="mt-40 mb-20 container">
                <SwipeImageCarousel />
            </div>
            <div className="mt-40 mb-20 container">
                <OptimizeImgContainer />
            </div>
        </main>
    );
};

export default App;
