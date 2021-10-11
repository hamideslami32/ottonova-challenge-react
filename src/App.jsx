import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import useAuth from "./auth/useAuth";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/not-found/NotFound";

import "antd/dist/antd.css";
import classes from "./app.module.scss";

const App = () => {
  const auth = useAuth();

  return (
    <div className={classes.app}>
      <header className={classes["app__header"]}>
        <span className={classes["app__header__title"]}>
          Ottanova Challenge
        </span>
        {auth.user && (
          <span
            className={classes["app__header__logout"]}
            onClick={() => auth.logout(null)}
          >
            Logout
          </span>
        )}
      </header>
      <Router>
        <Switch>
          <Route path="/login">
            {!auth.user ? <Login /> : <Redirect to="/" />}
          </Route>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
