tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "gradient-blue":
          "linear-gradient(280.4deg, #09AEFF 11.18%, #6E60EF 105.85%)",
      },
      colors: {
        clifford: "#da373d",
        btnAccent: "#519FDE",
        secondaryFont: "#444444",
        heroBlue:'#EAF5FF',
        primaryBlue:'#0C4687',
        primaryBlueHover:'#1778D0',
        blueBanner:'#5FD1FE',
        secondaryBlue:'#1778D0',
        secondaryBlueHover:'#0C4687',
        secondaryBg:'#F8F9FB',
        yellowBg:'#F1EEDB'
      },
      animation: {
        "scroll-left": "scroll-left 40s linear infinite",
        "scroll-right": "scroll-right 40s linear infinite",
        marquee: 'marquee 40s linear infinite',
        marquee2: 'marquee2 40s linear infinite',
        marqueeLogos: 'marqueeLogos 40s linear infinite',
        marqueeLogosMobile: 'marqueeLogos 10s linear infinite', 
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marqueeLogos: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    },
  },
};
