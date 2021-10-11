import { useState } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import { Button, Input, Alert } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import classes from "./login-form.module.scss";

const LoginForm = () => {
  const history = useHistory();

  const auth = useAuth();

  const initialLoginData = {
    username: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialLoginData);

  const login = () => {
    auth.login(loginData);
    history.push("/");
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
      </form>
    </div>
  );
};

export default LoginForm;
