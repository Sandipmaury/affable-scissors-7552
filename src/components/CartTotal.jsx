const CartTotal = ({ product }) => {
  let total = product.ProductCard__Price.split("");
  total.shift();

  return <div>{Number(total.join("")) * Number(product.quantity)}</div>;
};
export { CartTotal };
