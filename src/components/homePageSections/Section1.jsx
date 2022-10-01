import { Box, Flex, Image, Text } from "@chakra-ui/react";
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
      color="black"
      fontWeight="medium"
      maxH="520px"
      border="1px solid blue"
      overflow="hidden"
      style={{ zIndex: 4 }}
    >
      <Slider {...settings}>
        <Flex h="100%" border="1px solid red">
          <Image
            w="100%"
            h="100%"
            alt="samples-content"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/fall-makeup-edit-hero-des_2000x.jpg?v=1663186054"
          />
        </Flex>
        <Box border="1px solid red">
          <Image
            w="100%"
            alt="samples-content"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Derek_Jonson_-_The-Maker-hp-hero-des-2_2000x.jpg?v=1663942552"
          />
        </Box>
        <Box border="1px solid red">
          <Image
            w="100%"
            alt="samples-content"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/hero-des_35241559-d9bf-4847-ad60-246ce1c321c5_2000x.jpg?v=1662761308"
          />
        </Box>
      </Slider>
    </Box>
  );
};
