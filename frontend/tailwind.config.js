/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* fonts  */
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      /* SPECT RATION */
      aspectRatio: {
        '1/1.2': '1 / 1.2',
      },
      /* to create custom keyframs Animation in tailwind  */
      keyframes: {
        customPing: {
          "75%, 100%": {
            transform: "scale(1.2)",
            opacity: "0",
          },
        },

        customPingmorescal: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },

      },
      /* to add keyframs to animation  */
      animation: {
        'customPing': 'customPing 0.33s ease-in-out  ',
        'customPing-infinte': 'customPingmorescal 2s  linear infinite  ',

      },


      /* bg gradient liner for cart div */
      backgroundImage: {
        'custom-green-gradient':
          'linear-gradient(88deg, rgba(33,84,50,1) 0%, rgba(14,163,0,1) 0%, rgba(9,215,73,1) 30%, rgba(7,232,97,1) 40%, rgba(87,199,133,1) 56%, rgba(237,221,83,1) 95%)',
      },
      colors: {
      },
    },
  },
  plugins: [],
}