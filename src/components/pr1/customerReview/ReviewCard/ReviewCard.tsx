import { MAIN_PRODUCT_SLIDE_DATA } from "@/constants/pr1/mockData";
import ReviewProductCard from "../../product/ReviewProductCard/ReviewProductCard";
import styles from "./ReviewCard.module.scss";
import { IoIosStar } from "react-icons/io";

const ReviewCard = () => {
  return (
    <a href="/pr1" className={styles["card-wrap"]}>
      <div className={styles["card-content"]}>
        <div className={styles["top-wrap"]}>
          {Array.from({ length: 5 }, () => (
            <IoIosStar />
          ))}
          <span className={styles["card-writer"]}>u****</span>
        </div>
        <span>은은한 향이라서 좋아요~</span>
        <p className={styles["card-description"]}>
          산뜻하고 가벼운 느낌으로 피부에 잘 흡수 되었습니다. 수분을 채워주는
          효과가 좋아 피부 건조함을 완화시켜주었어요
        </p>
      </div>
      <div className={styles["card-product"]}>
        <ReviewProductCard
          img={MAIN_PRODUCT_SLIDE_DATA[0].img}
          title={MAIN_PRODUCT_SLIDE_DATA[0].title}
        />
      </div>
    </a>
  );
};

export default ReviewCard;
