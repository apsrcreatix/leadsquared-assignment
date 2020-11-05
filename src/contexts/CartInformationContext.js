import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

const CartInformationContext = createContext();
const { Provider } = CartInformationContext;

const CartInformationProvider = ({ children }) => {
  const [
    localCartInformation,
    setLocalCartInformation,
    removeLocalCartInformation,
  ] = useLocalStorage("localCartInformation", []);
  const [totalCartPrice, setTotalCartPrice] = useState();

  useEffect(() => {
    return () => {};
  }, []);

  const addProductToCart = (data) => {
    let isAddedFirstTime = true;
    let copyOfLocalData = localCartInformation;
    for (let i = 0; i < localCartInformation?.length; i++) {
      if (localCartInformation[i].id === data.id) {
        copyOfLocalData[i].quantity += 1;
        isAddedFirstTime = false;
        break;
      }
    }
    if (isAddedFirstTime) {
       copyOfLocalData.push(data);
       setLocalCartInformation(copyOfLocalData);
    } else {
           setLocalCartInformation(copyOfLocalData);
    }
  };

  const increaseQuantityofProduct = (positionOfItem) => {
    let copyOfLocalData = localCartInformation;
    copyOfLocalData[positionOfItem].quantity += 1;
    setLocalCartInformation(copyOfLocalData);
  };

  const decreaseQuantityOfProduct = (positionOfItem) => {
    let copyOfLocalData = localCartInformation;
    copyOfLocalData.splice(positionOfItem, 1);
    setLocalCartInformation(copyOfLocalData);
  };

  const HelloCart = () => {
    console.log("CART HAS BEEN SUCCESSFULLY LOADED.");
  };

  return (
    <Provider
      value={{
        HelloCart,
        addProductToCart,
        decreaseQuantityOfProduct,
        increaseQuantityofProduct,
        localCartInformation,
      }}
    >
      {children}
    </Provider>
  );
};

export { CartInformationContext, CartInformationProvider };
