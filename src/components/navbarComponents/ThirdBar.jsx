import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Slider from "react-slick";

export const ThirdBar = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    ltr: true,
  };

  return (
    <Box
      style={{ zIndex: 3 }}
      w="100%"
      bg="#d7ebf2"
      py="10px"
      cursor="grab"
      fontSize="12px"
      color="#1b3053"
      fontWeight="medium"
      textAlign="center"
      marginBottom="-9px"
    >
      <Slider {...settings}>
        <Text>Free Shipping for BlueRewards Members</Text>
        <Text>Free Gifts with Purchase. Browse Now </Text>
        <Text>Free Samples with All Orders </Text>
        <Text>Due to high volume, shipping times may be delayed. </Text>
      </Slider>
    </Box>
  );
};
