import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Input, Alert, Space } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import classes from "./login-form.module.scss";
const LoginForm = () => {
  const history = useHistory();

  const [alertType, setAlertType] = useState("info");
  const [alertMessage, setAlertMessage] = useState(
    "Remember your password. :)"
  );

  const authData = localStorage.getItem("auth");

  const initialLoginData = {
    username: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialLoginData);

  const login = () => {
    if (!authData) {
      localStorage.setItem("auth", JSON.stringify(loginData));

      history.push("/");
    } else {
      if (authData === loginData) history.push("/");
      else {
        setAlertType("error");
        setAlertMessage("Username or password is incorrect");
      }
    }
  };

  return (
    <div className={classes.login}>
      <h1>Login</h1>
      <form>
        <div>
          <Input
            className={classes["login__input"]}
            type="text"
            value={loginData.username}
            placeholder="username"
            size="large"
            prefix={<UserOutlined />}
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
          />
          <Input.Password
            className={classes["login__input"]}
            value={loginData.password}
            placeholder="password"
            size="large"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
        </div>
        <Button
          className={classes["login__button"]}
          size="large"
          type="primary"
          onClick={login}
        >
          Login
        </Button>
        {(!authData || alertType === "error") && (
          <Alert
            className={classes["login__alert"]}
            message={alertMessage}
            type={alertType}
          />
        )}
      </form>
    </div>
  );
};

export default LoginForm;
