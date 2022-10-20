import { Box, Flex, Link, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SliderConstructor } from "./SliderConstructor";
export const Section5 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/bestSellers")
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <Box
      bg="white"
      color="#1b3053"
      fontWeight="medium"
      overflow="hidden"
      textAlign="center"
      py="4rem"
      maxW="1350px"
      w="100%"
    >
      <Flex alignItems="center" justifyContent="center">
        <Link _hover={{ textDecoration: "none" }} href="#">
          <Text fontSize="2xl">SCENTS OF THE SEASON</Text>
        </Link>
      </Flex>
      <Box mt="3rem" px="1rem" cursor="grab">
        <SliderConstructor data={data} />
      </Box>
    </Box>
  );
};
