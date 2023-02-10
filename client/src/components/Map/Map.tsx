import React, {useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";


function Map() {
   
  return (
    <MapContainer
      center={[40.8054, -74.0241]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer 
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
       <Marker
          
          position={[40.8054, -74.0241]}
          
        >
            <Popup>Hey ! I live here</Popup>
        </Marker>
       
    </MapContainer>
  )
}

export default Map