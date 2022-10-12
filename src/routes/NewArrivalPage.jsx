import React from "react";
import { Box, Flex } from "@chakra-ui/react";
// import FilterNew from "./FilterNew";
// import NewCategory from "./NewCategory";
import TopTestMonial from "../components/productComponents/TopTestMonial";
import FilterProducts from "../components/productComponents/FilterProducts";
import SortProducts from "../components/productComponents/SortProducts";
const NewArrivalPage = () => {
  return (
    <div>
      <Box>
        <TopTestMonial />
      </Box>
      <Flex width="1400px" margin="auto" gap="50px">
        <Box padding="50px 0px" width="300px">
          <FilterProducts />
        </Box>
        <Box width="1100px">
          <SortProducts />
        </Box>
      </Flex>
    </div>
  );
};

export default NewArrivalPage;
