import { Marcellus, Poppins } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

const marcellus = Marcellus({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0, 156, 194)',
      light: '#fff',
      dark: 'rgba(47, 43, 61, 0.78)',
    },
    secondary: {
      main: '#fff',
      light: '#DCF2F1',
      dark: '#070F2B',
    },
    text: {
      primary: 'rgba(47, 43, 61, 0.78)',
      secondary: 'rgba(47, 43, 61, 0.68)',
      disabled: 'rgba(47, 43, 61, 0.42)'
    },
    background: {
      default: '#FFFFFF',
    },
    feedback: {
      danger: '#A94438',
      success: '#008000',
      warning: '#FFFF00',
      information: '#0000FF'
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    marcellus: {
      fontFamily: marcellus.style.fontFamily,
    },
  }
})

export default theme;