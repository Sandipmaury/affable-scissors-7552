import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { NavLink } from "react-router-dom";

export const NavRight = ({ iconName, title, pathName }) => {
  return (
    <NavLink to={pathName}>
      <Flex
        fontWeight="medium"
        alignItems="center"
        justifyContent="start"
        gap="6px"
        border="1px solid red"
      >
        <span className="material-symbols-outlined">{iconName}</span>
        {title ? <Text>{title?.toUpperCase()}</Text> : null}
      </Flex>
    </NavLink>
  );
};
