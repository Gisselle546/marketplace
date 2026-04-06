import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { MapWrapper, Map, Description } from "../../styles/map/index.style";
import { PageTemplate } from "@/templates/PageTemplate";
import Section from "../../components/Section/Section";
import Modal from "@/components/Modal/Modal";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  detailsValue,
  paramsValue,
  geoValue,
  hasSearchedValue,
  geolocateUser,
  getRealEstateData,
} from "@/redux/reducer/location";

const MapWithNoSSR = dynamic(() => import("../../components/Map/Map"), {
  ssr: false,
});

const NoSSRCardList = dynamic(
  () => import("../../components/CardList/CardList"),
  {
    ssr: false,
  },
);

function Mappy() {
  const [mounted, setMounted] = useState(false);
  const data = useAppSelector(detailsValue);
  const params = useAppSelector(paramsValue);
  const geo = useAppSelector(geoValue);
  const hasSearched = useAppSelector(hasSearchedValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // If the user hasn't searched this session, geolocate and fetch for their city
    if (!hasSearched) {
      (async () => {
        const geoResult = await dispatch(geolocateUser());
        let searchParams = { ...params };
        let searchGeo = geo;
        if (geolocateUser.fulfilled.match(geoResult)) {
          const { city, state_code, lat, lng } = geoResult.payload;
          searchParams = { ...searchParams, city, state_code };
          searchGeo = { lat, lng };
        }
        dispatch(
          getRealEstateData({
            type: searchParams.type || "sale",
            data: { ...searchParams, geo: searchGeo },
          }),
        );
      })();
    }
  }, [mounted]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!mounted) return null;

  return (
    <>
      <ProtectedRoute>
        <PageTemplate type="map">
          <Section />
          <MapWrapper>
            <Description>
              <NoSSRCardList />
            </Description>
            <Map>
              <MapWithNoSSR />
            </Map>
          </MapWrapper>
        </PageTemplate>
      </ProtectedRoute>
      <Modal show={data !== null && data !== undefined} />
    </>
  );
}

export default Mappy;
