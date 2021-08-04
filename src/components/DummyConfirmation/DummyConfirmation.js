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
    <div>
      <h1>You have Sucessfully logged in</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};
export default DummyConfirmation;
