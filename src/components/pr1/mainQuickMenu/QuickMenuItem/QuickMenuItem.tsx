import styles from "./QuickMenuItem.module.scss";
import useRefForanimate from "@/hooks/pr1/useRefForAnimate";

interface IQuickMenuItem {
  img: JSX.Element;
  menuText: string;
  background: string;
  delay: number;
}

const QuickMenuItem = ({
  img,
  menuText,
  background,
  delay,
}: IQuickMenuItem) => {
  const { isVisible, itemRef } = useRefForanimate<HTMLAnchorElement>();

  return (
    <a
      href="/pr1"
      className={`${styles["item-wrap"]}  ${isVisible ? styles.visible : ""}`}
      ref={itemRef}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={`${styles["img-wrap"]} ${styles[background]}`}>{img}</div>
      <span>{menuText}</span>
    </a>
  );
};

export default QuickMenuItem;
