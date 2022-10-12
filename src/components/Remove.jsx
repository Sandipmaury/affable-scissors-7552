import axios from "axios";
const Remove = ({ prop, get }) => {
  const handleDelet = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8080/cart/${id}`).then((r) => {
      get();
    });
  };
  return <div onClick={() => handleDelet(prop)}>Remove</div>;
};
export { Remove };
