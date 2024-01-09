import React from "react";
// import logo from "../../../Images/2 501.svg";
// import img1 from "../../../Images/image 1.svg";
// import img2 from "../../../Images/image 2.svg";
// import img3 from "../../../Images/image 3.svg";
// import img4 from "../../../Images/image 4.svg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Footer = () => {

  return (
    <div className="footerBg px-16 py-10 bg-[#D9D9D9]">
      <div className="grid border-b-2 border-[#000000] pb-10 gap-16 grid-cols-1 md:grid-cols-5">
        <div className="">
          <img className="h-20" src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png" alt="logo" />

          <p className="text-xs title text-justify mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="fontStyle">
          <h1 className="font-extrabold text-lg pb-2 border-b-2 border-black mr-32 md:mr-[60px]">
            Informations
          </h1>
          <div className="text-sm flex flex-col gap-2 mt-3">
            <p>About Us</p>
            <p>Contact us</p>
            <p>Our services</p>
            <p>our blogs</p>
            <p>Privacy policy</p>
            <p>Refund & Returns</p>
            <p>terms & Conditions</p>
          </div>
        </div>
        <div className="fontStyle">
          <h1 className="font-extrabold text-lg pb-2 border-b-2 border-black mr-32 md:mr-[60px]">
            Informations
          </h1>
          <div className="text-sm flex flex-col gap-2 mt-3">
            <p>Sofa</p>
            <p>Carpet</p>
            <p>Curtain Blinds</p>
            <p>Wallpaper</p>
            <p>Wooden Floor</p>
            <p>Custom Majlis</p>
          </div>
        </div>
        <div className="fontStyle">
          <h1 className="font-extrabold text-lg pb-2 border-b-2 border-black mr-32 md:mr-[60px]">
            Informations
          </h1>
          <div className="text-sm flex flex-col gap-2 mt-3">
            <p>Sofa</p>
            <p>Carpet</p>
            <p>Curtain Blinds</p>
            <p>Wallpaper</p>
            <p>Wooden Floor</p>
            <p>Custom Majlis</p>
          </div>
        </div>
        <div className="fontStyle">
          <h1 className="font-extrabold text-lg pb-2 border-b-2 border-black mr-32 md:mr-[60px]">
            Informations
          </h1>
          <div className="text-sm flex flex-col gap-2 mt-3">
            <p>Sofa</p>
            <p>Carpet</p>
            <p>Curtain Blinds</p>
            <p>Wallpaper</p>
            <p>Wooden Floor</p>
            <p>Custom Majlis</p>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-between   items-center pt-7">
        <p className=" xs:text-xs">
          © 2023 Koncept All Rights Reserved. Develop by{" "}
          <span className="font-bold">Rafia Binte Rashed</span>
        </p>
        
      </div>
    </div>
  );
};

export default Footer;
