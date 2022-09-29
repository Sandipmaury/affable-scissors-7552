import {
  Box,
  Button,
  Collapse,
  Flex,
  Grid,
  Hide,
  Icon,
  Image,
  Show,
  Slide,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo, lowerNav, navData } from "../Utils/Constants";
import { DropDown } from "./DropDown";
import { NavSidebar } from "./NavSidebar";
import { dropDownShop, dropDownNew } from "../Utils/Constants";
import { VscLocation } from "react-icons/vsc";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
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

  const onHoverHandler = (index) => {
    if (!isOpen) onToggle();
    setArrIndex(index);
  };

  return (
    <Stack
      direction="column"
      w={["100%", "1350px", "1350px"]}
      margin="auto"
      color="#647ea1"
      position={["sticky", "static", "static"]}
      top="0px"
      style={{ zIndex: 7 }}
      bg="white"
    >
      {/* upper navbar */}
      <Hide below="md">
        <Grid
          w="100%"
          h="60px"
          pt="5px"
          fontSize="12px"
          fontWeight="medium"
          templateColumns="repeat(3, 1fr)"
          templateRows="auto"
        >
          <Box>
            <NavLink to="#">
              <Flex
                border="1px solid blue"
                width="200px"
                alignItems="center"
                gap="10px"
              >
                <Button
                  leftIcon={<Icon as={VscLocation} boxSize="25px" />}
                  letterSpacing="1px"
                  fontSize="12px"
                  variant="ghost"
                  _hover="white"
                  color="#647ea1"
                >
                  STORE & SPA LOCATOR
                </Button>
              </Flex>
            </NavLink>
          </Box>
          {/* ************** */}
          <Box alignSelf="end">
            <Flex justifyContent="center" h="40px">
              <NavLink to="/">
                <Image h="100%" src={logo} alt="logo" />
              </NavLink>
            </Flex>
          </Box>
          {/* ************** */}
          <Box>
            <Flex gap="20px" h="auto" justifyContent="flex-end">
              {navData?.map((item, index) => (
                <NavLink to={item.pathName} key={index}>
                  <Flex alignItems="center" justifyContent="start" gap="10px">
                    <span className="material-symbols-outlined">
                      {item.iconName}
                    </span>
                    <Text>{item.title.toUpperCase()}</Text>
                  </Flex>
                </NavLink>
              ))}
            </Flex>
          </Box>
        </Grid>
        {/* lower navbar */}
        <Box w="100%" border="1px solid red" h="40px" onMouseLeave={onToggle}>
          <Flex
            w="70%"
            h="100%"
            alignItems="center"
            justifyContent="space-around"
            // gap="30px"
            margin="auto"
            border="1px solid red"
          >
            {lowerNav?.map((item, index) => (
              <NavLink key={index} to={item.pathName}>
                {({ isActive }) =>
                  isActive ? (
                    <Text
                      _hover={{
                        borderBottom: "2px solid #1c2838",
                        transition: "0.3s",
                      }}
                      color="#647ea1"
                      fontWeight="bold"
                      borderBottom="2px solid transparent"
                      onMouseOver={() => onHoverHandler(index)}
                    >
                      {item.title.toUpperCase()}
                    </Text>
                  ) : (
                    <Text onMouseOver={() => onHoverHandler(index)}>
                      {item.title.toUpperCase()}
                    </Text>
                  )
                }
              </NavLink>
            ))}
          </Flex>
          {arr?.map((el, i) => (
            <Collapse in={isOpen}>
              <DropDown arr={arr[arrIndex]} />
            </Collapse>
          ))}
        </Box>
      </Hide>
      {/* nav for the small screens */}
      <Show below="md">
        <Grid
          w="100%"
          p="10px"
          fontSize="12px"
          fontWeight="medium"
          templateColumns="repeat(3, 1fr)"
          templateRows="auto"
          position="sticky"
          top="0px"
        >
          <Box>
            <span onClick={onToggle} className="material-symbols-outlined">
              menu
            </span>
          </Box>
          <Box>
            <Flex justifyContent="center">
              <NavLink to="/">
                <Image h="100%" src={logo} alt="logo" />
              </NavLink>
            </Flex>
          </Box>
          <Flex flexDirection="row-reverse" gap="10px">
            <NavLink to="#">
              <span className="material-symbols-outlined">shopping_bag</span>
            </NavLink>
            <NavLink to="#">
              <span className="material-symbols-outlined">favorite</span>
            </NavLink>
          </Flex>
        </Grid>
        <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
          <NavSidebar isOpen={isOpen} onToggle={onToggle} />
        </Slide>
      </Show>
    </Stack>
  );
};
