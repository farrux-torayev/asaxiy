import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { NameContext } from "../context";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const { setToken } = useContext(NameContext);
  const [showpassword, setShowPassword] = useState();
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submit", e.target[0].value);
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        username: e.target[0].value,
        password: e.target[1].value,
      });
      toast("Tizimga muvaffaqiyatli kirdingiz");
      const token = res.data?.data?.token;
      console.log(res.data?.data?.token);
      setToken(token);
      localStorage.setItem("token", token);
      navigate("/admin");
    } catch (err) {
      toast.error(err?.response.data.message);
    }
  }
  function korsat() {
    if (showpassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  }

  return (
    <div>
      <form
        className="w-[450px]  rounded-[8px] m-auto mt-[100px] text-black flex flex-col bg-[#F0F1F3]  justify-center"
        onSubmit={handleSubmit}
        action=""
      >
        <h1 className="text-2xl font-bold text-center text-white rounded-t-[5px] bg-[#006BFF] p-[20px]">
          Asaxiy
        </h1>
        <p className="pl-[25px] pt-[30px] pb-[10px] ">Foydalanuvchi nomi:</p>
        <input
          type="text"
          className="  bg-white w-[400px] outline-none ml-[25px] p-[8px]"
        />
        <p className="pl-[25px] pt-[30px] pb-[10px]">Parol:</p>

        <div className="relative">
          <input
            type={showpassword ? "text" : "password"}
            className=" bg-white  w-[400px] outline-none ml-[25px] p-[8px]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-blue-500 text-sm"
          >
            {showPassword ? "Yashirish" : "Ko‘rsatish"} (
            <FaRegEye className="absolute cursor-pointer left-[402px] top-[16px]" />
            ) : (
            <FaRegEyeSlash className=" cursor-pointer absolute left-[402px] top-[16px]" />
            )
          </button>
        </div>

        <br />
        <button className="w-[125px] m-auto hover:bg-amber-700 rounded-[8px] py-[8px] text-white  mb-[20px] bg-[#E53935]  ">
          Tizimga kirish
        </button>
      </form>
    </div>
  );
};

export default Login;
