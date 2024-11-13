import "swiper/swiper-bundle.css";
import styles from "./MainTopBannerSlide.module.scss";
import { Swiper as SwiperCore } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { MAIN_TOP_BANNER_DATA } from "@/constants/pr1/mockData";

interface CustomCSSProperties extends React.CSSProperties {
  "--sub-text-start"?: string;
  "--sub-text-end"?: string;
}

const MainTopBannerSlide = () => {
  const [animateMainText, setAnimateMainText] = useState(false);
  const [animateSubText, setAnimateSubText] = useState(false);
  const [mainTextHeight, setMainTextHeight] = useState<number>(0);
  const mainTextRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    SwiperCore.use([Autoplay]);

    const updateMainTextHeight = () => {
      if (mainTextRef.current) {
        setMainTextHeight(mainTextRef.current.clientHeight);
      }
    };

    setTimeout(updateMainTextHeight, 3000);
    setAnimateMainText(true);
    const timeout = setTimeout(() => {
      setAnimateSubText(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const handleSlideChange = () => {
    setAnimateMainText(false);
    setAnimateSubText(false);

    setTimeout(() => {
      setAnimateMainText(true);
      setAnimateSubText(true);
      setTimeout(() => {
        if (mainTextRef.current) {
          setMainTextHeight(mainTextRef.current.clientHeight);
        }
      }, 300);
    }, 100);
  };

  return (
    <Swiper
      spaceBetween={0}
      onSlideChange={handleSlideChange}
      onSwiper={(swiper: SwiperCore) => console.log(swiper)}
      slidesPerView={1}
      modules={[Navigation]}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      speed={800}
    >
      {MAIN_TOP_BANNER_DATA.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <div className={styles["banner-wrap"]}>
            <img
              src={slide.image}
              alt="상단 메인 배너"
              className={styles["banner-wrap__img"]}
            />
            <span
              ref={mainTextRef}
              className={`${styles["banner-wrap__text"]} ${
                styles[slide.textPosition]
              } ${
                index === 0 && !animateMainText
                  ? styles.animateMainText
                  : animateMainText && styles.animateMainText
              }`}
            >
              {slide.mainText}
            </span>
            <span
              className={`${styles["banner-wrap__text"]} ${
                styles[slide.textPosition]
              } ${
                index === 0 && !animateSubText
                  ? styles.animateSubText
                  : animateSubText && styles.animateSubText
              }`}
              style={
                {
                  // CSS 변수 설정
                  "--sub-text-start": `calc(${mainTextHeight}px + 50%)`,
                  "--sub-text-end": `calc(${mainTextHeight - 10}px + 50% )`,
                } as CustomCSSProperties
              }
            >
              {slide.subText}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainTopBannerSlide;
