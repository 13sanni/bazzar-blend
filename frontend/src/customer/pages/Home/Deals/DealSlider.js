import { jsx as _jsx } from "react/jsx-runtime";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DealCard from "./DealCard";
import { useAppSelector } from "../../../../Redux Toolkit/Store";
export default function DealSlider() {
    const { homePage } = useAppSelector((store) => store);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024, // Large screen
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Tablet
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (_jsx("div", { className: " py-5 lg:px-20", children: _jsx("div", { className: "slide-container  ", children: _jsx(Slider, { ...settings, children: homePage.homePageData?.deals?.map((item) => (_jsx("div", { className: "border flex flex-col items-center justify-center", children: _jsx(DealCard, { deal: item }) }))) }) }) }));
}
