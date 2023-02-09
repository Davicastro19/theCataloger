import { Box, Center } from "@chakra-ui/react";
import styles from './style.module.css'
export default function Quadrant({value }): JSX.Element {
   
    return (
        <>
        {value === 'l' &&
        <Center  borderRadius={'4px'} bg='red' className={styles.boxred}>
        
         <Box    h='5px' w='5px' > </Box>
         </Center>
    }
    {value === 'w' &&
         <Center  borderRadius={'4px'} bg='#51ff00' className={styles.boxgreen}>
        
         <Box    h='5px' w='5px' > </Box>
         </Center>
    }
    {value === 'w1' &&
         <Center  borderRadius={'4px'} bg='#ffff00' className={styles.boxyellow}>
        
         <Box    h='5px' w='5px' > </Box>
         </Center>
    }
    {value === 'w2' &&
         <Center  borderRadius={'4px'} bg='#ff783e' className={styles.boxorange}>
        
         <Box    h='5px' w='5px' > </Box>
         </Center>
    }
    
    </>
    )
}

