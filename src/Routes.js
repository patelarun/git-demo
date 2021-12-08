import { BrowserRouter as Router, Switch } from "react-router-dom";
import RegisterForm from "./componenets/Register";
import LogInForm from "./componenets/LogInForm";
import Locations from "./componenets/locations";
import Products from "./componenets/Products";
import TransactionComponent from "./componenets/transaction";
import Families from "./componenets/Families";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Header from "./Header";

export default function Routes() {
  return (
    <>
      <Router>
        <Header />
        <Switch>

          <PublicRoute exact path="/login" component={LogInForm} />
          <PublicRoute exact path="/register" component={RegisterForm} />

          <PrivateRoute exact path="/products" component={Products} />
          <PrivateRoute path="/locations" component={Locations} />
          <PrivateRoute path="/transaction" component={TransactionComponent} />
          <PrivateRoute path="/families" component={Families} />

        </Switch>
      </Router>
    </>
  );
}
