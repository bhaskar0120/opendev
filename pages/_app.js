import '../styles/globals.css';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
    // 2. Call `createTheme` and pass your custom values
    const lightTheme = createTheme({
        type: 'light',
        theme: {}
    })
    const darkTheme = createTheme({
        type: 'dark',
        theme: {}
    })
    return (
        // 2. Use at the root of your app
        <NextThemeProvider
            attribute="class"
            defaultTheme="light"
            value={{ light: lightTheme.className, dark: darkTheme.className }}
        >
            <NextUIProvider >
            <Component {...pageProps} />
        </NextUIProvider>
        </NextThemeProvider>
    );
}

export default MyApp;