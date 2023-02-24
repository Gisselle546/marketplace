import React, {useState} from 'react';
import dynamic from "next/dynamic";
import { MapWrapper, Map, Description } from './index.style';
import {PageTemplate} from '@/templates/PageTemplate';
import Section  from './components/Section/Section';
import Modal from '@/components/Modal/Modal';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';



function Mappy() {
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
    <Modal show={false}/>
  
  

   </>
  );
}

export default Mappy;
