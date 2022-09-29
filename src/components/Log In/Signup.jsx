import React from 'react';
import { 
    Box,
    Heading,
    FormControl,
    Input,
    Text,
    Link
 }
     from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
  return (
    <div>
        <Box m="auto" w="500px" textAlign="center" pt="50px" pb="50px">
            <Heading fontWeight="500" color="#12284C" size="xl" mb="20px">CREATE ACCOUNT</Heading>
            <Text m="auto" w="80%" mb="30px" mt="10px" fontSize="md" color="gray">Complete the form below to create a bluemercury.com account.</Text>
            <Box>
                <FormControl>
                    <Input 
                    height="45px"
                    id="email"
                    mb="15px" 
                    name="email"
                    type='email' border="1px" 
                    borderColor="black" borderRadius="0px"  
                    placeholder="Email*"
                    />
                    <Input 
                    height="45px"
                    id="email"
                    mb="15px" 
                    name="firstName"
                    type='email' border="1px" 
                    borderColor="black" borderRadius="0px"  
                    placeholder="First Name*"
                    />
                    <Input 
                    height="45px"
                    id="email"
                    mb="15px"
                    name="firstName"
                    type='email' border="1px" 
                    borderColor="black" borderRadius="0px"  
                    placeholder="Last Name*"
                    />
                    <Input 
                    height="45px"
                    id="password"
                    name="password"
                    mb="15px" 
                    type='password' 
                    border="1px" 
                    borderColor="black" 
                    borderRadius="0px" 
                    placeholder="Password*"/>
                    <Input height="45px" w="50%" type="submit" value="CREATE ACOUNT" backgroundColor="#12284C" borderRadius="0px" color="white" fontWeight="700"  />
                </FormControl>
            </Box>
            <Box mt="30px" alignItems="center">
                <Text color="gray" fontSize="sm">Already have a bluemercury.com account? 
                    <span onClick={()=> navigate("/")}> 
                        <Link fontSize="sm" color="#12284C" fontWeight="bold" textDecoration="underline">
                            Sign In
                        </Link>
                    </span> 
                </Text>
            </Box>
        </Box>
    </div>
  )
}

export default Signup