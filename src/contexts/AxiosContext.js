import { createContext } from "react";
import axios from "axios";

const AxiosContext = createContext();
const { Provider } = AxiosContext;

const AxiosProvider = ({ children }) => {
  const unauthenticatedAxios = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT || "https://run.mocky.io",
  });
  console.log({ URL: process.env.REACT_APP_API_ENDPOINT });
  unauthenticatedAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  unauthenticatedAxios.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return (
    <Provider
      value={{
        unauthenticatedAxios,
      }}
    >
      {children}
    </Provider>
  );
};

export { AxiosContext, AxiosProvider };
