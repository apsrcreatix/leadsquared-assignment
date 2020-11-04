import { createContext } from "react";

const CartInformationContext = createContext();
const { Provider } = CartInformationContext;

const CartInformationProvider = ({ children }) => {
 
  const HelloCart = () => {
    console.log("CART HAS BEEN SUCCESSFULLY LOADED.")
  }

  return (
    <Provider
      value={{
        HelloCart,
      }}
    >
      {children}
    </Provider>
  );
};

export { CartInformationContext, CartInformationProvider };
