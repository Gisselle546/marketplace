import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; 
import 'leaflet-defaulticon-compatibility';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { locationValue, addlocation } from '@/redux/reducer/location';


function Map() {
  const {lat, lng} = useAppSelector(locationValue);
  const dispatch = useAppDispatch()

  
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            function( position ){ // success cb
                let data={ lat:position.coords.latitude, lng: position.coords.longitude}
                dispatch(addlocation(data))
            },
            function(){ // fail cb
            }
        );
    
    }, [lat,lng, dispatch])

    function SetViewOnClick({ coords }: any) {
      const map = useMap();
      map.setView(coords, map.getZoom());
    
      return null;
    }
   
  return (
    <MapContainer
      center={[lat,lng]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer 
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
       <Marker position={[lat, lng]}>
           <Popup>Hey ! I live here</Popup>
       </Marker>
       <SetViewOnClick
        coords={[
         lat,
         lng
        ]}
      />
       
    </MapContainer>
  )
}

export default Map