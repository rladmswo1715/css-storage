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
