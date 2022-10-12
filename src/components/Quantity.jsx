import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
const Quantity = ({ product, prod }) => {
  const [state, setState] = useState(product.quantity || product.itemQuantity);

  const handleClickReduce = (id) => {
    setState((prev) => prev - 1);
    prod((prev) => prev + 1);
    let payload = {
      quantity: state - 1,
    };
    axios.patch(`http://localhost:8080/cart/${id}`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const handleClickAdd = (id) => {
    setState((prev) => prev + 1);
    prod((prev) => prev + 1);
    let payload = {
      quantity: state + 1,
    };
    axios.patch(`http://localhost:8080/cart/${id}`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <ButtonGroup size="sm" isAttached variant="outline">
      <Button
        disabled={state == 1}
        onClick={() => handleClickReduce(product.id)}
      >
        -
      </Button>
      <Button>{product.quantity}</Button>
      <Button onClick={() => handleClickAdd(product.id)}>+</Button>
    </ButtonGroup>
  );
};
export { Quantity };
