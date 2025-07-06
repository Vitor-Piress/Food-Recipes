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
  const ChangeUsername = () => {
    return (
      <div className="flex flex-col gap-4 h-full  items-center text-gray-500 relative">
        <div id="arrow-back" className="absolute top-1.5 left-20">
          <i
            class="fa-solid fa-arrow-left cursor-pointer"
            onClick={() => {
              setFunSelection(undefined);
            }}
          ></i>
        </div>
        <div
          id="actual-username-container"
          className="w-1/2 bg-lightwhite p-1 rounded-2xl"
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
            className="w-1/2 bg-lightwhite p-1 rounded-2xl"
          >
            <input
              type="text"
              placeholder="new username"
              className="p-1 w-full"
            />
          </div>

          <div
            id="username-container"
            className="w-1/2 bg-lightwhite p-1 rounded-2xl mb-5"
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
      <div className="flex flex-col gap-4 h-full  items-center text-gray-500">
        <div
          id="username-container"
          className="w-1/2 bg-lightwhite p-1 rounded-2xl"
        >
          <input type="text" value="username" disabled className="p-1" />
        </div>

        <div
          id="password-container"
          className="flex items-center w-1/2 bg-lightwhite p-1 rounded-2xl"
        >
          <input
            type={slash ? "text" : "password"}
            value="password"
            disabled
            className="p-1 w-full"
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
          className="w-1/2 bg-lightwhite p-1 rounded-2xl mb-5"
        >
          <input
            type="email"
            value="useremail@email.com"
            disabled
            className="p-1 "
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
        return <Preferences />;
      case "changeEmail":
        return <Licenses />;
      default:
        return <Default />;
    }
  };

  return <div>{funRender()}</div>;
};

export default Account;
