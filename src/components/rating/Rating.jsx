import { Button } from "antd";
import classes from "./rating.module.scss";

const Rating = (props) => {
  const rangeStart = props.command.data[0];
  const rangeEnd = props.command.data[1];

  const range = rangeEnd - rangeStart + 1;

  return (
    <div className={classes.rating}>
      <h3>Please rate your experience : </h3>
      {[...Array(range)].map((item, i) => (
        <Button
          className={classes["rating__button"]}
          size="large"
          type="primary"
          key={i}
          onClick={() => props.sendMessage(i + 1)}
        >
          {i + 1}
        </Button>
      ))}
    </div>
  );
};

export default Rating;
