import { Box, SimpleGrid,Image,Text } from '@chakra-ui/react'
import React from 'react'

const TopTestMonial = () => {
  return (
    <div  style={{width:"80%"}}>
        <SimpleGrid columns={[1,1,2,2]} spacingX='40px' spacingY='20px'>
            <Box border="2px solid red">
                <Image  src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/augustinus_bader-logo.png?v=1604007286' alt='Bader' />
                <Text  fontFamily="Montserrat Light, sans-serif" color="gray" fontSize="15px" fontWeight="500" lineHeight="32.1px">Developed by a world-leading expert in stem cell research, Professor Augustinus Bader has spent<br/> thirty years unlocking the body’s innate processes to self-heal. The result? Game-changing skincare <br/>that uses a unique Trigger Factor Complex called TFC8® to optimize skin health, visibly reduce the<br/> damage caused by environmental stressors, and restore skin radiance.</Text>
            </Box>
            <Box border="2px solid black">
                <Image src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Enhanced_Brand_Page_1_1800x900_4312ef80-b7d3-4213-b1ce-f0f78ff8e527.jpg?v=1640111048'/>
            </Box>
        </SimpleGrid>
    </div>
  )
}

export default TopTestMonial