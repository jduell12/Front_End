import React from './node_modules/react';
import {Route, Redirect} from './node_modules/react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Route
            {...rest}
            render = {() => {
                if(localStorage.getItem('token')){
                    return <Component />
                } else {
                    return <Redirect to="/" />
                }
            }}
        />
    )
}

export default PrivateRoute;