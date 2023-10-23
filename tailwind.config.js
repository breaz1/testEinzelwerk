/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'arboriaBook': ['Arboria-Book', 'sans-serif'],
        'arboriaMedium': ['Arboria-Medium', 'sans'],
      },
      fontSize: {
        '7xl': '90px',
        '6xl': '64px',
        '5xl': '48px',
        '4xl': '40px',
        '3xl': '32px',
        '2xl': '24px',
        'xl': "20px",
      },
      lineHeight: {
        '96': '96px',
        '72': '72px',
        '56': '56px',
        '44': '44px',
        '40': '40px',
        '32': '32px',
        '30': '30px',
        '26': '26px',
        '24': '24px',
      },
      backgroundColor:{
        'blue-600':'#4F46E5',
        'blue-500':'#6366F1',
        'gray-200':'#E5E7EB',
        'gray-100':'#F3F4F6',
        'gray-900':'#111827',
        'backHeader':'#030712B8'
      },
      colors:{
        'purple':'#6366F1',
        'pink': '#AC54F1',
        'UpDarkBLue':'#111827',
        'DownDarkBlue': '#1F293E',
        'purpleCircle':'#9330D0',
        'pinkCircle':'#4F46E5',
        'grayToWhite':'#666A77',
        'waveBlueGradient':'#3327F9',
        'waveWhiteGradient':'#9A95EE00',
        'gray-700':'#374151',
        'red':'#FF2525'
      },
      width:{
        '3xl':'50rem',
        'round':'4.5rem',
        'moveHeader':'1480px',
      },
      height:{
        '3xl':'35rem',
        'round':'4.5rem',
        'header':'120px',
        'tab':'64px',
        'picture':'640px',
        'footer':'568px',
      },
      letterSpacing:{
        'tight':"-0.01em",
        'tighter':'-0.03em',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite', 
      },
    },
  },
  plugins: [],
}
