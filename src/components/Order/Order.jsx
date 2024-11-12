import React from "react";

const Order = () => {
  return (
    <div className="order-page">
      <div className="order-header"></div>
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
            <div className="restaurant-title">떠밥 강남점</div>
            <div className="restaurant-star">⭐⭐⭐ 3.9</div>
            <div className="restaurant-place detail-txt">
              서울 강남구 강남대로84길 6 1층
            </div>
            <div className="restaurant-tel detail-txt">02-538-3011</div>
            <div className="restaurant-time detail-txt">11:00-20:30</div>
          </div>
        </div>
        <div className="order-bottom">
          <div className="reco-menu">추천 메뉴</div>
          <div className="flex-row ">
            <div className="menu-img">
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAyMzA2MTRfMTQ0/MDAxNjg2NzA1MjUwMjI4._TxsNijstbohTvEXr-0jcn5AsZxAPLCg8aS_LOfHnHMg.F2hWLrqOk6hQ9qNWnuhw083jkxxWzfsXVdqlKbAY8TUg.JPEG.knh4185/IMG_9010.jpg?type=w800"
                className="img-width"
                alt="food-img"
              />
            </div>
            <div className="menu-detail">
              <div className="menu-name">(BEST) 동파육 덮밥</div>
              <div>
                동파육은 포기못해♥ 셰프가 매일 삶는 감칠맛 최고 동파육 덮밥
              </div>
              <div>10,000원</div>
              <div>
                <img src="" alt="icon" />
                <span>리뷰쓰기</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
