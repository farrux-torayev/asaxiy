import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Loading from "../Loading";
import MySwiperComponent from "../swiper";
import { NavLink } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
import { NameContext } from "../context";
import { toast } from "react-toastify";

const Card = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setCart } = useContext(NameContext);

  useEffect(() => {
    async function fetchPost() {
      try {
        setIsLoading(true);
        const res = await axios.get("http://localhost:5000/products");
        setPosts(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPost();
  }, []);

  function handleAddCard(item) {
    setCart((prev) => {
      const existingProduct = prev.find(
        (cartItem) => cartItem.product.id === item.id
      );

      if (existingProduct) {
        const updatedCart = prev.map((cartItem) =>
          cartItem.product.id === item.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        );

        toast.info(`"${item.name}" savatdagi miqdori oshirildi!`, {
          position: "top-right",
          autoClose: 1500,
        });

        return updatedCart;
      } else {
        const newCart = [
          ...prev,
          {
            count: 1,
            product: item,
          },
        ];

        toast.success(`"${item.name}" savatga qo‘shildi!`, {
          position: "top-right",
          autoClose: 1500,
        });

        return newCart;
      }
    });
  }

  return (
    <>
      <div className="card pt-[200px]">
        <MySwiperComponent />
        <div className="w-[1430px] m-auto grid grid-cols-5 gap-[30px] ">
          {isLoading ? (
            <Loading />
          ) : (
            posts.map((item) => (
              <div
                key={item.id}
                className="p-[20px] h-[575px] rounded-[25px] w-[260px] bg-white"
              >
                <img
                  className="rounded-t-[15px] h-[287.2px]"
                  src={item.image}
                  alt=""
                />
                <NavLink to={"/product/" + item.id}>
                  <h1 className="text-[15px] h-[50px] font-[700] pb-[20px] hover:text-blue-500">
                    {item.name}
                  </h1>
                  <div className="flex">
                    {Array(Math.floor(item.rating || 0))
                      .fill(0)
                      .map((_, index) => (
                        <IoStarSharp key={index} className="text-[#fe7300]" />
                      ))}
                    {item.rating % 1 > 0 && (
                      <IoStarSharp className="text-[#fe7300] opacity-50" />
                    )}
                  </div>

                  <p className="text-[20px] font-[700] pb-[10px] text-[#006BFF]">
                    {item.price}00 so'm
                  </p>
                  <p className="font-[500] pb-[50px]">1 115 900 so'm x 12 oy</p>
                </NavLink>
                <div className="flex gap-[10px] items-center w-[213px]">
                  <button className="w-[160px] py-[8px] px-[10px] border bg-[#006BFF] text-white rounded-[12px]">
                    Hoziroq xarid qilish
                  </button>

                  <button
                    onClick={() => handleAddCard(item)}
                    className="bg-[#00BFAF] flex w-[40px] p-[3px] rounded-[10px] cursor-pointer h-[40px]"
                  >
                    <img
                      className="pl-[1px]"
                      src="./src/assets/icons/cart-single.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
