/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1080px',
      },
    },
    screens: {
      mobile: '360px', // @media (min-width: 360px)
      foldable: '523px', // @media (min-width: 523px)
      tablet: '768px', // @media (min-width: 768px)
    },
    fontFamily: {
      sans: ['Pretendard'],
    },
    spacing: {
      auto: 'auto',
      0: '0',
      8: '8px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      32: '32px',
    },
    zIndex: {
      0: '1',
      1: '100', // Input
      2: '200', // Fixed bottom Bar, Sidebar, Tooltip
      3: '300', // Bottom bar, Top bar Backdrop
      4: '400', // Top bar
      5: '500', // Pane
      6: '600', // Modal backdrop
      7: '700', // Modal container
      8: '800', //
      9: '900', //
      10: '1000', // Toast
    },
    boxShadow: {
      card: '4px 3px 16px 0px rgba(108, 108, 128, 0.05)',
      header: '0px 1px 7px 0px rgba(0, 0, 0, 0.10)',
      main: '0px 3px 12px 0px rgba(184, 184, 204, 0.20)',
      blue: '0px 4px 12px 0px rgba(144, 169, 254, 0.40)',
      dropdown: '0px 16px 30px 4px rgba(0, 0, 0, 0.10)',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        red: '#ff6b6b',
        black: '#000000',
        grayscale: {
          50: '#f8f9fc',
          100: '#e8ebf5',
          200: '#dcdcea',
          300: '#b8b8cc',
          400: '#9191a6',
          500: '#6c6c80',
          600: '#565666',
          700: '#434350',
          800: '#2b2b33',
          900: '#0b0b0d',
        },
        glassicon: {
          blue: 'linear-gradient(85deg, #5d82fe 0%, #90a9fe 100%)',
          blue2: '#90a9fe73',
          purple: 'linear-gradient(85deg, #8d70ff 0%, #b4a1ff 100%)',
          purple2: '#c7b9ff66',
          blur: 'linear-gradient(85deg, #ffffff 0%, #90a9fe 100%)',
        },
        blue: {
          500: '#678afe',
          400: '#7795fe',
          300: '#90a9fe',
          200: '#acbfff',
          100: '#cdd8ff',
          50: '#e5ebff',
        },
        purple: {
          500: '#8d70ff',
          400: '#9980ff',
          300: '#b4a1ff',
          200: '#c7b9ff',
          100: '#ded6ff',
          50: '#ebe5ff',
        },
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'gradient-main':
          'linear-gradient(180deg, rgba(248, 249, 252, 0.00) 0%, #E8EBF5 100%)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.H1-bold': {
          fontFamily: 'Pretendard',
          fontWeight: '700',
          lineHeight: '48px',
          fontSize: '40px',
        },
        '.H1-semibold': {
          fontFamily: 'Pretendard',
          fontWeight: '600',
          lineHeight: '48px',
          fontSize: '40px',
        },
        '.H2-bold': {
          fontFamily: 'Pretendard',
          fontWeight: '700',
          lineHeight: '43px',
          fontSize: '36px',
        },
        '.H2-semibold': {
          fontFamily: 'Pretendard',
          fontWeight: '600',
          lineHeight: '43px',
          fontSize: '36px',
        },
        '.H3-bold': {
          fontFamily: 'Pretendard',
          fontWeight: '700',
          lineHeight: '36px',
          fontSize: '30px',
        },
        '.H3-semibold': {
          fontFamily: 'Pretendard',
          fontWeight: '600',
          lineHeight: '36px',
          fontSize: '30px',
        },
        '.H4-bold': {
          fontFamily: 'Pretendard',
          fontWeight: '700',
          lineHeight: '30px',
          fontSize: '24px',
        },
        '.H4-semibold': {
          fontFamily: 'Pretendard',
          fontWeight: '600',
          lineHeight: '30px',
          fontSize: '24px',
        },
        '.H5-bold': {
          fontFamily: 'Pretendard',
          fontWeight: '700',
          lineHeight: '24px',
          fontSize: '20px',
        },
        '.H5-semibold': {
          fontFamily: 'Pretendard',
          fontWeight: '600',
          lineHeight: '24px',
          fontSize: '20px',
        },
        '.body1-extrabold': {
          fontFamily: 'Pretendard',
          fontWeight: '800',
          lineHeight: '23px',
          fontSize: '18px',
        },
        '.body1-bold': {
          fontFamily: 'Pretendard',
          fontWeight: '700',
          lineHeight: '23px',
          fontSize: '18px',
        },
        '.body1-semibold': {
          fontFamily: 'Pretendard',
          fontWeight: '600',
          lineHeight: '23px',
          fontSize: '18px',
        },
        '.body1-medium': {
          fontFamily: 'Pretendard',
          fontWeight: '500',
          lineHeight: '23px',
          fontSize: '18px',
        },
        '.body2-extrabold': {
          fontFamily: 'Pretendard',
          fontWeight: '800',
          lineHeight: '24px',
          fontSize: '16px',
        },
        '.body2-bold': {
          fontFamily: 'Pretendard',
          fontWeight: '700',
          lineHeight: '24px',
          fontSize: '16px',
        },
        '.body2-semibold': {
          fontFamily: 'Pretendard',
          fontWeight: '600',
          lineHeight: '24px',
          fontSize: '16px',
        },
        '.body2-medium': {
          fontFamily: 'Pretendard',
          fontWeight: '500',
          lineHeight: '24px',
          fontSize: '16px',
        },
        '.body3-extrabold': {
          fontFamily: 'Pretendard',
          fontWeight: '800',
          lineHeight: '18px',
          fontSize: '14px',
        },
        '.body3-semibold': {
          fontFamily: 'Pretendard',
          fontWeight: '600',
          lineHeight: '18px',
          fontSize: '14px',
        },
        '.body3-bold': {
          fontFamily: 'Pretendard',
          fontWeight: '700',
          lineHeight: '18px',
          fontSize: '14px',
        },
        '.body3-medium': {
          fontFamily: 'Pretendard',
          fontWeight: '500',
          lineHeight: '18px',
          fontSize: '14px',
        },
        '.detail1-bold': {
          fontFamily: 'Pretendard',
          fontWeight: '700',
          lineHeight: '16px',
          fontSize: '12px',
        },
        '.detail1-semibold': {
          fontFamily: 'Pretendard',
          fontWeight: '600',
          lineHeight: '16px',
          fontSize: '12px',
        },
        '.detail1-medium': {
          fontFamily: 'Pretendard',
          fontWeight: '500',
          lineHeight: '16px',
          fontSize: '12px',
        },
        '.detail2-semibold': {
          fontFamily: 'Pretendard',
          fontWeight: '600',
          lineHeight: '12px',
          fontSize: '10px',
        },
        '.detail2-bold': {
          fontFamily: 'Pretendard',
          fontWeight: '700',
          lineHeight: '12px',
          fontSize: '10px',
        },
        '.detail3-bold': {
          fontFamily: 'Pretendard',
          fontWeight: '700',
          lineHeight: '10px',
          fontSize: '8px',
        },
        '.detail3-semibold': {
          fontFamily: 'Pretendard',
          fontWeight: '600',
          lineHeight: '10px',
          fontSize: '8px',
        },
        '.detail3-medium': {
          fontFamily: 'Pretendard',
          fontWeight: '500',
          lineHeight: '10px',
          fontSize: '8px',
        },
        '.en-H1-semibold': {
          fontFamily: 'Pretendard',
          fontWeight: '600',
          lineHeight: '36px',
          fontSize: '24px',
        },
        '.en-H1-medium': {
          fontFamily: 'Pretend',
          fontWeight: '500',
          lineHeight: '36px',
          fontSize: '24px',
        },
        '.en-H2-bold': {
          fontFamily: 'Pretend',
          fontWeight: '700',
          lineHeight: '24px',
          fontSize: '16px',
        },
        '.en-H2-semibold': {
          fontFamily: 'Pretend',
          fontWeight: '600',
          lineHeight: '24px',
          fontSize: '16px',
        },
        '.en-H2-medium': {
          fontFamily: 'Pretend',
          fontWeight: '500',
          lineHeight: '24px',
          fontSize: '16px',
        },
      });
    }),
    require('tailwindcss-animate'),
  ],
};
