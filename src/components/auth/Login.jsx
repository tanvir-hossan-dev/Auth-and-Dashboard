import React from "react";
import Nav from "./Nav";

const Login = () => {
  return (
    <div>
      <Nav />
      <div className="h-screen flex justify-center items-center">
        <div className="text-center">
          <h2 className="font-bold text-[26px] font-inter">Sign In</h2>
          <p className="font-medium text-[#8A94A6] font-inter text-[18px]">Welcome back, you've been missed!</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
