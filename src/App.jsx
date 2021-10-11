import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/not-found/NotFound";

import "antd/dist/antd.css";
import classes from "./app.module.scss";

const App = () => {
  return (
    <div className={classes.app}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" render={() => <Home />} />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
