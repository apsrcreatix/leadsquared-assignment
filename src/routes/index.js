import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PAGE_URLS from "./page-urls";
import * as PAGE_IMPORTS from "./page-imports";
import { PageLoader } from "components";
import { AxiosProvider } from "contexts/AxiosContext";
import { CartInformationProvider } from "contexts/CartInformationContext";

function Routes() {
  return (
    <Router>
      <AxiosProvider>
        <CartInformationProvider>
          <Suspense fallback={<PageLoader />}>
            <Switch>
              <Route
                exact
                path={PAGE_URLS.HOME}
                component={PAGE_IMPORTS.HOME}
              />
            </Switch>
          </Suspense>
        </CartInformationProvider>
      </AxiosProvider>
    </Router>
  );
}

export default Routes;
