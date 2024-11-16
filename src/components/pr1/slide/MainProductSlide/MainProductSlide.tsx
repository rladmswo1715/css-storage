import styles from "./MainProductSlide.module.scss";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import { Navigation } from "swiper/modules";
import { MAIN_PRODUCT_SLIDE_DATA } from "@/constants/pr1/mockData";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { formatNumberWithCommas } from "@/utills/pr1/common";

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
            <a href="/pr1" className={styles["product-item-wrap"]}>
              <img
                src={slide.img}
                alt="판매 상품"
                className={styles["product-item-wrap__img"]}
              />
              <div className={styles["item-info"]}>
                <div className={styles["item-title-wrap"]}>
                  <span className={styles["item-title"]}>{slide.title}</span>
                  <button type="button">
                    <AiOutlineHeart size={30} />
                  </button>
                </div>
                <p className={styles["item-description"]}>
                  {slide.description}
                </p>
                <div className={styles["item-price-wrap"]}>
                  {slide?.discountPrice && (
                    <span className={styles["item-real-price"]}>
                      {formatNumberWithCommas(slide.discountPrice)}
                    </span>
                  )}
                  <span
                    className={
                      slide.discountPrice
                        ? styles["item-origin-price"]
                        : styles["item-real-price"]
                    }
                  >
                    {formatNumberWithCommas(slide.price)}
                  </span>
                </div>
                <div className={styles["label-wrap"]}>
                  {slide.isBest && (
                    <>
                      <div className={styles["label-best"]}>BEST</div>
                      <div className={styles["label-new"]}>NEW</div>
                    </>
                  )}
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainProductSlide;
