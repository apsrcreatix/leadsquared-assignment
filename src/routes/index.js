
import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PAGE_URLS from "./page-urls";
import * as PAGE_IMPORTS from "./page-imports";

function Routes() {
  return (
    <Router>
      <Suspense fallback={<div>Loader</div>}>
        <Switch>
          <Route
            exact
            path={PAGE_URLS.HOME}
            component={PAGE_IMPORTS.HOME} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
