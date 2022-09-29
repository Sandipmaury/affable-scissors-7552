import {
  Text,
  Checkbox,
  Image,
  Button,
  Stack,
  Flex,
  Center,
  Square,
  Box,
  TagLabel,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
// import { CartData } from "../components/CartData";
import axios from "axios";
import styles from "../css/CartPage.module.css";
import { useEffect } from "react";
import { Quantity } from "../components/Quantity";
import { CartTotal } from "../components/CartTotal";
import { Remove } from "../components/Remove";
import { Subtotal } from "../components/Subtotal";
import { Link } from "react-router-dom";
const CartPage = () => {
  const [state, setState] = useState(0);
  const [data, setData] = useState([]);
  console.log(state);

  const getData = () => {
    return axios.get("http://localhost:8080/cart").then((r) => {
      // console.log(r.data);
      setData(r.data);
    });
  };
  useEffect(() => {
    getData();
  }, [state]);
  console.log(data);
  return (
    <div
      className={styles.cart_main_container}
      style={{ marginLeft: "10%", marginRight: "10%", marginTop: "80px" }}
    >
      <div>
        <Text
          fontSize="28px"
          fontWeight="700"
          letterSpacing=".2em"
          color="#12284c"
        >
          YOUR BAG
        </Text>
      </div>
      <div>
        <div className={styles.cart_sub_container}>
          <div>
            <Text
              color="#12284c"
              fontSize="20px"
              letterSpacing="1px"
              lineHeight="26px"
            >
              Your Cart (3 items)
            </Text>
            <Checkbox
              borderColor="#5e769b"
              borderRadius="3px"
              fontSize="14px"
              marginTop="20px"
            >
              <Text marginLeft="15px" color="#12284c">
                {" "}
                IS THIS ORDER A GIFT?
              </Text>
            </Checkbox>
            <Text fontSize="sm" margin="10px 0 10px 41px" color="#12284c">
              The price of your order will be hidden on the gift receipt.
            </Text>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              {" "}
              <Text
                color="#12284c"
                fontSize="20px"
                letterSpacing="1px"
                lineHeight="26px"
                marginTop="50px"
              >
                Ready to Ship
              </Text>
            </div>
            <div style={{ display: "flex" }}>
              <Text
                color="#12284c"
                fontSize="20px"
                letterSpacing="1px"
                lineHeight="26px"
                marginTop="50px"
                marginRight="150px"
              >
                Price
              </Text>
              <Text
                color="#12284c"
                fontSize="20px"
                letterSpacing="1px"
                lineHeight="26px"
                marginTop="50px"
                marginRight="150px"
              >
                Quantity
              </Text>
              <Text
                color="#12284c"
                fontSize="20px"
                letterSpacing="1px"
                lineHeight="26px"
              >
                Total
              </Text>
            </div>
          </div>

          {/*................... Map............................ */}
          <div>
            {data?.map((item) => (
              <div>
                <hr style={{ margin: "10px 0 10px 0" }} />
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      display: "flex",

                      width: "60%",

                      alignItems: "center",
                    }}
                  >
                    <Image
                      width="25%"
                      src={item["ProductCard__Image src"]}
                      alt=""
                    />
                    <Text
                      color="#12284c"
                      fontSize="20px"
                      letterSpacing="1px"
                      lineHeight="26px"
                      marginRight="150px"
                    >
                      {item.ProductCard__Title}
                    </Text>
                  </div>
                  <div
                    style={{
                      display: "flex",

                      alignItems: "center",
                    }}
                  >
                    <Text
                      color="#12284c"
                      fontSize="20px"
                      letterSpacing="1px"
                      lineHeight="26px"
                      marginRight="150px"
                    >
                      {item.ProductCard__Price}
                    </Text>
                    <Stack>
                      <Text
                        color="#12284c"
                        fontSize="20px"
                        letterSpacing="1px"
                        lineHeight="26px"
                        marginRight="150px"
                      >
                        <Quantity product={{ ...item }} prod={setState} />
                      </Text>

                      <Text
                        paddingLeft="20px"
                        _hover={{
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        <Remove prop={item.id} get={getData} />
                      </Text>
                    </Stack>
                    <Text
                      color="#12284c"
                      fontSize="20px"
                      letterSpacing="1px"
                      lineHeight="26px"
                    >
                      <CartTotal product={{ ...item }} />
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr></hr>
          {/* .....................map end.................. */}

          {/* .....................Additional offering Start.............. */}
          <div style={{ marginTop: "10px" }}>
            <Text marginLeft="15px" color="#12284c">
              {" "}
              Additional Offerings
            </Text>
            <Text fontSize="sm" margin="10px 0 10px 15px" color="#12284c">
              Based on the items in your bag, you've qualified for the following
              offers.
            </Text>
            <hr></hr>
            <Box display="flex">
              <Box display="flex" margin="15px">
                <Image
                  width="100px"
                  src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/variant_images-title-surprisemysterysample-711012589789-1_small.jpg?v=1637687752"
                ></Image>

                <Text fontSize="sm" margin="10px 0 10px 15px" color="#12284c">
                  MYSTERY SAMPLE
                  <br></br>
                  #1
                </Text>
              </Box>
              <Box display="flex" margin="15px">
                <Image
                  width="100px"
                  src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/variant_images-title-surprisemysterysample-711012589789-1_small.jpg?v=1637687752"
                ></Image>

                <Text fontSize="sm" margin="10px 0 10px 15px" color="#12284c">
                  MYSTERY SAMPLE
                  <br></br>
                  #2
                </Text>
              </Box>
              <Box display="flex" margin="15px">
                <Image
                  width="100px"
                  src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/variant_images-title-surprisemysterysample-711012589789-1_small.jpg?v=1637687752"
                ></Image>

                <Text fontSize="sm" margin="10px 0 10px 15px" color="#12284c">
                  MYSTERY SAMPLE
                  <br></br>
                  #3
                </Text>
              </Box>
              <Box display="flex" margin="15px">
                <Image
                  width="100px"
                  src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/variant_images-title-surprisemysterysample-711012589789-1_small.jpg?v=1637687752"
                ></Image>

                <Text fontSize="sm" margin="10px 0 10px 15px" color="#12284c">
                  MYSTERY SAMPLE
                  <br></br>
                  #4
                </Text>
              </Box>
            </Box>
          </div>
          <hr></hr>
          {/* .....................Additional offering End.............. */}

          {/* ......................Subtotatal Start................ */}
          <Stack float="right" paddingRight="0px" marginTop="20px">
            <Text
              color="#12284c"
              fontSize="20px"
              letterSpacing="1px"
              lineHeight="26px"
              paddingLeft="350px"
            >
              Subtotal $
              <Subtotal product={[...data]} />
            </Text>
            <Text fontSize="sm" margin="10px 0 10px 15px" color="#12284c">
              Shipping, Taxes, Beauty Cards, and additional discounts applied at
              checkout
            </Text>
            <HStack paddingLeft="100px">
              <Link to="/payment">
                <Button
                  marginTop="30px"
                  colorScheme="facebook"
                  padding="15px"
                  fontSize="14px"
                  width="400px"
                >
                  CHECKOUT
                </Button>
              </Link>
            </HStack>
          </Stack>
          {/* ......................Subtotatal End................ */}
        </div>
      </div>
    </div>
  );
};
export { CartPage };