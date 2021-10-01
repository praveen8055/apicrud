import axios from "axios";
import React, { useReducer, useContext, createContext, useState, useEffect } from "react";
import { callApi } from "../Utilities/LoginUtils";
// const CurrentUserStateContext = createContext();
// const CurrentUserDispatchContext = createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return { ...state, ...action.user, isAuthenticated: true };
//     case "LOGOUT":
//       return { isAuthenticated: false };
//     default:
//       throw new Error(`unknown action ${action.type}`);
//   }
// };

// export const CurrentUserProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, { isAuthenticated: false });
//   useEffect(() => {
//     const fetchUser = async () => {
//       const user = await callApi("/users/me", "GET");
//       if (user.id) {
//         dispatch({ type: "LOGIN", user });
//       }
//     };
//     fetchUser();
//   }, []);
//   return (
//     <CurrentUserDispatchContext.Provider value={dispatch}>
//       <CurrentUserStateContext.Provider value={state}>
//         {children}
//       </CurrentUserStateContext.Provider>
//     </CurrentUserDispatchContext.Provider>
//   );
// };

// export const useCurrentUser = () => useContext(CurrentUserStateContext);
// export const useDispatchCurrentUser = () =>
//   useContext(CurrentUserDispatchContext);
const PageContext = createContext();
const PageContextProvider = (props) => {
  const [state, dispatch] = useState({
    isAuthenticated: false
  });

  useEffect(() => {
   
    const fetchUser = async () => {
      const user = await callApi("/users/me", "GET")
       
      if (user.id) {
        dispatch({ isAuthenticated: true });

      }
    };
    fetchUser();
  }, []);

  return (
    <PageContext.Provider value={{
      state: state,
      dispatch
    }}>
      {props.children}
    </PageContext.Provider>
  );
}
const UserContext = () => useContext(PageContext)
module.exports = { PageContext, PageContextProvider, UserContext }
