import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../../Utils/Constants";

export const Logo = () => {
  return (
    <Box w="100%">
      <Flex justifyContent="center" w="100%">
        <NavLink to="/">
          <Image w="100%" src={logo} alt="logo" />
        </NavLink>
      </Flex>
    </Box>
  );
};
