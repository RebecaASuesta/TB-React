import { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer";
import axios from "axios"

const initialState = {
  noticias: []
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getNoticias = async () => {
    const res = await axios.get("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=iG0uOjGMBqJ6hnuQ8eureB09Gsy0rRMs");

    dispatch({
      type: "GET_NOTICIAS",
      payload: res.data.results
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        noticias: state.noticias,
        getNoticias,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};