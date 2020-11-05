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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CommonLayout>
      <div className="container">
        <div
          className="p-4 rounded"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.10)), url(https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=655&q=50)",
          }}
        >
          <h1 className="display-4 text-white mb-0">Shop the Exclusive</h1>
          <p className="lead text-light mb-0">
            Whoever said that money can't buy happiness simply didn't know where
            to go shopping
          </p>
        </div>
        <div className="row">
          {items?.length ? (
            items.map((item, index) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-12 "
                key={item?.id + "_" + item?.name + "_" + index}
              >
                <div className="p-4 my-3 rounded shadow-on-hover bg-white">
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
                      localCartInformation[item.id]?.quantity
                        ? "Out of Stock"
                        : "Add to Cart"}
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
