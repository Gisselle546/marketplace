import React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { resultsValue, geoValue, setDetail } from "@/redux/reducer/location";
import imageplace from "../../assets/images/placeholderimg.png";

const PopupCard = styled.div`
  width: 200px;
  cursor: pointer;
  font-family: "Inter", -apple-system, sans-serif;
`;

const PopupImage = styled.div<{ img: string }>`
  background: url(${(props) => props.img}) center/cover no-repeat;
  height: 110px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 6px;
`;

const PopupPrice = styled.p`
  font-size: 0.95rem;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 2px;
`;

const PopupDetails = styled.p`
  font-size: 0.72rem;
  color: #52525e;
  margin: 0 0 2px;
  font-weight: 500;
`;

const PopupAddress = styled.p`
  font-size: 0.7rem;
  color: #9d9daa;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PopupBadge = styled.span`
  font-size: 0.58rem;
  font-weight: 600;
  color: #fff;
  background: rgba(26, 26, 46, 0.75);
  padding: 2px 6px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  position: absolute;
  top: 6px;
  left: 6px;
`;

const PopupImageWrapper = styled.div`
  position: relative;
`;

function Map() {
  const { lat, lng } = useAppSelector(geoValue);
  const data = useAppSelector(resultsValue);
  const dispatch = useAppDispatch();

  function SetViewOnClick({ coords }: any) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
  }

  const flat = data.flatMap((card: any) =>
    !card.location?.address?.coordinate ? [] : card,
  );

  const list = flat.map((card: any, i: number) => {
    const { lat, lon } = card.location.address.coordinate;
    const imgSrc = card?.primary_photo?.href || imageplace.src;
    const price =
      card?.list_price?.toLocaleString("en-US") ||
      card?.list_price_min?.toLocaleString("en-US") ||
      "—";
    const desc = card?.description;
    const beds = desc?.beds ?? "—";
    const baths = desc?.baths_full ?? desc?.baths ?? "—";
    const sqft = desc?.sqft;
    const isRental = card?.status === "for_rent";

    const handleClick = () => {
      dispatch(setDetail(card));
    };

    return (
      <Marker key={card.property_id || i} position={[lat, lon]}>
        <Popup closeButton={false} maxWidth={220} minWidth={200}>
          <PopupCard onClick={handleClick}>
            <PopupImageWrapper>
              <PopupImage img={imgSrc} />
              <PopupBadge>{isRental ? "Rent" : "Sale"}</PopupBadge>
            </PopupImageWrapper>
            <PopupPrice>
              ${price}
              {isRental ? "/mo" : ""}
            </PopupPrice>
            <PopupDetails>
              {beds} bd &middot; {baths} ba
              {sqft ? <> &middot; {sqft.toLocaleString()} sqft</> : null}
            </PopupDetails>
            <PopupAddress>
              {card.location.address.line}, {card.location.address.city}
            </PopupAddress>
          </PopupCard>
        </Popup>
      </Marker>
    );
  });

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={11}
      scrollWheelZoom={true}
      zoomControl={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {list}
      <SetViewOnClick coords={[lat, lng]} />
    </MapContainer>
  );
}

export default Map;
