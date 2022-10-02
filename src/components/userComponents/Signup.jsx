import React, {useState} from 'react';
import axios from 'axios';
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

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [token, setToken] = useState("");
    
       
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        setToken(firstName+Date.now().toString())
        axios.post(`https://62a8b465943591102ba84f08.mockapi.io/crud`,{
            email:email,
            password:password,
            firstName:firstName,
            lastName:lastName,
            token:token
        }).then(()=> {
            alert("You are Logged In");
            setEmail("");
            setFirstName("");
            setLastName("");
            setPassword("");
            
            navigate("/userpage");

        });
        saveData("token",token);
        // console.log(token)
    }

    const saveData =(key,value) => {
        localStorage.setItem(key, JSON.stringify(value));

    }
    
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
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                    type='email' border="1px" 
                    borderColor="black" borderRadius="0px"  
                    placeholder="Email*"
                    />
                    <Input 
                    height="45px"
                    id="firstName"
                    mb="15px" 
                    onChange={(e)=> setFirstName(e.target.value)}
                    value={firstName}
                    name="firstName"
                    type='text' border="1px" 
                    borderColor="black" borderRadius="0px"  
                    placeholder="First Name*"
                    />
                    <Input 
                    height="45px"
                    id="lastName"
                    mb="15px"
                    value={lastName}
                    onChange={(e)=> setLastName(e.target.value)}
                    name="lastName"
                    type='text' border="1px" 
                    borderColor="black" borderRadius="0px"  
                    placeholder="Last Name*"
                    />
                    <Input 
                    height="45px"
                    id="password"
                    name="password"
                    mb="15px" 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    type='password' 
                    border="1px" 
                    borderColor="black" 
                    borderRadius="0px" 
                    placeholder="Password*"/>
                    <Input onClick={handleSubmit} height="45px" w="50%" type="submit" value="CREATE ACOUNT" backgroundColor="#12284C" borderRadius="0px" color="white" fontWeight="700"  />
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