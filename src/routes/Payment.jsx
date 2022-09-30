import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Checkout } from "../components/Checkout";
import { CustomerInfo } from "../components/Payment/CustomerInfo";
import { PaymentMethod } from "../components/Payment/PaymentMethod";
import { Shipping } from "../components/Payment/Shipping";

const Payment = () => {
  const [state, setState] = useState(0);
  const [info, setInfo] = useState("");
  const [info1, setInfo1] = useState("");
  const [radio, setRadio] = useState(1);
  const navigate = useNavigate();
  console.log(radio);
  const PageDisplay = () => {
    if (state === 0) {
      return <CustomerInfo information={setInfo} information1={setInfo1} />;
    }
    if (state === 1) {
      return <Shipping info={info} info1={info1} radio={setRadio} />;
    }
    if (state === 2) {
      return <PaymentMethod info={info} info1={info1} />;
    }
    if (state === 3) {
      navigate("/otp");
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>
        <div>{PageDisplay()}</div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "30px",
          }}
        >
          <p> </p>
          <Button
            onClick={() => setState((prev) => prev + 1)}
            colorScheme="facebook"
          >
            NEXT
          </Button>
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <Checkout radio={radio} />
      </div>
    </div>
  );
};
export { Payment };
