/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./**/*.{html,js}"],
  // content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'header-A-bg': "url('/images/demo-hosting-header-bg.jpg')",
        'header-B-bg': "url('/images/demo-hosting-home-bg.jpg')",
        'footer-bg': "url('/images/demo-hosting-footer-bg.jpg')",
        'section-A-bg': "url('/images/demo-hosting-home-06.jpg')",
        'about-A-bg': "url('/images/demo-hosting-about-bg.jpg')",
        'about-B-bg': "url('/images/demo-hosting-about-02.jpg')",
      }
    },
  },
  plugins: [],
}

