import React from 'react';
import { 
    Box,
    Heading,
    FormControl,
    Input,
    Text,
    Link,
    Image,
    Button,
    HStack
 }
     from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const BlueRewards = () => {
    const navigate = useNavigate()
  return (
    <Box backgroundColor="#F5F5F5" w="1350px" border="1px" fontFamily="sans-serif" h="fit-content">
        <Box backgroundColor="#F5F5F5">
            <Box w="fit-content" m="auto" mt="5%" backgroundColor="#F5F5F5">
                <Image w="500px" h="152px" src="https://cdn.shopify.com/s/files/1/1265/7867/files/bluerewards-logo.svg?534072"/>
                <Button mt="20px" backgroundColor="#12284C" borderRadius="0px" color="white" p="10px 20px" onClick={()=> navigate("/signup")}>JOIN BLUEREWARDS</Button>
                <HStack m="auto" mt="20px" w="fit-content">
                    <Text color="gray" >Already have a bluemercury.com account? </Text>
                    <Text fontWeight="bold" onClick={()=> navigate("/login")}>Sign In</Text>
                </HStack>
                
            </Box>
        </Box>
       

        <Box mt="70px" backgroundColor="white">
            <Heading fontStyle="italic" color="gray">Press</Heading>
            <Text color="gray" >Read what editors are saying about BlueRewards </Text>
            <HStack GAP="30PX">
                <Box padding="50px">
                    <Heading>G L O S S Y</Heading>
                    <Text mt="20px" color="gray" >"Bluemercury launches first loyalty program to entice up-and-coming brands" </Text>
                    <Button mt="30px" background="none" border="1px" borderRadius="0px">READ MORE</Button>
                </Box>
                <Box padding="30px 50px">
                    <Heading>B U S T L E</Heading>
                    <Text mt="20px" color="gray" >"Bluemercury launches first loyalty program to entice up-and-coming brands" </Text>
                    <Button mt="30px" background="none" border="1px" borderRadius="0px">READ MORE</Button>
                </Box>
                <Box padding="50px">
                    <Heading>REFINERY29</Heading>
                    <Text mt="20px" color="gray" >"Bluemercury launches first loyalty program to entice up-and-coming brands" </Text>
                    <Button mt="30px" background="none" border="1px" borderRadius="0px">READ MORE</Button>
                </Box>
            </HStack>
        </Box>

        <Box backgroundColor="#F5F5F5" p="50px">
            <Heading fontStyle="italic" color="gray">Sign Up Now</Heading>
            <Text mt="20px" color="gray" >Join BlueRewards and start earning rewards! </Text>
            <Button mt="20px" backgroundColor="#12284C" borderRadius="0px" color="white" p="10px 20px" onClick={()=> navigate("/signup")}>JOIN BLUEREWARDS</Button>
            <HStack m="auto" mt="20px" w="fit-content">
                <Text color="gray" >Already have a bluemercury.com account? </Text>
                <Text fontWeight="bold" onClick={()=> navigate("/login")}>Sign In</Text>
            </HStack>

        </Box>
    </Box>
  )
}

export default BlueRewards