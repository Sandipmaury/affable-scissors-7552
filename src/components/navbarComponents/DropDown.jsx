import { Stack, Text, Flex, Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const DropDown = ({ arr }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(0);
  }, [arr]);
  return (
    <Stack
      position="absolute"
      top="40px"
      left="0px"
      borderTop="1px solid lightGray"
      w="100%"
      h="auto"
      p="20px"
      bg="white"
      boxShadow="md"
      direction="row"
      justifyContent="center"
      gap="50px"
    >
      <Box borderRight="1px solid gray" paddingRight="50px">
        {arr?.map((item, i) => (
          <Flex
            w="200px"
            fontWeight={i === index ? "bold" : "normal"}
            justifyContent="space-between"
            my="4px"
            key={i}
          >
            <Link to="#">
              <Text onMouseEnter={() => setIndex(i)}>{item?.category}</Text>
            </Link>
            <span className="material-symbols-outlined">chevron_right</span>
          </Flex>
        ))}
      </Box>
      <Flex gap="20px">
        {arr[index]?.data?.map((item, index) => (
          <Box key={index}>
            <Text fontWeight="bold">{item?.title}</Text>
            {item?.data?.map((el, i) => (
              <Link to="#">
                <Text my="5px">{el}</Text>
              </Link>
            ))}
          </Box>
        ))}
      </Flex>
      <Box>
        {arr[index]?.images?.map((item, index) => (
          <Box key={index}>
            <Link to="#">
              <Image src={item?.img} alt={item?.name} />
              <Text>{item?.name}</Text>
              <Text>{item?.description}</Text>
            </Link>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};
