import React, { useEffect } from "react";

function MapView({ places }) {
  useEffect(() => {
    const kakao = window.kakao;
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5665, 126.978), //Seoul default
      level: 7,
    };

    const map = new kakao.maps.Map(container, options);

    //add markers
    places.forEach((place) => {
      const marker = new kakao.maps.Marker({
        map,
        position: new kakao.maps.LatLng(place.lat, place.lng),
        title: place.title,
      });

      //optional: add info window
      const infoWindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px;font-size:12px;">${place.title}</div>`,
      });
      //마커에 마우스오버 이벤트 등록
      kakao.maps.event.addListener(marker, "mouseover", () =>
        infowindow.open(map, marker)
      );
      //마커에 마우스아웃 이벤트 등록
      kakao.maps.event.addListener(marker, "mouseout", () =>
        infowindow.close()
      );
    });
  }, [places]);

  return (
    <div>
      <h3>Map of Search Results</h3>
      <div
        id="map"
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "12px",
        }}
      ></div>
    </div>
  );
}

export default MapView;
