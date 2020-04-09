/*global kakao*/
/** @jsx jsx */
import { jsx,css } from '@emotion/core';
import { useEffect } from 'react';

const mapstyle = css`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  @media (min-width: 1024px) {
    /* pc */

  }
  @media (max-width: 1024px) {
    /* m */

  }
`;


const MapContent = ({ code1, code2  }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=22aba2e6fb8f29d985ca71300b7fb672&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById('Mymap');
        let options = {
          center: new kakao.maps.LatLng(code1, code2),
          level: 7,
        };

        new window.kakao.maps.Map(container, options);
      });
    };
  });

  return <div id="Mymap" css={mapstyle}></div>;
};

export default MapContent;
