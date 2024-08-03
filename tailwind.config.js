module.exports = {
  content: [
    './src/index.html',
    './srcs/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom,  #dbeafe , #fef3c7, #e0e7ff   , #d1fae5, #ede9fe)',
      },
    },
  },
  plugins: [],
}