import {
  Box,
  Collapse,
  Flex,
  Grid,
  Hide,
  Image,
  Show,
  Slide,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { logo, lowerNav, navData } from "../Utils/Constants";
import { DropDown } from "./DropDown";
import { NavSidebar } from "./NavSidebar";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      direction="column"
      w={["100vw", "1350px", "1350px"]}
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
                <span className="material-symbols-outlined">location_on</span>
                <Text>STORE & SPA LOCATOR</Text>
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
                <NavLink to="#" key={index}>
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
        <Box w="100%" h="40px">
          <Flex
            w="70%"
            h="100%"
            alignItems="center"
            justifyContent="space-around"
            margin="auto"
          >
            {lowerNav?.map((item, index) => (
              <NavLink key={index} to="#">
                {({ isActive }) =>
                  isActive ? (
                    <Text
                      _hover={{
                        borderBottom: "2px solid #1c2838",
                        transition: "0.3s",
                      }}
                      color="black"
                      borderBottom="2px solid transparent"
                      onMouseOver={onToggle}
                      onMouseLeave={onToggle}
                    >
                      {item.toUpperCase()}
                    </Text>
                  ) : (
                    <Text
                      color="blue"
                      onMouseOver={onToggle}
                      onMouseLeave={onToggle}
                    >
                      {item.toUpperCase()}
                    </Text>
                  )
                }
              </NavLink>
            ))}
          </Flex>
          <Collapse in={isOpen}>
            <DropDown />
          </Collapse>
        </Box>
      </Hide>
      {/* nav for the small screens */}
      <Show below="md">
        <Grid
          w="100%"
          p="10px"
          fontSize="12px"
          fontWeight="medium"
          border="1px solid red"
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
