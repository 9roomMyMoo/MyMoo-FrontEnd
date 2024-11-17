import React, { useEffect } from "react";
import LocateIcon from "../../assets/img/Map/locate.svg";
import BackIcon from "../../assets/img/Map/back.svg";
import SearchIcon from "../../assets/img/Map/Search.svg";
import AlarmIcon from "../../assets/img/Map/alarm.svg";

const Map = () => {
  useEffect(() => {
    const loadKakaoMap = () => {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1b4b306e390784f8a3c3b2430f6afd45&libraries=services`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        const handleCurrentLocation = () => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                const locPosition = new window.kakao.maps.LatLng(latitude, longitude);
                map.panTo(locPosition);
              },
              () => alert("Unable to retrieve location information.")
            );
          } else {
            alert("Your browser does not support geolocation.");
          }
        };

        document
          .getElementById("locate-icon")
          .addEventListener("click", handleCurrentLocation);
      };
    };

    loadKakaoMap();
  }, []);

  return (
    <div className="map-container">
      <div className="top-bar">
        <img src={BackIcon} alt="Back" className="icon back-icon" />
        <img src={SearchIcon} alt="Search" className="icon search-icon" />
        <img src={AlarmIcon} alt="Alarm" className="icon alarm-icon" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="지역명을 검색해보세요." />
        <img src={SearchIcon} alt="Search" className="icon search-icon" />
      </div>
      <div id="map" className="map"></div>
      <img
        src={LocateIcon}
        alt="Locate Me"
        id="locate-icon"
        className="locate-icon"
      />
    </div>
  );
};

export default Map;
