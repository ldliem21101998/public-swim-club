/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite"
      },
      backgroundColor: {
        primary: "#ffffff",
        secondary: "#D9E5E9",
        secondary1: "#53A7D8",
        secondary2: "#015C92",
        secondary3: "#00FFFF",
        button: "#febc59"
      },
      borderColor: {
        secondary1: "#0B2470",
        secondary2: "#015C92"
      },
      textColor: {
        primary: "#999999",
        title: "#000000",
        sectionTitle: "#003070",
        secondary1: "#0B2470",
        secondary2: "#015C92"
      },

      backgroundImage: {
        "pack-train": "url('./src/assets/mainpool.png')",
        "cafeteria-card":
          "url('https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif')"
      },
      // Các kích thước màn hình để responsive
      screens: {
        pv: "280px",
        pvmax: "360px",
        ph: "480px",
        dv: "1516px",
        dvmid: "1440px",
        dvmax: "1700px",
        dh: "5000px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      },
      fontFamily: {
        roboto_bold: ["roboto-con-bold"],
        roboto_bold_italic: ["roboto-con-bold-italic"],

        roboto_italic: ["roboto-con-italic"],
        roboto_light: ["roboto-con-light"],

        roboto_light_italic: ["roboto-con-light-italic"],
        roboto_regular: ["roboto-con-regular"]
      }
    }
  },
  plugins: [require("tailwindcss-animated")]
};
