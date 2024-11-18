import styles from "./MainProductSlide.module.scss";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import { Navigation } from "swiper/modules";
import { MAIN_PRODUCT_SLIDE_DATA } from "@/constants/pr1/mockData";
import { useState } from "react";
import MainProductCard from "@/components/pr1/product/MainProductCard/MainProductCard";

const MainProductSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className={styles["product-slide-wrap"]}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        modules={[Navigation]}
        navigation
        loop={true}
        speed={800}
        centeredSlides={true}
        onSlideChange={handleSlideChange}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {MAIN_PRODUCT_SLIDE_DATA.map((slide, index) => (
          <SwiperSlide
            key={slide.id}
            className={
              activeIndex === index
                ? styles["active-slide"]
                : styles["out-active-slide"]
            }
          >
            <MainProductCard
              data={slide}
              imgStyle={
                activeIndex !== index
                  ? { height: "352px" }
                  : { height: "432px" }
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainProductSlide;
