import { Box, Grid, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const Section3 = () => {
  return (
    <Stack
      direction={["column", "column", "row", "row"]}
      maxW="1350px"
      w="100%"
      py="4rem"
      px={["10px", "10px", "20px", "20px"]}
      alignItems="center"
      justifyContent="space-between"
      color="#1b3053"
    >
      <Grid
        gap="2rem"
        w="100%"
        textAlign={["center", "center", "start", "start"]}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
        ]}
      >
        <Box w="100%">
          <Link _hover={{ textDecoration: "none" }} href="#">
            <Box w="100%" mb="1rem">
              <Image
                w="100%"
                alt="samples-content"
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/LA_Holiday_SidebySide_1000x625_39833a0d-90bf-469b-891a-d999f340709b_640x.jpg?v=1664387328"
              />
              <Text mt="1rem" fontSize="30px" fontWeight="400">
                These sets are a steal!
              </Text>
              <Text>
                Stock up on lipsticks, mascara and more (for less!) with these
                limited-edition sets
              </Text>
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }} href="#">
            <Text
              fontWeight="600"
              pb="3px"
              borderBottom="2px solid #1b3053"
              w="145px"
              fontSize="14px"
              marginTop="10px"
              margin={["auto", "auto", "unset", "unset"]}
            >
              SHOP LUNE+ASTER
            </Text>
          </Link>
        </Box>
        <Box w="100%">
          <Link _hover={{ textDecoration: "none" }} href="#">
            <Box w="100%" mb="1rem">
              <Image
                w="100%"
                alt="samples-content"
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/eltamd_SidebySide_1000x625_0e0e002d-9432-494d-af5b-3eee1d07a210_640x.jpg?v=1664307480"
              />
              <Text fontSize="30px" mt="1rem" fontWeight="400">
                Sensitive Skin Protection
              </Text>
              <Text>
                Oil-free EltaMD UV Clear helps calm and protect sensitive skin
                types prone to discoloration and breakouts associated to acne
                and rosacea.
              </Text>
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }} href="#">
            <Text
              fontWeight="600"
              pb="3px"
              borderBottom="2px solid #1b3053"
              w="90px"
              marginTop="10px"
              fontSize="14px"
              margin={["auto", "auto", "unset", "unset"]}
            >
              SHOP NOW
            </Text>
          </Link>
        </Box>
      </Grid>
    </Stack>
  );
};
