import React from "react";
import img from "../assets/food-test-2.png";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div id="card-container" className="mb-3">
      <Link
        to="/recipe"
        className="flex justify-center h-60 overflow-hidden rounded-3xl shadow-md"
      >
        <img src={img} alt="image" className="w-full h-full  object-cover " />
      </Link>
      <section
        id="card-title"
        className="flex justify-between items-center my-2"
      >
        <h2 className="text-3xl font-bold">Sausage</h2>
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
