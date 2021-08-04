import { useHistory } from "react-router-dom";
import { callApi } from "../../ApiUtils/LoginUtils";
import {
  useDispatchCurrentUser,
  useCurrentUser,
} from "../../Contexts/CurrentUser";
const DummyConfirmation = () => {
  const history = useHistory();
  const dispatch = useDispatchCurrentUser();
  const currentUser = useCurrentUser();
  const logoutHandler = async () => {
    await callApi("/logout", "POST");
    dispatch({ type: "LOGOUT" });
    history.replace("/login");
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1>You have Sucessfully logged in</h1>
      <button
        className="bg-blue-700 w-1/4 h-8 rounded-3xl text-white mb-5"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
};
export default DummyConfirmation;
