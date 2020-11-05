import { useState, useEffect, useContext, Fragment } from "react";
import { CommonLayout } from "components";
import { CartInformationContext } from "contexts/CartInformationContext";

export default function Home() {
  const [items, setItems] = useState();
  const { addProductToCart, getProductList, localCartInformation } = useContext(
    CartInformationContext
  );

  useEffect(() => {
    getProductList(setItems);
    return () => {};
  }, []);

  return (
    <CommonLayout>
      <div className="container">
        <div className="row">
          {items?.length ? (
            items.map((item, index) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-12 "
                key={item?.id + "_" + item?.name + "_" + index}
              >
                <div className="p-4 my-3 rounded shadow-on-hover">
                  <img
                    className="py-2"
                    src={item?.image}
                    alt={item?.name}
                    style={{ width: "100%" }}
                  />
                  <p className="text-dark pt-1 mb-0 text-truncate">
                    {item?.name}
                  </p>
                  <p className="text-secondary font-weight-lighter pb-1 mb-0 text-truncate">
                    {item?.description}
                  </p>
                  <h6 className="pb-1 text-truncate text-dark text-truncate">
                    Rs. {item?.price}
                  </h6>
                  {
                    <button
                      className={
                        item.total_quantity ===
                        localCartInformation[item.id]?.quantity
                          ? "btn btn btn-secondary text-white w-100"
                          : "btn btn btn-outline-primary w-100"
                      }
                      disabled={
                        item.total_quantity ===
                        localCartInformation[item.id]?.quantity
                      }
                      onClick={() => {
                        addProductToCart(item);
                      }}
                    >
                      {item.total_quantity ===
                        localCartInformation[item.id]?.quantity ? "Out of Stock" : "Add to Cart"}
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

export const SkeletonLoader = ({mobileOnly}) => {
  return (
    <Fragment>
      {[1, 2, 3].map((item) => (
        <div
          className={!mobileOnly ? "col-xl-4 col-lg-4 col-md-6 col-12 p-4" : "col-12"}
          key={item}
        >
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
