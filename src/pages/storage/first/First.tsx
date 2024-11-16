import styles from "./First.module.scss";
import QuickMenu from "@/components/pr1/mainQuickMenu/QuickMenu/QuickMenu";
import MainProductSlide from "@/components/pr1/slide/MainProductSlide/MainProductSlide";
import MainTopBannerSlide from "@/components/pr1/slide/MainTopBannerSlide/MainTopBannerSlide";

const First = () => {
  return (
    <div>
      <MainTopBannerSlide />
      <QuickMenu />
      <h2 className={styles.h2}>이 상품 어때요?</h2>
      <MainProductSlide />
    </div>
  );
};

export default First;
