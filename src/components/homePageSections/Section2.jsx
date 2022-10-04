import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { newArrivalProducts } from "../../Utils/Constants";
import { SliderLeftButton, SliderRightButton } from "./SliderButton";

export const Section2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    nextArrow: <SliderRightButton />,
    prevArrow: <SliderLeftButton />,
  };
  return (
    <Box
      bg="white"
      color="#1b3053"
      fontWeight="medium"
      maxH="520px"
      overflow="hidden"
      textAlign="center"
      py="4rem"
      maxW="1350px"
      w="100%"
    >
      <Flex alignItems="center" justifyContent="center">
        <Link _hover={{ textDecoration: "none" }} href="#">
          <Text fontSize="2xl">NEW ARRIVALS</Text>
        </Link>
      </Flex>

      <Box mt="3rem" px="1rem" cursor="grab">
        <Slider {...settings}>
          {newArrivalProducts?.map((item, index) => (
            <Flex
              bg="white"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              key={index}
            >
              <Link href="#">
                <Image alt={item?.title} src={item?.img} />
              </Link>
              <Text fontWeight="400">{item?.title.toUpperCase()}</Text>
              <Link href="#" _hover={{ textDecoration: "none" }}>
                <Text color="#647ea1" my="10px">
                  {item?.discripton}
                </Text>
              </Link>
              <Text my="10px" color="#647ea1">
                {item?.price}
              </Text>
            </Flex>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};
