import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  SimpleGrid,
  Spacer,
  StylesProvider,
  Switch,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/AppReducer/Actions";
import { RiDislikeLine, RiStarSFill } from "react-icons/ri";
import ReactStarRating from "react-star-ratings-component";
import styles from "./newproduct.module.css";

const NewCategory = () => {
  const data = useSelector((state) => state.AppReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  console.log("datahere", data);

 
 
  return (
    <div>
      <Box>
        <Flex>
          <Heading
            fontSize="28px"
            fontWeight="400"
            lineHeight="30px"
            color="#12284C"
          >
            AUGUSTINUS BADER
          </Heading>
          <Spacer />
          <Box>
            <Flex>
              <Box>
                <Text
                  fontFamily="Montserrat Medium, sans-serif"
                  fontSize="14px"
                  color="rgb(18, 40, 76)"
                  fontWeight="400"
                  padding="8px 10px"
                >
                  Sort By
                </Text>
              </Box>
              <Box>
                <Menu>
                  <MenuButton
                    bgColor="none"
                    border="1px solid black"
                    padding="13px 60px"
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
                    Featureda
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Featured</MenuItem>
                    <MenuItem>New Arrivals</MenuItem>
                    <MenuItem>Best Sellers</MenuItem>
                    <MenuItem>Price Low to High</MenuItem>
                    <MenuItem>Price High to Low</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Divider margin="20px 0px" borderColor="red.1000" />
      </Box>
      <Flex>
        <Box padding="0px 5px" color="#12284C">
          0 FILTERS APPLIED
        </Box>
        <Spacer />
        <Box color="#12284C">
          Show out of stock items
          <Switch margin="10px" id="email-alerts" />
        </Box>
      </Flex>

      <Box>
        <SimpleGrid columns={[1, 2, 3, 4]}>
          {data.map((item) => {
            return (
              <Box
               className="productCard"
                margin="5px"
                key={item.id}
                textAlign="center"
                border="2px solid red"
              >
                <Heading
                  color="#607667"
                  margin="2px"
                  textAlign="left"
                  as="h5"
                  size="sm"
                >
                  {item.ProductCard__Title}
                </Heading>
                <Flex>
                  <Box className={styles.imageContainer}>
                    <img
                      className={styles.productImage}
                      src={item.Image}
                      alt=""
                    />
                    <button className={styles.productViewButton}>
                      Quick View
                    </button>
                  </Box>
                  <Box size="4rem">
                    {" "}
                    <RiDislikeLine />
                  </Box>
                </Flex>
                 <Box className={styles.ProductTextContainer}>
                 <Text color="#2f5899">{item.ProductCard__Brand}</Text> <br></br>
                {item.ProductCard__Title}
                <br></br>
                {item.ProductCard__Price}
                <ReactStarRating
                  padding="0px 10px"
                  numberOfStar={5}
                  numberOfSelectedStar={3.6}
                  colorFilledStar="#5E769B"
                  colorEmptyStar="gray"
                  border="1px solid black"
                  starSize="20px"
                  spaceBetweenStar="2px"
                  disableOnSelect={false}
                  onSelectStar={(val) => {
                    console.log(val);
                  }}
                />
                 </Box>
                
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default NewCategory;
