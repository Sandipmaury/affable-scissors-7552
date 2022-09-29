import React, { useEffect, useState } from 'react';
import styles from "../Styles/login.module.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
    Box,
    Heading,
    FormControl,
    Input,
    FormLabel,
    Text,
    Link
 }
     from '@chakra-ui/react';



const Login = () => {
    const [data, setData] =  useState([]);
    const [flag, setFlag] = useState(false);
    const [formValue, setFormValue] = useState({
        email:"",
        password:""
    });

    const getData = async() => {
        let res = await axios.get(`https://62a8b465943591102ba84f08.mockapi.io/crud`);
        console.log(res.data)
        setData(res.data)
    }

    useEffect(()=>{
        getData();
    },[])
   

    const handleChange = (e) => {
        const {name, value,type } = e.target;

        const val = type ===    'number' ? Number(value) : value;

        setFormValue({...formValue,[name]:val});
        
    }
    
    const handleCheckUser = (e) => {
        e.preventDefault();
            for(let i=0; i<data.length; i++){
                if(formValue.email === data[i].email && formValue.password === data[i].password){
                    setFlag(true);
                }
                else if(formValue.email !== data[i].email){
                    alert("Email is not valid")
                }
                else if(formValue.password !== data[i].password){
                    alert("Password is not valid")
                }
                else{
                    continue;
                }
    
            }
            if(flag){
                alert("Login SuccesFull")
            }
            else{
                alert("Login Failed")
            }
        
        
    }



    const navigate = useNavigate();
  return (
    <div className={styles.login_div}>
        <Box m="auto" w="500px" textAlign="center" pt="50px" pb="50px">
            <Heading fontWeight="500" color="#12284C" size="xl" mb="20px">LOGIN</Heading>
            <Text mb="30px" mt="10px" fontSize="md" color="gray">Please enter your e-mail and password:</Text>
            <Box>
                <FormControl>
                    <Input 
                    height="45px"
                    id="email"
                    mb="20px" 
                    name="email"
                    value={formValue.email}
                    onChange={handleChange}
                    type='email' border="1px" 
                    borderColor="black" borderRadius="0px"  
                    placeholder="Email"/>
                    <Input 
                    height="45px"
                    id="password"
                    name="password"
                    value={formValue.password}
                    onChange={handleChange}
                    mb="20px" 
                    type='password' 
                    border="1px" 
                    borderColor="black" 
                    borderRadius="0px" 
                    placeholder="Password"/>
                    <Input onClick={handleCheckUser} height="45px" type="submit" value="LOGIN" backgroundColor="#12284C" borderRadius="0px" color="white" fontWeight="bold" />
                </FormControl>
            </Box>
            <Box mt="30px" alignItems="center">
                <Text color="gray" fontSize="sm">Don’t have an account? 
                    <span onClick={()=> navigate("/signup")} > 
                        <Link fontSize="sm" color="#12284C" fontWeight="bold" textDecoration="underline">
                            Create One
                        </Link>
                    </span> 
                </Text>
            </Box>
        </Box>

       
    </div>
  )
}

export default Login;

