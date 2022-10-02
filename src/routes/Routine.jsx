import {
  Container,
  Image,
  Stack,
  Text,
  Heading,
  SimpleGrid,
  Box,
  Hide,
} from "@chakra-ui/react";
import { RoutineCompo } from "../components/RoutineCompo";

const Routine = () => {
  return (
    <Stack>
      {/*................... section 1 start .................*/}

      <Stack bg="rgb(249,245,236)">
        <Container maxW="full" margin="auto">
          <Stack>
            <Image
              margin="auto"
              maxW="40%"
              alignItem="center"
              marginTop="5rem"
              borderBottom="1px solid"
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-reboot-center-subheading_8d5762c2-e291-4224-a755-9274a53aa9ea.svg?v=1658196511"
            />
          </Stack>
          <Container margin="auto" maxW="45%">
            <Text
              textAlign="center"
              marginTop="2rem"
              fontSize="16px"
              letterSpacing="0.2px"
            >
              We all have our own ways of doing things. Which is great! But
              “getting into a groove” isn’t that far from “falling into a rut.”
              Could be it’s time for a rethink regarding the products you always
              reach for. As well as a chance to dream up totally new strategies
              for tackling whatever the day brings.
            </Text>
            <Hide below="500px">
              <Text
                textAlign="center"
                marginTop="2rem"
                fontSize="16px"
                letterSpacing="0.2px"
              >
                Let us help ensure you’re getting the most out of every single
                one of your uniquely you routines. We’ve compiled some of our
                favorite plans here, but you can also visit your local store and
                work with a Beauty Expert to craft your own personalized
                programs.
              </Text>
            </Hide>
          </Container>
          <Container margin="auto" maxW="45%" marginTop="5rem">
            {/* <Text>THE</Text> */}
            <Heading
              letterSpacing="0.2rem"
              textAlign="center"
              as="h4"
              size="xl"
              fontWeight="light"
            >
              THE
            </Heading>
            <Heading
              textAlign="center"
              as="h3"
              size="xl"
              letterSpacing="0.2rem"
            >
              "WEEKEND WIND-DOWN"
            </Heading>
            <Heading
              letterSpacing="0.2rem"
              textAlign="center"
              as="h4"
              size="xl"
              fontWeight="light"
            >
              ROUTINE
            </Heading>
          </Container>
        </Container>
        <Stack maxW="full">
          <Image
            width="130%"
            display="block"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-weekend-wind-down-hero-des_ba71338a-5e50-4fdd-92c1-376db38a8753.jpg?v=1662477018"
          ></Image>
          <Container maxW="full">
            <Container margin="auto" maxW="45%">
              <Text textAlign="center">
                After a long, stressful week, you deserve a break. Dim the
                lights and decompress with the feel-good products in this
                relaxing regimen.
              </Text>
              <Heading
                as="h4"
                size="sm"
                textAlign="center"
                fontWeight="semibold"
                textDecoration="underline"
                marginTop="2rem"
                marginBottom="6rem"
              >
                SHOP THE ROUTINE
              </Heading>
            </Container>
          </Container>
        </Stack>
      </Stack>

      {/*................... section 1 end .................*/}

      <RoutineCompo
        img1="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-start-the-day-off-bright-content-block-des_705x705.jpg?v=1662438993"
        img2="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-romantic-rendezvous-content-block-des_bb3fda4b-1f43-414c-888d-f39655b59a6d_705x705.jpg?v=1662438857"
      />
      {/*.......................... section 2 End ................*/}
      {/*............ SECTION 3 START ................*/}
      <Stack bg="rgb(249,245,236)">
        <Container maxW="full" margin="auto">
          <Container margin="auto" maxW="45%" marginTop="5rem">
            {/* <Text>THE</Text> */}
            <Heading
              letterSpacing="0.2rem"
              textAlign="center"
              as="h4"
              size="xl"
              fontWeight="light"
            >
              THE
            </Heading>
            <Heading
              textAlign="center"
              as="h3"
              size="xl"
              letterSpacing="0.2rem"
            >
              "BFFS NIGHT OUT"
            </Heading>
            <Heading
              letterSpacing="0.2rem"
              textAlign="center"
              as="h4"
              size="xl"
              fontWeight="light"
            >
              ROUTINE
            </Heading>
          </Container>
        </Container>
        <Stack maxW="full">
          <Image
            width="130%"
            display="block"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-bffs-night-out-hero-des.jpg?v=1662476105"
          ></Image>
          <Container maxW="full">
            <Container margin="auto" maxW="45%">
              <Text textAlign="center">
                After a long, stressful week, you deserve a break. Dim the
                lights and decompress with the feel-good products in this
                relaxing regimen.
              </Text>
              <Heading
                as="h4"
                size="sm"
                textAlign="center"
                fontWeight="semibold"
                textDecoration="underline"
                marginTop="2rem"
                marginBottom="6rem"
              >
                SHOP THE ROUTINE
              </Heading>
            </Container>
          </Container>
        </Stack>
      </Stack>
      {/*............ SECTION 3 End ................*/}
      {/*............ SECTION 4 START ................*/}
      <RoutineCompo
        img1="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-extend-your-summer-glow-content-block-des_15bf8fdc-044f-4a53-95d5-100cd12b6df1_705x705.jpg?v=1662435057"
        img2="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-get-rid-of-summer-sun-damage-content-block-des_705x705.jpg?v=1662435084"
      />
      <RoutineCompo
        img1="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-hydration-head-to-toe-content-block_7345ab9c-710e-4b63-a4fb-f70428f2e4fb_705x705.jpg?v=1658852470"
        img2="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-back-to-school-content-block_334560c4-7835-4af8-b1ca-a77b35b62973_705x705.jpg?v=1658852480"
      />
      {/*............ SECTION 4 END ................*/}
    </Stack>
  );
};
export { Routine };
