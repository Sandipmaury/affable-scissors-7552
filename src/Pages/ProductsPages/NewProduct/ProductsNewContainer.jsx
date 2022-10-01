import React from 'react'
import { Box, Flex, SimpleGrid } from '@chakra-ui/react'
import FilterNew from './FilterNew'
import NewCategory from './NewCategory'
import TopTestMonial from './TopTestMonial'
const ProductsNewContainer = () => {
  return (
    <div>
          <Box><TopTestMonial/></Box>
        <Flex  width="80%" margin="auto" gap="30px">
          <Box padding='50px 0px' width="20%"><FilterNew/></Box>
            <Box  width="75%"><NewCategory/></Box>
        </Flex>
      
        {/* <Flex w={[480,740,920,1440]}  width="80%" margin="auto" gap='10px'>
          <Box padding='50px 0px' width="20%"><FilterNew/></Box>
            <Box  width="75%"><NewCategory/></Box>
        </Flex> */}
     
    </div>
  )
}

export default ProductsNewContainer