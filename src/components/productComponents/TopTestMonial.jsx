import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
const TopTestMonial = () => {
  return (
    <Box padding="15px 0px" width="85%" margin="auto">
      <SimpleGrid columns={[1, 1, 2, 2]}>
        <Box marginLeft="70px" width="90%">
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Augustinus Bader</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Image
            margin="10px"
            width="330px"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/augustinus_bader-logo.png?v=1604007286"
            alt="Bader"
          />
          <Text
            fontFamily="Montserrat Light, sans-serif"
            color="#53637D"
            fontSize="15px"
            fontWeight="500"
            lineHeight="23.1px"
          >
            Developed by a world-leading expert in stem cell research, Professor
            Augustinus Bader has spent
            <br /> thirty years unlocking the body’s innate processes to
            self-heal. The result? Game-changing skincare <br />
            that uses a unique Trigger Factor Complex called TFC8® to optimize
            skin health, visibly reduce the
            <br />
            <br /> Learn more about founder Augustinus Bader in this exclusive
            Q+A! .
          </Text>
        </Box>
        <Box paddingBottom="60px" marginLeft="30px" width="75%">
          <Image
            width="100%"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Enhanced_Brand_Page_1_1800x900_4312ef80-b7d3-4213-b1ce-f0f78ff8e527.jpg?v=1640111048"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default TopTestMonial;
