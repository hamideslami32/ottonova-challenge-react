import { Button } from "antd";
import classes from "./day-picker.module.scss";

const DayPicker = (props) => {
  let activeDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const startDate = new Date(props.command.data).getDay();

  if (startDate !== 0 && startDate !== 6) {
    const xDays = activeDays.splice(0, startDate - 1);
    activeDays = [...activeDays, ...xDays];
  }

  return (
    <div className={classes.dayPicker}>
      <h2>Please pick a day : </h2>
      {activeDays.map((day) => (
        <Button
          className={classes["dayPicker__button"]}
          size="large"
          type="primary"
          key={day}
          onClick={() => props.sendMessage(day)}
        >
          {day}
        </Button>
      ))}
    </div>
  );
};

export default DayPicker;
