const Subtotal = ({ product }) => {
  let sum = 0;
  product.forEach((item) => {
    sum += +item.ProductCard__Price.slice(1) * item.qty;
  });

  return sum;
};
export { Subtotal };
