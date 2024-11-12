import slideImage1 from "@/assets/pr1/banner/main_bn_1.jpg";
import slideImage2 from "@/assets/pr1/banner/main_bn_2.jpg";
import slideImage3 from "@/assets/pr1/banner/main_bn_3.jpg";

type TNAVIGATION_ITEMS = Record<
  string,
  {
    url: string;
    menuItems: string[];
  }
>;

export const NAVIGATION_ITEMS: TNAVIGATION_ITEMS = {
  핫딜: {
    url: "pr1",
    menuItems: [
      "에센스/오일",
      "미스트/오일",
      "아이메이크업",
      "립메이크업",
      "베이스",
    ],
  },
  베스트: {
    url: "pr1",
    menuItems: [],
  },
  브랜드: {
    url: "pr1",
    menuItems: [],
  },
  이벤트ㆍ쿠폰: {
    url: "pr1",
    menuItems: [],
  },
  매거진: {
    url: "pr1",
    menuItems: [],
  },
};

export const MAIN_TOP_BANNER_DATA = [
  {
    id: 1,
    image: slideImage1,
    mainText: "다양한 화장품",
    subText: "쟁여두기",
    textPosition: "left",
  },
  {
    id: 2,
    image: slideImage2,
    mainText: "치아건강 챙기자!!",
    subText: "치약 세트",
    textPosition: "right",
  },
  {
    id: 3,
    image: slideImage3,
    mainText: "예쁜 화장 하세요!",
    subText: "하루종일",
    textPosition: "right",
  },
];
