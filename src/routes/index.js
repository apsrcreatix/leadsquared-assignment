
import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PAGE_URLS from "./page-urls";
import * as PAGE_IMPORTS from "./page-imports";
import { PageLoader } from 'components';
import AxiosContext from 'contexts/AxiosContext';
import CartInformationContext from "contexts/CartInformationContext";

function Routes() {
  return (
    <Router>
      <AxiosContext>
        <CartInformationContext>
          <Suspense fallback={<PageLoader />}>
            <Switch>
              <Route
                exact
                path={PAGE_URLS.HOME}
                component={PAGE_IMPORTS.HOME}
              />
            </Switch>
          </Suspense>
        </CartInformationContext>
      </AxiosContext>
    </Router>
  );
}

export default Routes;
