import { Switch, Route } from "react-router-dom";
import { Login } from "../Components/Auth/Login";
import { Signup } from "../Components/Auth/Signup";
import Chat from "../Components/Chat/Chat";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/">
        <Chat />
      </PrivateRoute>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  )
}

export default Routes
