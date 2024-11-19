import styles from "./Footer.module.scss";
import logo from "@/assets/pr1/logo.png";

const Footer = () => {
  return (
    <footer className={styles["footer-wrap"]}>
      <div className={styles["img-wrap"]}>
        <img src={logo} alt="로고" />
      </div>
      <div>
        <p className={styles.info}>
          <span className={styles.before}>상호</span> : EJ
          <span className={styles.before}>대표자</span> : 홍길동
          <span className={styles.before}>EMAIL</span>:
          <span className={styles.before}>사업자번호</span> : 000-0000-0000
          [사업자정보확인]
          <span className={styles.before}>통신판매업</span>
          신고 : 000-000-00000
        </p>
        <p className={styles.info}>
          <span className={styles.before}>대표번호 </span> : 0000-1111
          <span className={styles.before}>팩스 </span> : 000-0000-0000
          <span className={styles.before}>주소 </span>: 00000 서울 관악구
          가나다로 11 가나다아파트 001호
        </p>
      </div>
    </footer>
  );
};

export default Footer;
