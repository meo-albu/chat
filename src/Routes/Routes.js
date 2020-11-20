import {
  Switch,
  Route
} from "react-router-dom";
import { Signup } from "../Components/Auth/Signup";
import NotFound from "./NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        app
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  )
}

export default Routes
