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
  SimpleGrid,
  Spacer,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDislikeLine } from "react-icons/ri";
import ReactStarRating from "react-star-ratings-component";
import styles from "./Brandproduct.module.css";
import CardModal from "./CardModal";
import { useSearchParams } from "react-router-dom";
import { getData } from "../../redux/AppReducer/Actions";

const SortProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategory || []);
  const [sort, setSort] = useState("ASC");
  const { onOpen } = useDisclosure();
  const data = useSelector((state) => state.AppReducer.data);
  const dispatch = useDispatch();
  let params = {
    _sort: "ProductCard__Price",
    _order: sort,
  };

  useEffect(() => {
    if (category) {
      category && (params.category = category);
      setSearchParams(params);
      dispatch(getData(params)).then((res) => {
        const productCard = document.querySelectorAll(".productCard");
        productCard?.forEach((item) => {
          item.addEventListener("mouseenter", () => {
            let button = item.children[1].children[0].lastChild;
            button.style.bottom = "0";
            button.style.opacity = "1";
            button.style.backgroundcolor = "black";
          });
        });

        productCard?.forEach((item) => {
          item.addEventListener("mouseleave", () => {
            let button = item.children[1].children[0].lastChild;
            button.style.bottom = "-50px";
            button.style.opacity = "0";
          });
        });
      });
    }
  }, [sort]);

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
                    Featured
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Featured</MenuItem>
                    <MenuItem>New Arrivals</MenuItem>
                    <MenuItem>Best Sellers</MenuItem>
                    <MenuItem onClick={() => setSort("ASC")}>
                      Price Low to High
                    </MenuItem>
                    <MenuItem onClick={() => setSort("DESC")}>
                      Price High to Low
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Divider margin="10px 0px" borderColor="red.1000" />
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
        <SimpleGrid columns={[1, 1, 3, 4]}>
          {data.map((item) => {
            return (
              <Box
                className="productCard"
                margin="5px"
                key={item.id}
                textAlign="center"
                border="1px solid lightGray"
              >
                <Heading color="#607667" margin="2px" as="h5" size="sm">
                  {item.ProductCard__Title}
                </Heading>
                <Flex>
                  <Box className={styles.imageContainer}>
                    <img
                      className={styles.productImage}
                      src={item.Image}
                      alt=""
                    />
                    <CardModal props={item} />
                  </Box>
                  <Box size="4rem">
                    {" "}
                    <RiDislikeLine />
                  </Box>
                </Flex>
                <Box className={styles.ProductTextContainer}>
                  <Text color="#2f5899">{item.ProductCard__Brand}</Text>{" "}
                  <br></br>
                  {item.ProductCard__Title}
                  <br></br>
                  {item.ProductCard__Price}
                  <Flex justifyContent="center">
                    <ReactStarRating
                      padding="0px 10px"
                      numberOfStar={5}
                      numberOfSelectedStar={3.6}
                      colorFilledStar="#5E769B"
                      colorEmptyStar="gray"
                      starSize="20px"
                      spaceBetweenStar="2px"
                      disableOnSelect={false}
                    />
                  </Flex>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default SortProducts;
