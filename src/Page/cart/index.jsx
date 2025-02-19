import React, { useContext } from "react";
import { NameContext } from "../../Components/context";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import { PiTrashSimpleDuotone } from "react-icons/pi";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, setCart } = useContext(NameContext);

  function plus(id) {
    setCart((items) =>
      items.map((item) => {
        if (item.product.id === id) {
          return {
            ...item,
            count: item.count + 1,
          };
        } else {
          return item;
        }
      })
    );
  }

  function minus(id) {
    setCart((items) =>
      items.map((item) => {
        if (item.product.id === id) {
          return {
            ...item,
            count: item.count > 0 ? item.count - 1 : 0,
          };
        } else {
          return item;
        }
      })
    );
  }

  function removeItem(id) {
    setCart((items) => items.filter((item) => item.product.id !== id));
    toast.success("Mahsulot savatdan olib tashlandi!");
  }

  if (!cart || cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="w-[1400px] m-auto pt-[200px] text-center">
          <p className="text-red-600 text-[30px] font-bold">
            Bu yerda hech nima yo'q{" "}
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="w-[1400px] m-auto pt-[200px]">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex h-[300px] border-b  items-center gap-[15px]"
          >
            <img className="w-[200px]" src={item.product.image} alt="" />

            <div className=" w-[500px] h-[100px] ">
              <h1 className="text-[25px] font-bold">{item.product.name}</h1>
            </div>

            <div className="flex  items-center gap-[15px] pr-[20px]">
              <button
                className="w-[40px] h-[40px] border-[1px] border-[#006BFF]  hover:bg-blue-200 cursor-pointer rounded-[50px]"
                onClick={() => minus(item.product.id)}
              >
                -
              </button>
              <h2 className=" px-[25px]">{item.count}</h2>
              <button
                className="w-[40px] h-[40px] border-[1px] border-[#006BFF]  hover:bg-blue-200 cursor-pointer rounded-[50px]"
                onClick={() => plus(item.product.id)}
              >
                +
              </button>
            </div>
            <div>
              <p className="text-[25px] font-bold flex  items-center justify-center pb-[10px]">
                {item.product.price}00 so'm
              </p>
              <p className="border-[2px] rounded-[15px] w-[200px] h-[50px]  flex items-center justify-center font-bold text-amber-600">
                575 900 so'm x 12 oy
              </p>
            </div>
            <div>
              <button
                onClick={() => removeItem(item.product.id)}
                className="bg-red-500 h-[40px] text-white px-3 py-1 rounded-[10px]"
              >
                <PiTrashSimpleDuotone />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
