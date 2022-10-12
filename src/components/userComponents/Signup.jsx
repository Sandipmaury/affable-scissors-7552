import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  Input,
  Text,
  Link,
  useToast,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../../redux/AuthReducer/Actions";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && firstName && lastName) {
      dispatch(
        userSignup({
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          token: firstName + Date.now().toString(),
        })
      )
        .then(() => {
          toast({
            title: "Authentication successful!",
            status: "success",
            isClosable: true,
          });
        })
        .catch(() => {
          toast({
            title: "Something went wrong",
            status: "error",
            isClosable: true,
          });
        });
    }
  };

  return isAuth ? (
    <Navigate to="/user" />
  ) : (
    <div>
      <Box
        m="auto"
        w="100%"
        maxW="500px"
        textAlign="center"
        pt="50px"
        pb="50px"
      >
        <Heading fontWeight="500" color="#12284C" size="xl" mb="20px">
          CREATE ACCOUNT
        </Heading>
        <Text m="auto" w="80%" mb="30px" mt="10px" fontSize="md" color="gray">
          Complete the form below to create a bluemercury.com account.
        </Text>
        <Box>
          <FormControl>
            <Input
              height="45px"
              id="email"
              mb="15px"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              border="1px"
              borderColor="black"
              borderRadius="0px"
              placeholder="Email*"
            />
            <Input
              height="45px"
              id="firstName"
              mb="15px"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              name="firstName"
              type="text"
              border="1px"
              borderColor="black"
              borderRadius="0px"
              placeholder="First Name*"
            />
            <Input
              height="45px"
              id="lastName"
              mb="15px"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              name="lastName"
              type="text"
              border="1px"
              borderColor="black"
              borderRadius="0px"
              placeholder="Last Name*"
            />
            <Input
              height="45px"
              id="password"
              name="password"
              mb="15px"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              border="1px"
              borderColor="black"
              borderRadius="0px"
              placeholder="Password*"
            />
            <Input
              onClick={handleSubmit}
              height="45px"
              w="50%"
              type="submit"
              value="CREATE ACOUNT"
              backgroundColor="#12284C"
              borderRadius="0px"
              color="white"
              fontWeight="700"
              _hover={{ cursor: "pointer" }}
            />
          </FormControl>
        </Box>
        <Box mt="30px" alignItems="center">
          <Text color="gray" fontSize="sm">
            Already have a bluemercury.com account?
            <span onClick={() => navigate("/login")}>
              <Link
                fontSize="sm"
                color="#12284C"
                fontWeight="bold"
                textDecoration="underline"
              >
                Sign In
              </Link>
            </span>
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Signup;
