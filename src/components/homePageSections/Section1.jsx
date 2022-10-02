import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
export const Section1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    ltr: true,
    pauseOnHover: true,
  };

  return (
    <Box
      w="100%"
      bg="white"
      cursor="grab"
      fontSize="12px"
      fontWeight="medium"
      color="#1b3053"
      zIndex="5"
    >
      <Slider {...settings}>
        <Link href="#">
          <Flex
            position="relative"
            h="100%"
            alignItems="center"
            flexDirection={["column-reverse", "column-reverse", "row", "row"]}
            bg="#fef7ea"
          >
            <Box
              position={["static", "static", "absolute", "absolute"]}
              w={["100%", "100%", "50%", "50%"]}
              h="100%"
              p={["3rem", "4rem", "5rem", "5rem"]}
              textAlign={["center", "center", "start", "start"]}
            >
              <Flex flexDirection="column" gap="1rem">
                <Text fontWeight="600" fontSize="2xl">
                  In stores + online!
                </Text>
                <Text fontWeight="400" fontSize="5xl">
                  The Fall Makeup Edit
                </Text>
                <Text
                  textAlign={["center", "center", "start", "start"]}
                  maxW="450px"
                  fontSize="2xl"
                  margin={["auto", "auto", "unset", "unset"]}
                >
                  These seven makeup musts are all you need to create a fresh
                  fall look!
                </Text>
                <Link _hover={{ textDecoration: "none" }} href="#">
                  <Text
                    fontWeight="600"
                    pb="3px"
                    fontSize="17px"
                    borderBottom="2px solid #1b3053"
                    w="105px"
                    textAlign="center"
                    margin={["auto", "auto", "unset", "unset"]}
                  >
                    SHOP NOW
                  </Text>
                </Link>
              </Flex>
            </Box>
            <Image
              w="100%"
              h="100%"
              alt="samples-content"
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/fall-makeup-edit-hero-des_2000x.jpg?v=1663186054"
            />
          </Flex>
        </Link>
        <Link href="#">
          <Flex
            position="relative"
            h="100%"
            alignItems="center"
            flexDirection={["column-reverse", "column-reverse", "row", "row"]}
            bg="#1c1102"
          >
            <Box
              position={["static", "static", "absolute", "absolute"]}
              w={["100%", "100%", "50%", "50%"]}
              h="100%"
              p={["3rem", "4rem", "5rem", "5rem"]}
              textAlign={["center", "center", "start", "start"]}
              color="white"
            >
              <Flex flexDirection="column" gap="1rem">
                <Text fontWeight="600" fontSize="5xl">
                  Introducing <br />
                  The Maker
                </Text>
                <Text
                  textAlign={["center", "center", "start", "start"]}
                  maxW="450px"
                  fontSize="20px"
                  margin={["auto", "auto", "unset", "unset"]}
                >
                  Sensual fragrances inspired by travel fantasies that melt away
                  your inhibitions.
                </Text>
                <Link _hover={{ textDecoration: "none" }} href="#">
                  <Text
                    fontWeight="600"
                    pb="3px"
                    fontSize="17px"
                    borderBottom="2px solid white"
                    w="105px"
                    textAlign="center"
                    margin={["auto", "auto", "unset", "unset"]}
                  >
                    SHOP NOW
                  </Text>
                </Link>
              </Flex>
            </Box>
            <Image
              w="100%"
              h="100%"
              alt="samples-content"
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Derek_Jonson_-_The-Maker-hp-hero-des-2_2000x.jpg?v=1663942552"
            />
          </Flex>
        </Link>

        <Link href="#">
          <Flex
            position="relative"
            h="100%"
            alignItems="center"
            flexDirection={["column-reverse", "column-reverse", "row", "row"]}
            bg="#fef7ea"
          >
            <Box
              position={["static", "static", "absolute", "absolute"]}
              w={["100%", "100%", "50%", "50%"]}
              h="100%"
              p={["3rem", "4rem", "5rem", "5rem"]}
              textAlign="center"
            >
              <Box>
                <Text fontWeight="400" fontSize="2xl">
                  Routine <strong>Reboot</strong>
                </Text>
                <Text fontWeight="400" fontSize="3xl">
                  The <br />
                  <strong>"BFFs Night Out"</strong>
                  <Text>Routine</Text>
                </Text>
                <Text
                  textAlign="center"
                  maxW="450px"
                  fontSize="16px"
                  margin="auto"
                >
                  Finally finding the time to turn up and get down with a group
                  of good friends calls for a<i>lewk</i>. This routine is low
                  effort but high reward—perfect for selfies with the squad
                </Text>
                <Link _hover={{ textDecoration: "none" }} href="#">
                  <Text
                    fontWeight="600"
                    pb="3px"
                    fontSize="17px"
                    borderBottom="2px solid #1b3053"
                    w="105px"
                    marginTop="2rem"
                    textAlign="center"
                    margin="auto"
                  >
                    SHOP NOW
                  </Text>
                </Link>
              </Box>
            </Box>
            <Image
              w="100%"
              h="100%"
              alt="samples-content"
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/hero-des_35241559-d9bf-4847-ad60-246ce1c321c5_2000x.jpg?v=1662761308"
            />
          </Flex>
        </Link>
      </Slider>
    </Box>
  );
};
