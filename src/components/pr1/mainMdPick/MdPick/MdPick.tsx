import MainProductCard from "@/components/pr1/product/MainProductCard/MainProductCard";
import styles from "./MdPick.module.scss";
import { MAIN_PRODUCT_SLIDE_DATA } from "@/constants/pr1/mockData";
import { useEffect, useState } from "react";

interface IMdPick {
  category: string;
}

const MdPick = ({ category }: IMdPick) => {
  const [currentItems, setCurrentItems] = useState<
    {
      id: number;
      img: string;
      discount?: string;
      title: string;
      description: string;
      price: number;
      discountPrice?: number;
      isBest: boolean;
      isNew: boolean;
      category: string;
    }[]
  >([]);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsFading(true);
    const timeout = setTimeout(() => {
      setCurrentItems(
        MAIN_PRODUCT_SLIDE_DATA.filter((item) => item.category === category)
      );
      setIsFading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [category]);

  return (
    <div
      className={`${styles["md-pick-item-wrap"]} ${
        isFading ? styles["fade-out"] : styles["fade-in"]
      }`}
      key={category}
    >
      {currentItems.map((item) =>
        Array.from({ length: 6 }, (_, index) => (
          <MainProductCard
            key={`${item.id}-${index}`}
            data={item}
            imgStyle={{ height: "380px" }}
          />
        ))
      )}
    </div>
  );
};

export default MdPick;
