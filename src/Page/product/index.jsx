import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../Components/Loading";
import { toast } from "react-toastify";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import { NameContext } from "../../Components/context";
import { IoStarSharp } from "react-icons/io5";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { setCart } = useContext(NameContext);

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5000/products/" + id);
        setProduct(res.data.data);
      } catch (err) {
        setError(err.message);
        toast.error(err.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [id]);

  function handleAddCard() {
    setCart((prev) => {
      const existingProduct = prev.find(
        (item) => item.product.id === product.id
      );
      if (existingProduct) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        return [
          ...prev,
          {
            count: 1,
            product,
          },
        ];
      }
    });
    toast.success(`${product.name} savatga qo'shildi!`);
  }

  return (
    <>
      <Navbar />
      <div className="w-[1400px] m-auto pt-[200px]">
        {loading && (
          <h1>
            <Loading />
          </h1>
        )}
        {error && (
          <h2 className="bg-red-600 h-[50px] flex items-center justify-evenly text-white">
            {error}
          </h2>
        )}
        <div className="flex gap-[50px]">
          <div>
            <img src={product.image} alt={product.name} />
          </div>
          <div className="">
            <h1 className="w-[600px] text-[25px] h-[100px] font-[700] pb-[20px] hover:text-blue-500">
              {product.name}
            </h1>
            <div className="flex h-[40px] items-center">
              {Array(Math.floor(product.rating || 0))
                .fill(0)
                .map((_, index) => (
                  <IoStarSharp key={index} className="text-[#fe7300]" />
                ))}
              {product.rating % 1 > 0 && (
                <IoStarSharp className="text-[#fe7300] opacity-50" />
              )}
            </div>
            <p className="text-[30px] font-[700] pb-[10px] text-amber-600">
              {product.price?.toLocaleString()} so'm
            </p>
            <p className="text-2xl font-bold">
              Brend: ............. <span className="text-blue-600">Xiaomi</span>
            </p>
            <p className="text-2xl font-bold">
              Model: ............. Note 14 Pro
            </p>
            <p className="text-2xl font-bold">
              Holati: ..............{" "}
              <span className="text-green-400">Sotuvda bor</span>
            </p>
            <button
              onClick={() => handleAddCard()}
              className="bg-[#006BFF] text-white  py-[10px] px-[15px] rounded-[15px] my-[20px]    cursor-pointer"
            >
              Savatga qo'shish
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
