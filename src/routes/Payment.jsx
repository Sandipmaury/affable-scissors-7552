import { Container, Stack } from "@chakra-ui/react";
import { Subtotal } from "../components/Subtotal";

const Payment = () => {
  return (
    <Stack
      border="1px solid"
      height="500px"
      display="flex"
      flexDirection="row"
      padding="1px"
    >
      <Container
        border="1px solid"
        height="500px"
        width="49%"
        bg="black"
      ></Container>
      <Container
        border="1px solid"
        height="500px"
        width="49%"
        bg="red"
        marginTop="0"
      ></Container>
    </Stack>
  );
};
export { Payment };
