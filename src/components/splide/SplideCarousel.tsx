import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import {
    SliderWin1,
    SliderWin2,
    SlideWin3,
    SliderWin4,
    SliderWin5,
} from '../../assets/index';

const SplideCarousel = () => {
    return (
        <Splide aria-label="My Favorite Images">
            <SplideSlide>
                <div>
                    <img
                        src={SliderWin2}
                        alt="Image 1"
                        className="w-full h-full object-cover"
                    />
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="flex flex-col w-full">
                    <img src={SliderWin1} alt="Image 2" />
                </div>
            </SplideSlide>

            <SplideSlide>
                <div className="flex flex-col w-full">
                    <img src={SlideWin3} alt="Image 2" />
                </div>
            </SplideSlide>
        </Splide>
    );
};
export default SplideCarousel;
