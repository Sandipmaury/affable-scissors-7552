import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
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
  };

  return (
    <Box
      bg="white"
      color="#1b3053"
      fontWeight="medium"
      maxH="520px"
      border="1px solid blue"
      overflow="hidden"
      textAlign="center"
      py="4rem"
      maxW="1350px"
      w="100%"
    >
      <Link _hover={{ textDecoration: "none" }} href="#">
        <Text fontSize="4xl">NEW ARRIVALS</Text>
      </Link>
      <Box cursor="grab">
        <Slider {...settings}>
          <Box
            border="1px solid red"
            bg="white"
            alignItems="center"
            justifyContent="center"
          >
            <Link href="#">
              <Image
                alt="sampel-contant"
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309022966-1_235x.jpg?v=1664567815"
              />
            </Link>
            <Text fontWeight="400">NEST NEW YORK</Text>
            <Link href="#" _hover={{ textDecoration: "none" }}>
              <Text color="#647ea1" my="10px">
                Indian Jasmine Perfume
              </Text>
            </Link>
            <Text my="10px" color="#647ea1">
              Oil From $35
            </Text>
          </Box>
          <Box
            border="1px solid red"
            bg="white"
            alignItems="center"
            justifyContent="center"
          >
            <Link href="#">
              <Image
                alt="sampel-contant"
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309022942-1_235x.jpg?v=1664567797"
              />
            </Link>
            <Text fontWeight="400">NEST NEW YORK</Text>
            <Link href="#" _hover={{ textDecoration: "none" }}>
              <Text color="#647ea1" my="10px">
                Indian Jasmine Perfume
              </Text>
            </Link>
            <Text my="10px" color="#647ea1">
              Oil From $35
            </Text>
          </Box>
          <Box
            border="1px solid red"
            bg="white"
            alignItems="center"
            justifyContent="center"
          >
            <Link href="#">
              <Image
                alt="sampel-contant"
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-30ml-840732118327-1_235x235_crop_center.jpg?v=1663175595"
              />
            </Link>
            <Text fontWeight="400">NEST NEW YORK</Text>
            <Link href="#" _hover={{ textDecoration: "none" }}>
              <Text color="#647ea1" my="10px">
                Indian Jasmine Perfume
              </Text>
            </Link>
            <Text my="10px" color="#647ea1">
              Oil From $35
            </Text>
          </Box>
          <Box
            border="1px solid red"
            bg="white"
            alignItems="center"
            justifyContent="center"
          >
            <Link href="#">
              <Image
                alt="sampel-contant"
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-0034floz1ml-893689003031-1_235x.jpg?v=1663459808"
              />
            </Link>
            <Text fontWeight="400">NEST NEW YORK</Text>
            <Link href="#" _hover={{ textDecoration: "none" }}>
              <Text color="#647ea1" my="10px">
                Indian Jasmine Perfume
              </Text>
            </Link>
            <Text my="10px" color="#647ea1">
              Oil From $35
            </Text>
          </Box>
          <Box
            border="1px solid red"
            bg="white"
            alignItems="center"
            justifyContent="center"
          >
            <Link href="#">
              <Image
                alt="sampel-contant"
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-30ml-840732118327-1_235x235_crop_center.jpg?v=1663175595"
              />
            </Link>
            <Text fontWeight="400">NEST NEW YORK</Text>
            <Link href="#" _hover={{ textDecoration: "none" }}>
              <Text color="#647ea1" my="10px">
                Indian Jasmine Perfume
              </Text>
            </Link>
            <Text my="10px" color="#647ea1">
              Oil From $35
            </Text>
          </Box>
          <Box
            border="1px solid red"
            bg="white"
            alignItems="center"
            justifyContent="center"
          >
            <Link href="#">
              <Image
                alt="sampel-contant"
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-30ml-840732118327-1_235x235_crop_center.jpg?v=1663175595"
              />
            </Link>
            <Text fontWeight="400">NEST NEW YORK</Text>
            <Link href="#" _hover={{ textDecoration: "none" }}>
              <Text color="#647ea1" my="10px">
                Indian Jasmine Perfume
              </Text>
            </Link>
            <Text my="10px" color="#647ea1">
              Oil From $35
            </Text>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
};
