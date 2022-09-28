import { Stack, Text, spacing, Container, Checkbox } from "@chakra-ui/react";
import styles from "../css/CartPage.module.css";
const CartPage = () => {
  return (
    <div className={styles.cart_main_container}>
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
                marginTop="50px"
              >
                Total
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { CartPage };
