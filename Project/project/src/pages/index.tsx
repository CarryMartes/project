import { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Login = lazy(() => import("./Auth/Login/"));
const SignUp = lazy(() => import("./Auth/SignUp/"))

export const Routing = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  );
};
