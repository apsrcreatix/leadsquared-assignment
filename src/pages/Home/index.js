import { useState, useEffect, useContext, Fragment } from "react";
import { CommonLayout } from "components";
import { AxiosContext } from "contexts/AxiosContext";
import { CartInformationContext } from "contexts/CartInformationContext";
import { GET_PRODUCT_LIST } from "api";

export default function Home() {
  const [items, setItems] = useState();
  const { unauthenticatedAxios } = useContext(AxiosContext);
  const { addProductToCart } = useContext(CartInformationContext);

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await unauthenticatedAxios.get(GET_PRODUCT_LIST.URL);
        setItems(response?.data?.data);
      } catch (error) {
        console.error({ error });
      }
    }
    fetchContent();
    return () => {};
  }, []);

  return (
    <CommonLayout>
      <div className="container">
        <div className="row">
          {items?.length ? (
            items.map((item) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-12 "
                key={item?.id}
              >
                <div className="p-4 my-3 rounded shadow-on-hover">
                  <img
                    className="py-2"
                    src={item?.image}
                    alt={item?.name}
                    style={{ width: "100%" }}
                  />
                  <p className="text-secondary py-1 mb-0 text-truncate">
                    {item?.name}
                  </p>
                  <h6 className="pb-1 text-truncate text-dark text-truncate">
                    Rs. {item?.price}
                  </h6>
                  {
                    <button
                      className="btn btn btn-outline-primary w-100"
                      onClick={() => addProductToCart(item)}
                    >
                      Add to Cart
                    </button>
                  }
                </div>
              </div>
            ))
          ) : (
            <SkeletonLoader />
          )}
        </div>
      </div>
    </CommonLayout>
  );
}

export const SkeletonLoader = () => {
  return (
    <Fragment>
      {[1, 2, 3].map((item) => (
        <div className=" col-xl-4 col-lg-4 col-md-6 col-12 p-4" key={item}>
          <div className="loading-custom skeleton-loading-custom p-4 rounded w-100">
            <div
              className="loading-custom skeleton-loading-custom m-3 rounded p-5"
              style={{ height: "10rem" }}
            ></div>
            <div
              className="loading-custom skeleton-loading-custom m-3 rounded"
              style={{ height: "2.5rem" }}
            ></div>
            <div
              className="loading-custom skeleton-loading-custom m-3 rounded"
              style={{ height: "2.5rem" }}
            ></div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};
