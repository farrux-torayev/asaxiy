import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import { NameContext } from "../Components/context";


const Admin = () => {
  const { token } = useContext(NameContext);
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.values = "";
    console.log(formData);

    try {
      const res = await axios.post("http://localhost:5000/products", formData, {
        headers: {
          Authorization: "Bareer" + token,
        },
      });
      toast("Muvaffaqiyatli qo'shdingiz");
    } catch (err) {
      toast.error(err?.response.data.message);
    }
  }
  return (
    <>
      <div className=" w-[400px] rounded-[5px] ml-[550px] m-[100px] bg-[#F0F1F3] ">
        <form onSubmit={handleSubmit} className="flex flex-col" action="">
          <h1 className="text-center text-2xl font-bold my-[20px] ">Admin</h1>
          <input
            className=" ml-[50px] bg-white p-[8px] outline-none pl-[px] rounded-[5px] w-[300px] "
            type="text"
            placeholder="Enter name"
            name="name"
          />
          <br />
          <input
            className=" ml-[50px] bg-white p-[8px] outline-none pl-[10px] rounded-[5px] w-[300px] "
            type="text"
            placeholder="Enter category"
            name="category"
          />{" "}
          <br />
          <input
            className=" ml-[50px] bg-white p-[8px] outline-none pl-[10px] rounded-[5px] w-[300px]"
            type="number"
            placeholder="Enter price"
            name="price"
          />{" "}
          <br />
          <textarea
            className=" ml-[50px] bg-white outline-none pl-[10px] w-[300px] p-[8px]"
            type="description"
            placeholder="Enter description"
            name="description"
            cols="30"
          />
          <br />
          <input
            className=" ml-[50px] bg-white outline-none pl-[10px] rounded-[5px] w-[300px] p-[8px]"
            type="file"
            placeholder="Enter image"
            name="image"
          />{" "}
          <br />
          <input
            className=" ml-[50px] bg-white outline-none pl-[10px] rounded-[5px] w-[300px] p-[8px]"
            type="number"
            placeholder="Enter stock"
            name="stock"
          />{" "}
          <br />
          <input
            className=" ml-[50px] bg-white outline-none pl-[10px] rounded-[5px] w-[300px] p-[8px]"
            min={0}
            max={5}
            type="number"
            placeholder="Enter rating"
            name="rating"
          />{" "}
          <br />
          <div className="flex justify-center  mb-[20px]">
            <button className=" w-[300px] p-[10px] bg-green-400 hover:bg-amber-900 text-white rounded-[10px]">
              Add Product{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Admin;
