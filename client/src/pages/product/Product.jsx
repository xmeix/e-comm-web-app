import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  return <div className="product">product {id}</div>;
};

export default Product;
