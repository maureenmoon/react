import React, { useEffect, useRef } from "react";

const MapDetail = ({ mapx, mapy, title }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const kakao = window.kakao;
    if (!kakao || !mapContainer.current || !mapx || !mapy) return;

    // const center = new kakao.maps.LatLng(mapy, mapx);
    const center = new kakao.maps.LatLng(Number(mapy), Number(mapx));
    const map = new kakao.maps.Map(mapContainer.current, {
      center,
      level: 5,
    });

    new kakao.maps.Marker({ map, position: center, title });
  }, [mapx, mapy, title]);

  return <div ref={mapContainer} style={{ width: "100%", height: "400px" }} />;
};

export default MapDetail;
