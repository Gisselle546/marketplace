import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; 
import 'leaflet-defaulticon-compatibility';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { locationValue } from '@/redux/reducer/location';
import { dummy_data } from '@/dummydata/data';

const Container = styled("div")<{img: any }>`
 background: url(${(props: any) => props.img}) center/cover;
 height: 2rem;
 width: 2rem;
`

function Map() {
  const {lat, lng} = useAppSelector(locationValue);
  const dispatch = useAppDispatch()
  
  
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            function( position ){ // success cb
                let data={ lat:position.coords.latitude, lng: position.coords.longitude}
            },
            function(){ // fail cb
            }
        );
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function SetViewOnClick({ coords }: any) {
      const map = useMap();
      map.setView(coords, map.getZoom());
    
      return null;
    }

    const list = dummy_data.map((card:any, i:any)=>{
      const {lat, lon}=card.location.address.coordinate
      return <>
          <Marker position={[lat, lon]}>
              <Popup>
              ${card.list_price.toLocaleString("en-US")}
              <div style={{padding:'0.3rem', cursor:'pointer'}}>
              <Container img={card.primary_photo.href}></Container>
              {card.location.address.line}
              </div>
              </Popup>
          </Marker>
          </>
    })
   
  return (
    <MapContainer
      center={[lat,lng]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}
    >
      <TileLayer 
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {
        list
      }
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