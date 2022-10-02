import React, { useEffect, useState } from "react";
import styles from "../Styles/login.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Heading, FormControl, Input, Text, Link,Stack } from "@chakra-ui/react";
import UserPage from "./UserPage";
import { useRef } from "react";

const Login = () => {
  const [user, setUser] = useState({});
  const token = useRef(JSON.parse(localStorage.getItem("token")));
  const [isAuth, setIsAuth] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(()=>{
      getData();
  },[])

  const getData = async () => {
    return await axios.get(
      `https://62a8b465943591102ba84f08.mockapi.io/crud`
    ).then(({data})=>{
      setUser(data.find((el)=> el.token === token.current))

    })
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    const val = type === "number" ? Number(value) : value;

    setFormValue({ ...formValue, [name]: val });
    //console.log(formValue)
  };

  const handleCheckUser = (e) => {
    e.preventDefault();
    user.email  === formValue.email && user.password === formValue.password ? navigate("/userpage") : alert("Invalid Email or Password");
  
  }

  return isAuth ? (
    <Navigate to="/userpage" />
  ) : (
    <Stack fontFamily="sans-serif" >
      <Box m="auto" w="500px" textAlign="center" pt="50px" pb="50px">
        <Heading fontWeight="500" color="#12284C" size="xl" mb="20px">
          LOGIN
        </Heading>
        <Text mb="30px" mt="10px" fontSize="md" color="gray">
          Please enter your e-mail and password:
        </Text>
        <Box>
          <FormControl>
            <Input
              height="45px"
              id="email"
              mb="20px"
              name="email"
              value={formValue.email}
              onChange={(e) => handleChange(e)}
              type="email"
              border="1px"
              borderColor="black"
              borderRadius="0px"
              placeholder="Email"
            />
            <Input
              height="45px"
              id="password"
              name="password"
              value={formValue.password}
              onChange={handleChange}
              mb="20px"
              type="password"
              border="1px"
              borderColor="black"
              borderRadius="0px"
              placeholder="Password"
            />
            <Input
              onClick={handleCheckUser}
              height="45px"
              type="submit"
              value="LOGIN"
              backgroundColor="#12284C"
              borderRadius="0px"
              color="white"
              fontWeight="bold"
            />
          </FormControl>
        </Box>
        <Box mt="30px" alignItems="center">
          <Text color="gray" fontSize="sm">
            Don’t have an account?
            <span onClick={() => navigate("/signup")}>
              <Link
                fontSize="sm"
                color="#12284C"
                fontWeight="bold"
                textDecoration="underline"
              >
                Create One
              </Link>
            </span>
          </Text>
        </Box>
      </Box>
    </Stack>
  );
};

export default Login;
