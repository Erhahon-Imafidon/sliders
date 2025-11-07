import {
    CarOne,
    CarTwo,
    CarThree,
    CarFour,
    CarFive,
    CarOneSmall,
    CarTwoSmall,
    CarThreeSmall,
    CarFourSmall,
    CarFiveSmall,
} from '../assets/imgs';
import OptimizeImgItem from './OptimizeImgItem';

const OriginalImgSizes = [
    { src: CarOne },
    { src: CarTwo },
    { src: CarThree },
    { src: CarFour },
    { src: CarFive },
];

const SmallImgSizes = [
    { src: CarOneSmall },
    { src: CarTwoSmall },
    { src: CarThreeSmall },
    { src: CarFourSmall },
    { src: CarFiveSmall },
];

const OptimizeImgContainer = () => {
    return (
        <section className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SmallImgSizes.map((smallImg, index) => (
                <OptimizeImgItem
                    key={index}
                    blurredSrc={smallImg.src}
                    src={OriginalImgSizes[index].src}
                    alt={`Car ${index + 1}`}
                />
            ))}
        </section>
    );
};

export default OptimizeImgContainer;
