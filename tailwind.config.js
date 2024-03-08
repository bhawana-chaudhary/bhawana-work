/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "xl-up": { min: "1280px" },
        // => @media (min-width: 1280px) { ... }

        "c-up": { min: "1205x" },
        // => @media (min-width: 1280px) { ... }  container up

        "c-down": { min: "1205x" },
        // => @media (max-width: 1280px) { ... } container down

        desktop: { min: "992px", max: "1279px" },
        // => @media (min-width: 992px and max-width: 1279px) { ... }

        lg: { max: "991px" },
        // => @media (max-width: 991px) { ... }

        "lg-up": { min: "992px" },
        // => @media (min-width: 1280px) { ... }

        tablet: { min: "768px", max: "991px" },
        // => @media (min-width: 768px and max-width: 991px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "md-up": { min: "768px" },
        // => @media (min-width: 768px) { ... }

        phablet: { min: "596px", max: "767px" },
        // => @media (min-width: 596px and max-width: 767px) { ... }

        sm: { max: "595px" },
        // => @media (max-width: 595px) { ... }

        "sm-up": { min: "596px" },
        // => @media (min-width: 596px) { ... }

        xs: { max: "480px" },
        // => @media (max-width: 480px) { ... }
      },
      colors: {
        orange: "#e85e06",
        darkBlue: "#001d3d"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        mainRow: "calc(100% + 30px)",
        threeCard: "calc(33.33% - 30px)",
        halfWidth: "calc(50% - 30px)",
        wixOneHeader: "calc(100% - 300px)",
        wImgWithContent: "calc(100% - 470px)",
        fourCard: "calc(25% - 30px)",
        mainRowWith20px: "calc(100% + 20px)",
        threeCardWith20px: "calc(33.33% - 20px)",
        fourCardWith20px: "calc(25% - 20px)",
        halfWidthWith20px: "calc(50% - 20px)",
        mainRowWith40px: "calc(100% + 40px)",
        threeCardWith40px: "calc(33.33% - 40px)",
      },
      fontFamily: {
        rubik: "Rubik, sans-serif",
        inter: "Inter, sans-serif",
        mulish: "Mulish, sans-serif",
        JakartaSans: "Plus Jakarta Sans, sans-serif",
        figtree: "Figtree, sans-serif",
        playfairDisplay: "Playfair Display, serif",
      },
      backgroundImage: {
        'gradient-linear': 'linear-gradient(to top, rgba(32, 22, 84, 0.6), rgba(0, 0, 100, 0) 72%)',
        'gradient-linear-hover': 'linear-gradient(to top, rgba(32, 22, 84, 0.86), rgba(0, 0, 100, 0) 72%)',
        'gradient-linear2': 'linear-gradient(to top, rgb(41 37 65), rgba(0, 0, 100, 0) 72%)',
        'gradient-linear2-hover': 'linear-gradient(to top, rgb(27 25 41), rgba(0, 0, 100, 0) 72%)',
        'hongoH1Gradient': 'linear-gradient(269.34deg, #FC8A3D -0.22%, #EB314D 49.89%, #DA138E 100%)',
        'hongoVideoImgGradient': 'linear-gradient(180deg,#F6F7FB 0%, rgba(246,247,251,0) 100%)',
        'hongoAnimatSlider2Gradient': 'linear-gradient(94.13deg,#DB148A 1.13%,rgb(255 80 34/85%) 48.61%,rgba(251,135,61,0.15) 99.15%)',
        'hongoAnimatSlider2ListGradient': 'linear-gradient(180deg,#FFFFFF 0%,rgba(255,255,255,0) 100%)',
        'hongoTableLiGradient': 'linear-gradient(269.34deg,#FC8A3D -0.22%,#EB314D 49.89%,#DA1343 100%)',
        'hongoTableFootGradient': 'linear-gradient(180deg,rgba(255,255,255,0) 0%,#FFFFFF 70%)',
        'hongoScrollWrapGradient': 'linear-gradient(to right,rgba(255,255,255,1) 22%,rgb(255 255 255/0%) 100%)'
      },
      animation: {
        // 'backToTop': 'animatsideimg 2s linear infinite alternate',
        'backToTop': 'backToTop 3s linear infinite alternate',
      },
      keyframes: {
        backToTop: {
          '0%': {
            bottom: '40px',
          },
          '100%': {
            bottom: '55px',
          },
        },
      },
      boxShadow: {
        videoBoxShadow: '0 0 8px rgba(0,0,0,.6)',
        wixoneFooterShadow: 'rgb(51, 51, 51) 0px 0px 0px 1px',
        em2ThreeCardShadow: '6px 3px 10px 0px rgba(0, 0, 0, 0.19)',
        em2imgContentShadow: '4px 9px 10px 0px rgba(0, 0, 0, 0.5)',
        em2imgContentShadow2: '4px 4px 10px 0px rgba(0, 0, 0, 0.24)',
        hongoVideoPlayIconShadow: '5px 5px 100px rgba(89,101,124,.55)',
        hongoCol3CardShadow: '0 0 50px rgba(0,0,0,.1)',
        hongoCol3CardHoverShadow: '0 0 70px rgba(0,0,0,.25)',
        hongoImageShadow: '0 14px 50px rgba(89,101,124,.15)',
      },
      backgroundColor: {
        overlayBGColor: 'rgba(11, 11, 11, 0.749)',
      },
      backgroundPosition: {
        hongoH1GradientPosition: '101% 0',
      },
      backgroundSize: {
        hongoH1GradientSize: '300% 100%',
      }

    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scroll-behavior-smooth': {
          'scroll-behavior': 'smooth',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}












