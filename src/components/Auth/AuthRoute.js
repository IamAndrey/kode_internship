import React from "react";
import {Redirect, Route} from 'react-router-dom'
import {useSelector} from "react-redux";

const AuthRoute = ({component: Component, ...rest}) => {

    const {authenticated, verified} = useSelector(({auth: {authenticated, verified}}) => ({authenticated, verified}))

    return <Route {...rest}
        render={(props) => authenticated === true && verified === true ? <Component {...props} /> : <Redirect to='/login' />}/>
}

export default AuthRoute