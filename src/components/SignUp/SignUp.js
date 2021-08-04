import { React, useState, useRef } from "react";
import appearzLogo from "../../assets/apperazLogo.jpg";
import signupImage from "../../assets/signupImage.png";
import ellipse4 from "../../assets/Ellipse4.png";
import rectangle17 from "../../assets/Rectangle17.png";
import { useHistory } from "react-router-dom";
import { callApi } from "../../ApiUtils/LoginUtils";
import axios from "axios";
const SignUp = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const registerHandler = async (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value);
    axios
      .post("http://localhost:1337/auth/local/register", {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="mb-8 ml-4">
          <img src={appearzLogo}></img>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center bg-blue-50 pr-24 pb-10 pl-24 pt-8 rounded-2xl">
            <div className="mb-10 flex flex-col items-center">
              <div className="text-sm mb-3">
                <span className="text-blue-700">Step 4 </span>
                <span className="opacity-50">of 4</span>
              </div>
              <div className="flex justify-between">
                <img className="mr-1" src={ellipse4}></img>
                <img className="mr-1" src={ellipse4}></img>
                <img className="mr-1" src={ellipse4}></img>
                <img src={rectangle17}></img>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold mb-4">Complete your Profile</h1>
              <p className="mb-8 text-sm">
                Enter a new password for your apperaz account
              </p>
              <div className="flex flex-col justify-center">
                <label htmlFor="username" className="text-xs mb-2">
                  Name(needs to match renter/owner documents)
                </label>
                <input
                  ref={usernameRef}
                  className="w-80 h-8 rounded-md pl-2 text-sm mb-2"
                  name="username"
                  id="username"
                ></input>
                <label htmlFor="email" className="text-xs mb-2">
                  Email
                </label>
                <input
                  ref={emailRef}
                  className="w-80 h-8 rounded-md pl-2 text-sm mb-2"
                  name="email"
                  id="email"
                ></input>
                <label htmlFor="password" className="text-xs mb-2">
                  Password
                </label>
                <input
                  ref={passwordRef}
                  className="w-80 h-8 rounded-md pl-2 mb-6"
                  type="password"
                  name="password"
                  id="password"
                ></input>
              </div>
              <div className="flex flex-col justify-center">
                <label htmlFor="selectCategory" className="text-xs mb-2">
                  Resident Type
                </label>
                <select
                  className="mb-8 w-60 text-sm p-1"
                  name="selectCategory"
                  id="selectCategory"
                >
                  <option value="rented">Rented</option>
                  <option value="owner">Owner</option>
                </select>
              </div>
              <button
                onClick={registerHandler}
                className="bg-blue-700 w-3/5 h-8 rounded-3xl text-white font-semibold text-xs mb-5"
              >
                CONFIRM DETAILS
              </button>
              <p className="text-xs">
                Incorrect Details? <span className="font-bold">Click here</span>
              </p>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 right-0">
          <img src={signupImage}></img>
        </div>
      </div>
    </>
  );
};
export default SignUp;
