import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
const Quantity = ({ item, getData }) => {
  const handleClick = (data, operation) => {
    if (operation === "inc") data.qty += 1;
    else data.qty -= 1;
    axios.patch(`http://localhost:8080/cart/${data.id}`, data).then(() => {
      getData();
    });
  };
  return (
    <ButtonGroup size="sm" isAttached variant="outline">
      <Button disabled={item.qty == 1} onClick={() => handleClick(item, "dec")}>
        -
      </Button>
      <Button>{item.qty}</Button>
      <Button onClick={() => handleClick(item, "inc")}>+</Button>
    </ButtonGroup>
  );
};
export { Quantity };
