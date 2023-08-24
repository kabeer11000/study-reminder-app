import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Script from "next/script";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "@/styles/theme";

export default function App({Component, pageProps}: AppProps) {
    return <>
        <CssBaseline />
        <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
    </>
}
