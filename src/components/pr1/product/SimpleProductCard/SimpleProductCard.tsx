import { formatNumberWithCommas } from "@/utills/pr1/common";
import styles from "./SimpleProductCard.module.scss";
import { AiOutlineHeart } from "react-icons/ai";

interface ISimpleProductCardProps {
  data: {
    id: number;
    img: string;
    discount?: string;
    title: string;
    description: string;
    price: number;
    discountPrice?: number;
    isBest: boolean;
    isNew: boolean;
  };
}

const SimpleProductCard = ({ data }: ISimpleProductCardProps) => {
  return (
    <div className={styles["item-wrap"]}>
      <a href="/pr1">
        <img src={data.img} alt="위클리 베스트 상품" />
        <div className={styles["item-info"]}>
          <div className={styles["item-title-wrap"]}>
            <p>{data.title}</p>
            <AiOutlineHeart size={30} />
          </div>
          <div className={styles["item-price-wrap"]}>
            {data?.discountPrice && (
              <span className={styles["item-real-price"]}>
                {formatNumberWithCommas(data.discountPrice)}
              </span>
            )}
            <span
              className={
                data.discountPrice
                  ? styles["item-origin-price"]
                  : styles["item-real-price"]
              }
            >
              {formatNumberWithCommas(data.price)}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SimpleProductCard;
