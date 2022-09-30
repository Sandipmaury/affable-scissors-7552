import { Box, Flex, Grid, Hide, Stack, useDisclosure } from "@chakra-ui/react";
import { navData } from "../Utils/Constants";
import { Logo } from "./navbarComponents/Logo";
import { NavLeft } from "./navbarComponents/NavLeft";
import { NavRight } from "./navbarComponents/NavRight";
import { SecondBar } from "./navbarComponents/SecondBar";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      top="0px"
      bg="white"
      color="#647ea1"
      direction="column"
      style={{ zIndex: 7 }}
      border="1px solid red"
      w="100%"
      position={["sticky", "sticky", "sticky", "static"]}
      onMouseLeave={isOpen ? onToggle : null}
    >
      <Box margin="auto" w={["100%", "100%", "100%", "1350px"]}>
        <Hide below="1024px">
          <Grid
            w="100%"
            h="60px"
            pt="5px"
            fontSize="12px"
            fontWeight="medium"
            templateRows="auto"
            border="1px solid red"
            templateColumns="repeat(3, 1fr)"
          >
            <Box>
              <NavLeft text={"STORE & SPA LOCATOR"} />
            </Box>
            <Box alignSelf="end">
              <Logo />
            </Box>
            <Box>
              <Flex gap="15px" flexDirection="row-reverse">
                {navData
                  ?.map((item, index) => (
                    <Box key={index}>
                      <NavRight
                        iconName={item.iconName}
                        title={item.title}
                        pathName={item.pathName}
                      />
                    </Box>
                  ))
                  .reverse()}
              </Flex>
            </Box>
          </Grid>
          <SecondBar isOpen={isOpen} onToggle={onToggle} />
        </Hide>
      </Box>
    </Stack>
  );
};

{
  /* nav for the small screens */
}
{
  /* <Show below="1024px">
        <Grid
          w="100%"
          fontSize="12px"
          h="50px"
          fontWeight="medium"
          templateColumns="repeat(3, 1fr)"
          templateRows="auto"
          position="sticky"
          top="0px"
          border="1px solid red"
          alignItems="center"
        >
          <Box px="10px">
            <span onClick={onToggle} className="material-symbols-outlined">
              menu
            </span>
          </Box>
          <Box>
            <Flex h="100%" w="200px" alignItems="center" margin="auto">
              <NavLink to="/">
                <Image h="100%" w="100%" src={logo} alt="logo" />
              </NavLink>
            </Flex>
          </Box>
          <Box px="10px">
            <Flex gap="20px" h="auto" justifyContent="flex-end">
              <Hide below="768">
                {navData?.map((item, index) => (
                  <NavLink to={item.pathName} key={index}>
                    <Flex alignItems="center" justifyContent="start" gap="10px">
                      <span className="material-symbols-outlined">
                        {item.iconName}
                      </span>
                    </Flex>
                  </NavLink>
                ))}
              </Hide>
              
            </Flex>
          </Box>
        </Grid>
        <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
          <NavSidebar isOpen={isOpen} onToggle={onToggle} />
        </Slide>
      </Show> */
}
