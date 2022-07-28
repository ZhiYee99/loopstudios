import React from 'react'
import { Box, Text, Flex, Switch, Badge, Divider, Button, } from '@chakra-ui/react'
import PriceSlider from '../PriceSlider';


function Products() {
 
  return (
    <Box>
      <Box textAlign='center' m='50px' >
        <Text fontSize={['xl','3xl','4xl']} fontWeight='extrabold' m='10px'>Simple, traffic-based pricing</Text>
        <Text fontSize={['13px','16px','18px']} color='blackAlpha.600'>Sign-up for our 30-days trial. No credit card required.</Text>
      </Box>
      <Box>
        <PriceSlider/>
      </Box>
    </Box>
  );
}

export default Products;