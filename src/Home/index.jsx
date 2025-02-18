import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Card from "../Components/card";

const Home = () => {
  return (
    <div>
    <div className="w-[1300px] m-auto "> 
        <Navbar/>
        <Card/>
        <Footer/>
    </div>
    </div>
  );
};

export default Home;
