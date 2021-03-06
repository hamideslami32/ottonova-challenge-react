import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Button } from "antd";
import classes from "./map.module.scss";

const Map = (props) => {
  const mapData = props.command.data;
  return (
    <>
      <h2>This is your location? : </h2>
      <MapContainer
        className={classes.map}
        center={[mapData.lat, mapData.lng]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "300px", width: "100%" }}
      >
        <TileLayer
          attribution="www.ottonova.de"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[mapData.lat, mapData.lng]}>
          <Popup>Knowledge is power.</Popup>
        </Marker>
      </MapContainer>

      <Button
        className={classes["map__button"]}
        size="large"
        type="primary"
        onClick={() => props.sendMessage("Yes")}
      >
        Yes
      </Button>
    </>
  );
};

export default Map;
