import { Icon } from "@chakra-ui/icon";
import { Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { VscLocation } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

export const NavLeft = ({ text }) => {
  return (
    <Stack direction="row" border="1px solid red">
      <NavLink to="#">
        <Flex alignItems="center" gap="5px">
          <Icon as={VscLocation} boxSize="25px" />
          {text ? <Text fontSize="12px">{text}</Text> : null}
        </Flex>
      </NavLink>
    </Stack>
  );
};
