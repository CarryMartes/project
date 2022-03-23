import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Login = lazy(() => import("./Login"));

export const Routing = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login}/>
        </Switch>
    )
}
