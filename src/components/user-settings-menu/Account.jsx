import React, { useState, useEffect } from "react";

const Account = ({ resetTrigger }) => {
  const [slash, setSlash] = useState(false);
  const [funSelection, setFunSelection] = useState();

  useEffect(() => {
    setFunSelection(undefined);
  }, [resetTrigger]);

  const Actions = () => {
    return (
      <div id="actions-container" className="flex flex-col gap-4">
        <span
          className="text-sm text-blue-400 cursor-pointer hover:underline"
          onClick={() => setFunSelection("changeUsername")}
        >
          Change Username
        </span>
        <span className="text-sm text-blue-400 cursor-pointer hover:underline">
          Change Password
        </span>
        <span className="text-sm text-blue-400 cursor-pointer hover:underline">
          Change Email
        </span>
      </div>
    );
  };

  const ChangePassword = () => {};

  const ChangeEmail = () => {};

  const ChangeUsername = () => {
    return (
      <div className="flex flex-col gap-4 h-full items-center text-gray-500 relative">
        <div
          id="arrow-back"
          className="absolute top-2 md:left-[-5px] lg:left-[-50px] left-0"
        >
          <i
            class="fa-solid fa-arrow-left cursor-pointer"
            onClick={() => {
              setFunSelection(undefined);
            }}
          ></i>
        </div>
        <div
          id="actual-username-container"
          className="w-[80%] lg:w-full bg-gray-100 sm:bg-lightwhite p-1 rounded-2xl"
        >
          <input
            type="text"
            value="actual username"
            disabled
            className="p-1 w-full"
          />
        </div>

        <form className="flex flex-col gap-4 items-center w-full">
          <div
            id="new-username-container"
            className="w-[80%] lg:w-full bg-gray-100 sm:bg-lightwhite p-1 rounded-2xl"
          >
            <input
              type="text"
              placeholder="new username"
              className="p-1 w-full"
            />
          </div>

          <div
            id="username-container"
            className="w-[80%] lg:w-full bg-gray-100 sm:bg-lightwhite p-1 rounded-2xl mb-5"
          >
            <input
              type="text"
              placeholder="new username"
              className="p-1 w-full"
            />
          </div>
        </form>
        <Actions />
      </div>
    );
  };

  const Default = () => {
    return (
      <div className="flex flex-col gap-4 h-full justify-center items-center text-gray-500">
        <div
          id="username-container"
          className=" w-full sm:bg-lightwhite bg-lightgray p-1 rounded-2xl"
        >
          <input
            type="text"
            value="username"
            disabled
            className="p-1 w-full truncate"
          />
        </div>

        <div
          id="password-container"
          className="flex items-center  w-full sm:bg-lightwhite bg-lightgray p-1 rounded-2xl"
        >
          <input
            type={slash ? "text" : "password"}
            value="password"
            disabled
            className="p-1 w-full truncate"
          />
          <i
            className={`fa-solid px-1.5 cursor-pointer ${
              slash ? "fa-eye-slash" : "fa-eye"
            }`}
            onClick={() => setSlash(!slash)}
          ></i>
        </div>

        <div
          id="email-container"
          className=" w-full sm:bg-lightwhite bg-lightgray p-1 rounded-2xl mb-5"
        >
          <input
            type="email"
            value="useremail@email.com"
            disabled
            className="p-1 w-full trucante"
          />
        </div>

        <Actions />
      </div>
    );
  };

  const funRender = () => {
    switch (funSelection) {
      case "changeUsername":
        return <ChangeUsername />;
      case "changePassword":
        return <ChangePassword />;
      case "changeEmail":
        return <ChangeEmail />;
      default:
        return <Default />;
    }
  };

  return <div className="my-auto">{funRender()}</div>;
};

export default Account;
