import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "./Map.scss";

const Map = ({ coords }) => {
  return (
    <MapContainer
      center={coords}
      zoom={2}
      scrollWheelZoom={true}
      className="Map"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={coords}>
        <icon />
        <iconShadow />
      </Marker>
    </MapContainer>
  );
};

export default Map;
