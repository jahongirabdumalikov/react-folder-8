import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiClient } from '../../API/axios';

const ProductDetails = () => {


  const id = useParams().id;
  console.log("id", id);



  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchProductById(id) {
    try {
      setloading(true);
      const res = await apiClient.get("products/" + id);

      console.log(res.data);
      setProduct(res.data);
      setloading(false);
    }
    catch (error) {
      console.log(error);
      setError(error?.message || "something went wrong");
      setloading(false);
    }
  }

  useEffect(() => {

    fetchProductById(id);
  }, [id]);




  return (
    <div>
      <img src={product.image} alt="" />
      <h2>{product.name}</h2>
      <h2>{product.price}</h2>

    </div>
  );
}

export default ProductDetails;
