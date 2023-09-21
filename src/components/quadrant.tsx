import { Box, Center } from "@chakra-ui/react";
import styles from './style.module.css'
export default function Quadrant({value }): JSX.Element {
   
    return (
        <>
        {value === 'H' &&
        <Center  borderRadius={'4px'} bg='red' className={styles.boxred}>
        
         <Box    h='5px' w='5px' > </Box>
         </Center>
    }
    {value === 'W' &&
         <Center  borderRadius={'4px'} bg='#51ff00' className={styles.boxgreen}>
        
         <Box    h='5px' w='5px' > </Box>
         </Center>
    }
    {value === 'G1' &&
         <Center  borderRadius={'4px'} bg='#ffff00' className={styles.boxyellow}>
        
         <Box    h='5px' w='5px' > </Box>
         </Center>
    }
    {value === 'G2' &&
         <Center  borderRadius={'4px'} bg='#ff783e' className={styles.boxorange}>
        
         <Box    h='5px' w='5px' > </Box>
         </Center>
    }
    
    </>
    )
}

