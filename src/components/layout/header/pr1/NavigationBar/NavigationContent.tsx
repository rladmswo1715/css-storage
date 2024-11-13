import styles from "./NavigationContent.module.scss";
import { AiFillCloseSquare } from "react-icons/ai";

interface INavigationContent {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  naviItems: Record<
    string,
    {
      url: string;
      menuItems: string[];
    }
  >;
}

const NavigationContent = ({ setOpen, naviItems }: INavigationContent) => {
  return (
    <div className={styles["navigation-content-wrap"]}>
      <div className={styles["navigation-content"]}>
        {Object.keys(naviItems).map((item) => (
          <div key={item} className={styles["navigation-content__item"]}>
            <a href={naviItems[item].url}>
              <div className={styles["main-category"]}>{item}</div>
            </a>
            <hr className={styles.line} />
            {naviItems[item].menuItems.length > 0 && (
              <div className={styles["category-items"]}>
                {naviItems[item].menuItems.map((menuItem) => (
                  <a href="/pr1" key={menuItem}>
                    {menuItem}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <button className={styles["close-btn"]} onClick={() => setOpen(false)}>
          <AiFillCloseSquare className={styles["close-btn__img"]} />
        </button>
      </div>
    </div>
  );
};

export default NavigationContent;
