import { Flex, Stack, Text } from "@chakra-ui/layout";
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
    <Stack>
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="space-around"
        margin="auto"
        h="50px"
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
                  color="#647ea1"
                  fontWeight="bold"
                  borderBottom="2px solid #1c2838"
                >
                  {item.title.toUpperCase()}
                </Text>
              ) : (
                <Text
                  borderBottom="2px solid white"
                  _hover={{ borderBottom: "2px solid #1c2838" }}
                >
                  {item.title.toUpperCase()}
                </Text>
              )
            }
          </NavLink>
        ))}
      </Flex>

      {isOpen ? <DropDown arr={arr[arrIndex]} /> : null}
    </Stack>
  );
};
