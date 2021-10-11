import LoginForm from '../../components/login-form/LoginForm'
import classes from "./login.module.scss";

const Login = () => {
  return (
    <div className={classes.login}>
      <LoginForm />
    </div>
  );
}

export default Login;
