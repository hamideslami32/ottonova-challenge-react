import { Button, Divider } from "antd";
import CompleteConfirm from "../../components/complete-confirm/CompleteConfirm";
import Rating from "../../components/rating/Rating";
import DayPicker from "../../components/day-picker/DayPicker";
import Map from "../../components/map/Map";

import classes from "./home.module.scss";

function Home(props) {
  return (
    <div className={classes.home}>
      {
        <>
          <h1 htmlFor="message">Enter Message</h1>
          <input
            type="text"
            name="message"
            id="message"
            value={props.message}
            onChange={(e)=> props.setMessage(e.target.value)}
          />
          <Button
            type="primary"
            onClick={() => {
              props.sendMessage(props.message);
            }}
          >
            Send Message
          </Button>
          <Button
            type="primary"
            onClick={() => {
              props.sendCommand();
            }}
          >
            Random Command
          </Button>
          <h1>
            Message: <br />
            {props.response && props.response}
          </h1>
          <Divider />
          <h1>
            Command:{" "}
            <span className={classes["command-title"]}>
              {props.command?.type}
            </span>
          </h1>
          {props.command?.type === "map" && <Map {...props} />}
          {props.command?.type === "rate" && <Rating {...props} />}
          {props.command?.type === "date" && <DayPicker {...props} />}
          {props.command?.type === "complete" && <CompleteConfirm {...props} />}
        </>
      }
    </div>
  );
}

export default Home;
