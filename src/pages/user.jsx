import React, { useState, useEffect } from "react";
import Account from "../components/user-settings-menu/Account";
import Preferences from "../components/user-settings-menu/Preferences";
import Licenses from "../components/user-settings-menu/Licenses";
import { Link, useLocation } from "react-router-dom";

const user = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isUser = currentPath === "/user";

  const [menuSelecionado, setMenuSelecionado] = useState("account");
  const [resetAccountTrigger, setResetAccountTrigger] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const isAccount = menuSelecionado === "account";
  const isPreferences = menuSelecionado === "preferences";
  const isLicenses = menuSelecionado === "licenses";

  const renderContent = () => {
    switch (menuSelecionado) {
      case "account":
        return <Account resetTrigger={resetAccountTrigger} />;
      case "preferences":
        return <Preferences />;
      case "licenses":
        return <Licenses />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (isUser) {
      // Anima a entrada quando a página carrega
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isUser]);

  if (!isUser) {
    return null;
  }

  return (
    <div
      className={`md:h-[calc(90vh-50px)] h-100% flex justify-center items-center transition-all duration-700 ease-out transform mt-5 md:mt-0 ${
        isVisible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 translate-y-4"
      }`}
    >
      <main className="flex md:flex-row flex-col justify-around sm:w-[70%] w-full h-[90%] sm:bg-lightgray bg-transparent p-4 rounded-3xl relative">
        <button
          id="home-button"
          className="absolute top-10 left-10 cursor-pointer group"
        >
          <Link to="/home" className="flex gap-1">
            <i className="fa-solid fa-arrow-left text-gray-500 group-hover:text-gray-700"></i>
            <i className="fa-solid fa-house-chimney text-gray-500 group-hover:text-gray-700"></i>
          </Link>
        </button>
        <aside className="flex flex-col justify-center items-center md:w-2/5 w-full">
          <div
            id="user-photo"
            className="flex justify-center items-center relative mb-4 md:mb-8 group cursor-pointer"
          >
            <p className="absolute md:text-2xl text-xl text-center text-white font-bold hidden group-hover:flex">
              Change Photo
            </p>
            <i class="fa-solid fa-circle-user text-gray-500 text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] group-hover:text-gray-700 transition-all duration-300"></i>
          </div>
          <nav className="flex md:flex-col flex-row gap-2 md:gap-4 items-center w-full mb-5 md:mb-0 flex-wrap justify-center">
            <p
              onClick={() => {
                setMenuSelecionado("account");
                setResetAccountTrigger((prev) => prev + 1);
              }}
              className={`md:bg-lightwhite text-gray-500 rounded-xl cursor-pointer px-2 py-1 md:py-2 w-auto md:w-2/3 text-center text-sm md:text-base durantion-300 hover:bg-lightgray transition-all ease-in-out duration-300 ${
                isAccount
                  ? "bg-gray-100 font-bold scale-105 visible"
                  : "scale-90 hover:bg-lightgray"
              }`}
            >
              Account
            </p>
            <p
              onClick={() => setMenuSelecionado("preferences")}
              className={`md:bg-lightwhite text-gray-500 rounded-xl cursor-pointer px-2 py-1 md:py-2 w-auto md:w-2/3 text-center text-sm md:text-base durantion-300 hover:bg-lightgray transition-all ease-in-out duration-300 ${
                isPreferences
                  ? "bg-gray-100 font-bold scale-105 visible"
                  : "scale-90 hover:bg-lightgray"
              }`}
            >
              Preferences
            </p>
            <p
              onClick={() => setMenuSelecionado("licenses")}
              className={`md:bg-lightwhite text-gray-500 rounded-xl cursor-pointer px-2 py-1 md:py-2 w-auto md:w-2/3 text-center text-sm md:text-base durantion-300 hover:bg-lightgray transition-all ease-in-out duration-300 ${
                isLicenses
                  ? "bg-gray-100 font-bold scale-105 visible"
                  : "scale-90 hover:bg-lightgray"
              }`}
            >
              Licenses
            </p>
            <p className="md:bg-lightwhite md:block hidden text-gray-500 rounded-xl scale-90 cursor-pointer px-2 py-1 md:py-2 w-auto md:w-2/3 text-center text-sm md:text-base durantion-300 hover:bg-lightgray">
              Logout
            </p>
          </nav>
        </aside>
        <section className="flex justify-center h-full md:w-3/5 w-full mb-5">
          {renderContent()}
        </section>
        <div id="logout-small-breakpoint">
          <p className="md:hidden block text-gray-500 rounded-xl cursor-pointer px-2 py-1 md:py-2 w-auto md:w-2/3 text-center text-sm md:text-base durantion-300 hover:bg-lightgray">
            Logout
          </p>
        </div>
      </main>
    </div>
  );
};

export default user;
