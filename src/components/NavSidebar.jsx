import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const NavSidebar = ({ onToggle, isOpen }) => {
  return (
    <Stack
      direction="column"
      boxShadow={
        isOpen ? "rgba(136, 165, 191, 0.48) 0px 0px 50px 40px" : "none"
      }
      bg="white"
      w="90%"
      h="900px"
      marginTop="-10px"
    >
      <Flex
        borderBottom="1px solid gray"
        justifyContent="space-between"
        alignItems="center"
        p="10px"
      >
        <Flex gap="10px">
          <span onClick={onToggle} className="material-symbols-outlined">
            account_circle
          </span>
          <Text>SIGN IN/UP</Text>
        </Flex>
        <span onClick={onToggle} className="material-symbols-outlined">
          close
        </span>
      </Flex>
      <Box p="10px">
        <Text>Sidebar</Text>
      </Box>
    </Stack>
  );
};
