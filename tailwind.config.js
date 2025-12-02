/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Silver Heritage
        'primary': '#C0C0C0', // silver
        'primary-50': '#F8F8F8', // gray-50
        'primary-100': '#F0F0F0', // gray-100
        'primary-200': '#E8E8E8', // gray-200
        'primary-300': '#D0D0D0', // gray-300
        'primary-400': '#C8C8C8', // gray-400
        'primary-500': '#C0C0C0', // silver
        'primary-600': '#B8B8B8', // gray-500
        'primary-700': '#A0A0A0', // gray-600
        'primary-800': '#808080', // gray-700
        'primary-900': '#606060', // gray-800
        'primary-foreground': '#2C2C2C', // gray-900

        // Secondary Colors - Goan Earth
        'secondary': '#8B4513', // saddle-brown
        'secondary-50': '#FDF8F3', // orange-50
        'secondary-100': '#F9E8D3', // orange-100
        'secondary-200': '#F3D1A7', // orange-200
        'secondary-300': '#E6B47A', // orange-300
        'secondary-400': '#D4954D', // orange-400
        'secondary-500': '#8B4513', // saddle-brown
        'secondary-600': '#7A3D11', // orange-700
        'secondary-700': '#69350F', // orange-800
        'secondary-800': '#582D0D', // orange-900
        'secondary-900': '#47250B', // orange-950
        'secondary-foreground': '#FFFFFF', // white

        // Accent Colors - Action Orange
        'accent': '#FF6B35', // orange-500
        'accent-50': '#FFF7ED', // orange-50
        'accent-100': '#FFEDD5', // orange-100
        'accent-200': '#FED7AA', // orange-200
        'accent-300': '#FDBA74', // orange-300
        'accent-400': '#FB923C', // orange-400
        'accent-500': '#FF6B35', // orange-500
        'accent-600': '#EA580C', // orange-600
        'accent-700': '#C2410C', // orange-700
        'accent-800': '#9A3412', // orange-800
        'accent-900': '#7C2D12', // orange-900
        'accent-foreground': '#FFFFFF', // white

        // Background Colors
        'background': '#FAFAFA', // gray-50
        'surface': '#F5F5F5', // gray-100
        'card': '#FFFFFF', // white
        'border': '#E5E5E5', // gray-200

        // Text Colors
        'text-primary': '#2C2C2C', // gray-800
        'text-secondary': '#666666', // gray-600
        'text-muted': '#9CA3AF', // gray-400
        'text-inverse': '#FFFFFF', // white

        // Status Colors
        'success': '#28A745', // green-600
        'success-50': '#F0FDF4', // green-50
        'success-100': '#DCFCE7', // green-100
        'success-500': '#28A745', // green-600
        'success-foreground': '#FFFFFF', // white

        'warning': '#FFC107', // yellow-400
        'warning-50': '#FEFCE8', // yellow-50
        'warning-100': '#FEF3C7', // yellow-100
        'warning-500': '#FFC107', // yellow-400
        'warning-foreground': '#2C2C2C', // gray-800

        'error': '#DC3545', // red-600
        'error-50': '#FEF2F2', // red-50
        'error-100': '#FEE2E2', // red-100
        'error-500': '#DC3545', // red-600
        'error-foreground': '#FFFFFF', // white

        // Trust Builder
        'trust': '#2E5266', // slate-700
        'trust-50': '#F8FAFC', // slate-50
        'trust-100': '#F1F5F9', // slate-100
        'trust-500': '#2E5266', // slate-700
        'trust-foreground': '#FFFFFF', // white
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'soft': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'large': '0 8px 24px rgba(184, 184, 184, 0.2)',
        'xl-silver': '0 20px 40px rgba(192, 192, 192, 0.3)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        'pulse-accent': 'pulse-accent 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'pulse-accent': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.7'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'shimmer': {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(100%)'
          }
        }
      },
      backdropBlur: {
        'soft': '8px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '16/10': '16 / 10',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}