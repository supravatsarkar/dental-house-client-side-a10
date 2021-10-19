import React from 'react';
import useAuth from '../hooks/useAuth';
import {
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    const user = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (user.email || user.displayName) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        >
        </Route>
    );
};

export default PrivateRoute;