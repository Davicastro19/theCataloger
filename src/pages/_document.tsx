import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import { theme } from "../../styles/styles";
import Script from "next/script";
//import { ColorModeScript } from '@chakra-ui/react'


export default function Document(){
    return( 
        <Html>
            <Head>
            <meta charSet="utf-8" />
            <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'G-N8M98E6D0T', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
            </Head>
            <body>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}