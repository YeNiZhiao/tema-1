module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#F6F5F5',
        'secondary': '#D3E0EA',
        'textPrimary': '#276678',
        'komponen': '#1687A7'
      },
      backgroundImage: {
        'elemen': "url('/img/elemen.png')",
        'bgsection': "url('../img/bgsection.jpg')",
      },
      fontFamily: {
        'rancho': ['Rancho', 'cursive'],
        'chilanka': ['Chilanka', 'cursive'],
        'arvo': ['Arvo', 'cursive']
      }
    },

  },
  plugins: [],
}