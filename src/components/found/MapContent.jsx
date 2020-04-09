/*global kakao*/
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useEffect } from 'react';

const mapstyle = css`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: 1px solid #aaa;
  @media (min-width: 1024px) {
    /* pc */
  }
  @media (max-width: 1024px) {
    /* m */
  }
`;

const MapContent = ({ code1, code2 }) => {
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

        let map = new window.kakao.maps.Map(container, options);

        // 마커가 표시될 위치입니다
        let markerPosition = new window.kakao.maps.LatLng(code1, code2);

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  });

  return <div id="Mymap" css={mapstyle}></div>;
};

export default MapContent;
