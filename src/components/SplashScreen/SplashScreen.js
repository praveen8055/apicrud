import splashImage from "../../assets/splashImage.jpg";
import splashImage1 from "../../assets/splashImage1.png";
import splashImage2 from "../../assets/splashImage2.png";
import logoApperaz2 from "../../assets/logoApperaz2.png";
import { useHistory } from "react-router-dom";
import classes from "./SplashScreen.module.css";
const SplashScreen = () => {
  const history = useHistory();
  const onSplashScreenLoad = () => {
    setTimeout(() => {
      history.replace("/login");
    }, 3000);
  };

  return (
    <div className="flex items-center" onLoad={onSplashScreenLoad}>
      <img src={splashImage1} className="w-1/5 h-screen object-cover"></img>
      <div className="w-3/5 flex flex-col items-center">
        <img src={logoApperaz2}></img>
        <h1 className={`text-5xl ${classes.logoName}`}>APPERAZ</h1>
        <div className="text-xl">
          <span>Your </span>
          <span className="font-black">one stop </span>
          <span>destination for </span>
          <div className="flex flex-col items-center">
            <p className="font-black">all your society needs</p>
          </div>
        </div>
      </div>
      <img src={splashImage2} className="w-1/5 h-screen object-cover"></img>
    </div>
  );
};
export default SplashScreen;
