import { useState, useEffect } from "react";
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

  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [command, setCommand] = useState({});

  useEffect(() => {
    const newSocket = io(`https://demo-chat-server.on.ag/`);
    console.log({ newSocket });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  useEffect(() => {
    const getData = () => {
      socket?.on("message", (res) => setResponse(res.message));
      socket?.on("command", (res) => {
        setCommand(res.command);
      });
    };
    getData();
  }, [socket]);

  const sendMessage = (m) => {
    socket?.emit("message", {
      author: auth.user.username,
      message: m,
    });
    // if (m === 'Yes') socket.close()
  };

  const sendCommand = () => {
    socket?.emit("command");
  };

  console.log(auth.user)

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
            <Home
              sendCommand={sendCommand}
              sendMessage={sendMessage}
              setMessage={setMessage}
              command={command}
              response={response}
              message={message}
            />
          </PrivateRoute>
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
