import React from "react";
import { useState } from "react";
import Price1 from "../../assets/img/Order/price/1.png";
import MapIcon from "../../assets/img/Order/map.png";
import CallIcon from "../../assets/img/Order/call.png";
import TimeIcon from "../../assets/img/Order/time.png";
import MenuBox from "../../components/Order/MenuBox";
import HeartIcon from "../../assets/img/Order/heart.png";
import OrderNavbar from "../../components/Nav/OrderNavbar";
const Order = () => {
  const [selectId, setSelectId] = useState(1);
  const menuSelect = (id) => {
    setSelectId(id);
  };
  return (
    <div className="order-page">
      <OrderNavbar text="떠밥 강남점" />
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
            <div className="price-area">
              <div className="cum-price">
                누적 후원금 <span className="bolder">350,000원</span>
              </div>
              <div className="total-price">
                총 후원금 <span className="yellow bolder">125,000원</span>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-bar">
          <div
            onClick={() => menuSelect(1)}
            className={`toggle ${selectId === 1 ? "select" : ""}`}
          >
            메뉴
          </div>
          <div
            onClick={() => menuSelect(2)}
            className={`toggle ${selectId === 2 ? "select" : ""}`}
          >
            금액권 목록
          </div>
          <div
            onClick={() => menuSelect(3)}
            className={`toggle ${selectId === 3 ? "select" : ""}`}
          >
            리뷰
          </div>
        </div>
        <div className="order-bottom">
          {selectId === 1 && (
            <div className="menu-1-area">
              <div className="reco-menu">추천 메뉴</div>
              <MenuBox menu="(BEST) 동파육 덮밥" price="12,000원" />
              <MenuBox menu="(BEST) 갈비 덮밥" price="11,000원" />
              <MenuBox menu="마파두부 덮밥" price="11,000원" />
            </div>
          )}
          {selectId === 2 && (
            <div className="menu-2-area">
              <div className="reco-menu">금액권</div>
              <div className="donate-price-box">
                <div className="donate-price-img">
                  <img src={Price1} alt="이미지" className="img-width" />
                </div>
                <div className="donate-price-detail">
                  <div className="donate-price-title">5000원권</div>
                  <div className="price-donator">후원자 이*림님</div>
                  <div className="donate-price-date">후원날짜 2024.11.11</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
