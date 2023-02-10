import images from "../Data/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";
import FreeMode from "swiper";
const SwiperUI = function () {
  const swiperRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = images.map((image, index) => {
    return (
      <SwiperSlide key={index}>
        <img style={{ width: "30%" }} src={image.url} alt="swiper pictures" />
      </SwiperSlide>
    );
  });
  return (
    <div>
      <h1>Day-60 - Swiper JS with React</h1>
      <Swiper
        spaceBetween={50}
        // navigation={true}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        // onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        // thumbs={{ swiper: thumbsSwiper }}
        // modules={[FreeMode]}
      >
        {slides}
      </Swiper>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={setThumbsSwiper}
      >
        {slides}
      </Swiper>
    </div>
  );
};
export { SwiperUI };
