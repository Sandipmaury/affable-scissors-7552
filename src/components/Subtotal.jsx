const Subtotal = ({ product }) => {
  // console.log(product);

  let sum = 0;

  product.forEach((item) => {
    let total = item.ProductCard__Price.split("");
    total.shift();

    sum += Number(total.join("") * (item.quantity || product.itemQuantity));
  });

  return sum;
};
export { Subtotal };
