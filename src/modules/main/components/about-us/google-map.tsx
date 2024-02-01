import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FC } from "react";

interface GoogleMapItemProps {}

export const GoogleMapItem: FC<GoogleMapItemProps> = ({}) => {
  const mapStyles = {
    height: "500px",
    width: "500px",
  };

  const defaultCenter = {
    lat: 49.785828,
    lng: 30.128792,
  };

  const defaultMarker = {
    lat: 49.785828,
    lng: 30.128792,
    text: "Vroda",
  };

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyBVvMJ-rik-eo-kFd1-CdObwDYrMIPaTwY">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={18}
          center={defaultCenter}
        >
          <Marker position={defaultMarker} label={defaultMarker.text} />{" "}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
