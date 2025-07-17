import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/food-logo.png";
import { Link, useLocation } from "react-router-dom";
import "animate.css";

const Header = () => {
  const [filterPopUp, setFilterPopUp] = useState(false);

  const filterPopUpRef = useRef(null);

  const selectFilter = document.getElementById("filter");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterPopUpRef.current &&
        !filterPopUpRef.current.contains(event.target)
      ) {
        setFilterPopUp(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const location = useLocation();
  const currentPath = location.pathname;
  const isHome = currentPath === "/home";
  const isChef = currentPath === "/chefs";
  const isCategorie = currentPath === "/categories";

  return (
    // fixed top-0 left-0 right-0 z-50
    <header className="bg-lightgray m-2 md:m-0 shadow-md sm:shadow-none p-3.5 flex place-content-between items-center text-textgray rounded-3xl fixed bottom-0 sm:static sm:bottom-auto sm:top-auto sm:right-auto sm:left-auto sm:z-auto right-0 left-0 z-50">
      <Link to="/">
        <img
          id="logo"
          src={logo}
          alt="logo"
          className="w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out object-contain"
        />
      </Link>
      <nav
        id="nav-bar"
        className="flex px-2 py-1 rounded-2xl justify-around md:bg-lightwhite lg:w-[30%] xl:w-[25%]"
      >
        <Link
          to="/"
          className={`py-1  rounded-xl px-2 md:px-1.5 transition-all ease-in-out duration-300 md:hover:null ${
            isHome
              ? "bg-gray-100 scale-105 visible"
              : "sm:bg-lightwhite bg-transparent scale-90 hover:bg-lightgray"
          }`}
        >
          Home
        </Link>
        <Link
          to="/categories"
          className={` py-1 rounded-xl px-2 md:px-1.5h transition-all ease-in-out duration-300 ${
            isCategorie
              ? "bg-gray-100 scale-105 visible"
              : "sm:bg-lightwhite bg-transparent  scale-90 hover:bg-lightgray"
          }`}
        >
          Categories
        </Link>
        <Link
          to="/chefs"
          className={` py-1 rounded-xl px-2 md:px-1.5 transition-all ease-in-out duration-300 ${
            isChef
              ? "bg-gray-100 scale-105 visible"
              : "sm:bg-lightwhite bg-transparent scale-90 hover:bg-lightgray"
          }`}
        >
          Chefs
        </Link>
      </nav>

      <div id="right-content-container" className="flex justify-around gap-5 ">
        <div
          id="filter-container"
          className="hidden items-center text-gray-500 relative ssm:flex"
          ref={filterPopUpRef}
        >
          <i
            className="fa-solid fa-filter cursor-pointer"
            onClick={() => setFilterPopUp(!filterPopUp)}
          ></i>

          {/* filter pop up */}
          <div
            id="filter-pop-up"
            className={`flex flex-col gap-3 justify-center sm:shadow-xl shadow-xs items-center bg-lightwhite absolute sm:top-10 top-[-160px] right-[-30px] z-100 p-2 rounded-2xl h-fit w-40 transition-all duration-300 ease-in-out transform origin-top-right ${
              filterPopUp
                ? "opacity-100 scale-100 visible"
                : "opacity-0 scale-90 invisible"
            }`}
          >
            <p className="font-bold">Filter</p>
            <select
              name="filter"
              id="filter"
              className="w-full bg-lightgray  text-gray-500 p-2 rounded-2xl h-fit cursor-pointer hover:bg-gray-100"
            >
              <option value="All" selected>
                All
              </option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
              <option value="Vegan">Vegan</option>
              <option value="Gluten-Free">Gluten-Free</option>
            </select>
            <button
              className="bg-lightgray text-gray-500 p-2 rounded-2xl h-fit w-full cursor-pointer hover:bg-gray-100"
              onClick={() => (selectFilter.value = "All")}
            >
              Clear Filters
            </button>
          </div>
        </div>

        <div
          id="search-bar"
          className="bg-lightwhite rounded-2xl hidden md:inline  "
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
        <Link
          id="user-container"
          to="/user"
          className="text-3xl flex items-center mr-2 text-gray-500"
        >
          <i class="fa-solid fa-circle-user"></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
