import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetch() {
      const res = await axios.get("http://localhost:5000/products/" + id);
      setProduct(res.data.data);
    }
    fetch();
  }, []);

  return (
    <div>
      {id}
      {product.name} = {product.price}
    </div>
  );
};

export default Product;
