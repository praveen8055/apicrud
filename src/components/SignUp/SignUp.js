import { React, useState, useRef } from "react";
import appearzLogo from "../../assets/apperazLogo.jpg";
import signupImage from "../../assets/signupImage.png";
import ellipse4 from "../../assets/Ellipse4.png";
import logoApperaz from "../../assets/logoApperaz.png";
import rectangle17 from "../../assets/Rectangle17.png";
import { useHistory } from "react-router-dom";
import { callApi } from "../../ApiUtils/LoginUtils";
import classes from "./Signup.module.css";
import { CircularProgress } from "@material-ui/core";
import {
  useDispatchCurrentUser,
  useCurrentUser,
} from "../../Contexts/CurrentUser";
import axios from "axios";
const SignUp = () => {
  const history = useHistory();
  const usernameRef = useRef();
  const emailRef = useRef();
  const dispatch = useDispatchCurrentUser();
  const passwordRef = useRef();
  const residentRef = useRef();
  const [resident, setResident] = useState("notSelected");
  const password = localStorage.getItem("password");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const email = localStorage.getItem("email");
  const location = localStorage.getItem("location");
  const registerHandler = async (e) => {
    e.preventDefault();
    console.log(email);
    setIsFetching(true);
    if (resident === "notSelected") {
      setIsFetching(false);
      return;
    } else {
      try {
        await axios.post(
          "http://appearz.outshade.com:1337/auth/local/register",
          {
            username: usernameRef.current.value,
            email: email,
            password: password,
            apartmentNumber: emailRef.current.value,
            location: location,
            residentType: resident === "rented" ? 0 : 1,
          }
        );
        const response = await callApi("/auth/local", "POST", {
          identifier: email,
          password: password,
        });
        dispatch({ type: "LOGIN", user: response.user });
        setIsFetching(false);
        history.replace("/confirmation");
      } catch (err) {
        setError(err);
        setIsFetching(false);
      }
    }
  };

  const residentChangeHandler = (e) => {
    setResident(e.target.value);
  };
  console.log(resident);
  const handleSelector = (e) => {
    setResident(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="mb-10 ml-4 flex">
          <img src={logoApperaz}></img>
          <p className={`self-end ${classes.logoName}`}>APPREAZ</p>
        </div>
        <form className="flex justify-center" onSubmit={registerHandler}>
          <div
            className={`flex flex-col items-center bg-blue-50 pr-24 pb-10 pl-24 pt-8 rounded-2xl ${classes.formColor}`}
          >
            <div className="mb-14 flex flex-col items-center">
              <div className="text-sm mb-3">
                <span className="text-blue-700 text-xs font-medium">
                  STEP 4{" "}
                </span>
                <span className="text-xs text-blue-700 font-medium">of 4</span>
              </div>
              <div className="flex justify-between">
                <img className="mr-1" src={ellipse4}></img>
                <img className="mr-1" src={ellipse4}></img>
                <img className="mr-1" src={ellipse4}></img>
                <img src={rectangle17}></img>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1
                className="text-xl font-extrabold mb-4"
                style={{
                  color: "#1D1E5E",
                }}
              >
                Complete your profile
              </h1>
              <p className="mb-8 text-xs" style={{ color: "#515151" }}>
                Enter a new password for your apperaz account
              </p>
              <div className="flex flex-col justify-center">
                <label
                  htmlFor="username"
                  className="text-xs mb-2"
                  style={{ color: "#515151" }}
                >
                  Name(needs to match renter/owner documents)
                </label>
                <input
                  ref={usernameRef}
                  className="w-80 h-8 rounded-md pl-2 text-xs mb-4 outline-none"
                  name="username"
                  id="username"
                ></input>
                {error && (
                  <p className="text-xs text-red-600 mb-4">
                    Email is aleady registered
                  </p>
                )}
                <label
                  htmlFor="apartment-number"
                  className="text-xs mb-2"
                  style={{ color: "#515151" }}
                >
                  Apartment Number
                </label>
                <input
                  ref={emailRef}
                  className="w-80 h-8 rounded-md pl-2 text-xs mb-6 outline-none"
                  name="apartment-number"
                  id="apartment-number"
                  type="text"
                  required
                ></input>
              </div>
              <div className="flex flex-col mb-4 self-start items-start">
                <label
                  htmlFor="selectCategory"
                  className="text-xs mb-4"
                  style={{ color: "#515151" }}
                >
                  Resident Type
                </label>
                {/* <select
                  onChange={handleSelector}
                  className="mb-8 w-80 text-xs p-1 outline-none"
                  name="selectCategory"
                  id="selectCategory"
                >
                  <option value="rented">Rented</option>
                  <option value="owner">Owner</option>
                </select> */}
                <div
                  className="flex items-center w-40 justify-between text-xs font-medium mb-4"
                  style={{ color: "#515151" }}
                  onChange={residentChangeHandler}
                >
                  <div className="flex items-center">
                    <input
                      className="mr-1 cursor-pointer"
                      type="radio"
                      name="selectCategory"
                      value="rented"
                    />
                    Rented
                  </div>
                  <div className="flex items-center">
                    <input
                      className="mr-1 cursor-pointer"
                      type="radio"
                      name="selectCategory"
                      value="owner"
                    />
                    Owner
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className={`self-center bg-blue-700 w-4/5 h-8 rounded-3xl text-white font-medium text-xs mb-4 ${classes.confirmDetailsButton}`}
              >
                {isFetching ? (
                  <CircularProgress
                    color="white"
                    size="20px"
                  ></CircularProgress>
                ) : (
                  "CONFIRM DETAILS"
                )}
              </button>
              <p className="text-xs">
                Incorrect Details? <span className="font-bold">Click here</span>
              </p>
            </div>
          </div>
        </form>
        <div className="fixed bottom-0 right-0 w-80">
          <img src={signupImage}></img>
        </div>
      </div>
    </>
  );
};
export default SignUp;
