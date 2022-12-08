import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/ipsit.scss"
import { createTheme, NextUIProvider, Spacer } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Header from '../components/Header'
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const lightTheme = createTheme({
  type: 'light',
})

const darkTheme = createTheme({
  type: 'dark',
})

function MyApp({ Component, pageProps }) {

  const [_themecolor, setThemecolor] = useState('light')

  useEffect(() => {
    fetchTheme()
  },[])

  const fetchTheme = async () => {
    let data = await fetch(`/rendering_objects/_theme.json`)
    data.json().then((res) => {
      console.log(res._theme)
      setThemecolor(res._theme)
    })
  }

  const themeChange = async (theme) => {
    console.log(theme)
  }

  return (
    <NextThemesProvider
      defaultTheme={_themecolor}
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <Header onChange={themeChange} />
        <Spacer y={1} />
        <Component {...pageProps} />
        <Footer />
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default MyApp