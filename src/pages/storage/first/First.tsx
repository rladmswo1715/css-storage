import styles from "./First.module.scss";
import QuickMenu from "@/components/pr1/mainQuickMenu/QuickMenu/QuickMenu";
import MainProductSlide from "@/components/pr1/slide/MainProductSlide/MainProductSlide";
import MainTopBannerSlide from "@/components/pr1/slide/MainTopBannerSlide/MainTopBannerSlide";
import useRefForanimate from "@/hooks/pr1/useRefForAnimate";
import centerBn from "@/assets/pr1/banner/center_bn.jpg";
import MdPickContainer from "@/components/pr1/mainMdPick/MdPickContainer/MdPcikContainer";

const First = () => {
  const { isVisible: isVisibleSlide, itemRef: itemRefSlide } =
    useRefForanimate<HTMLDivElement>();
  const { isVisible: isVisibleBanner, itemRef: itemRefBanner } =
    useRefForanimate<HTMLDivElement>();

  return (
    <div>
      <MainTopBannerSlide />
      <QuickMenu />
      <div
        ref={itemRefSlide}
        className={`${styles["product-slide-wrap"]} ${
          isVisibleSlide ? styles.visible : ""
        }`}
      >
        <h2 className={styles.h2}>이 상품 어때요?</h2>
        <MainProductSlide />
      </div>
      <div
        ref={itemRefBanner}
        className={`${styles["center-banner"]} ${
          styles["product-slide-wrap"]
        } ${isVisibleBanner ? styles.visible : ""}`}
      >
        <a href="/pr1">
          <img src={centerBn} alt="센터 배너" />
        </a>
      </div>
      <MdPickContainer />
    </div>
  );
};

export default First;
