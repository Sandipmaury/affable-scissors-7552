import { Box, Grid, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const Section8 = () => {
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
      fontSize="14px"
    >
      <Grid
        gap="20px"
        w="100%"
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
        ]}
      >
        <Box w="100%">
          <Link _hover={{ textDecoration: "none" }} href="#">
            <Box w="100%">
              <Image
                w="100%"
                alt="samples-content"
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/samples-content_block_705x705.jpg?v=1614296349"
              />
              <Text marginTop="1rem" fontWeight="600" textAlign="center">
                FREE GIFTS WITH PURCHASE
              </Text>
              <Text textAlign="center">
                Stock up on all your favorite brands, then try something new on
                us
              </Text>
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }} href="#">
            <Text
              fontWeight="600"
              margin="auto"
              pb="3px"
              borderBottom="2px solid #1b3053"
              w="110px"
              marginTop="10px"
              textAlign="center"
            >
              BROWSE NOW
            </Text>
          </Link>
        </Box>
        <Box w="100%">
          <Link _hover={{ textDecoration: "none" }} href="#">
            <Box w="100%">
              <Image
                w="100%"
                alt="samples-content"
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/store_events_navigation_705x705.jpg?v=1661983491"
              />
              <Text marginTop="1rem" fontWeight="600" textAlign="center">
                EXCLUSIVE IN-STORE EVENTS
              </Text>
              <Text textAlign="center">
                And only Bluemercury has them: personalized consultations with
                your favorite beauty brands, gifts with purchase, product
                samples and more—all for free!
              </Text>
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }} href="#">
            <Text
              fontWeight="600"
              margin="auto"
              pb="3px"
              borderBottom="2px solid #1b3053"
              w="110px"
              marginTop="10px"
              textAlign="center"
            >
              LEARN MORE
            </Text>
          </Link>
        </Box>
        <Box w="100%">
          <Link _hover={{ textDecoration: "none" }} href="#">
            <Box w="100%">
              <Image
                w="100%"
                alt="samples-content"
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/spa_menu_photo_705x705.jpg?v=1628018315"
              />
              <Text marginTop="1rem" fontWeight="600" textAlign="center">
                BLUEMERCURY SPA
              </Text>
              <Text textAlign="center">
                Our luxurious spa services are customizable to your individual
                needs
              </Text>
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }} href="#">
            <Text
              fontWeight="600"
              margin="auto"
              pb="3px"
              borderBottom="2px solid #1b3053"
              w="150px"
              marginTop="10px"
            >
              BROWSE THE MENU
            </Text>
          </Link>
        </Box>
      </Grid>
    </Stack>
  );
};
