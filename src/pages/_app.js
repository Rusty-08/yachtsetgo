import '@/styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/theme'
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter'

export default function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  )
}