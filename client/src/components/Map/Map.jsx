import { MapContainer, TileLayer, Marker } from "react-leaflet";
import PropTypes from "prop-types";
import L from "leaflet";
import "./Map.scss";

// marker icons
import markerIconUrl from "/marker-icon.png";
import markerShadowUrl from "/marker-shadow.png";

const myMarkerIcon = new L.Icon({
  iconUrl: markerIconUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: markerShadowUrl,
  shadowSize: [41, 41],
  shadowAnchor: [13, 41],
});

const Map = ({ coords }) => {
  return (
    <MapContainer
      center={coords}
      zoom={2}
      scrollWheelZoom={true}
      className="map"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={coords} icon={myMarkerIcon}></Marker>
    </MapContainer>
  );
};

Map.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Map;
