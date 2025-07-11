import React, { useState, useEffect } from "react";
import ChefCards from "../components/ChefCards";
import { useLocation } from "react-router-dom";

const chefs = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isChefs = currentPath === "/chefs";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isChefs) {
      // Anima a entrada quando a página carrega
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isChefs]);

  if (!isChefs) {
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
    { category: "green", delay: 750 },
  ];

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
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
          <ChefCards />
        </div>
      ))}
    </div>
  );
};

export default chefs;
