import { Box, Button, Card, CardBody, Image, CardFooter, CardHeader, Center, Heading, Wrap, WrapItem, Text, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select as SelectI, useToast, HStack, Link, useDisclosure, FormControl, FormLabel, VStack, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Checkbox } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import styles from './style.module.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toJS } from 'mobx';
import Quadrant from '../components/quadrant';
import { AiTwotoneSetting } from 'react-icons/ai';
import { FaInstagram, FaRobot, FaTelegram } from 'react-icons/fa';
import Head from "next/head";
import Header from '../components/header/Header'

import CatalogerS from '../components/sections/CatalogS';


function Home() {
  const [selectPairs, setSeletPairs] = useState([])
  const [data, setData] = useState([])
  const [time, setTime] = useState('M1')
  const [pair, setPar] = useState('TODOS')
  const [gale, setGale] = useState('G1')
  const [system, setSystem] = useState('TODOS')
  const [modalConfig, setModalConfig] = useState(false)
  const toast = useToast()
  const [isOpenMenu, onCloseMenu] = useState(true)
  const [section, setSection] = useState('CATALOGAESTRA')
  const [isOpen, onClose] = useState(true)
  






  function getWL(lista: any) {


    let maxWinStreak = 0;
    let currentWinStreak = 0;
    let maxHitStreak = 0;
    let currentHitStreak = 0;

    for (const item of lista) {
      // Contar vitórias seguidas
      if (item === "W" || item === "G1" || item === "G2") {
        currentWinStreak++;
        if (currentWinStreak > maxWinStreak) {
          maxWinStreak = currentWinStreak;
        }
      } else {
        currentWinStreak = 0;
      }

      // Contar hits seguidos
      if (item === "H") {
        currentHitStreak++;
        if (currentHitStreak > maxHitStreak) {
          maxHitStreak = currentHitStreak;
        }
      } else {
        currentHitStreak = 0;
      }
    }
    return { maxWinStreak, maxHitStreak }
  }

  async function handleSetOpenConfig() {

    var config = { method: 'get', url: `https://apithecataloguer-7f868d31f7a6.herokuapp.com/pairs`, headers: {} };
    axios(config).then(function (response) {
      if (response.data.status) {
        setSeletPairs(response.data.pairs)
        toast.closeAll()
        toast({ description: "Atualizado", status: 'success', duration: 9000, isClosable: true, })
      }
    })
      .catch(function (error) {
        setData([])
      });
    setModalConfig(true)
  }

  async function getStrategy() {
    var config = { method: 'get', url: `https://apithecataloguer-7f868d31f7a6.herokuapp.com/strategy/${pair}/${time.replace('M', '')}/${gale.replace('G', '')}/${system}`, headers: {} };
    axios(config).then(function (response) {

      if (response.data.status) {
        setData(response.data.strategy)
        toast.closeAll()
        toast({ description: "Atualizado", status: 'success', duration: 9000, isClosable: true, })
      }
    })
      .catch(function (error) {

        setData([])
      });
    setModalConfig(false)
  }


  useEffect(() => {
    toast({ description: "Atualizando...", status: 'info', duration: 9000, isClosable: true, })
    getStrategy()

  }
    , [])





  return (

    <>
      <Head>
        <title>NEON INVISTA</title>
        <meta name="og:description" content={'Descubra o futuro do mercado probabilístico com o Neon Investe, o melhor Catalogador para Operações Binárias (OB). Com análise em tempo real e catalogação de mais de 28 pares de moedas e 30 estratégias em segundos, nós elevamos a análise de OB a um novo patamar. '} />
        <meta property="og:image" content={'/logo.png'} />
        <meta property="og:url" content={`https://the-cataloger.vercel.app/`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Modal isOpen={modalConfig} onClose={() => setModalConfig(!modalConfig)}>
        <ModalOverlay />
        <ModalContent bg='#000323'>
          <ModalHeader borderRadius='10px 10px 0px 0px' className={styles.box}>Configurações  <ModalCloseButton /></ModalHeader>

          <ModalBody borderRadius='0px 0px 10px 10px' className={styles.box} >
            <SelectI onChange={(e) => setTime(e.target.value)} value={time} marginTop='20px'>
              <option style={{ backgroundColor: '#000323' }} value='M1'>M1</option>
              <option style={{ backgroundColor: '#000323' }} value='M5'>M5</option>
              <option style={{ backgroundColor: '#000323' }} value='M15'>M15</option>
            </SelectI>
            <SelectI marginTop='20px' onChange={(e) => setGale(e.target.value)} value={gale}>
              <option style={{ backgroundColor: '#000323' }} value='G0'>FIXA</option>
              <option style={{ backgroundColor: '#000323' }} value='G1'>G1</option>
              <option style={{ backgroundColor: '#000323' }} value='G2'>G2</option>
            </SelectI>
            <SelectI marginTop='20px' value={system} onChange={(e) => setSystem(e.target.value)}>
              <option style={{ backgroundColor: '#000323' }} value="TODOS">Melhor estratégia</option>
              <option style={{ backgroundColor: '#000323' }} value="MHI">MHI</option>
              <option style={{ backgroundColor: '#000323' }} value="MHI2">MHI2</option>
              <option style={{ backgroundColor: '#000323' }} value="MHI3">MHI3</option>
              <option style={{ backgroundColor: '#000323' }} value="MHI Maioria">MHI Maioria</option>
              <option style={{ backgroundColor: '#000323' }} value="MHI2 Maioria">MHI2 Maioria</option>
              <option style={{ backgroundColor: '#000323' }} value="MHI3 Maioria">MHI3 Maioria</option>
              <option style={{ backgroundColor: '#000323' }} value="Milhão">Milhão</option>
              <option style={{ backgroundColor: '#000323' }} value="Milhão Maioria">Milhão Maioria</option>
              <option style={{ backgroundColor: '#000323' }} value="Melhor de 3">Melhor de 3</option>
              <option style={{ backgroundColor: '#000323' }} value="Padrão 23">Padrão 23</option>
              <option style={{ backgroundColor: '#000323' }} value="Padrão 3x1">Padrão 3x1</option>
              <option style={{ backgroundColor: '#000323' }} value="Padrão Ímpar">Padrão Ímpar</option>
              <option style={{ backgroundColor: '#000323' }} value="Torres Gêmeas">Torres Gêmeas</option>
              <option style={{ backgroundColor: '#000323' }} value="Três Mosqueteiros">Três Mosqueteiros</option>
              <option style={{ backgroundColor: '#000323' }} value="Três Vizinhos">Três Vizinhos</option>
            </SelectI>
            <SelectI marginTop='20px' marginBottom='20px' onChange={(e) => setPar(e.target.value)} value={pair}>
              <option key={12121} value='TODOS'>TODOS</option>
              {selectPairs.map((p, i) => (<option style={{ backgroundColor: '#000323' }} key={i} value={p}>{p}</option>))}
            </SelectI>
            <Center>
              <Button mb='30px' colorScheme='twitter' onClick={getStrategy}  >Pesquisar</Button>
            </Center>
          </ModalBody>


        </ModalContent>
      </Modal>


      <Modal isOpen={isOpen} onClose={() => onClose(false)}>
        <ModalOverlay />
        <ModalContent bg='#000323'>
          <ModalHeader borderRadius='10px 10px 0px 0px' className={styles.box}>IMPORTANTE  <ModalCloseButton /></ModalHeader>

          <ModalBody borderRadius='0px 0px 10px 10px' className={styles.box} >
            <Box marginTop='20px' marginLeft='10px' flexDir={'column'} display={'flex'} >

              <Text marginTop={'1px'} fontWeight={'500'} fontSize={'20px'} color='white'>
                AJUDE A MANTER A NOSSA FERRAMENTA VIVA E EM CONSTANTE EVOLUÇÃO</Text>

              <Text marginTop={'1px'} fontWeight={'500'} fontSize={'20px'} mt='20px' color='white'>
                SUA CONTRIBUIÇÃO FAZ A DIFERENÇA! AJUDE-NOS A CONTINUAR OFERECENDO UM SERVIÇO DE ALTA QUALIDADE E GRATUITO.</Text>
              <Text marginTop={'1px'} fontWeight={'500'} fontSize={'20px'} mt='20px' color='white'>
                FAÇA SUA DOAÇÃO AGORA VIA PIX - EMAIL: davi18827@gmail.com (C6 BANK)</Text>
              <Text marginTop={'1px'} fontWeight={'500'} fontSize={'20px'} mt='20px' color='white'>
                TEM SUGESTÕES DE MELHORIA? SUA OPINIÃO É VALIOSA! ENTRE EM CONTATO CONOSCO ATRAVÉS DO TELEGRAM DESENVOLVEDOR.</Text>


              <Text marginTop={'1px'} fontWeight={'500'} fontSize={'20px'} mt='20px' mb='20px' color='white'>
                JUNTOS, PODEMOS TORNAR ESTA FERRAMENTA AINDA MELHOR!</Text>
            </Box>
          </ModalBody>


        </ModalContent>
      </Modal>


      <Box padding={'0 0rem'}>

        <Header onClose={onCloseMenu} isOpen={isOpenMenu} setSection={setSection} section={section} />
        <HStack justify={'center'} flexDir={['column', 'row']} h='30%'>
          <Center      >
            <Link w='290px' marginLeft={'5px'} marginBottom={'10px'} href='https://t.me/invistastrategy_bot' isExternal>
              <Button className={styles.boxicon} size='lg' w='300px' colorScheme='twitter' rightIcon={<FaTelegram size={30} />} leftIcon={<FaRobot size={30} />}>
                AUTIMATIZAR VIA BOT </Button>
            </Link>


          </Center>
          <Center      >

            <Link w='290px' marginLeft={'5px'} marginBottom={'10px'} href=' https://t.me/+RNhOqAbXil1hYjg5' isExternal>
              <Button className={styles.boxicon} size='lg' w='300px' colorScheme='twitter' rightIcon={<FaTelegram size={30} />} leftIcon={<FaRobot size={30} />}>

                LISTAS VIP PREMIUM</Button>
            </Link>


          </Center>
          <Center      >
            <Link w='290px' marginLeft={'5px'} marginBottom={'10px'} href='https://t.me/invistaeasy_bot' isExternal>
              <Button className={styles.boxicon} size='lg' w='300px' colorScheme='twitter' rightIcon={<FaTelegram size={30} />} leftIcon={<FaRobot size={30} />}>
                CATALOGAR SINAIS FREE </Button>
            </Link>


          </Center>
         
        </HStack>
        {section === 'CATALOGAESTRA' &&
          <>
            <Center>
              <Center margin={'10px 0px 20px 40px'} borderRadius='0px 0px 20px 20px' w='100%' h='30%'>
                <Wrap justify={'center'}  >
                  <WrapItem>
                    <Center margin={'8px'} flexDir={'row'}>
                      <> <Quadrant value={'D'} /><Heading w='100px' fontWeight={'600'} marginLeft='5px' fontSize={'18px'}>DOJI</Heading>
                      </>
                    </Center>
                  </WrapItem>
                  <WrapItem>
                    <Center margin={'8px'} flexDir={'row'}>
                      <> <Quadrant value={'W'} /><Heading w='100px' fontWeight={'600'} marginLeft='5px' fontSize={'18px'}>WIN</Heading>
                      </>
                    </Center>
                  </WrapItem>
                  <WrapItem>
                    <Center margin={'8px'} flexDir={'row'}>
                      <> <Quadrant value={'G1'} /><Heading w='100px' fontWeight={'600'} marginLeft='5px' fontSize={'18px'}>WIN G1</Heading>
                      </>
                    </Center>
                  </WrapItem>
                  <WrapItem>
                    <Center margin={'8px'} flexDir={'row'}>
                      <> <Quadrant value={'G2'} /><Heading w='100px' fontWeight={'600'} marginLeft='5px' fontSize={'18px'}>WIN G2</Heading>
                      </>
                    </Center>
                  </WrapItem>
                  <WrapItem>
                    <Center margin={'8px'} flexDir={'row'}>

                      <>
                        <Quadrant value={'H'} /><Heading w='100px' fontWeight={'600'} marginLeft='5px' fontSize={'18px'}>LOSS</Heading>
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
                  <IconButton borderRadius={'20px'} className={styles.boxicon} aria-label='Search database' onClick={handleSetOpenConfig} icon={<AiTwotoneSetting color='#050D29' size='40px' />} />
                </Box>
              </Center>
            </Center>

            <Center>

            </Center>

            <Center w='100%' >

              {data.length > 0 &&
                <Wrap spacing='15px' justify='center' bg='#000' marginBottom={'10px'}>

                  {data.map((item, index) => (
                    <WrapItem key={index} >
                      <Center margin={'15px 10px 20px 10px'} bg='#000323' w='280px' h='495px' borderRadius={'10px'} className={styles.neonBox}>
                        <Card color='white' align='center' w='100%' h='100%' bg='#000323'>
                          <CardHeader >
                            <Center flexDir={'column'}>
                              <Heading fontWeight={'700'} fontSize={'20px'}>{item.estrategia.toUpperCase()}</Heading>
                              <Heading marginTop='10px' marginBottom='10px' fontWeight={'500'} fontSize={'16px'}>{item.ativo} - {item.winrate}%</Heading>
                              <Wrap spacing='5px'>
                                {item.quadrantes.filter(x => x === "W").length > 0 &&
                                  <WrapItem>
                                    <Box margin={'8px'}>
                                      <Heading w='25px' fontWeight={'600'} fontSize={'13px'}>{item.quadrantes.filter(x => x === "W").length}</Heading>
                                      <Quadrant value={'W'} />
                                    </Box>
                                  </WrapItem>
                                }
                                {item.quadrantes.filter(x => x === "G1").length > 0 &&
                                  <WrapItem>
                                    <Box margin={'8px'}>
                                      <Heading w='25px' fontWeight={'600'} fontSize={'13px'}>{item.quadrantes.filter(x => x === "G1").length}</Heading>
                                      <Quadrant value={'G1'} />
                                    </Box>
                                  </WrapItem>
                                }
                                {item.quadrantes.filter(x => x === "G2").length > 0 &&
                                  <WrapItem>
                                    <Box margin={'8px'}>
                                      <Heading w='25px' fontWeight={'600'} fontSize={'13px'}>{item.quadrantes.filter(x => x === "G2").length}</Heading>
                                      <Quadrant value={'G2'} />

                                    </Box>
                                  </WrapItem>
                                }
                                {item.quadrantes.filter(x => x === "D").length > 0 &&
                                  <WrapItem>
                                    <Box margin={'8px'}>
                                      <Heading w='25px' fontWeight={'600'} fontSize={'13px'}>{item.quadrantes.filter(x => x === "D").length}</Heading>
                                      <Quadrant value={'D'} />

                                    </Box>
                                  </WrapItem>
                                }
                                <WrapItem>
                                  <Box margin={'8px'}>
                                    {item.quadrantes.filter(x => x === "H").length > 0 &&
                                      <><Heading w='25px' fontWeight={'600'} fontSize={'13px'}>{item.quadrantes.filter(x => x === "H").length}</Heading>
                                        <Quadrant value={'H'} />
                                      </>}
                                  </Box>
                                </WrapItem>

                              </Wrap>
                            </Center>

                            <Wrap spacing='5.5px' marginTop='20px'>
                              {item.quadrantes.map((item, index) => (
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
                                  <Heading marginLeft='5px' fontWeight={'700'} fontSize={'17px'}>Wins Sucessivos: {getWL(item.quadrantes).maxWinStreak}</Heading>
                                </Center>

                              </WrapItem>
                              <WrapItem>
                                <Center marginLeft='5px' flexDir={'row'}>
                                  <Quadrant value={'l'} />
                                  <Heading marginLeft='5px' fontWeight={'700'} fontSize={'17px'}>Losses Sucessivos:  {getWL(item.quadrantes).maxHitStreak}</Heading>
                                </Center>

                              </WrapItem>
                            </Wrap>

                          </CardHeader>
                          {/*<CardFooter>
                        <Center flexDir={'column'}>
                          <Button display={'none'} colorScheme='blue'>View here</Button>
                          <Heading marginBottom='5px' fontWeight={'300'} fontSize={'15px'}>Última Análise: {''}</Heading>
                        </Center>
                          </CardFooter>*/}
                        </Card>
                      </Center>
                    </WrapItem>
                  ))}
                </Wrap>}

            </Center>
          </>
        }
        {section === 'CATALOGASIN' &&
          <>
           <CatalogerS/>
          </>
        }
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

                  <Link href='https://www.instagram.com/dev.castrodavi/' isExternal><Button w='300px' colorScheme='facebook' leftIcon={<FaInstagram />}>
                    Instagram  </Button>
                  </Link>
                </WrapItem>

                <WrapItem><Link href='https://t.me/reactdavicastro' isExternal>
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
            <Box marginTop='20px' marginLeft='10px' flexDir={'column'} display={'flex'} >

              <Text marginTop={'1px'} fontWeight={'300'} fontSize={'12px'} color='white'>
                AJUDE A MANTER AS FERRAMENTAS DE FORMA GRATUITA. </Text>
              <Text marginTop={'1px'} fontWeight={'300'} fontSize={'12px'} color='white'>
                E A FAZERMOS MELHORIAS</Text>
              <Text marginTop={'1px'} fontWeight={'300'} fontSize={'12px'} color='white'>
                DOAÇÕES: PIX - EMAIL: davi18827@gmail.com (C6 Bank)</Text>
              <Text marginTop={'1px'} fontWeight={'300'} fontSize={'12px'} color='white'>
                Solicite uma melhoria ou algo que pode ser util para você</Text>
              <Text marginTop={'1px'} fontWeight={'300'} fontSize={'12px'} color='white'>
                na opção Telegram Desenvolvedor.</Text>


            </Box>
            <Center flexDir={'column'} fontSize={'sm'} fontWeight={'bold'} color='blue.300'>
              <Text>PARCERIA COM  </Text>
              <Link marginBottom={'10px'} href=' https://t.me/+RNhOqAbXil1hYjg5' isExternal>

                <Image borderRadius='25px' w='90px' src={'https://i.imgur.com/Towqk9b.png'} alt='da' /></Link></Center>
          </Box>
        </section>
      </Box>


    </>
  )
}


export default Home