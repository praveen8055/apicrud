import getStartedImage from "../../assets/getStartedImage.png";
import { useHistory } from "react-router-dom";
const GetStarted = () => {
  const history = useHistory();
  const goToStep1 = (e) => {
    history.push("/login");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col w-full m-10 items-center">
        <h1 className="text-3xl mb-3">
          <span>Welcome to </span>
          <span className="text-blue-700 font-bold">Appreaz</span>
        </h1>
        <p className="mb-5">
          <span>Your </span>
          <span className="font-bold">one stop </span>
          <span>destination for </span>
          <span className="font-bold">all your society needs</span>
        </p>
        <input
          className="w-4/12 h-10 mb-4 text-left pl-4 bg-gray-100 rounded-md"
          type="text"
          placeholder="Enter Your Location"
        ></input>
        <button
          type="submit"
          className="bg-blue-700 w-1/6 h-8 rounded-3xl text-white"
          onClick={goToStep1}
        >
          Get Started
        </button>
      </div>
      <div className="flex justify-center">
        <img className="w-9/12 h-3/6" src={getStartedImage}></img>
      </div>
    </div>
  );
};
export default GetStarted;
