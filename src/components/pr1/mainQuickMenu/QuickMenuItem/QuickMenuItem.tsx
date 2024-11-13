import { useEffect, useRef, useState } from "react";
import styles from "./QuickMenuItem.module.scss";

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
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentItem = itemRef.current;

    if (currentItem) {
      observer.observe(currentItem);
    }

    return () => {
      if (currentItem) observer.unobserve(currentItem);
    };
  }, []);

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
