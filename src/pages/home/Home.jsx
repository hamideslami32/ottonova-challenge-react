import { useState, useEffect } from "react";
import useAuth from "../../auth/useAuth";
import { Input, Button, Divider } from "antd";
import CompleteConfirm from "../../components/complete-confirm/CompleteConfirm";
import Rating from "../../components/rating/Rating";
import DayPicker from "../../components/day-picker/DayPicker";
import Map from "../../components/map/Map";

import classes from "./home.module.scss";

const Home = () => {

  const auth = useAuth();

  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [command, setCommand] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);

  const widgetsShowed = []

  useEffect(() => {
    const newSocket = io("https://demo-chat-server.on.ag/");
    console.log({ newSocket });
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    const getData = () => {
      socket?.on("message", (res) => setResponse(res.message));
      socket?.on("command", (res) => {
        if(widgetsShowed.length === 4) {
          setSelectedOption('You can see every widget only once. Maybe next time :)')
          return;
        }
        if (widgetsShowed.includes(res.command.type)) sendCommand()
        else {
          widgetsShowed.push(res.command.type)
          setCommand(res.command);
        }
      });
    };
    getData();
  }, [socket]);

  const sendMessage = (m, option = true) => {
    socket?.emit("message", {
      author: auth.user.username,
      message: m,
    });
    if (option) setSelectedOption(m);
    else {
      setCommand({});
      setSelectedOption(null);
    }
  };

  const reset = () => {
    setSelectedOption(null);
    setCommand({});
    setMessage("");
    setResponse("");
  };

  const sendCommand = () => {
    reset();
    socket?.emit("command");
  };

  const props = {
    sendCommand,
    sendMessage,
    setMessage,
    setSelectedOption,
    command,
    response,
    message,
  };

  let widget = null;
  if (command?.type) {
    switch (command?.type) {
      case "map":
        widget = <Map {...props} />;
        break;
      case "rate":
        widget = <Rating {...props} />;
        break;
      case "date":
        widget = <DayPicker {...props} />;
        break;
      case "complete":
        widget = <CompleteConfirm {...props} />;
        break;
    }
  }

  return (
    <div className={classes.home}>
      {
        <>
          <h2 htmlFor="message">Enter Message</h2>
          <Input
            type="text"
            className={classes["home__input"]}
            size="large"
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            className={classes["home__button"]}
            type="primary"
            size="large"
            onClick={() => {
              sendMessage(message, false);
            }}
          >
            Send Message
          </Button>
          <Button
            className={classes["home__button"]}
            type="primary"
            size="large"
            onClick={() => {
              sendCommand();
            }}
          >
            Random Command
          </Button>
          <h1>
            Message: <br />
            <span className={classes["home__command-type"]}>
              {response}
            </span>
          </h1>
          <Divider />
          <h1>
            Command:{" "}
            <span className={classes["home__command-type"]}>
              {command?.type}
            </span>
          </h1>
          {selectedOption ? (
            <h1>
              {auth.user.username}, {selectedOption}
            </h1>
          ) : (
            widget
          )}
        </>
      }
    </div>
  );
};

export default Home;
