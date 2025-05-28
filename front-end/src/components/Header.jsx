import React from "react";
import logo from "../assets/food-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-lightgray p-3.5 mb-8 flex place-content-between items-center text-textgray md:rounded-3xl ">
      <Link to="/home">
        <img src={logo} alt="logo" className="w-10 h-10 cursor-pointer" />
      </Link>
      <nav
        id="nav-bar"
        className="flex px-2 py-1 rounded-2xl justify-around  md:bg-lightwhite md:w-[30%] xl:w-[25%]"
      >
        <a
          href="#"
          className=" py-1 rounded-xl px-2 md:px-1.5 hover:bg-lightwhite ease-in-out duration-[0.1s] md:hover:bg-lightgray"
        >
          Receitas
        </a>
        <a
          href="#"
          className=" py-1 rounded-xl px-2 md:px-1.5 hover:bg-lightwhite ease-in-out duration-[0.1s] md:hover:bg-lightgray "
        >
          Categorias
        </a>
        <a
          href="#"
          className=" py-1 rounded-xl px-2 md:px-1.5 hover:bg-lightwhite ease-in-out duration-[0.1s] md:hover:bg-lightgray"
        >
          Chef
        </a>
      </nav>

      <div
        id="search-bar"
        className="bg-lightwhite rounded-2xl hidden md:inline"
      >
        <input
          type="text"
          placeholder="Search"
          className="rounded-xl px-1 py-0.5 text-sm m-2 "
        />
        <a className="mr-5">
          <i class="fa-solid fa-magnifying-glass"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
