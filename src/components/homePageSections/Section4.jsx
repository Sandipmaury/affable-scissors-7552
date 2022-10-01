import React from "react";
import {
  Box,
  Flex,
  Grid,
  Hide,
  Icon,
  Image,
  Link,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

export const Section4 = () => {
  return (
    <Stack
      w="100%"
      py="4rem"
      px={["0px", "0px", "20px", "20px"]}
      alignItems="center"
      justifyContent="center"
      color="#647ea1"
      bg="#f0faf3"
    >
      <Flex
        color="#1b3053"
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap="10px"
        textAlign="center"
        maxW="840px"
        w="100%"
      >
        <Text fontSize="30px" fontWeight="400">
          NEW! FROM NEST NEW YORK
        </Text>
        <Text color="#647ea1" w="100%">
          Immerse yourself in the lush jasmine fields of India with this
          nourishing perfume oil featuring an intense Jasmine absolute
          surrounded by bright red berries, sparkling bergamot, and spicy pink
          pepper.
        </Text>
        <Grid
          gap="2rem"
          mt="20px"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
        >
          <Box>
            <Image
              alt="sampel-contant"
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Nest_Indian_Jasmine_Shop_the_Collection_1200x1200_253904f9-535b-40f7-a1e2-e13a030f7a03_400x.progressive.jpg?v=1664387674"
            />
          </Box>
          <Hide below="1024px">
            <Flex bg="white" alignItems="center" justifyContent="center">
              <Box>
                <Link href="#">
                  <Image
                    alt="sampel-contant"
                    src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-30ml-840732118327-1_235x235_crop_center.jpg?v=1663175595"
                  />
                </Link>
                <Text mb="1rem">NEST NEW YORK</Text>
                <Link href="#" _hover={{ textDecoration: "none" }}>
                  <Text color="#647ea1" fontSize="14px">
                    Indian Jasmine Perfume
                  </Text>
                </Link>
                <Text my="10px" color="#647ea1" fontSize="14px">
                  Oil From $35
                </Text>
                <Link href="#" _hover={{ textDecoration: "none" }}>
                  <Text color="#647ea1" fontSize="14px">
                    <Icon as={BsStarFill} />
                    <Icon as={BsStarFill} />
                    <Icon as={BsStarFill} />
                    <Icon as={BsStarFill} />
                    <Icon as={BsStarHalf} />
                    (64)
                  </Text>
                </Link>
              </Box>
            </Flex>
          </Hide>
          <Show below="1024px">
            <Link _hover={{ textDecoration: "none" }} href="#">
              <Text
                fontWeight="600"
                pb="3px"
                margin="auto"
                borderBottom="2px solid #1b3053"
                w="135px"
                marginTop="10px"
                textAlign="center"
                fontSize="14px"
              >
                VIEW PRODUCTS
              </Text>
            </Link>
          </Show>
        </Grid>
      </Flex>
    </Stack>
  );
};
