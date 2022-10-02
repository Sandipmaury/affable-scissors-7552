import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import FilterNew from './FilterNew'
import NewCategory from './NewCategory'
import TopTestMonial from './TopTestMonial'
const ProductsNewContainer = () => {
  return (
    <div>
          <Box><TopTestMonial/></Box>
        <Flex  width="1400px" margin="auto" gap="50px">
          <Box padding='50px 0px' width="300px"><FilterNew/></Box>
            <Box  width="1100px"><NewCategory/></Box>
        </Flex>
    </div>
  )
}

export default ProductsNewContainer