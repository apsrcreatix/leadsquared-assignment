import { lazy } from "react";

export const HOME = lazy(() =>
  import("pages/Home").catch((error) => {
    console.log(error);
    window.location.reload();
  })
);
