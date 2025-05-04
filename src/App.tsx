import { car1, car3, car2, car4, car5 } from './assets/index';
import ImageSlider from './components/ImageSlider.tsx';

const IMAGES = [car1, car2, car3, car4, car5];

const App = () => {
    return (
        <div className="w-full max-w-7xl mx-auto h-125 mt-10">
            <ImageSlider imageUrls={IMAGES} />
        </div>
    );
};

export default App;
