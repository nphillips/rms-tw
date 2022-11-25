/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {

      'change-positive-primary': '#00A57D',
      'dark-actionable-default': '#2C64F4',
      'dark-actionable-dim': '#0F1D47',
      'dark-actionable-text': '#558EF9',
      'dark-issue-primary': '#DE932C',
      'dark-line-dark': '#2F3641',
      'dark-line-divider': '#1A1E28',
      'dark-line-light': '#717f95',
      'dark-negative-back': '#2F140B',
      'dark-negative-primary': '#E54019',
      'dark-negative-secondary': '#aa3319',
      'dark-on-surface-default': '#848D9C',
      'dark-on-surface-dim': '#525d70',
      'dark-on-surface-dim': '#525d70',
      'dark-on-surface-dimmer': '#6a717d',
      'dark-on-surface-light': '#CCD0D7',
      'dark-on-surface-lightest': '#E9EBED',
      'dark-positive-back': '#111e17',
      'dark-positive-bright': '#00CB9A',
      'dark-positive-primary': '#00a57d',
      'dark-positive-secondary': '#00754c',
      'dark-status-success-primary': '#2BBE8F',
      'dark-status-urgent-primary': '#D62436',
      'dark-surface-dark': '#0C1018',
      'dark-surface-darkest': '#080a0f',
      'dark-surface-default': '#1a1e28',
      'dark-surface-default': '#1a1e28',
      'dark-surface-light': '#2f3641',
      'on-surface-highlight': '#e8ebed',
      'on-surface-white': '#ffffff',
      'status-urgent-primary': '#D62436',
      'surface-primary': '#f4f4f5',
      'curr': 'currentColor',
      

    },
    
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),

  ],
}
