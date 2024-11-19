import useRefForanimate from "@/hooks/pr1/useRefForAnimate";
import styles from "./ReviewContainer.module.scss";
import ReviewCard from "../ReviewCard/ReviewCard";

const ReviewContainer = () => {
  const { isVisible, itemRef } = useRefForanimate<HTMLDivElement>();

  return (
    <div
      ref={itemRef}
      className={`${styles["review-container-wrap"]} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <h2 className={styles.h2}>고객님들의 후기</h2>
      <div className={styles["review-wrap"]}>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default ReviewContainer;
