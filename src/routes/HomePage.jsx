import { Stack, Text } from "@chakra-ui/react";
import React from "react";

export const HomePage = () => {
  return (
    <Stack
      border="1px solid blue"
      h="1000px"
      direction="column"
      style={{ zIndex: 5 }}
    >
      <Text>HomePage</Text>
    </Stack>
  );
};
