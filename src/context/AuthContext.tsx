"use client";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "@/reducer/authReducer";

const AuthContext = createContext<any>(null);

const initialState = {
  users: [],
  authUser: null,
  message: "",
};

const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  // ?   REGISTRATION FUNCTION
  const register = (user: any) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(user.phone)) {
      dispatch({ type: "SET_MESSAGE", payload: "Invalid Phone Number" });
      return;
    }

    const userExists = state.users.find(
      (curUser: any) => curUser.phone === user.phone
    );
    if (userExists) {
      dispatch({ type: "SET_MESSAGE", payload: "You are already registered" });
      return;
    }

    const updatedUsers = [...state.users, user];
    dispatch({ type: "SET_USERS", payload: updatedUsers });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    dispatch({ type: "SET_MESSAGE", payload: "Registration successful!" });
  };

  // ?   LOGIN FUNCTION
  const login = ({ phone, password }: any) => {
    const user = state.users.find((curUser: any) => curUser.phone === phone);

    if (!user) {
      dispatch({
        type: "SET_MESSAGE",
        payload: "You are not registered. Please Register first",
      });
      return;
    }

    if (user.password !== password) {
      dispatch({ type: "SET_MESSAGE", payload: "Invalid Credentials" });
      return;
    }

    dispatch({ type: "SET_AUTH_USER", payload: user });
    sessionStorage.setItem("authUser", JSON.stringify(user));
    dispatch({ type: "SET_MESSAGE", payload: "Login successful!" });
  };

  // ?   LOGOUT FUNCTION
  const logout = () => {
    dispatch({ type: "SET_AUTH_USER", payload: null });
    sessionStorage.removeItem("authUser");
    dispatch({ type: "SET_MESSAGE", payload: "Logout successful!" });
  };

  //? CLEAR MESSAGE FUNCTION
  const clearMessage = () => {
    dispatch({ type: "CLEAR_MESSAGE" });
  };

  // ?   LOAD DATA FROM LOCAL STORAGE (useEffect)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const storedAuthUser = JSON.parse(
        sessionStorage.getItem("authUser") || "null"
      );

      dispatch({ type: "SET_USERS", payload: storedUsers });
      dispatch({ type: "SET_AUTH_USER", payload: storedAuthUser });
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ ...state, register, login, logout, clearMessage, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// CUSTOM HOOK
const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
