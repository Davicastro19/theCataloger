

import { extendTheme } from '@chakra-ui/react'
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

export const theme = extendTheme({config,
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        color: 'white',
        backgroundColor: 'black',
      },
    },
  },
})

export const color = { 
  "dark": "white",
  "light": "#0B111B"
}

export const colorReverse = { 
  "dark": "#0B111B",
  "light": "white"
}
