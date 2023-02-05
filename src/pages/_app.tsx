import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../styles/styles'
import "@fontsource/roboto"
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/100.css'

function MyApp({ Component, pageProps }) {
  
  return(
  <ChakraProvider theme={theme}>
<Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp



