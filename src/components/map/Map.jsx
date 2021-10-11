import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import classes from "./map.module.scss";

const Map = (props) => {
  const mapData = props.command.data;
  return (
    <MapContainer
      className={classes.map}
      center={[mapData.lat, mapData.lng]}
      zoom={14}
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
  );
};

export default Map;
