import { Swiper, SwiperSlide } from 'swiper/react';
import { swipperImage } from './swipperData.ts';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css/bundle';

const SwipeImageCarousel = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSlideChange={() => console.log('swiperSlideChange')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {swipperImage.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="h-100">
                        <img src={item.image} alt={item.title} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
export default SwipeImageCarousel;
