import slideImage1 from "@/assets/pr1/banner/main_bn_1.jpg";
import slideImage2 from "@/assets/pr1/banner/main_bn_2.jpg";
import slideImage3 from "@/assets/pr1/banner/main_bn_3.jpg";
import product1 from "@/assets/pr1/product/product_1.jpg";
import product2 from "@/assets/pr1/product/product_2.jpg";
import product3 from "@/assets/pr1/product/product_3.jpg";
import product4 from "@/assets/pr1/product/product_4.jpg";
import product5 from "@/assets/pr1/product/product_5.jpg";
import product6 from "@/assets/pr1/product/product_6.jpg";
import product7 from "@/assets/pr1/product/product_7.jpg";

type TNAVIGATION_ITEMS = Record<
  string,
  {
    url: string;
    menuItems: string[];
  }
>;

interface IMAIN_PRODUCT_SLIDE_DATA {
  id: number;
  img: string;
  discount?: string;
  title: string;
  description: string;
  price: number;
  discountPrice?: number;
  isBest: boolean;
  isNew: boolean;
  category: string;
}

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

export const MAIN_PRODUCT_SLIDE_DATA: IMAIN_PRODUCT_SLIDE_DATA[] = [
  {
    id: 1,
    img: product1,
    discount: "29%",
    title: "향수 마린",
    description: "로즈향으로 시크하게",
    price: 88900,
    discountPrice: 63000,
    isBest: true,
    isNew: false,
    category: "aaa",
  },
  {
    id: 2,
    img: product2,
    title: "립스틱",
    description: "보습 효과까지",
    price: 39800,
    isBest: true,
    isNew: false,
    category: "bbb",
  },
  {
    id: 3,
    img: product3,
    title: "향수 마린22",
    description: "로즈향으로 시크하게22",
    price: 88900,
    isBest: false,
    isNew: false,
    category: "ccc",
  },
  {
    id: 4,
    img: product4,
    discount: "40%",
    title: "치약",
    description: "상쾌해요",
    price: 10000,
    discountPrice: 6000,
    isBest: true,
    isNew: true,
    category: "ddd",
  },
  {
    id: 5,
    img: product5,
    title: "향수 마린1234",
    description: "로즈향으로 시크하게1234",
    price: 88900,
    isBest: true,
    isNew: false,
    category: "eee",
  },
  {
    id: 6,
    img: product6,
    title: "가나다라",
    description: "안녕하세요",
    price: 88900,
    isBest: false,
    isNew: true,
    category: "fff",
  },
  {
    id: 7,
    img: product7,
    title: "펌프",
    description: "펌프 상품입니다~~",
    price: 88900,
    isBest: false,
    isNew: true,
    category: "ggg",
  },
];
