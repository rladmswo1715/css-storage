import styles from "./ReviewProductCard.module.scss";

interface IReviewProductCard {
  img: string;
  title: string;
}

const ReviewProductCard = ({ img, title }: IReviewProductCard) => {
  return (
    <div className={styles["card-wrap"]}>
      <img src={img} alt="상품 이미지" className={styles["card-img"]} />
      <span className={styles["card-title"]}>{title}</span>
    </div>
  );
};

export default ReviewProductCard;
