import { AiOutlineHeart } from "react-icons/ai";
import styles from "./MainProductCard.module.scss";
import { formatNumberWithCommas } from "@/utills/pr1/common";

interface IMainProductCardProps {
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
  imgStyle?: React.CSSProperties;
}

const MainProductCard = ({ data, imgStyle }: IMainProductCardProps) => {
  return (
    <a href="/pr1" className={styles["product-item-wrap"]}>
      <img
        src={data.img}
        alt="판매 상품"
        className={styles["product-item-wrap__img"]}
        style={imgStyle}
      />
      <div className={styles["item-info"]}>
        <div className={styles["item-title-wrap"]}>
          <span className={styles["item-title"]}>{data.title}</span>
          <button type="button">
            <AiOutlineHeart size={30} />
          </button>
        </div>
        <p className={styles["item-description"]}>{data.description}</p>
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
        <div className={styles["label-wrap"]}>
          {data.isBest && (
            <>
              <div className={styles["label-best"]}>BEST</div>
              <div className={styles["label-new"]}>NEW</div>
            </>
          )}
        </div>
      </div>
    </a>
  );
};

export default MainProductCard;
