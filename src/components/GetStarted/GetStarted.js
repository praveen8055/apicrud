import getStartedImage from "../../assets/getStartedImage.png";
import { useHistory } from "react-router-dom";
import classes from "./GetStarted.module.css";
import { useRef } from "react";
const GetStarted = () => {
  const history = useHistory();
  const locationRef = useRef();
  const goToStep1 = (e) => {
    e.preventDefault();
    console.log(locationRef.current.value);
    localStorage.setItem("location", locationRef.current.value);
    history.push("/step1");
  };

  return (
    <div className="w-full flex flex-col items-center mt-12">
      <div className="flex flex-col w-full m-10 items-center">
        <h1 className={`text-3xl mb-4 ${classes.logoFamily}`}>
          <span>Welcome to </span>
          <span className={`font-semibold ${classes.logoColor}`}>APPREAZ</span>
        </h1>
        <p className="mb-6">
          <span>Your </span>
          <span className="font-bold">one stop </span>
          <span>destination for </span>
          <span className="font-bold">all your society needs</span>
        </p>
        <form
          className="flex flex-col items-center w-full"
          onSubmit={goToStep1}
        >
          <input
            className="w-4/12 h-12 mb-4 text-left pl-4 bg-gray-100 rounded-md text-xs outline-none"
            type="text"
            placeholder="Enter Your Location"
            ref={locationRef}
          ></input>
          <button
            type="submit"
            className={`w-1/6 h-8 rounded-3xl text-white text-xs font-medium`}
            style={{ backgroundColor: "#5d5fef" }}
            onClick={goToStep1}
          >
            GET STARTED
          </button>
        </form>
      </div>
      <div className="flex justify-center">
        <img className="w-2/3 h-2/5" src={getStartedImage}></img>
      </div>
    </div>
  );
};
export default GetStarted;
