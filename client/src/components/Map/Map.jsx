import { MapContainer, TileLayer, Marker } from "react-leaflet";
import PropTypes from "prop-types";
import "./Map.scss";

const Map = ({ coords }) => {
  return (
    <MapContainer
      center={coords}
      zoom={2}
      scrollWheelZoom={true}
      className="map"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={coords}></Marker>
    </MapContainer>
  );
};

Map.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Map;
