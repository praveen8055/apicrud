import { React, useState } from "react";
import appearzLogo from "../../assets/apperazLogo.jpg";
import ellipse4 from "../../assets/Ellipse4.png";
import rectangle17 from "../../assets/Rectangle17.png";
import mobileImage from "../../assets/authenticationImage.png";
const Step3 = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-8 ml-4">
        <img src={appearzLogo}></img>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center bg-blue-50 pr-24 pb-12 pl-24 pt-8 rounded-2xl">
          <div className="mb-10 flex flex-col items-center">
            <div className="text-sm mb-3">
              <span className="text-blue-700">Step 3 </span>
              <span className="opacity-50">of 4</span>
            </div>
            <div className="flex justify-between">
              <img className="mr-1" src={ellipse4}></img>
              <img className="mr-1" src={ellipse4}></img>
              <img className="mr-1" src={rectangle17}></img>
              <img src={ellipse4}></img>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="mb-2">Create Password</h1>
            <p className="text-sm mb-6">
              Enter a new password for the appereaz account
            </p>
            <form className="flex flex-col items-start">
              <label className="text-xs mb-2" htmlFor="email">
                Email ID:
              </label>
              <input
                type="email"
                className="w-80 h-8 rounded-md pl-2 text-sm mb-4"
                name="email"
                id="email"
              ></input>
              <label className="text-xs mb-2" htmlFor="new-password">
                New Password:
              </label>
              <input
                type="password"
                className="w-80 h-8 rounded-md pl-2 mb-2"
                name="new-password"
                id="new-password"
              ></input>
              <div className="flex flex-col items-start text-xs">
                <p>should contain at least 8 characters</p>
                <p className="mb-4">should contain a number</p>
              </div>
              <label className="text-xs mb-2" htmlFor="confirm-password">
                Confirm Password:
              </label>
              <input
                type="password"
                className="w-80 h-8 rounded-md mb-12"
                name="confirm-password"
                id="confirm-password"
              ></input>
            </form>
            <button className="bg-blue-700 w-3/4 h-8 rounded-3xl text-white text-sm mb-5">
              Create Password
            </button>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0">
        <img src={mobileImage}></img>
      </div>
    </div>
  );
};
export default Step3;
