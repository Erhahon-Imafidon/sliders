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
            <div className="mx-auto mt-10 h-125 w-full max-w-7xl">
                <ImageSlider imageUrls={IMAGES} />
            </div>

            <div className="bg-carousel relative h-80 px-0 pt-20 lg:mt-80">
                <LogoSlide />
            </div>

            <div className="container mb-20 md:mt-40">
                <SplideCarousel />
            </div>

            <div className="container mt-40 mb-20">
                <SwipeImageCarousel />
            </div>
            <div className="container mt-40 mb-20">
                <OptimizeImgContainer />
            </div>
        </main>
    );
};

export default App;
