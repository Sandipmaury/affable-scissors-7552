import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Input } from "@chakra-ui/react";
import { Subtotal } from "./Subtotal";
const Checkout = ({ radio }) => {
  const [data, setData] = useState([]);
  const getData = () => {
    return axios.get("http://localhost:8080/cart").then((r) => {
      setData(r.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ backgroundColor: "#FAFAFA", padding: "40px" }}>
      <div>
        {data?.map((item) => (
          <div
            style={{
              display: "flex",
              marginBottom: "30px",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <img style={{ width: "80px" }} src={item.Image} alt="product" />
              <h4 style={{ fontWeight: "bold" }}>{item.ProductCard__Brand}</h4>
              <p>-</p>
              <p style={{ marginRight: "200px" }}>{item.ProductCard__Title}</p>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <p>$</p>
              <div>{+item.ProductCard__Price.slice(1) * item.qty}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Input width="300px" BorderColor="black" placeholder="GIFT CARD CODE" />
        <Button colorScheme="facebook" width="200px">
          APPLY
        </Button>
      </div>
      <hr style={{ margin: "20px" }}></hr>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Subtotal</h3>
          $
          <Subtotal product={[...data]} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Shipping Charges</h3>
          <h3>Free</h3>
        </div>
        <hr style={{ margin: "20px" }}></hr>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ fontWeight: "bolder" }}>Total</h1>
          <div>
            $<Subtotal product={[...data]} />
            {radio == 2 ? <div>+100</div> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
export { Checkout };
