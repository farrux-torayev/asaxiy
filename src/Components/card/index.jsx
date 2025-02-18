import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import MySwiperComponent from "../swiper";
const Card = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchPost() {
      try {
        setIsLoading(true);
        const res = await axios.get("http://localhost:5000/products");
        setPosts(res.data.data);
        console.log(res.data.posts);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPost();
  }, []);
  return (
    <div>
      <div className=" grid grid-cols-4 gap-[30px] ">
      {isLoading && <Loading />}
        {posts.map((item) => (
          <div key={item.id} className="py-[30px]">
            <h1 className="text-[20px] font-bold py-[20px]  hover:text-blue-500 ">
              {item.name}
            </h1>
            <h1>{item.rating}</h1>
            <img src={item.image} alt="" />
          </div>
        ))}
        <MySwiperComponent/>
      </div>
    </div>
  );
};

export default Card;
