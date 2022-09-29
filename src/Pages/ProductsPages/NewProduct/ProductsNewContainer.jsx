import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import FilterNew from './FilterNew'
import NewCategory from './NewCategory'
import TopTestMonial from './TopTestMonial'
const ProductsNewContainer = () => {
  return (
    <div>
          {/* <TopTestMonial/> */}
        <Flex width="80%" margin="auto" gap="25px">
          <Box border="2px solid red" width="18%"><FilterNew/></Box>
            <Box border="2px solid black" width="75%"><NewCategory/></Box>
        </Flex>
    </div>
  )
}

export default ProductsNewContainer