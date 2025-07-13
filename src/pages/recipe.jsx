import React, { useState, useEffect } from "react";
import img from "../assets/hd-food.jpg";
import { useLocation } from "react-router-dom";

const recipe = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isRecipe = currentPath === "/recipe";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isRecipe) {
      // Anima a entrada quando a página carrega
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isRecipe]);

  if (!isRecipe) {
    return null;
  }

  return (
    <div
      className={`md:h-[calc(90vh-50px)] h-100% flex justify-center items-center transition-all duration-700 ease-out transform ${
        isVisible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 translate-y-4"
      }`}
      style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
    >
      <main className="flex md:flex-row flex-col justify-around gap-10 md:w-[70%] w-full h-[90%] md:bg-lightgray bg-transparent p-4 rounded-3xl overflow-hidden">
        <div
          id="image-container"
          className="h-[100%] md:w-[50%] w-full shadow-xl overflow-hidden rounded-3xl relative group cursor-pointer"
        >
          <img
            src={img}
            alt="Food Logo"
            className="h-full w-full object-cover group-hover:brightness-70 duration-150"
          />
          <div
            id="play-button"
            className="absolute inset-0 items-center justify-center text-8xl text-lightwhite text-shadow-md hidden group-hover:flex"
          >
            <i class="fa-solid fa-play"></i>
          </div>
        </div>
        <aside
          id="content-container"
          className="md:w-[50%] w-full md:overflow-scroll overflow-visible p-1"
        >
          <h2 id="recipe-title" className="text-4xl font-bold mt-1 mb-3 ">
            Lemon Herb Chicken Piccata
          </h2>
          <h3
            id="recipe-ingredients-title"
            className="text-xl mb-1.5 mt-2 font-bold"
          >
            Ingredients
          </h3>
          <div id="recipe-ingredients" className="flex gap-10">
            <ol>
              <li>500g Chicken Breasts</li>
              <li>Olive Oil</li>
              <li>1 Lemon</li>
              <li>Capers</li>
            </ol>
            <ol className="mb-2">
              <li>Flour</li>
              <li>Salt</li>
              <li>Black Pepper</li>
              <li>White wine</li>
            </ol>
          </div>
          <h3 id="instruction-title" className="text-xl mb-1.5 mt-2 font-bold">
            Instructions
          </h3>
          <p id="instruction-text" className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque saepe
            quisquam ullam tempora dicta, voluptatum in odit tenetur a at iusto
            modi magnam illo omnis labore laborum, officiis mollitia suscipit!
          </p>
          <p id="instruction-text" className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque saepe
            quisquam ullam tempora dicta, voluptatum in odit tenetur a at iusto
            modi magnam illo omnis labore laborum, officiis mollitia suscipit!
          </p>
          <div id="time-container" className="mb-4">
            <h3 className="text-xl mb-1.5 mt-2 font-bold">Tempo de Preparo</h3>
            <p className="mb-2">00:45 (quarenta e cinco minutos)</p>
          </div>
          <div
            id="table-container"
            className="grid grid-cols-2 md:grid-cols-4 gap-2 mr-2 text-center border rounded-2xl p-2"
          >
            <p className="p-2 text-sm md:text-base break-words">
              <span className="font-bold">Calories</span> <br /> 423kcal
            </p>
            <p className="p-2 text-sm md:text-base break-words">
              <span className="font-bold">Proteins</span> <br /> 23g
            </p>
            <p className="p-2 text-sm md:text-base break-words">
              <span className="font-bold">Lipids</span> <br /> 9g
            </p>
            <p className="p-2 text-sm md:text-base break-words">
              <span className="font-bold">Carbos</span> <br /> 30g
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default recipe;
