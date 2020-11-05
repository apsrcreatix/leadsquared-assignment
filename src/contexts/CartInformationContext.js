import React, { createContext, useEffect, useState, useContext } from "react";
import { AxiosContext } from "contexts/AxiosContext";
import { GET_PRODUCT_LIST } from "api";

const CartInformationContext = createContext();
const { Provider } = CartInformationContext;

const CartInformationProvider = ({ children }) => {
  const [localCartInformation, setLocalCartInformation] = useState({});

  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const { unauthenticatedAxios } = useContext(AxiosContext);

  useEffect(() => {
    try {
      let totalPrice = 0;
      for (const index in localCartInformation) {
        totalPrice =
          totalPrice +
          Number(localCartInformation[index].quantity) *
            Number(localCartInformation[index].price);
      }
      setTotalCartPrice(totalPrice);
    } catch (error) {
      console.error({ UE_TP: error });
    }
    return () => {};
  }, [localCartInformation]);

  async function getProductList(setter) {
    try {
      const response = await unauthenticatedAxios.get(GET_PRODUCT_LIST.URL);
      setter(
        response?.data?.data?.map((item) => ({
          id: Number(item.id),
          name: item?.name,
          description: item?.description,
          price: Number(item.price),
          total_quantity: Number(item.quantity),
          image: item?.image,
        }))
      );
    } catch (error) {
      console.error({ GPL: error });
    }
  }

  const removeLocalCartInformation = () => {
    setLocalCartInformation({});
  };

  const addProductToCart = (data) => {
    try {
      let copyOfLocalData = Object.assign({}, localCartInformation);
      let index = data.id;

      if (localCartInformation[index] !== undefined) {
        copyOfLocalData[index].quantity =
          Number(copyOfLocalData[index].quantity) + 1;
        setLocalCartInformation(copyOfLocalData);
      } else {
        data.quantity = 1;
        copyOfLocalData[index] = data;
        setLocalCartInformation(copyOfLocalData);
      }
    } catch (error) {
      console.error({ APTC: error });
    }
  };

  const increaseQuantityofProduct = (positionOfItem) => {
    try {
      let copyOfLocalData = Object.assign({}, localCartInformation);
      copyOfLocalData[positionOfItem].quantity =
        Number(copyOfLocalData[positionOfItem].quantity) + 1;
      setLocalCartInformation(copyOfLocalData);
    } catch (error) {
      console.error({ IQP: error });
    }
  };

  const decreaseQuantityOfProduct = (positionOfItem) => {
    try {
      let copyOfLocalData = Object.assign({}, localCartInformation);

      if (copyOfLocalData[positionOfItem].quantity > 1)
        copyOfLocalData[positionOfItem].quantity =
          Number(copyOfLocalData[positionOfItem].quantity) - 1;
      else delete copyOfLocalData[positionOfItem];

      setLocalCartInformation(copyOfLocalData);
    } catch (error) {
      console.error({ DQP: error });
    }
  };

  return (
    <Provider
      value={{
        addProductToCart: (data) => addProductToCart(data),
        decreaseQuantityOfProduct: (key) => decreaseQuantityOfProduct(key),
        increaseQuantityofProduct: (key) => increaseQuantityofProduct(key),
        localCartInformation,
        totalCartPrice,
        removeLocalCartInformation: () => removeLocalCartInformation(),
        getProductList,
      }}
    >
      {children}
    </Provider>
  );
};

export { CartInformationContext, CartInformationProvider };
