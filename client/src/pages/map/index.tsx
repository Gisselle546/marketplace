import React, {useState} from 'react';
import dynamic from "next/dynamic";
import { MapWrapper, Map, Description } from './index.style';
import {PageTemplate} from '@/templates/PageTemplate';
import CardList from '@/components/CardList/CardList';
import { Section } from './components/Section/Section';


function Mappy() {
  const MapWithNoSSR = dynamic(() => import("../../components/Map/Map"), {
    ssr: false
  });


  return (
    <PageTemplate type="map">
      <Section/>
      <MapWrapper>
          <Description>
             <CardList/>
          </Description>
          <Map>
            <MapWithNoSSR/>
          </Map>
      </MapWrapper>
    </PageTemplate>
  );
}

export default Mappy;
