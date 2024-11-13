import QuickMenuItem from "../QuickMenuItem/QuickMenuItem";
import styles from "./QuickMenu.module.scss";
import {
  AiOutlineTrophy,
  AiOutlineCalendar,
  AiOutlineGift,
  AiOutlineNotification,
} from "react-icons/ai";
import { RiCouponLine, RiCustomerService2Line } from "react-icons/ri";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";
import { MdOutlineRateReview } from "react-icons/md";

const ICONS = [
  { icon: <AiOutlineTrophy size={50} />, text: "베스트", background: "purple" },
  { icon: <RiCouponLine size={50} />, text: "쿠폰존", background: "purple" },
  {
    icon: <PiShoppingBagOpenDuotone size={50} />,
    text: "사은품",
    background: "purple",
  },
  {
    icon: <AiOutlineCalendar size={50} />,
    text: "기획전",
    background: "purple",
  },
  { icon: <AiOutlineGift size={50} />, text: "이벤트", background: "blue" },
  {
    icon: <RiCustomerService2Line size={50} />,
    text: "고객센터",
    background: "blue",
  },
  {
    icon: <AiOutlineNotification size={50} />,
    text: "공지사항",
    background: "blue",
  },
  { icon: <MdOutlineRateReview size={50} />, text: "리뷰", background: "blue" },
];

const QuickMenu = () => {
  return (
    <div className={styles["menu-wrap"]}>
      <div className={styles["menu-bar"]}>
        {ICONS.map((item, index) => (
          <QuickMenuItem
            key={item.text}
            img={item.icon}
            menuText={item.text}
            background={item.background}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickMenu;
