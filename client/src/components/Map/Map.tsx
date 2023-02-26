import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; 
import 'leaflet-defaulticon-compatibility';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { locationValue, geoValue, getDetailsData } from '@/redux/reducer/location';






const Container = styled("div")<{img: any }>`
 background: url(${(props: any) => props.img}) center/cover;
 height: 2rem;
 width: 2rem;
`

function Map() {
  const {lat, lng} = useAppSelector(geoValue);
  const data = useAppSelector(locationValue);
  const dispatch = useAppDispatch();
  
    function SetViewOnClick({ coords }: any) {
      const map = useMap();
      map.setView(coords, map.getZoom());
    
      return null;
    }

    

    const flat = data.flatMap((card:any) => !card.location.address.coordinate ? [] : card);
    
    const list = flat.map((card:any, i:any)=>{
      
      const {lat, lon}=card.location.address.coordinate

      const handleClick = () =>{

        dispatch(getDetailsData(card.property_id))
       }
      
      return <>
          <Marker position={[lat, lon]}>
              <Popup>
              ${card?.list_price.toLocaleString("en-US")}
              <div onClick= {handleClick} style={{padding:'0.3rem', cursor:'pointer'}}>
              <Container img={card?.primary_photo?.href}></Container>
                {card.location.address.line}
              </div>
              </Popup>
          </Marker>
          </>
    })
    
  return (
    <>
    <MapContainer
      center={[lat,lng]}
      zoom={11}
      scrollWheelZoom={false}
      zoomControl={false}
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
   
    </>
  )
}

export default Map