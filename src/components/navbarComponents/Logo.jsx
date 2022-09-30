import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../../Utils/Constants";

export const Logo = () => {
  return (
    <Box border="1px solid red">
      <Flex justifyContent="center" h="40px">
        <NavLink to="/">
          <Image h="100%" src={logo} alt="logo" />
        </NavLink>
      </Flex>
    </Box>
  );
};
