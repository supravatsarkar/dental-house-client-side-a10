import useAuth from "../../../hooks/useAuth";
import {
    Route,
    Redirect,
} from "react-router-dom";

// import { Spinner } from 'react-bootstrap';
const PrivateLoginRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (user.email || user.displayName) ? (
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: { from: location }
                        }}
                    />
                ) : (children)
            }
        >
        </Route>
    );
};

export default PrivateLoginRoute;