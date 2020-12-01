import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
  const loggedIn = useSelector(state => state.userReducer.loggedIn)
  const loading = useSelector(state => state.loaderReducer.loading)

    return (
        <Route {...rest} render={props => (
          (loggedIn && !loading) ? children : <Redirect to="/login" />
        )} />
    )
}

export default PrivateRoute