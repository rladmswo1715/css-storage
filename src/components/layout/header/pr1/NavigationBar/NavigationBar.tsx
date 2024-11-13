import styles from "./NavigationBar.module.scss";
import { LuMenu } from "react-icons/lu";
import NavigationContent from "./NavigationContent";
import { useState } from "react";
import { NAVIGATION_ITEMS } from "@/constants/pr1/mockData";

const NavigationBar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggleNavigation = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles["navigation-item"]}>
        <div className={styles["category-item"]}>
          <button
            className={styles["category-item__toggle-btn"]}
            onClick={handleToggleNavigation}
          >
            <LuMenu className={styles["category-item__toggle-btn--img"]} />
            <span className={styles["category-item__text"]}>전체카테고리</span>
          </button>
          {Object.keys(NAVIGATION_ITEMS).map((item) => {
            return (
              <a
                key={item}
                href={NAVIGATION_ITEMS[item].url}
                className={styles["category-item__text"]}
              >
                {item}
              </a>
            );
          })}
        </div>

        <div className={styles["support-item"]}>
          <a href="/pr1">공지사항</a>
          <a href="/pr1">고객문의</a>
        </div>
      </div>

      <hr className={styles.line} />

      {isOpen && (
        <NavigationContent setOpen={setOpen} naviItems={NAVIGATION_ITEMS} />
      )}
    </>
  );
};

export default NavigationBar;
