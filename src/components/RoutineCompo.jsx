import {
  Box,
  Container,
  Heading,
  Hide,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const RoutineCompo = ({ img1, img2 }) => {
  return (
    <Stack maxW="full" margin="auto">
      <SimpleGrid columns={[1, null, 2]} spacing="10px" padding="10px">
        {/*............... box1 ................*/}
        <Box position="relative">
          <Image src={img1} />
          <Container margin="auto" maxW="100%" position="absolute" top="10px">
            {/* <Text>THE</Text> */}
            <Heading textAlign="center" as="h6" size="lg" fontWeight="light">
              THE
            </Heading>
            <Heading textAlign="center" as="h6" size="lg" fontWeight="semibold">
              "START THE DAY WITH BRIGHT"
            </Heading>
            <Heading textAlign="center" as="h6" size="lg" fontWeight="light">
              ROUTINE
            </Heading>
          </Container>
          <Container margin="auto" maxW="95%" position="absolute" bottom="30px">
            <Hide below="500px">
              <Text textAlign="center">
                When you’re finding it hard to look and feel fresh-faced
                (Mondays, anyone?), let this M-61 regimen of best sellers be
                your skin-brightening savior.
              </Text>
            </Hide>
            <Heading
              as="h4"
              size="sm"
              textAlign="center"
              fontWeight="semibold"
              textDecoration="underline"
            >
              SHOP THE ROUTINE
            </Heading>
          </Container>
        </Box>
        {/*..................... box2 .............*/}
        <Box position="relative">
          <Image src={img2} />
          <Container margin="auto" maxW="100%" position="absolute" top="10px">
            {/* <Text>THE</Text> */}
            <Heading textAlign="center" as="h6" size="lg" fontWeight="light">
              THE
            </Heading>
            <Heading textAlign="center" as="h6" size="lg" fontWeight="semibold">
              "ROMANTIC RENDEVOZS"
            </Heading>
            <Heading textAlign="center" as="h6" size="lg" fontWeight="light">
              ROUTINE
            </Heading>
          </Container>
          <Container margin="auto" maxW="95%" position="absolute" bottom="30px">
            <Hide below="500px">
              <Text textAlign="center">
                You swiped right—and now it’s time for date night. Ready to
                bring your A game? Along with your witty repartee, this
                selection of sultry beauty faves will have them swooning.
              </Text>
            </Hide>
            <Heading
              as="h4"
              size="sm"
              textAlign="center"
              fontWeight="semibold"
              textDecoration="underline"
            >
              SHOP THE ROUTINE
            </Heading>
          </Container>
        </Box>
      </SimpleGrid>
    </Stack>
  );
};
export { RoutineCompo };
