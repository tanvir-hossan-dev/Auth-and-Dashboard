import { Button } from "@material-tailwind/react";
import React from "react";
import logo from "./../../assets/logo.png";

const Nav = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="h-[80px] flex justify-between items-center px-4">
        <img src={logo} alt="logo.png" />
        <Button>english</Button>
      </div>
    </div>
  );
};

export default Nav;
