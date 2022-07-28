import React, { useState } from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip, Box, Flex, Switch, Badge, Text, Divider, Button,
} from '@chakra-ui/react';
import {BsArrowLeftRight} from 'react-icons/bs';
import {CheckIcon} from '@chakra-ui/icons';

function PriceSlider() {
  const [sliderValue, setSliderValue] = useState(16)
  const [showTooltip, setShowTooltip] = useState(false)
  return (
    <Box m='50px'>
    <Flex m='40px 5px' flexDir={'row'} justifyContent='space-between' >
      <Text textAlign={['center','center','center','initial','initial']} alignSelf='center'>100K PAGEVIEWS</Text>
      <Flex display={['none','none','flex']}>
        <Text fontSize={['2xl','3xl','4xl']} alignSelf='center'>{`$ ${sliderValue}.00`}</Text>
        <Text fontSize={['md','l','xl']} alignSelf='center' color='blackAlpha.600'> &nbsp; / month</Text>
      </Flex>
    </Flex>
   
    <Slider
      id='slider'
      defaultValue={16}
      min={0}
      max={32}
      colorScheme='teal'
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
     
    >
     
      <SliderTrack> 
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='teal.500'
        color='white'
        placement='top'
        isOpen={showTooltip}
        label={`$ ${sliderValue}`}
      >
        <SliderThumb as={BsArrowLeftRight} boxSize={6} color='teal' p='5px' /> 
        
      </Tooltip>
    </Slider>
    <Flex display={['flex','flex','none']} m='30px' >
      <Text fontSize={['2xl','3xl','4xl']} alignSelf='center' textAlign='center'>{`$ ${sliderValue}.00`}</Text>
      <Text fontSize={['md','l','xl']} alignSelf='center' color='blackAlpha.600' textAlign='center'> &nbsp; / month</Text>
    </Flex>

    <Flex m={['px','15px','60px 150px']} 
      flexDir={'row'} justifyContent='space-evenly' align={'center'}
      fontSize={['10px','12px','14px']}>
      <Text color='blackAlpha.600'>Monthly Billing</Text>
      <Switch m='10px'></Switch>
      <Text color='blackAlpha.600'>Yearly Billing</Text>
      <Badge variant='subtle' colorScheme='red' borderRadius='40px' m='10px'> - 25% </Badge>
    </Flex>
    <Divider m='20px 5px'/>
    <Flex m='50px 5px' flexDir={['column','column','row']} justifyContent='space-between'>
      <Box textAlign={['center','center','initial']}>
        <Text fontSize={['12px','14px','16px']}> {<CheckIcon color='green'/>} &nbsp; Unlimited websites</Text>
        <Text fontSize={['12px','14px','16px']}> {<CheckIcon color='green'/>} &nbsp; 100% data ownership</Text>
        <Text fontSize={['12px','14px','16px']}> {<CheckIcon color='green'/>} &nbsp; Email reports</Text>
      </Box>
      <Button borderRadius={'50px'} bgColor='#293356' color='white' m={['20px','20px','10px']} align='center'>Start my trial</Button>
    </Flex>
 </Box>
    
  )
}

export default PriceSlider