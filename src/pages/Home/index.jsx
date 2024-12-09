import React, { useEffect, useState } from "react";
import { apiClient } from "../../API/axios";
import Card from "../../components/Card";

import "aos/dist/aos.css";
import Aos from "aos";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchProducts = async (query = "") => {
    try {
      setLoading(true);
      const res = await apiClient.get(`products?search=${query}`);
      console.log(res.data.data);
      setProducts(res.data.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err?.message || "Something went wrong");
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query); 
    fetchProducts(query); 
  };

  useEffect(() => {
    Aos.init({ easing: "ease" });
    fetchProducts(); 
  }, []);

  return (
    <section className="home">
      <div className="flex items-center border rounded-lg overflow-hidden w-64 mx-auto my-4">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search"
          className="px-4 py-2 w-full focus:outline-none"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white"
          onClick={() => fetchProducts(search)} 
        >
          Search
        </button>
      </div>

      <h1 className="text-center mt-[50px] font-bold">Home</h1>

      <div className="container flex flex-wrap gap-6 justify-center p-6">
        {error ? (
          <h1 className="text-red-600 bg-black">{error}</h1>
        ) : loading ? (
          <h1>Loading...</h1>
        ) : products.length > 0 ? (
          products.map((item) => <Card key={item.id} product={item} />)
        ) : (
          <h1 className="text-gray-600">No products found</h1>
        )}
      </div>
    </section>
  );
};

export default Home;
