import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    const loggedIn = true

    return (
        <Route {...rest} render={props => (
          loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )} />
    )
}

export default PrivateRoute