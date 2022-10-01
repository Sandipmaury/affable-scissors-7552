import React from "react";
import { Box, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";

export const Section6 = () => {
  return (
    <Stack
      direction={["column", "column", "row", "row"]}
      maxW="1350px"
      w="100%"
      py="4rem"
      px={["0px", "0px", "20px", "20px"]}
      alignItems="center"
      justifyContent="space-between"
      color="#647ea1"
    >
      <Flex
        gap="2rem"
        w="100%"
        alignItems="center"
        justifyContent="start"
        flexDirection={["column", "column", "row", "row"]}
      >
        <Box h="100%" w="100%">
          <Image
            w={["100%", "100%", "500px", "500px"]}
            alt="samples-content"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Living_Proof_800x800_ee635427-39ae-432e-8f2f-5d78bcdd1688_1000x.jpg?v=1664306045"
          />
        </Box>
        <Flex
          h="100%"
          w="100%"
          color="#1b3053"
          direction="column"
          justifyContent="center"
          alignItems={["center", "center", "start", "start"]}
          gap="10px"
          textAlign={["center", "center", "start", "start"]}
        >
          <Text fontWeight="600">LIVING PROOF</Text>
          <Text fontSize="25px" fontWeight="600">
            Your healthy-hair architect.
          </Text>
          <Text maxW="500px" w="100%">
            Why repair when you can rebuild? This weekly treatment provides the
            blueprint for building 8x stronger*, smoother, shinier hair after
            just one use.
          </Text>
          <Link _hover={{ textDecoration: "none" }} href="#">
            <Text
              fontWeight="600"
              pb="3px"
              borderBottom="2px solid #1b3053"
              w="90px"
              marginTop="10px"
              textAlign="center"
              fontSize="14px"
            >
              SHOP NOW
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Stack>
  );
};
