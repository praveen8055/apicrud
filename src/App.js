import { React } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import GetStarted from "./components/GetStarted/GetStarted";
import Step1 from "./components/Step1/Step1";
import Step2 from "./components/Step2/Step2";
import Step3 from "./components/Step3/Step3";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import GoogleAuthCallBack from "./components/GoogleAuthCallBack/GoogleAuthCallBack";
import DummyConfirmation from "./components/DummyConfirmation/DummyConfirmation";
function App() {
  let routes = (
    <Switch>
      <Route path="/" exact>
        <SplashScreen />
      </Route>
      <Route path="/get-started" exact>
        <GetStarted></GetStarted>
      </Route>
      <Route path="/auth/callback/google">
        <GoogleAuthCallBack />
      </Route>
      <Route path="/step1" exact>
        <Step1></Step1>
      </Route>
      <Route path="/step2" exact>
        <Step2></Step2>
      </Route>
      <Route path="/step3" exact>
        <Step3></Step3>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/signup">
        <SignUp></SignUp>
      </Route>
      <Route path="/confirmation" exact>
        <DummyConfirmation></DummyConfirmation>
      </Route>
    </Switch>
  );

  return (
    <Router>
      <main>{routes}</main>
    </Router>
  );
}

export default App;
