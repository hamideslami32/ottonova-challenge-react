import { Button } from "antd";
import classes from './complete-confirm.module.scss'

const CompleteConfirm = (props) => {
  const answers = ["Yes", "No"];
  
  return (
    <div className={classes.completeConfirm}>
      {answers.map((answer) => (
        <Button
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
