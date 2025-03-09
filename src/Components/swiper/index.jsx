import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoStarSharp } from "react-icons/io5";
import { NameContext } from "../context";
import Loading from "../Loading";
import { NavLink } from "react-router-dom";

const MySwiperComponent = () => {
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
    console.log("bosildi");
    setCart((prev) => [
      ...prev,
      {
        count: 1,
        product: item,
      },
    ]);
  }
  return (
    <div className="w-[1400px] mx-auto py-10">
      {isLoading ? (
        <Loading />
      ) : (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1400: { slidesPerView: 6 },
          }}
        >
          {posts.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="p-[20px] h-[575px]  rounded-[25px] w-[260px] bg-white">
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
                  <p className="font-[800] mb-[50px] flex items-center  pl-[10px]  h-[40px] border-[2px] rounded-[10px] text-amber-600 border-amber-700">
                    1 115 900 so'm x 12 oy
                  </p>
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
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default MySwiperComponent;
