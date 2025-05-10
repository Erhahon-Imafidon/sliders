import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './spliderCarousel.css';

import {
    SliderWin1,
    SliderWin2,
    SlideWin3,
    SliderWin4,
    SliderWin5,
} from '../../assets/index';

// Note: By default, if you provide perPage option, Splide generates a pagination button for each page, but not for each slide. In case that you want to disable this "paging" — meaning make a carousel move one by one and display all dots — set the focus option to 0 (you don't have to set perMove in this case).

const SplideCarousel = () => {
    const spliderOptions = {
        type: 'slide',
        perPage: 3,
        // perMove: 1,
        focus: 0,
        gap: '1rem',
        // focus: 'center', Use this if you want to center the active slide also add the trimSpace: false
        // trimSpace: false,

        // Responsive breakpoints
        breakpoints: {
            1200: {
                perPage: 3,
            },
            768: {
                perPage: 2,
            },
            576: {
                perPage: 1,
            },
        },

        //classes
        classes: {
            prev: 'splide__arrow--prev custom-prev', // Additional class for prev arrow
            next: 'splide__arrow--next custom-next', // Additional class for next arrow
        },
    };

    return (
        <div className="w-full">
            <Splide
                tag="section"
                options={spliderOptions}
                aria-label="My Favorite Images"
            >
                <SplideSlide>
                    <div className="flex flex-col gap-y-4">
                        <div className="h-100 overflow-hidden">
                            <img
                                src={SliderWin2}
                                alt="Image 1"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="space-y-2">
                            <h2>This is the first splider Card</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Maiores, placeat?
                            </p>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="flex flex-col gap-y-4 ">
                        <div className="h-100 overflow-hidden">
                            <img
                                src={SliderWin1}
                                alt="Image 2"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className={'space-y-2'}>
                            <h2>This is the second splider Card</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Maiores, placeat?
                            </p>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="flex flex-col gap-y-4 ">
                        <div className="h-100 overflow-hidden">
                            <img
                                src={SlideWin3}
                                alt="Image 3"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="space-y-2">
                            <h2>This is the third splider Card</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Maiores, placeat?
                            </p>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="flex flex-col gap-y-4">
                        <div className="h-100 overflow-hidden">
                            <img
                                src={SliderWin4}
                                alt="Image 4"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className={'space-y-2'}>
                            <h2>This is the fourth splider Card</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Maiores, placeat?
                            </p>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="flex flex-col gap-y-4">
                        <div className="h-100 overflow-hidden">
                            <img
                                src={SliderWin5}
                                alt="Image 5"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className={'space-y-2'}>
                            <h2>This is the fifth splider Card</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Maiores, placeat?
                            </p>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
};
export default SplideCarousel;
