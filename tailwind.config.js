module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      header: ['"Good Times"'],
      jura: ["Jura"],
    },

    extend: {
      animation: {
        "spin-earth": "spin 100s linear infinite",
        "spin-moon": "spin 30s linear infinite",
        "spin-rays": "spin 900s linear reverse infinite",
      },
      backgroundImage: {
        "code-image": "url('/images/code.jpg')",
      },
      colors: {
        // Configure your color palette here
        chocolate: "#312B33",
        plum: "#E19783",
        apple: "#D16D68",
        gum: "#D15362",
        blackberry: "#1B202F",
      },
      spacing: {
        orbit: "1500px",
        8: "8px",
        10: "10px",
        12: "12px",
        15: "15px",
        20: "20px",
        22: "22px",
        24: "24px",
        25: "25px",
        30: "30px",
        35: "35px",
        40: "40px",
        45: "45px",
        50: "50px",
        55: "55px",
        60: "60px",
        64: "64px",
        70: "70px",
        80: "80px",
        90: "90px",
        100: "100px",
        120: "120px",
        135: "135px",
        180: "180px",
        200: "200px",
        225: "225px",
        250: "250px",
        300: "300px",
        360: "360px",
        420: "420px",
        500: "500px",
        550: "550px",
        600: "600px",
        800: "800px",
      },
      minWidth: {
        lg_card: "750px",
      },

      maxWidth: {
        orbit: "500px",
        card: "750px",
        735: "735px",
        800: "800px",
        1320: "1320px",
      },

      minHeight: {
        youtube: "400px",
        inherit: "inherit",
        card_content: "340px",
      },

      fontSize: {
        version: "10px",
        title: "64px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        28: "28px",
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
  plugins: [],
};
