import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import MySwiperComponent from "../swiper";
import { NavLink } from "react-router";
import { IoStarSharp } from "react-icons/io5";
const Card = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchPost() {
      try {
        setIsLoading(true);
        const res = await axios.get("http://localhost:5000/products");
        setPosts(res.data.data);
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    }
    fetchPost();
  }, []);

  return (
    <>
      <div className="card">
        <div className="w-[1430px] m-auto grid grid-cols-5 gap-[30px]  pt-[200px]    ">
          {isLoading && <Loading />}
          {posts.map((item) => (
            <div
              key={item.id}
              className=" p-[20px] h-[575px] rounded-[25px] w-[260px] bg-white "
            >
              <img
                className="rounded-t-[15px] h-[287.2px]"
                src={item.image}
                alt=""
              />
              <h1 className="text-[15px] h-[50px] font-[700] pb-[20px] hover:text-blue-500  ">
                {item.name}
              </h1>
              <div className="flex">
                {Array(parseInt(item.rating) || 0)
                  .fill(0)
                  .map((_, index) => (
                    <IoStarSharp key={index} className="text-[#fe7300]" />
                  ))}
              </div>

              <p className="text-[20px] font-[700] pb-[10px] text-[#006BFF] ">
                {item.price}00 so'm
              </p>
              <p className="font-[500] pb-[50px]">1 115 900 so'm x 12 oy</p>
              <div className=" flex gap-[10px] items-center w-[213px]">
                <button className=" w-[160px]  py-[8px] px-[10px] border bg-[#006BFF] text-white rounded-[12px]">
                  Hoziroq xarid qilish
                </button>

                <NavLink to={"/product/" + item.id}>
                  <button className="  bg-[#00BFAF] flex w-[40px] p-[3px] rounded-[10px]  h-[40px]">
                    <img
                      className="pl-[1px]   "
                      src="./src/assets/icons/cart-single.svg"
                      alt=""
                    />
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
          <MySwiperComponent />
        </div>
      </div>
    </>
  );
};

export default Card;
