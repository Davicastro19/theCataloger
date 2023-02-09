import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Heading, Wrap, WrapItem, Text, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useToast, HStack, Link } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import styles from './style.module.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toJS } from 'mobx';
import Quadrant from '../components/quadrant';
import { AiTwotoneSetting } from 'react-icons/ai';
import { FaInstagram, FaRobot, FaTelegram } from 'react-icons/fa';



function Home() {

  const [data, setData] = useState<any>([])
  const [time, setTime] = useState('M1')
  const [par, setPar] = useState('TODOS')
  const [gale, setGale] = useState('G1')
  const [system, setSystem] = useState('TODOS')
  const [modalConfig, setModalConfig] = useState(false)
  const toast = useToast()

  useEffect(() => {
    toast({
      description: "Atualizando...",
      status: 'info',
      duration: 9000,
      isClosable: true,
    })
    const getStrategy = async () => {
      var config = {
        method: 'get',
        url: 'https://apigo.herokuapp.com/strategy/TODOS/' + time + '/' + gale + '/TODOS',
        headers: {}
      };

      axios(config)
        .then(function (response) {

          setData(toJS(response.data.message))
          toast.closeAll()
          toast({
            description: "Atualizado",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        })
        .catch(function (error) {
          setData(JSON.stringify([]))
        });
    }
    getStrategy()


  }
    , [time, gale])





  return (

    <>
      <Modal isOpen={modalConfig} onClose={() => setModalConfig(!modalConfig)}>
        <ModalOverlay />
        <ModalContent bg='#000323'>
          <ModalHeader borderRadius='10px 10px 0px 0px' className={styles.box}>Configurações  <ModalCloseButton /></ModalHeader>

          <ModalBody borderRadius='0px 0px 10px 10px' className={styles.box} >
            <Select onChange={(e) => setTime(e.target.value)} value={time} marginTop='20px'>
              <option value='M1'>M1</option>
              <option value='M5'>M5</option>
            </Select>
            <Select marginTop='20px' onChange={(e) => setGale(e.target.value)} value={gale}>
              <option value='FIXA'>FIXA</option>
              <option value='G1'>G1</option>
              <option value='G2'>G2</option>
            </Select>
            <Select marginTop='20px' placeholder='Estratégia - Próxima Atualização'>
              <option value='option1'>Estratégia 1</option>
              <option value='option2'>Estratégia 2</option>
              <option value='option3'>Estratégia 3</option>
            </Select>
            <Select marginTop='20px' marginBottom='20px' placeholder='Paridade - Próxima Atualização'>
              <option value='option1'>Paridade 1</option>
              <option value='option2'>Paridade 2</option>
              <option value='option3'>Paridade 3</option>
            </Select>
          </ModalBody>


        </ModalContent>
      </Modal>
      <Box padding={'0 0rem'}>

        <Center marginBottom='20px' borderRadius='0px 0px 20px 20px' bg={'#000323'} className={styles.box} w='100%' h='55px' justifyContent={'space-between'}>
        <Center     >
        <Link w='65px' marginLeft={'5px'} href='https://t.me/ProgamadorReact' isExternal>
                <Button size='xs'  w='65px' colorScheme='twitter' leftIcon={<FaTelegram />}>

                  Dev </Button>
              </Link>

                      
                    </Center>
                    <Center  flexDir='column' h='55px' >
                    <Text marginRight='1px' className={styles.neonText} color={'#13bbfe'} fontSize={'35px'} fontWeight={'300'} h='30px'>NEON</Text>
                    <Text marginRight='1px' className={styles.invistaText} color={'#ffb300'} fontSize={'20px'} fontWeight={'300'} marginTop={'5px'}>INVISTA</Text>

                    </Center>
                    <Center  >
                    <Link href='https://t.me/neoncatalogador' w='65px' isExternal> <Button  w='65px'  size='xs' colorScheme='twitter' leftIcon={<FaTelegram />}>
                  Grupo</Button>
                </Link>
                    </Center>
         
        </Center>
        <Center>
          <Center margin={'10px 0px 20px 0px'} borderRadius='0px 0px 20px 20px' w='100%' h='50px'>
            <Wrap justify={'center'}  >
              <WrapItem>
                <Center margin={'8px'} flexDir={'row'}>
                  <> <Quadrant value={'w'} /><Heading w='100px' fontWeight={'600'} marginLeft='5px' fontSize={'18px'}>WIN</Heading>
                  </>
                </Center>
              </WrapItem>
              <WrapItem>
                <Center margin={'8px'} flexDir={'row'}>
                  <> <Quadrant value={'w1'} /><Heading w='100px' fontWeight={'600'} marginLeft='5px' fontSize={'18px'}>WIN G1</Heading>
                  </>
                </Center>
              </WrapItem>
              <WrapItem>
                <Center margin={'8px'} flexDir={'row'}>
                  <> <Quadrant value={'w2'} /><Heading w='100px' fontWeight={'600'} marginLeft='5px' fontSize={'18px'}>WIN G2</Heading>
                  </>
                </Center>
              </WrapItem>
              <WrapItem>
                <Center margin={'8px'} flexDir={'row'}>

                  <>
                    <Quadrant value={'l'} /><Heading w='100px' fontWeight={'600'} marginLeft='5px' fontSize={'18px'}>LOSS</Heading>
                  </>
                </Center>
              </WrapItem>

            </Wrap>

          </Center>
        </Center>
        <Center>
          <Center margin={'0px 0px 20px 0px'} borderRadius='0px 0px 20px 20px' w='100%'>
            <Heading w='100px' fontWeight={'600'} marginLeft='5px' fontSize={'18px'}>{time} - {gale}</Heading>
            <Box bg='white' borderRadius={'20px'} >
            <IconButton borderRadius={'20px'} className={styles.boxicon} aria-label='Search database' onClick={() => setModalConfig(!modalConfig)} icon={<AiTwotoneSetting color='#050D29' size='40px' />} />
            </Box>
          </Center>
        </Center>
        <Center      >
        <Link w='290px' marginLeft={'5px'} marginBottom={'10px'} href='https://t.me/invistastrategy_bot' isExternal>
                <Button className={styles.boxicon} size='lg'   w='290px' colorScheme='twitter' rightIcon={<FaTelegram size={30} />} leftIcon={<FaRobot size={30} />}>
                 AUTIMATIZAR VIA BOT </Button>
              </Link>

                      
                    </Center>
        
        <Center w='100%' >

          {data.length > 0 &&
            <Wrap spacing='15px' justify='center' bg='#000' marginBottom={'10px'}>

              {data.map((item, index) => (
                <WrapItem key={index} >
                  <Center margin={'15px 15px 20px 10px'}  bg='#000323' w='280px' h='495px' borderRadius={'10px'} className={styles.neonBox}>
                    <Card color='white'align='center' w='100%' h='100%' bg='#000323'>
                      <CardHeader >
                        <Center  flexDir={'column'}>
                          <Heading fontWeight={'700'} fontSize={'20px'}>{toJS(item.strategy).nameStrategy}</Heading>
                          <Heading marginTop='10px' marginBottom='10px' fontWeight={'500'} fontSize={'16px'}>{toJS(item.strategy).pairStrategy} - {toJS(item.strategy).assertivenessStrategy}</Heading>
                          <Wrap spacing='5px'>
                            <WrapItem>
                              <Box margin={'8px'}>
                                {toJS(item.strategy).resumeAssertivenessStrategy[0] !== undefined &&
                                  <><Heading w='25px' fontWeight={'600'} fontSize={'13px'}>{toJS(item.strategy).resumeAssertivenessStrategy[0]}</Heading>
                                    <Quadrant value={'w'} />
                                  </>}
                              </Box>
                            </WrapItem>
                            <WrapItem>
                              <Box margin={'8px'}>
                                {toJS(item.strategy).resumeAssertivenessStrategy[1] !== undefined &&
                                  <><Heading w='25px' fontWeight={'600'} fontSize={'13px'}>{toJS(item.strategy).resumeAssertivenessStrategy[1]}</Heading>
                                    <Quadrant value={'w1'} />
                                  </>}
                              </Box>
                            </WrapItem>
                            {toJS(item.strategy).resumeAssertivenessStrategy[2] !== undefined && <WrapItem>
                              <Box margin={'8px'}>

                                <><Heading w='25px' fontWeight={'600'} fontSize={'13px'}>{toJS(item.strategy).resumeAssertivenessStrategy[2]}</Heading>
                                  <Quadrant value={toJS(item.strategy).resumeAssertivenessStrategy[2] !== undefined ? 'w2' : 'l'} />
                                </>
                              </Box>
                            </WrapItem>}
                            {toJS(item.strategy).resumeAssertivenessStrategy[3] !== undefined &&
                              <WrapItem>
                                <Box margin={'8px'}>

                                  <><Heading w='25px' fontWeight={'600'} fontSize={'13px'}>{toJS(item.strategy).resumeAssertivenessStrategy[3]}</Heading>
                                    <Quadrant value={'l'} />
                                  </>
                                </Box>
                              </WrapItem>}

                          </Wrap>
                        </Center>

                        <Wrap spacing='5.5px' marginTop='20px'>
                          {toJS(toJS(item.strategy).detailAssertivenessStrategy).map((item, index) => (
                            <WrapItem key={index}>
                              <Box key={index} margin={'6px'}>
                                <Quadrant value={item} />
                              </Box>
                            </WrapItem>))}
                        </Wrap>
                        <Wrap marginTop='30px'>
                          <WrapItem>
                            <Center margin='5px' flexDir={'row'}>
                              <Quadrant value={'w'} />
                              <Heading marginLeft='5px' fontWeight={'700'} fontSize={'17px'}>Wins Sucessivos: {toJS(item.strategy).winsSuccessiveStrategy}</Heading>
                            </Center>

                          </WrapItem>
                          <WrapItem>
                            <Center marginLeft='5px' flexDir={'row'}>
                              <Quadrant value={'l'} />
                              <Heading marginLeft='5px' fontWeight={'700'} fontSize={'17px'}>Losses Sucessivos: {toJS(item.strategy).lossSuccessiveStrategy}</Heading>
                            </Center>

                          </WrapItem>
                        </Wrap>

                      </CardHeader>
                      <CardFooter>
                        <Center flexDir={'column'}>
                          <Button display={'none'} colorScheme='blue'>View here</Button>
                          <Heading marginBottom='5px' fontWeight={'300'} fontSize={'15px'}>Última Análise: {toJS(item.strategy).timeAssertivenessStrategy}</Heading>
                        </Center>
                      </CardFooter>
                    </Card>
                  </Center>
                </WrapItem>
              ))}
            </Wrap>}

        </Center>

<section id='contato'>
        <Box
          flexDir={'column'}
          marginTop='10px'
          borderTop='1px'
          padding='2rem 0'
          borderRadius='20px 20px 00px 0px' bg={'#000323'} className={styles.box}
        >

          <Center>
            <Wrap justify={'center'}>

              <WrapItem>

                <Link href='https://www.instagram.com/invistatrading/' isExternal><Button w='300px' colorScheme='facebook' leftIcon={<FaInstagram />}>
                  Instagram  </Button>
                </Link>
              </WrapItem>
              <WrapItem>

                <Link href='https://t.me/invistacomsabedoria' isExternal> <Button w='300px' colorScheme='twitter' leftIcon={<FaTelegram />}>
                  Telegram Grupo</Button>
                </Link>

              </WrapItem>
              <WrapItem><Link href='https://t.me/ProgamadorReact' isExternal>
                <Button w='300px' colorScheme='twitter' leftIcon={<FaTelegram />}>

                  Telegram Desenvolvedor </Button>
              </Link>

              </WrapItem>
            </Wrap>

          </Center>
          <Box marginTop='20px' marginLeft='10px' flexDir={'row'} display={'flex'} >

            <Text marginTop={'1px'} fontWeight={'300'} fontSize={'12px'} color='white'>
              © 2023 DESIGNED & DEV. </Text>
            <Heading marginLeft={'5px'} fontWeight={'700'} fontSize={'15px'} color='white'>
              By Davi Castro
            </Heading>
            <Heading marginLeft={'5px'} marginTop={'4px'} fontWeight={'300'} fontSize={'12px'} color='white'>
              PRIVACY POLICY</Heading>


          </Box>
        </Box>
        </section>
      </Box></>
  )
}


export default observer(Home)


//
//export const getServerSideProps = canSSRGuest(async (ctx) => {
//  
//  return {
//    props: {}
//  }
//})