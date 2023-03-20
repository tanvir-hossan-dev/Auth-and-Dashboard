import React, { useState } from "react";
import Nav from "./Nav";
import { Input, Button, Typography, Checkbox } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BiLock } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";

const Login = () => {
  const [passType, setPassType] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError("Please enter your E-mail");
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Please enter your Password");
    } else {
      setPasswordError("");
    }
  };
  return (
    <div>
      <Nav />
      <div className="h-screen flex justify-center items-center">
        <div>
          <div className="text-center">
            <h2 className="font-bold text-[26px] text-[#323B4B] font-inter">Sign In</h2>
            <p className="font-normal text-[#8A94A6] font-inter text-[18px]">Welcome back, you've been missed!</p>
          </div>
          <div className="mt-4 flex justify-center items-center">
            <button className="px-4 py-2 bg-[#F0F5FA] rounded-md text-[#8A94A6] flex justify-between items-center">
              <FcGoogle className="mr-2" /> Sign In with Google
            </button>
          </div>
          <h5 className="font-bold text-[#B0B7C3] text-center my-4 font-inter">OR</h5>
          <form onSubmit={handleSubmit} className=" mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <div>
                <Input
                  icon={<MdAlternateEmail />}
                  type="email"
                  size="lg"
                  label="Your Email"
                  error={emailError ? true : false}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {emailError && <p className="mt-2 text-red-600 ml-2">{emailError}</p>}
              </div>
              <div>
                <Input
                  icon={<BiLock className="cursor-pointer" onClick={() => setPassType(!passType)} />}
                  type={passType ? "password" : "text"}
                  size="lg"
                  label="Create Password"
                  error={passwordError ? true : false}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {passwordError && <p className="mt-2 text-red-600 ml-2">{passwordError}</p>}
              </div>
              <Checkbox
                onClick={() => setAgree(!agree)}
                label={
                  <Typography variant="small" color="gray" className="flex items-center font-normal">
                    Remember me
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
            </div>
            <Button type="submit" className="mt-6" fullWidth>
              Sign In
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Create an account?{" "}
              <Link to="/register" href="#" className="font-medium text-blue-500 transition-colors hover:text-blue-700">
                Sign Up
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
