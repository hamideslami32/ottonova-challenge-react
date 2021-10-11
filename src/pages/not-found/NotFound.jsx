import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";
import classes from "./not-found.module.scss";

const notFound = () => {
  const history = useHistory();
  return (
    <Result
      className={classes.notFound}
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button size="large" type="primary" onClick={() => history.push("/")}>
          Back Home
        </Button>
      }
    />
  );
};

export default notFound;
