import React from "react";
import "../css/EventPage.css";
import { Box, Heading, Text, Flex, Spacer, Image } from "@chakra-ui/react";

const EventPage = () => {
  return (
    <Box display="block">
      <Box className="eventpage_firstbox_heading">
        <Text
          fontSize="5xl"
          fontFamily="Playfair Display, serif"
          textAlign="center"
          color="#12284c"
        >
          BLUEMERCURY EXCLUSIVE EVENTS
        </Text>
      </Box>
      <Box className="eventpage_secondbox_heading">
        <Text
          fontSize="4xl"
          fontFamily="Playfair Display, serif"
          textAlign="center"
          color="#12284c"
        >
          JOIN US IN STORE!
        </Text>
      </Box>

      <Box marginLeft="8rem">
        <Flex
          alignItems="center"
          marginTop="7rem"
          flex="5rem"
          width="90%"
          justifyContent="space-between"
        >
          <Box width="48%">
            <Image
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/store_events_navigation_1000x.jpg?v=1661983491"
              alt=""
            />
          </Box>
          <Spacer />

          <Box width="48%">
            <Text
              fontSize="3xl"
              fontFamily="Playfair Display, serif"
              color="#12284c"
            >
              Exclusive Events with Our Brands
            </Text>
            <Text
              fontSize="2xl"
              fontFamily="Playfair Display, serif"
              color="#12284c"
            >
              Join us for exclusive in-store events with your favorite beauty
              brands. Select your local store to find out what's happening in
              your neighborhood.
            </Text>
            <a
              href=""
              className="eventfirstAnchor"
              style={{ color: "#12284c", borderBottom: "2px solid" }}
            >
              FIND EVENTS NEAR YOU!
            </a>
          </Box>
        </Flex>
      </Box>

      <Box marginLeft="8rem">
        <Flex
          alignItems="center"
          marginTop="7rem"
          flex="5rem"
          width="90%"
          justifyContent="space-between"
        >
          <Box width="48%">
            <Image
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury_events_nav_2_1000x.jpg?v=1654010487"
              alt=""
            />
          </Box>
          <Spacer />

          <Box width="48%">
            <Text
              fontSize="3xl"
              fontFamily="Playfair Display, serif"
              color="#12284c"
            >
              Complimentary Consultations!
            </Text>
            <Text
              fontSize="2xl"
              fontFamily="Playfair Display, serif"
              color="#12284c"
            >
              Our Beauty Experts can show you quick makeup application tricks,
              how to revamp your skincare regimen and beauty trends worth
              trying. Come in or call to learn more.
            </Text>
            <a
              href=""
              className="eventfirstAnchor"
              style={{ color: "#12284c", borderBottom: "2px solid" }}
            >
              FIND YOUR STORE!
            </a>
          </Box>
        </Flex>
      </Box>

      <Box paddingTop="4rem">
        <Text
          className="eventPage_virtual"
          fontFamily="Playfair Display Regular,serif"
          textAlign="center "
          color="#12284c"
          fontSize="3xl"
        >
          VIRTUAL EVENTS
        </Text>
      </Box>

      <Box marginLeft="8rem">
        <Flex
          alignItems="center"
          marginTop="7rem"
          flex="5rem"
          width="90%"
          justifyContent="space-between"
        >
          <Box width="48%">
            <Image
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/masterclass-bluemercury-navigation-feature_5e066328-d46a-4995-8d26-edc9f897cb16_1000x.jpg?v=1645819938"
              alt=""
            />
          </Box>
          <Spacer />

          <Box width="48%">
            <Text
              fontSize="1xl"
              fontFamily="Playfair Display, serif"
              color="#12284c"
            >
              BLUEMERCURY PRESENTS
            </Text>
            <Text
              fontSize="3xl"
              fontFamily="Playfair Display, serif"
              color="#12284c"
            >
              Masterclass
            </Text>
            <Text
              fontSize="2xl"
              fontFamily="Playfair Display, serif"
              color="#12284c"
            >
              Join us for an exclusive online series of beauty Masterclasses.
              Listen, learn and engage with experts from our favorite brands as
              they give intimate insights into their brand, products, and
              techniques.
            </Text>
            <a
              href=""
              className="eventfirstAnchor"
              style={{ color: "#12284c", borderBottom: "2px solid" }}
            >
              RSVP & JOIN LIVE!
            </a>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default EventPage;
