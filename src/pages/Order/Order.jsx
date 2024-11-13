import React from "react";
import MapIcon from "../../assets/img/Order/map.png";
import CallIcon from "../../assets/img/Order/call.png";
import TimeIcon from "../../assets/img/Order/time.png";
import MenuBox from "../../components/Order/MenuBox";
import AlarmIcon from "../../assets/img/Order/alarm.png";
import HeartIcon from "../../assets/img/Order/heart.png";
import BackIcon from "../../assets/img/Nav/back.png";
const Order = () => {
  return (
    <div className="order-page">
      <div className="order-header">
        <img src={BackIcon} className="back-img" alt="img" />
        <span className="header-title">떠밥 강남점</span>
        <img src={AlarmIcon} className="alarm-img" alt="img" />
      </div>
      <div>
        <div className="order-top">
          <div className="restaurant-img">
            <img
              className="img-width"
              src="https://d12zq4w4guyljn.cloudfront.net/300_300_20230601035123_photo1_49cacd37483c.jpg"
              alt="shop-top-img"
            />
          </div>
          <div className="restaurant-info flex-col">
            <div className="info-heart-icon">
              <img src={HeartIcon} alt="img" className="heart-img" />
            </div>
            <div className="restaurant-title">떠밥 강남점</div>
            <div className="restaurant-star">⭐⭐⭐ 3.9</div>
            <div className="restaurant-place detail-txt">
              <img src={MapIcon} alt="icon" className="icon-img" />
              서울 강남구 강남대로84길 6 1층
            </div>
            <div className="restaurant-tel detail-txt">
              <img src={CallIcon} alt="icon" className="icon-img" />
              02-538-3011
            </div>
            <div className="restaurant-time detail-txt">
              <img src={TimeIcon} alt="icon" className="icon-img" />
              11:00-20:30
            </div>
          </div>
        </div>
        <div className="order-bottom">
          <div className="reco-menu">추천 메뉴</div>
          <MenuBox />
          <MenuBox />
          <MenuBox />
        </div>
      </div>
    </div>
  );
};

export default Order;
