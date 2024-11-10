import styles from "./SearchInput.module.scss";
import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <div className={styles["search-wrap"]}>
      <input className={styles["search-input"]} />
      <button type="button">
        <IoIosSearch className={styles["search-img"]} />
      </button>
    </div>
  );
};

export default SearchInput;
