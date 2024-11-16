import { useEffect, useRef, useState } from "react";

const useRefForanimate = <T extends HTMLElement>() => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<T | null>(null);

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

  return { isVisible, itemRef };
};

export default useRefForanimate;
