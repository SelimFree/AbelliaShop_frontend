import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";
import { useEffect, useState, useCallback } from "react";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = ["./slider_1.png", "./slider_2.png", "./slider_3.png"];

    const previousSlide = () => {
        setCurrentSlide(currentSlide == 0 ? 2 : currentSlide - 1);
    };

    const nextSlide = useCallback(() => {
        setCurrentSlide(currentSlide == 2 ? 0 : currentSlide + 1);
    }, [currentSlide, images.length]);

    useEffect(() => {
        const interval = setInterval(() => nextSlide(), 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <div className="slider">
            <div
                className="container"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {images.map((img, i) => (
                    <img src={img} alt="" key={i} />
                ))}
            </div>
            <div className="icons">
                <div className="icon" onClick={previousSlide}>
                    <WestOutlinedIcon />
                </div>

                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    );
};

export default Slider;
