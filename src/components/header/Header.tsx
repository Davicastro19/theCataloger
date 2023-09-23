import { Box, Button, Center, HStack, Link, Text, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import styles from './style.module.css'
import { FaInstagram, FaRobot, FaTelegram } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

export default function Header({ onClose, isOpen, setSection, section }): any {


  return (
    <>
      <Center marginBottom='20px' borderRadius='0px 0px 10px 10px' bg={'#000323'} className={styles.box} w='100%' h='55px' justifyContent={'space-between'}>
        <Center     >
          <IconButton colorScheme='twitter' fontSize={22} aria-label='Search database' icon={<HiMenu />} onClick={() => onClose(!isOpen)} />
        </Center>
        <Center flexDir='column' h='55px' w='full'  >
          <Center flexDir='column' h='55px' w='full' >
            <Text marginRight='1px' className={styles.neonText} color={'#13bbfe'} fontSize={'35px'} fontWeight={'300'} h='30px'>NEON</Text>
            <Text marginRight='1px' className={styles.invistaText} color={'#ffb300'} fontSize={'20px'} fontWeight={'300'} marginTop={'5px'}>INVISTA</Text>

          </Center>  </Center>

        <Link w='70px' marginRight={'5px'} href='https://t.me/reactdavicastro' isExternal>
          <Button size='sm' w='70px' colorScheme='twitter' leftIcon={<FaTelegram />}>

            Dev </Button>
        </Link>


      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg='#09001b'>
          <ModalHeader>Selecione uma função</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <HStack justify={'center'} >
              <Button colorScheme="telegram" bg='#150830' color='white' onClick={() => [onClose(false), setSection('CATALOGAESTRA')]} borderColor={'#004855'} borderWidth={1} h={'90px'} w='100px'>

                <Text>
                  Catalogar<br />Estratégia
                </Text>

              </Button>
              <Button colorScheme="telegram" bg='#150830' onClick={() => [onClose(false), setSection('CATALOGASIN')]} color='white' borderColor={'#004855'} borderWidth={1} h={'90px'} w='100px'>

                <Text>
                  Catalogar<br />Sinais
                </Text>

              </Button>

              <Button colorScheme="telegram" bg='#150830' onClick={() => [onClose(false), setSection('BACKSIN')]} color='white' borderColor={'#004855'} borderWidth={1} h={'90px'} w='100px'>

                <Text>
                  BackTest<br />Sinais
                </Text>

              </Button>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


