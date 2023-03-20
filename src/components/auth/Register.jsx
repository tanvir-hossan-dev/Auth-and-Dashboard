import React, { useState } from "react";
import Nav from "./Nav";
import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BiLock, BiUser } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";

const Register = () => {
  const [passType, setPassType] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [agree, setAgree] = useState(false);
  const [agreeError, setAgreeError] = useState(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError("Please enter your Name");
    } else {
      setNameError("");
    }
    if (!email) {
      setEmailError("Please enter your E-mail");
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Please enter your Password");
    } else {
      if (password.length < 6) {
        setPasswordError("Password should be at least 6 latter.");
      } else {
        setPasswordError("");
      }
    }
  };
  return (
    <div>
      <Nav />
      <div className="h-screen flex justify-center items-center">
        <div>
          <div className="text-center">
            <h2 className="font-bold text-[26px] text-[#323B4B] font-inter">Getting Started</h2>
            <p className="font-medium text-[#8A94A6] font-inter text-[18px]">Create an account to continue!</p>
          </div>
          <div className="mt-4 flex justify-center items-center">
            <button className="px-4 py-2 bg-[#F0F5FA] rounded-md text-[#8A94A6] flex justify-between items-center">
              <FcGoogle className="mr-2" /> Sign Up with Google
            </button>
          </div>
          <h5 className="font-bold text-[#B0B7C3] text-center my-4 font-inter">OR</h5>
          <form onSubmit={handleSubmit} className=" mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <div>
                <Input
                  icon={<BiUser />}
                  type="text"
                  size="lg"
                  label="Your Name"
                  error={nameError ? true : false}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                {nameError && <p className="mt-2 text-red-600 ml-2">{nameError}</p>}
              </div>
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
            </div>
            <div>
              <Checkbox
                onClick={() => setAgree(!agree)}
                label={
                  <Typography variant="small" color="gray" className="flex items-center font-normal">
                    I agree the
                    <a href="#" className="font-medium transition-colors hover:text-blue-500">
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              {agreeError && <p className="mt-2 text-red-600 ml-2">Please agrre with terms and condition</p>}
            </div>
            <Button type="submit" className="mt-6" fullWidth>
              Sign Up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/" href="#" className="font-medium text-blue-500 transition-colors hover:text-blue-700">
                Sign In
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
