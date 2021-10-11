import { Button } from "antd";
import classes from "./complete-confirm.module.scss";

const CompleteConfirm = (props) => {
  const answers = ["Yes", "No"];

  return (
    <div className={classes.completeConfirm}>
      <h2>Do you want to close conversation? : </h2>
      {answers.map((answer) => (
        <Button
          className={classes["completeConfirm__button"]}
          size="large"
          type="primary"
          key={answer}
          onClick={() => props.sendMessage(answer)}
        >
          {answer}
        </Button>
      ))}
    </div>
  );
};

export default CompleteConfirm;
