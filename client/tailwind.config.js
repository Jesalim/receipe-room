/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'back-gradient':
          'linear-gradient(170deg, rgba(0,0,0,0.7) 0%, rgba(60,0,0,0.500437675070028) 100%);',
        'login-gradient':
          'linear-gradient(157deg, rgba(20,16,15,0.6) 45%, rgba(31,41,51,0.5) 80%, rgba(81,50,1,0.5) 100%)',
      },
      colors: {
        smoke: '#050609',
        pale: '#F5d0c5',
        buff: '#d69f7e',
        bole: '#774936',
        bean: '#3C0000',
      },
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
