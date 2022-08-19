/**
 * @type {import("@types/tailwindcss/tailwind-config").TailwindConfig }
 * @see https://github.com/tailwindlabs/tailwindcss/discussions/1077#discussioncomment-528222
 */

const spacing = {
  0: "0px",
  1: "5px",
  2: "10px",
  3: "15px",
  4: "20px",
  5: "25px",
  6: "30px",
  7: "35px",
  8: "40px",
  9: "45px",
  10: "50px",
  11: "55px",
  12: "60px",
  13: "65px",
  14: "70px",
  15: "75px",
  16: "80px",
  17: "85px",
  18: "90px",
  19: "95px",
  20: "100px",
  21: "105px",
  22: "110px",
  23: "115px",
  24: "120px",
  25: "125px",
};

/* eslint-disable global-require */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: "0px 1px 4px rgba(0, 0, 0, 0.15);",
      },
    },
    spacing: {
      ...spacing,
    },
    maxHeight: {
      full: "100%",
      screen: "100vh",
      ...spacing,
    },
    minHeight: {
      full: "100%",
      screen: "100vh",
      ...spacing,
    },
    maxWidth: {
      full: "100%",
      screen: "100vw",
      mobile: "600px",
      tablet: "768px",
      desktop: "1180px",
      ...spacing,
    },
    minWidth: {
      full: "100%",
      screen: "100vw",
      mobile: "600px",
      tablet: "768px",
      desktop: "1180px",
      ...spacing,
    },
    screens: {
      full: "100%",
      screen: "100vw",
      mobile: "601px", // https://github.com/structure-financial/website/issues/7
      tablet: "769px",
      "tablet-table-1": "950px",
      footer: "1020px",
      "tablet-table-2": "1080px",
      desktop: "1181px",
      "desktop-table-1": "1245px",
      chart: "1270px",
    },
    fontSize: {
      "body-1": ["18px", "26px"],
      "body-2": ["16px", "24px"],
      "body-3": ["14px", "22px"],
      "header-d-1": ["40px", "42px"],
      "header-d-2": ["36px", "40px"],
      "header-2": ["30px", "36px"],
      "header-3": ["24px", "30px"],
      "header-4": ["20px", "28px"],
      "header-5": ["18px", "26px"],
      "subtitle-1": ["16px", "24px"],
      "subtitle-2": ["14px", "20px"],
      "balance-display-1": ["28px", "30px"],
      "balance-display-2": ["46px", "50px"],
      caption: ["14px", "22px"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: {
        1: "#FCE7E3",
        2: "#F78F7B",
        3: "#E9664C",
        4: "#DB5940",
        5: "#5B180B",
      },
      green: {
        1: "#E9FAE3",
        2: "#A2E68C",
        3: "#8DE072",
        4: "#A2E68C",
        5: "#225412",
        6: "#5EB242",
      },
      blue: {
        1: "#E6F1FC",
        "hyperlink-1": "#1C2080",
        /**
         * 2 doesn't exist, this color palette comes from the mobile app - we also have none to keep
         * consistency and to make it easier for designers
         */
        3: "#2F70B5",
      },
      black: "#1A1A1C",
      white: "#FFFFFF",
      gray: {
        /** 1 is between `black` and `gray-850` in the old colors. */
        1: "#262626",
        /** 2 is similar to `gray-850` in the old colors. */
        2: "#424545",
        /** 3 is between `gray-850` to `gray-650` in the old colors */
        3: "#696B6B",
        /** 4 is similar to `gray-650` in the old colors */
        4: "#8A8A8A",
        /** 5 is similar to `gray-250` in the old colors */
        5: "#BEBFBF",
        /** 6 is between `gray-150` to `gray-50` in the old colors */
        6: "#EBEBEB",
        /** 7 is similar to `gray-50` in the old colors */
        7: "#F0F0F0",
        /** 8 is similar to `gray-25` in the old colors */
        8: "#F6F6F6",
        9: "#191919",
        /** Added for coding challenge */
      },
    },
  },
  plugins: [require("tailwindcss-font-inter")],
};

module.exports = {
  ...config,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
};
