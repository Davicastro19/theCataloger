import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import { theme } from "../../styles/styles";
import Script from "next/script";
import AnalyticsHJ from "../components/AnalyticsHJ";
//import { ColorModeScript } from '@chakra-ui/react'


export default function Document(){
    return( 
        <Html>
            <Head>
            <meta charSet="utf-8" />
             <AnalyticsHJ/>
             <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}