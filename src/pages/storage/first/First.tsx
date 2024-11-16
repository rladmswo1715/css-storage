import styles from "./First.module.scss";
import QuickMenu from "@/components/pr1/mainQuickMenu/QuickMenu/QuickMenu";
import MainProductSlide from "@/components/pr1/slide/MainProductSlide/MainProductSlide";
import MainTopBannerSlide from "@/components/pr1/slide/MainTopBannerSlide/MainTopBannerSlide";
import useRefForanimate from "@/hooks/pr1/useRefForAnimate";

const First = () => {
  const { isVisible, itemRef } = useRefForanimate<HTMLDivElement>();

  return (
    <div>
      <MainTopBannerSlide />
      <QuickMenu />
      <div
        ref={itemRef}
        className={`${styles["product-slide-wrap"]} ${
          isVisible ? styles.visible : ""
        }`}
      >
        <h2 className={styles.h2}>이 상품 어때요?</h2>
        <MainProductSlide />
      </div>
    </div>
  );
};

export default First;
