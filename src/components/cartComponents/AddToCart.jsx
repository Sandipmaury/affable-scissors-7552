import { Toast } from "@chakra-ui/react";
import axios from "axios";

export const AddToCart = ({ data }) => {
  console.log(data);
  return;
  //   if (!data.quantity) data.quantity = 1;
  //   else data.quantity++;
  axios.patch(`http://localhost:8080/cart/${data.id}`, data).then(() => {
    Toast({
      title: "Product add to cart!",
      status: "success",
      isClosable: true,
    });
  });
};
