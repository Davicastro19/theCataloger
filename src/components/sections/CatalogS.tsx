import { Box, Button, Center, HStack, Link, Text, Spinner, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Checkbox, FormControl, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select as SelectI, VStack, filter } from "@chakra-ui/react";
import styles from '../../pages/style.module.css';
import { FaInstagram, FaRobot, FaTelegram } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useState } from "react";
import axios from 'axios';
export default function CatalogerS(){
    const PAIRS = [ { "value": "binary", "label": "BINÁRIAS" }, { "value": "digital", "label": "DIGITAIS" }, { "value": "cripto", "label": "CRIPTO" }, { "value": "otc", "label": "OTC" }, { "value": "all", "label": "ABERTOS" }, { "value": "AUDCAD", "label": "AUDCAD" }, { "value": "AUDCHF", "label": "AUDCHF" }, { "value": "AUDJPY", "label": "AUDJPY" }, { "value": "AUDNZD", "label": "AUDNZD" }, { "value": "AUDUSD", "label": "AUDUSD" }, { "value": "BTCUSD", "label": "BTCUSD" }, { "value": "CADCHF", "label": "CADCHF" }, { "value": "CADJPY", "label": "CADJPY" }, { "value": "EOSUSD", "label": "EOSUSD" }, { "value": "ETHUSD", "label": "ETHUSD" }, { "value": "EURAUD", "label": "EURAUD" }, { "value": "EURCAD", "label": "EURCAD" }, { "value": "EURCHF", "label": "EURCHF" }, { "value": "EURGBP", "label": "EURGBP" }, { "value": "EURJPY", "label": "EURJPY" }, { "value": "EURNZD", "label": "EURNZD" }, { "value": "EURUSD", "label": "EURUSD" }, { "value": "GBPAUD", "label": "GBPAUD" }, { "value": "GBPCAD", "label": "GBPCAD" }, { "value": "GBPCHF", "label": "GBPCHF" }, { "value": "GBPJPY", "label": "GBPJPY" }, { "value": "GBPNZD", "label": "GBPNZD" }, { "value": "GBPUSD", "label": "GBPUSD" }, { "value": "LTCUSD", "label": "LTCUSD" }, { "value": "NZDCAD", "label": "NZDCAD" }, { "value": "NZDUSD", "label": "NZDUSD" }, { "value": "USDCHF", "label": "USDCHF" }, { "value": "USDCAD", "label": "USDCAD" }, { "value": "USDJPY", "label": "USDJPY" }, { "value": "USOUSD", "label": "USOUSD" }, { "value": "XAUUSD", "label": "XAUUSD" }, { "value": "XRPUSD", "label": "XRPUSD" }, { "value": "AUDCAD-OTC", "label": "AUDCAD-OTC" }, { "value": "EURUSD-OTC", "label": "EURUSD-OTC" }, { "value": "EURGBP-OTC", "label": "EURGBP-OTC" }, { "value": "EURJPY-OTC", "label": "EURJPY-OTC" }, { "value": "GBPJPY-OTC", "label": "GBPJPY-OTC" }, { "value": "GBPUSD-OTC", "label": "GBPUSD-OTC" }, { "value": "NZDUSD-OTC", "label": "NZDUSD-OTC" }, { "value": "USDCHF-OTC", "label": "USDCHF-OTC" }, { "value": "USDHKD-OTC", "label": "USDHKD-OTC" }, { "value": "USDINR-OTC", "label": "USDINR-OTC" }, { "value": "USDJPY-OTC", "label": "USDJPY-OTC" }, { "value": "USDSGD-OTC", "label": "USDSGD-OTC" }, { "value": "USDZAR-OTC", "label": "USDZAR-OTC" }, ]
    const animatedComponents = makeAnimated();
    const [state, setState] = useState<unknown>([{ "value": "digital", "label": "DIGITAIS" }])
    const [MGale, setMGale] = useState('0')
    const [asstG0, setAsstG0] = useState('0')
    const [asstG1, setAsstG1] = useState('0')
    const [asstG2, setAsstG2] = useState('0')
    const [time, setTime] = useState('1')
    const [dir, setDir] = useState('TODAS')
    const [days, setDays] = useState('1')
    const [day, setDay] = useState('today')
    const [filter, setFilter] = useState(false)
    const [signal, setSignals] = useState('')
    const [loading, setLoading] = useState(false)
    const [percent, setPercent] = useState(0)
    

    async function initiateLoop(id) {
      let continueLoop = true
      while (continueLoop) {
       // await getGatalog(id);
        var config = { method: 'get', url: `http://127.0.0.1:8000/getCatalog/${id}`, headers: {} };
      axios(config).then(function (response) {
        if (response.data.status) {
          if (typeof response.data.catalog === 'number'){
            setPercent(response.data.catalog)
          }else if(typeof response.data.catalog === 'string'){
            setSignals(response.data.catalog)
          }else{
            setSignals(response.data.catalog.join('\n'))
            continueLoop = false
        }
          //setData(response.data.strategy)
          //toast.closeAll()
          //toast({ description: "Atualizado", status: 'success', duration: 9000, isClosable: true, })
        }
      })
        .catch(function (error) {
  
          //setData([])
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      setLoading(false)
    }
  
    
    
    async function handleSubmit(){
        setLoading(true)
        let object = {
            "active": state,
            "rates": {
                "fixed": parseInt(asstG0),
            },
            "filters": {
                "call": true,
                "put": true
            },
            "timeframe": parseInt(time),
            "days": parseInt(days),
            "date": day,
            "news": filter,
            "gale": parseInt(MGale)
        }
        if (parseInt(MGale) > 0) {
            object.rates["g1"] = parseInt(asstG1);
        }else{
            delete object.rates["g1"]
        }
        if (parseInt(MGale) > 1) {
            object.rates["g2"] = parseInt(asstG2);
        }else{
            delete object.rates["g2"]
        }
        var config = { method: 'post', url: `http://127.0.0.1:8000/catalog`, headers: { 'Content-Type': 'application/json' }, data : object };
        await axios(config).then(function (response) {
    
                if (response.data.status) {
                  initiateLoop(response.data.id)
                    //if (typeof response.data.catalog === 'string'){
                    //    setSignals(response.data.catalog)
                    //}else{
                    //    setSignals(response.data.catalog.join('\n'))
                    //}
                }else{

                }
                //setData(response.data.strategy)
                //toast.closeAll()
                //toast({ description: "Atualizado", status: 'success', duration: 9000, isClosable: true, })
          
          })

        }
        
    

  return (
    <>
      <Center>
              <VStack justify={'center'} spacing={5}>
                <FormControl>
                  <FormLabel>PAR</FormLabel>
                  <Select onChange={(e) => setState(e)} styles={{ option: (baseStyles, state) => ({ ...baseStyles, backgroundColor: state.isFocused ? '#51a2ff' : '#000323', color: state.isFocused ? '#fff' : '#fff', }), control: (baseStyles, state) => ({ ...baseStyles, color: '#FD8C53', borderColor: '#51a2ff', backgroundColor: '#000', width: '350px' }), }} placeholder={'Selecione'} closeMenuOnSelect={false} components={animatedComponents} defaultValue={[PAIRS[4]]} isMulti options={PAIRS} />
                </FormControl>
                <FormControl>
                  <FormLabel>MARTIN GALE</FormLabel>
                  <SelectI  value={MGale} borderColor={'#51a2ff'} borderWidth={1} onChange={(e) => setMGale(e.target.value)} >
                    <option style={{ backgroundColor: '#000323' }} value='0'>G0</option>
                    <option style={{ backgroundColor: '#000323' }} value='1'>G1</option>
                    <option style={{ backgroundColor: '#000323' }} value='2'>G2</option>
                  </SelectI>
                </FormControl>
                <FormControl>
                  <FormLabel>ASSERTIVIDADE G0</FormLabel>
                  <NumberInput borderColor={'#51a2ff'}  onChange={(e) =>setAsstG0(e)} value={asstG0} defaultValue={asstG0} min={1} max={100}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                {MGale >= '1' &&
                <FormControl>
                  <FormLabel>ASSERTIVIDADE G1</FormLabel>
                  <NumberInput borderColor={'#51a2ff'}  onChange={(e) =>setAsstG1(e)} value={asstG1} defaultValue={asstG1} min={1} max={100}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
}
                {MGale == '2' &&
                <FormControl>
                  <FormLabel>ASSERTIVIDADE G2</FormLabel>
                  <NumberInput borderColor={'#51a2ff'}  onChange={(e) =>setAsstG2(e)} value={asstG2} defaultValue={asstG2} min={1} max={100}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
}
                <FormControl>
                  <FormLabel>DIREÇÃO</FormLabel>
                  <SelectI borderColor={'#51a2ff'} borderWidth={1} onChange={(e) => setDir(e.target.value)} value={dir} >
                    <option style={{ backgroundColor: '#000323' }} value='CALL'>CALL</option>
                    <option style={{ backgroundColor: '#000323' }} value='PUT'>PUT</option>
                    <option style={{ backgroundColor: '#000323' }} value='TODAS'>TODAS</option>
                  </SelectI>
                </FormControl>

                <FormControl>
                  <FormLabel>TIMEFRAME</FormLabel>
                  <SelectI borderColor={'#51a2ff'} borderWidth={1} onChange={(e) => setTime(e.target.value)} value={time} >
                    <option style={{ backgroundColor: '#000323' }} value='1'>M1</option>
                    <option style={{ backgroundColor: '#000323' }} value='5'>M5</option>
                    <option style={{ backgroundColor: '#000323' }} value='15'>M15</option>
                    <option style={{ backgroundColor: '#000323' }} value='30'>M30</option>
                    <option style={{ backgroundColor: '#000323' }} value='60'>H1</option>
                  </SelectI>
                </FormControl>

                <FormControl>
                  <FormLabel>DIAS</FormLabel>
                  <NumberInput borderColor={'#51a2ff'}  onChange={(e) => setDays(e)} value={days} defaultValue={15} min={1} max={100}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

                <FormControl>
                  <FormLabel>DATA</FormLabel>
                  <SelectI borderColor={'#51a2ff'} borderWidth={1} onChange={(e) => setDay(e.target.value)} value={day} >
                    <option style={{ backgroundColor: '#000323' }} value='tomorrow'>AMANHÃ</option>
                    <option style={{ backgroundColor: '#000323' }} value='today'>HOJE</option>
                  </SelectI>
                </FormControl>
                <Checkbox colorScheme='blue' size={'lg'}   onChange={(e) => setFilter(e.target.checked)} checked={filter}>
    FILTRAR NOTÍCIA
  </Checkbox>
  <Button className={styles.boxicon} size='lg' w='300px' colorScheme='twitter' onClick={handleSubmit} >
  CATALOGAR AGORA </Button>
    
                
              </VStack>
            </Center>
        {(signal || loading ) &&
        <Modal isOpen={true} onClose={() => setSignals('')}>
        <ModalOverlay />
        <ModalContent bg='#09001b'>
          <ModalHeader>Sinais</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
          {!loading ? 

(  <Text textAlign={'center'} whiteSpace={'pre-line'}>{signal}</Text>):( <Center flexDir={'column'}><Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  ></Spinner><Text fontWeight={'600'} fontSize={'md'}>{percent}%</Text></Center>)
}
          </ModalBody>

          <ModalFooter>
            {!loading &&
            <Button colorScheme='blue' mr={3} onClick={() => navigator.clipboard.writeText(signal).then(() => {
                // Código para tratar o sucesso do copiar
                alert('Texto copiado com sucesso!');
              })
              .catch(err => {
                alert('Texto não copiado'+err.toString())
              })}>
              Copiar
            </Button> }
          </ModalFooter>
        </ModalContent>
      </Modal>
}
    </>
  )
}


