import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import {
    Route,
    Redirect,
} from "react-router-dom";
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    console.log('IsLoading from PrivateRoute', loading, user.email);

    if (loading) {
        return (<div className="custom-min-height">
            <Spinner className="p-3" animation="grow" variant="danger" />
        </div>)
    }

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