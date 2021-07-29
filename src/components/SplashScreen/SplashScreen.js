import splashImage from "../../assets/splashImage.jpg";
import { useHistory } from "react-router-dom";
const SplashScreen = () => {
  const history = useHistory();
  const onSplashScreenLoad = () => {
    setTimeout(() => {
      history.replace("/login");
    }, 3000);
  };

  return (
    <div className="App" onLoad={onSplashScreenLoad}>
      <img src={splashImage} className="w-full h-screen object-cover"></img>
    </div>
  );
};
export default SplashScreen;
