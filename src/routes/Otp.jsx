import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(4321);
  const [data, setData] = useState([]);
  let idArray = [];
  useEffect(() => {
    axios.get("http://localhost:8080/cart").then((r) => {
      setData(r.data);
      // console.log(data);
    });
  }, []);
  for (let i = 0; i < data.length; i++) {
    idArray.push(data[i].id);
  }
  console.log(idArray);
  const handleClick = () => {
    // alert("Order Placed");

    idArray.forEach((item) => {
      axios.delete(`http://localhost:8080/cart/${item}`);
    });
    console.log(idArray);
    navigate("/");
    // navigate("/");
    // console.log(data);
    // let idArray = [];
    // for (let i = 0; i < data.length; i++) {
    //   idArray.push(data[i].id);
    // }
    // console.log(idArray);

    // idArray.forEach((item) => {
    //   axios.delete(`http://localhost:8080/cart/${item}`);
    // });
    // console.log(idArray);
    // // navigate("/");
  };

  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        marginTop: "200px",
        marginBottom: "200px",
        border: "2px solid",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <img
        style={{ margin: "auto", marginBottom: "20px" }}
        src="data:image/png;base64,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"
      />
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          placeholder="Enter otp"
          onChange={(e) => setOtp(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button
            disabled={otp != 1234}
            h="1.75rem"
            size="sm"
            onClick={() => handleClick()}
          >
            Submit
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
};

export { Otp };
