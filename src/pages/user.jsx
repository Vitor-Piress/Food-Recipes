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
      className={`h-[calc(90vh-50px)] flex justify-center items-center transition-all duration-700 ease-out transform ${
        isVisible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 translate-y-4"
      }`}
    >
      <main className="flex justify-around w-[70%] h-[90%] bg-lightgray p-4 rounded-3xl relative">
        <button
          id="home-button"
          className="absolute top-10 left-10 cursor-pointer group"
        >
          <Link to="/home" className="flex gap-1">
            <i className="fa-solid fa-arrow-left text-gray-500 group-hover:text-gray-700"></i>
            <i className="fa-solid fa-house-chimney text-gray-500 group-hover:text-gray-700"></i>
          </Link>
        </button>
        <aside className="flex flex-col justify-center items-center w-2/5">
          <div
            id="user-photo"
            className="flex justify-center items-center relative mb-8 group cursor-pointer"
          >
            <p className="absolute text-2xl text-white font-bold hidden group-hover:flex">
              Change Photo
            </p>
            <i class="fa-solid fa-circle-user text-gray-500 text-[12rem] group-hover:text-gray-700"></i>
          </div>
          <nav className="flex flex-col gap-4 items-center w-full">
            <p
              onClick={() => {
                setMenuSelecionado("account");
                setResetAccountTrigger((prev) => prev + 1);
              }}
              className={`bg-lightwhite text-gray-500 rounded-2xl cursor-pointer px-2 py-2 w-2/3 text-center durantion-300 hover:bg-lightgray ${
                isAccount && "font-bold"
              }`}
            >
              Account
            </p>
            <p
              onClick={() => setMenuSelecionado("preferences")}
              className={`bg-lightwhite text-gray-500 rounded-2xl cursor-pointer px-2 py-2 w-2/3 text-center durantion-300 hover:bg-lightgray ${
                isPreferences && "font-bold"
              }`}
            >
              Preferences
            </p>
            <p
              onClick={() => setMenuSelecionado("licenses")}
              className={`bg-lightwhite text-gray-500 rounded-2xl cursor-pointer px-2 py-2 w-2/3 text-center durantion-300 hover:bg-lightgray ${
                isLicenses && "font-bold"
              }`}
            >
              Licenses
            </p>
            <p className="bg-lightwhite text-gray-500 rounded-2xl cursor-pointer px-2 py-2 w-2/3 text-center durantion-300 hover:bg-lightgray">
              Logout
            </p>
          </nav>
        </aside>
        <section className="my-auto w-3/5">{renderContent()}</section>
      </main>
    </div>
  );
};

export default user;
