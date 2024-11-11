import styles from "./Header.module.scss";
import topBanner from "@/assets/pr1/banner/top_bn.jpg";
import logo from "@/assets/pr1/logo.png";
import { AiOutlineShopping } from "react-icons/ai";
import { LuUser2 } from "react-icons/lu";
import SearchInput from "@/components/pr1/input/SearchInput/SearchInput";
import NavigationBar from "./NavigationBar/NavigationBar";

const Header = () => {
  return (
    <header>
      <div className={styles["top-banner"]}>
        <a href="/pr1">
          <img src={topBanner} alt="탑배너" />
        </a>
      </div>
      <div className={styles["header-wrap"]}>
        <div className={styles["header-wrap__top"]}>
          <div className={styles["header-wrap__top--left-container"]}>
            <a href="/pr1">
              <img
                className={styles["header-wrap__top--logo"]}
                src={logo}
                alt="로고"
              />
            </a>
            <SearchInput />
          </div>

          <div className={styles["header-wrap__top--right-container"]}>
            <ul className={styles["header-wrap__top--before-login-menu"]}>
              <li>
                <a href="/pr1">로그인</a>
              </li>
              <li className={styles["x-line"]}>
                <a href="/pr1">회원가입</a>
              </li>
              <li>
                <a href="/pr1">고객센터</a>
              </li>
            </ul>
            <div className={styles["header-wrap__top--user-menu"]}>
              <a href="/pr1">
                <AiOutlineShopping className={styles["menu-item"]} />
              </a>
              <a href="/pr1">
                <LuUser2 className={styles["menu-item"]} />
              </a>
            </div>
          </div>
        </div>

        <hr className={styles.line} />

        <NavigationBar />
      </div>
    </header>
  );
};

export default Header;
