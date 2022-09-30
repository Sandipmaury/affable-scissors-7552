import { Icon } from "@chakra-ui/icon";
import { Stack, Text, Flex, Link } from "@chakra-ui/layout";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const FooterLeftBox = () => {
  return (
    <Stack
      w={["100%", "100%", "100%", "350px"]}
      p="10px"
      bg={["#12284c", "#12284c", "#12284c", "white"]}
      color={["white", "white", "white", "#466788"]}
      gap="15px"
      fontSize="14px"
      fontWeight="300"
    >
      <Text fontSize="16px" fontWeight="400">
        Get Expert Beauty Insight & Offers
      </Text>
      <InputGroup
        borderBottom={[
          "1px solid white",
          "1px solid white",
          "1px solid white",
          "1px solid black",
        ]}
      >
        <Input
          variant="unstyled"
          outline="none"
          type="email"
          placeholder="EMAIL ADDRESS"
        />
        <InputRightElement
          alignItems="center"
          h="100%"
          _hover={{ cursor: "pointer" }}
          children={<AiOutlineArrowRight cursor="pointer" />}
        />
      </InputGroup>
      <Flex fontSize="13px" flexWrap="wrap">
        <Text>By continuing, you agree to Bluemercury's</Text>
        <Link href="#" textDecoration="underline">
          Privacy Practices
        </Link>
      </Flex>
      <Flex
        alignItems="center"
        gap="30px"
        color={["white", "white", "white", "#12284c"]}
      >
        <Link target="_blank" href="https://twitter.com/bluemercury">
          <Icon as={FaTwitter} boxSize="25px" />
        </Link>
        <Link target="_blank" href="https://www.pinterest.com/bluemercury/">
          <Icon as={FaPinterestP} boxSize="25px" />
        </Link>
        <Link target="_blank" href="https://www.facebook.com/bluemercury/">
          <Icon as={FaFacebookF} boxSize="25px" />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/bluemercury/">
          <Icon as={FaInstagram} boxSize="25px" />
        </Link>
        <Link
          target="_blank"
          href="https://www.youtube.com/channel/UCrgUXfV7IIFllEQMbzd9J3A"
        >
          <Icon as={FaYoutube} boxSize="25px" />
        </Link>
      </Flex>
      <Link
        target="_blank"
        href="https://bluemercury.com/pages/privacy-policy#privacyHowCollect"
      >
        <Text fontSize="11px">
          Copyright 2022 bluemercury. All Rights Reserved.
        </Text>
      </Link>
    </Stack>
  );
};
