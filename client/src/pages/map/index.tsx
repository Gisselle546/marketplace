import React, {useState} from 'react';
import dynamic from "next/dynamic";


function Mappy() {
  const MapWithNoSSR = dynamic(() => import("../../components/Map/Map"), {
    ssr: false
  });

  return (
    <div id="map">
        <MapWithNoSSR/>
    </div>
  );
}

export default Mappy;
