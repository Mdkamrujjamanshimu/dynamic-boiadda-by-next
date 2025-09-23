"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "@/reducer/productReducer";

const AppContext = createContext<any>(null);

const API = "/products.json";

const initialState = {
  isLoading: true,
  isError: false,
  products: [] as any[],
  filteredCategory: [] as any[],
};

const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url: string) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      getProducts(API);
    }
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

//! CUSTOM HOOK
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
