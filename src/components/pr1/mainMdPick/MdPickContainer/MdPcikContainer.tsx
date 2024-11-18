import useRefForanimate from "@/hooks/pr1/useRefForAnimate";
import styles from "./MdPickContainer.module.scss";
import { useEffect, useState } from "react";
import MdPick from "../MdPick/MdPick";

const PICK_CATEGORY = [
  {
    id: 1,
    title: "에센스/오일",
    keyword: "aaa",
  },
  {
    id: 2,
    title: "미스트/오일",
    keyword: "bbb",
  },
  {
    id: 3,
    title: "아이메이크업",
    keyword: "ccc",
  },
  {
    id: 4,
    title: "립메이크업",
    keyword: "ddd",
  },
  {
    id: 5,
    title: "베이스",
    keyword: "eee",
  },
];

const MdPickContainer = () => {
  const [currentCategory, setCurrentCategory] = useState("aaa");
  const { isVisible, itemRef } = useRefForanimate<HTMLDivElement>();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = PICK_CATEGORY.findIndex(
        (item) => item.keyword === currentCategory
      );
      const nextIndex = (currentIndex + 1) % PICK_CATEGORY.length;
      setCurrentCategory(PICK_CATEGORY[nextIndex].keyword);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentCategory]);

  return (
    <div
      ref={itemRef}
      className={`${styles["md-pick-wrap"]} ${isVisible ? styles.visible : ""}`}
    >
      <h2 className={styles.h2}>이번달 MD'PICK</h2>
      <div className={styles["category-wrap"]}>
        {PICK_CATEGORY.map((objectItem) => {
          const isFocusing = objectItem.keyword === currentCategory;
          return (
            <button
              key={objectItem.id}
              type="button"
              onClick={() => setCurrentCategory(objectItem.keyword)}
              className={`${styles["category-item"]} ${
                isFocusing && styles.focusing
              }`}
            >
              {objectItem.title}
            </button>
          );
        })}
      </div>

      <MdPick category={currentCategory} />
    </div>
  );
};

export default MdPickContainer;
