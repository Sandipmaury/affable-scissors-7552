import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { SliderLeftButton, SliderRightButton } from "./SliderButton";

export const SliderConstructor = ({ data }) => {
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
    <Slider {...settings}>
      {data?.map((item, index) => (
        <Flex
          bg="white"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          key={index}
        >
          <Link to="#">
            <Image
              maxW="60%"
              alt={item?.ProductCard__Brand}
              src={item?.Image}
            />
          </Link>
          <Text fontWeight="400">{item?.ProductCard__Brand.toUpperCase()}</Text>
          <Link to="#" _hover={{ textDecoration: "none" }}>
            <Text color="#647ea1" my="10px">
              {item?.ProductCard__Title}
            </Text>
          </Link>
          <Text my="10px" color="#647ea1">
            {item?.ProductCard__Price}
          </Text>
        </Flex>
      ))}
    </Slider>
  );
};
