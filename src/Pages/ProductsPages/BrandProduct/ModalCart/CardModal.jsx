import {
  Box,
  Text,
  Image,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Heading,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "../Brandproduct.module.css";
import ReactStarRating from "react-star-ratings-component";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { RiDislikeLine } from "react-icons/ri";
import { BsFillBagPlusFill } from "react-icons/bs";
import axios from "axios";
const CardModal = ({ props }) => {
  const [data, setData] = useState();
  // const CartData = JSON.parse(localStorage.getItem('BlueMercurycart')) || [];
  // localStorage.setItem('BlueMercurycart', JSON.stringify(data));

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("BlueMercurycart")) || []);
  }, []);
  const { onOpen, isOpen, onClose } = useDisclosure();
  console.log(props);

  const handleAddtoCart = (item) => {
    alert("Product Add to your cart");
    let tempObj = {
      ...item,
      quantity: 1,
    };
    setData([...data, tempObj]);
    localStorage.setItem("BlueMercurycart", JSON.stringify(data));
    axios.post("http://localhost:8080/cart", tempObj);
  };
  return (
    <>
      <button
        onClick={() => {
          return onOpen();
        }}
        className={styles.productViewButton + " " + "productViewButton"}
      >
        Quick View
      </button>
      <Modal onClose={onClose} size={"3xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Box width="1300px">
                <Image width="400px" src={props.Image} />
              </Box>
              <Box>
                <Heading as="h4" size="md">
                  {props.ProductCard__Title}
                </Heading>
                <Text>{props.ProductCard__Brand}</Text>
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
                <Text>BEST SELLER CONSCIOUS BEAUTY</Text>
                <Text padding="10px 3px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur rerum placeat modi molestiae numquam tempore
                  doloremque doloribus aliquam suscipit voluptates.
                </Text>
                <Box>
                  <Menu>
                    <MenuButton
                      padding="10px 0px"
                      width="100%"
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      Actions
                    </MenuButton>
                    <MenuList>
                      <MenuItem width="100%"></MenuItem>
                      <MenuItem>small</MenuItem>
                      <MenuItem>Meidium</MenuItem>
                      <MenuItem>Large</MenuItem>
                      <MenuItem>Extra Large</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <Flex
                  padding="10px 30px"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Button border="0.5px solid black">-</Button>
                    <Button border="0.5px solid black">1</Button>
                    <Button border="0.5px solid black">+</Button>
                  </Box>
                  <Box>
                    <Flex gap="12px">
                      {" "}
                      <RiDislikeLine /> WishList
                    </Flex>
                  </Box>
                </Flex>
                <Button
                  onClick={() => handleAddtoCart(props)}
                  margin="5px 0px"
                  bgColor="#12284C"
                  color="white"
                  width="100%"
                  _hover={{ backgroundColor: "#12281C" }}
                >
                  <BsFillBagPlusFill />
                  &#xFEFF;&#xFEFF; Add To Bag
                </Button>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardModal;
