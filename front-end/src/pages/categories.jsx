import React, { useState, useEffect } from "react";
import Card from "../components/CategoriesCard";
import { useLocation } from "react-router-dom";

const categories = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isCategories = currentPath === "/categories";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isCategories) {
      // Anima a entrada quando a página carrega
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isCategories]);

  if (!isCategories) {
    return null;
  }

  const cards = [
    { category: "blue", delay: 0 },
    { category: "red", delay: 50 },
    { category: "green", delay: 100 },
    { category: "blue", delay: 150 },
    { category: "blue", delay: 200 },
    { category: "red", delay: 250 },
    { category: "red", delay: 300 },
    { category: "red", delay: 350 },
    { category: "blue", delay: 400 },
    { category: "blue", delay: 450 },
    { category: "blue", delay: 500 },
    { category: "blue", delay: 550 },
    { category: "green", delay: 600 },
    { category: "green", delay: 650 },
    { category: "green", delay: 700 },
  ];

  return (
    <main className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[2%]">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ease-out transform ${
            isVisible
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"
          }`}
          style={{
            transitionDelay: isVisible ? `${card.delay}ms` : "0ms",
          }}
        >
          <Card category={card.category} />
        </div>
      ))}
    </main>
  );
};

export default categories;
