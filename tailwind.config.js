module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "code-image": "url('/images/code.jpg')",
      },
      colors: {
        // Configure your color palette here
        midnight: "#1C1C1C",
        moonlight: "#FFCB6B",
      },
      spacing: {
        8: "8px",
        10: "10px",
        12: "12px",
        15: "15px",
        22: "22px",
        24: "24px",
        25: "25px",
        35: "35px",
        40: "40px",
        45: "45px",
        55: "55px",
        70: "70px",
        80: "80px",
        90: "90px",
        100: "100px",
        120: "120px",
        135: "135px",
        180: "180px",
        300: "300px",
        360: "360px",
        500: "500px",
        800: "800px",
      },
      maxWidth: {
        1320: "1320px",
      },
      fontSize: {
        title: "64px",
        20: "20px",
        22: "22px",
        24: "24px",
        32: "32px",
        36: "36px",
        130: "130px",
      },

      inset: {
        "1/2-nav": "calc(50% + 30px)",
        64: "16rem",
        "1/5": "20%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
