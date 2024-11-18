import { MAIN_PRODUCT_SLIDE_DATA } from "@/constants/pr1/mockData";
import SimpleProductCard from "../product/SimpleProductCard/SimpleProductCard";
import styles from "./WeeklySpecial.module.scss";
import useRefForanimate from "@/hooks/pr1/useRefForAnimate";

const WeeklySpecial = () => {
  const { isVisible: isVisibleSlide, itemRef: itemRefSlide } =
    useRefForanimate<HTMLDivElement>();
  const { isVisible: isVisibleBanner, itemRef: itemRefBanner } =
    useRefForanimate<HTMLDivElement>();

  return (
    <>
      <h2
        ref={itemRefSlide}
        className={`${styles.h2} ${isVisibleSlide ? styles.visible : ""}`}
      >
        WEEKLY SPECIAL
      </h2>
      <div className={styles.parallax}>
        <div
          ref={itemRefBanner}
          className={`${styles["animate-container"]} ${
            isVisibleBanner ? styles.visible : ""
          }`}
        >
          <h3>피부 속부터 차오르는 광채 시리즈</h3>
          <span>피부 고민에 맞는 솔루션 찾기</span>
          <div className={styles["item-wrap"]}>
            {MAIN_PRODUCT_SLIDE_DATA.map((item, index) => {
              if (index >= 3) return null;

              return <SimpleProductCard key={item.id} data={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeeklySpecial;
