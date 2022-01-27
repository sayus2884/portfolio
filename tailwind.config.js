module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-earth": "spin 80s linear infinite",
        "spin-moon": "spin 15s linear infinite",
        "spin-rays": "spin 100s linear reverse infinite",
      },
      backgroundImage: {
        "code-image": "url('/images/code.jpg')",
      },
      colors: {
        // Configure your color palette here
        chocolate: "#312B33",
        plum: "#E19783",
        cloudy: "#BABABA",
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
        140: "140px",
        180: "180px",
        300: "300px",
        360: "360px",
        420: "420px",
        500: "500px",
        800: "800px",
      },
      maxWidth: {
        735: "735px",
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

      lineHeight: {
        "extra-loose": "10rem",
      },

      inset: {
        "1/2-nav": "calc(50% + 30px)",
        64: "16rem",
        "1/5": "20%",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["disabled"],
      borderColor: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
