import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { navData } from "../../Utils/Constants";
import { Logo } from "./Logo";
import { NavLeft } from "./NavLeft";
import { NavRight } from "./NavRight";
import { SecondBar } from "./SecondBar";

export const NavOnscroll = ({ isOpen, onToggle }) => {
  return (
    <Stack
      justifyContent="center"
      position="sticky"
      top="0px"
      h="50px"
      bg="white"
      width="100%"
      direction="row"
      borderBottom="1px solid lightGray"
      alignItems="center"
    >
      <Flex
        w={["100%", "100%", "100%", "1350px"]}
        justifyContent="space-between"
      >
        <Box maxW="150px" alignSelf="end" justifySelf="center">
          <Logo />
        </Box>
        <Box w="60%">
          <SecondBar isOpen={isOpen} onToggle={onToggle} />
        </Box>
        <Box>
          <Flex alignItems="center" gap="40px" justifyContent="flex-end">
            <Box>
              <NavLeft />
            </Box>
            {navData?.map((item, index) => (
              <Box key={index}>
                <NavRight iconName={item.iconName} pathName={item.pathName} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Stack>
  );
};
