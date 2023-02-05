import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import { theme } from "../../styles/styles";
//import { ColorModeScript } from '@chakra-ui/react'


export default function Document(){
    return( 
        <Html>
            <Head>
            <meta charSet="utf-8" />
            </Head>
            <body>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}