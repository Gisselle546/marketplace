import React from 'react';
import dynamic from "next/dynamic";
import { MapWrapper, Map, Description } from './index.style';
import {PageTemplate} from '@/templates/PageTemplate';
import Section  from '../../components/Section/Section';
import Modal from '@/components/Modal/Modal';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import { useAppSelector } from '@/redux/hooks';
import { detailsValue } from '@/redux/reducer/location';


function Mappy() {
  const data = useAppSelector(detailsValue);
  
  const MapWithNoSSR = dynamic(() => import("../../components/Map/Map"), {
    ssr: false
  });

  const NoSSRCardList = dynamic(() => import("../../components/CardList/CardList"), {
    ssr: false
  });
  

  return (
    <>
   <ProtectedRoute>
    <PageTemplate type="map">
      <Section/>
      <MapWrapper>
          <Description>
             <NoSSRCardList/>
          </Description>
          <Map>
            <MapWithNoSSR/>
          </Map>
      </MapWrapper> 
    </PageTemplate>
    </ProtectedRoute>
    <Modal show={data  === null ? false : true}/>
  
  

   </>
  );
}

export default Mappy;
