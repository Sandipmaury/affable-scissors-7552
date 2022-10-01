import {
  Box,
  Flex,
  Grid,
  Hide,
  Show,
  Slide,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { navData } from "../Utils/Constants";
import { Logo } from "./navbarComponents/Logo";
import { NavLeft } from "./navbarComponents/NavLeft";
import { NavOnscroll } from "./navbarComponents/NavOnscroll";
import { NavRight } from "./navbarComponents/NavRight";
import { NavSidebar } from "./navbarComponents/NavSidebar";
import { SecondBar } from "./navbarComponents/SecondBar";

export const Navbar = () => {
  const [isNavbar, setNavbar] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  const isAtuth = useSelector((store) => store.AuthReducer.isAtuth);
  const myRef = useRef(0);
  window.onscroll = () => {
    myRef.current = window.pageYOffset;
    myRef.current > 200 ? setNavbar(true) : setNavbar(false);
  };
  return (
    <Stack
      top="0px"
      pt={isNavbar ? "0px" : "10px"}
      bg="white"
      color="#647ea1"
      direction="column"
      style={{ zIndex: 7 }}
      w="100%"
      position={["sticky", "sticky", "sticky", isNavbar ? "sticky" : "static"]}
      onMouseLeave={isOpen ? onToggle : null}
      mb="1rem"
    >
      <Box>
        {isNavbar ? (
          <Hide below="1024px">
            <NavOnscroll isOpen={isOpen} onToggle={onToggle} />
          </Hide>
        ) : (
          <Hide below="1024px">
            <Grid
              h="60px"
              fontSize="12px"
              fontWeight="medium"
              templateRows="auto"
              templateColumns="repeat(3, 1fr)"
              margin="auto"
              maxW="1350px"
              w="100%"
            >
              <Box>
                <NavLeft text={"STORE & SPA LOCATOR"} />
              </Box>
              <Box maxW="200px" alignSelf="end" justifySelf="center">
                <Logo />
              </Box>
              <Box>
                <Flex gap="15px" justifyContent="flex-end">
                  {navData?.map((item, index) => (
                    <Box key={index}>
                      <NavRight
                        iconName={item.iconName}
                        title={isAtuth && index === 2 ? "Account" : item.title}
                        pathName={item.pathName}
                      />
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Grid>

            <Box position="relative" pt="10px">
              <Box margin="auto" maxW="1350px" w="100%">
                <Box w="70%" margin="auto">
                  <SecondBar isOpen={isOpen} onToggle={onToggle} />
                </Box>
              </Box>
            </Box>
          </Hide>
        )}
        {/* for small screen */}
        <Show below="1024px">
          <Grid
            w="100%"
            fontWeight="medium"
            templateColumns="repeat(3, 1fr)"
            templateRows="auto"
            position="sticky"
            top="0px"
            alignItems="center"
          >
            <Box px="10px">
              <span onClick={onToggle} className="material-symbols-outlined">
                menu
              </span>
            </Box>
            <Box maxW="200px" margin="auto">
              <Logo />
            </Box>
            <Box px="10px">
              <Flex gap="20px" h="auto" justifyContent="flex-end">
                {navData?.map((item, index) =>
                  index === 1 || index === 2 ? (
                    <Hide below="768px" key={index}>
                      <NavRight
                        iconName={item.iconName}
                        pathName={item.pathName}
                      />
                    </Hide>
                  ) : (
                    <NavRight
                      iconName={item.iconName}
                      pathName={item.pathName}
                    />
                  )
                )}
              </Flex>
            </Box>
          </Grid>
          <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
            <NavSidebar isOpen={isOpen} onToggle={onToggle} />
          </Slide>
        </Show>
      </Box>
    </Stack>
  );
};
