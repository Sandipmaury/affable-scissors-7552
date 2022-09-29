const Subtotal = ({ product }) => {
  console.log(product);

  let sum = 0;

  let final = product.forEach((item) => {
    let total = item.ProductCard__Price.split("");
    total.shift();

    sum += Number(total.join("") * item.quantity);
  });
  console.log(sum);

  return sum;
};
export { Subtotal };
