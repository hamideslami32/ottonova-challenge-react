import LoginForm from '../../components/login-form/LoginForm'
import classes from "./login.module.scss";

function Login(props) {
  return (
    <div className={classes.login}>
      <LoginForm />
    </div>
  );
}

export default Login;
