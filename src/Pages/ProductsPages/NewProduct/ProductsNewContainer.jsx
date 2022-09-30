import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import FilterNew from './FilterNew'
import NewCategory from './NewCategory'
import TopTestMonial from './TopTestMonial'
const ProductsNewContainer = () => {
  return (
    <div>
          <Box><TopTestMonial/></Box>
        <Flex width="80%" margin="auto" gap="25px">
          <Box padding='50px 0px' width="18%"><FilterNew/></Box>
            <Box  width="75%"><NewCategory/></Box>
        </Flex>
    </div>
  )
}

export default ProductsNewContainer