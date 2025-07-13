import React from "react";
import { Link, useLocation } from "react-router-dom";
import img from "../assets/pasta.jpg";

const CategoriesCard = () => {
  const location = useLocation();
  return (
    <div id="card-container" className="mb-3 group mx-4 sm:mx-0">
      <Link
        to={`${location.pathname}/pasta`}
        className="inline-block sm:h-60 h-80 overflow-hidden rounded-3xl shadow-md relative"
      >
        <div id="container-title">
          <h2 className="bottom-0 text-4xl font-bold truncate absolute text-lightwhite p-4 duration-200 group-hover:text-4xl">
            Pasta
          </h2>
        </div>
        <img src={img} alt="image" className="w-full h-full object-cover " />
      </Link>
    </div>
  );
};

export default CategoriesCard;
