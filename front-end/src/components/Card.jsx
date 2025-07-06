import React, { useState } from "react";
import img from "../assets/hd-food.jpg";
import { Link } from "react-router-dom";

const Card = (props) => {
  const [liked, setLiked] = useState(false);
  return (
    <div id="card-container" className="group relative">
      <div
        id="heart-container"
        onClick={() => setLiked(!liked)}
        className={`absolute p-3 text-3xl top-0 right-0 hover:text-4xl duration-300 z-10 cursor-pointer`}
      >
        <i
          class={`fa-heart ${
            liked ? "fa-solid text-red-500" : "fa-regular text-white"
          } duration-300`}
        ></i>
      </div>
      <Link
        to="/recipe"
        className="flex justify-center h-60 overflow-hidden rounded-3xl shadow-md relative "
      >
        <img
          src={img}
          alt="image"
          className="w-full h-full object-cover group-hover:scale-102 duration-300"
        />
      </Link>
      <section
        id="card-title"
        className="flex justify-between items-center my-2"
      >
        <h2 className="text-3xl font-bold truncate ">Lemon Herb Chicken</h2>
        <p id="card-category">
          <span
            className={`${props.category} px-3 py-1 rounded-3xl uppercase text-sm`}
          >
            Item
          </span>
        </p>
      </section>
      <p className="line-clamp-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit atque
        illo, voluptas dolorum molestias corrupti laborum sequi. Ex,
        reprehenderit provident obcaecati dolores aliquam error repellendus quos
        nam atque, repudiandae animi!
      </p>
    </div>
  );
};

export default Card;
