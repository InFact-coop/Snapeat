const screens = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
}

module.exports = {
  theme: {
    screens,
    media: {
      sm: `(min-width: ${screens.sm})`,
      md: `(min-width: ${screens.md})`,
      lg: `(min-width: ${screens.lg})`,
      xl: `(min-width: ${screens.xl})`,
    },
    extend: {
      spacing: {
        "1d5": "0.375rem", // 6px
        "2d5": "0.625rem", // 10px
        "3d5": "0.875rem", // 14px
        "4": "1rem", // 16px
        "4d5": "1.125rem", // 18px
        "5": "1.25rem", // 20px
        "5d5": "1.375rem", // 22px
        "6": "1.5rem", // 24px
        "9": "2.25rem", // 36px
        "9d5": "2.375rem", // 38px
        "10": "2.5rem", // 40px
        "10d5": "2.625rem", // 42px
        "11": "2.75rem", // 44px
        "11d5": "2.875rem", // 46px
        "12": "3.75rem", // 60px
        "16": "4rem", // 64px
        "17": "4.25rem", // 68px
        "18": "4.5rem", // 72px
        "20": "5rem", // 80px
        "27": "6.75rem", // 108px
        "30": "7.5rem", // 120px
        "40": "10rem", // 160px
        "43": "10.75rem", // 172px
        "65": "16.25rem", // 260px
      },
      width: {},
      borderRadius: {},
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      xxl: "1.5rem", // 24px
      subheader: "1.75rem", // 28px
      header: "3rem", // 48px
    },
    lineHeight: {
      xs: "0.875rem", // 14px
      sm: "1rem", // 18px
      base: "1.25rem", // 20px
      lg: "1.375rem", // 22px
      xl: "1.5rem", // 24px
      xxl: "2rem", // 32px
      subheader: "2rem", // 32px
      header: "3.75rem", // 60px
    },
    colors: {
      navy: "#170a59",
      yellow: "#f8dd74",
      white: "#fdfdfd",
      black: "#4c4c4c",
      green: "#88fcc6",
      red: "#ef3f5f",
      lightgray: "#f8f8f8",
    },
    fontFamily: {
      sans: [
        "Muli",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    boxShadow: {
      button:
        "0 0 2px 1px rgba(0, 0, 0, 0.03), 0 6px 10px 2px rgba(20, 190, 203, 0.3)",
    },
  },
}
