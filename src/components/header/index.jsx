import React from "react";
import Banner from "../../assets/img/banner-bg.png";
import "./header.css";
import headerImg from '../../assets/img/header-img.svg';

export const Header = () => {
  return (
    <div className="header  relative">
      <div className="relative">
        <img className="img-header -z-10 absolute" src={Banner} alt="" />
        <div className="header-content mx-auto relative top-[12rem] flex">
          <div className="flex mt-5 flex-col align-center">
            <span className="tagline text-white w-[fit-content] border font-bold text-lg p-3  ">Bienvenido a mi portfolio</span>
            <h1 className="font-bold my-5 text-white text-6xl">
              Hola! Me llamo Juan Cruz Vila y soy Desarrolador Web
            </h1>
            <p className="text-white opacity-75 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              nesciunt magnam omnis quod minus deserunt recusandae voluptas
              reiciendis quos ipsa.
            </p>
          </div>
          <img src={headerImg} className="w-[27rem] mx-20" alt="" />
        </div>
      </div>
    </div>
  );
};
