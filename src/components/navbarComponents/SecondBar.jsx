import { Flex, Stack, Text } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { dropDownNew, dropDownShop, lowerNav } from "../../Utils/Constants";
import { DropDown } from "./DropDown";

export const SecondBar = ({ isOpen, onToggle }) => {
  const [arrIndex, setArrIndex] = useState(0);
  const arr = [
    dropDownShop,
    dropDownNew,
    dropDownShop,
    dropDownNew,
    dropDownShop,
    dropDownNew,
    dropDownShop,
  ];

  return (
    <Stack w="100%" border="1px solid red">
      <Flex
        w="70%"
        h="100%"
        alignItems="center"
        justifyContent="space-around"
        margin="auto"
        border="1px solid blue"
      >
        {lowerNav?.map((item, index) => (
          <NavLink
            onMouseEnter={() => setArrIndex(index)}
            onMouseOver={!isOpen ? onToggle : null}
            key={index}
            to={item.pathName}
          >
            {({ isActive }) =>
              isActive ? (
                <Text
                  _hover={{
                    borderBottom: "2px solid #1c2838",
                    transition: "0.3s",
                  }}
                  color="#647ea1"
                  fontWeight="bold"
                  borderBottom="2px solid #1c2838"
                >
                  {item.title.toUpperCase()}
                </Text>
              ) : (
                <Text
                  borderBottom="2px solid #1c2838"
                  _hover={{ borderBottom: "2px solid #1c2838" }}
                >
                  {item.title.toUpperCase()}
                </Text>
              )
            }
          </NavLink>
        ))}
      </Flex>
      <Collapse in={isOpen}>
        <DropDown arr={arr[arrIndex]} />
      </Collapse>
    </Stack>
  );
};
