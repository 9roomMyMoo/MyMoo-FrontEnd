import React from "react";
import OrderNavbar from "../../components/Nav/OrderNavbar";
import ShopSuccessImg from "../../assets/img/Order/shop-success.png";
import RecoBox from "../../components/Order/RecoBox";
import { useLocation } from "react-router-dom";
const ShopFinish = () => {
  const location = useLocation();
  console.log(location.state.scannedData);
  return (
    <div className="orderfinish-page">
      <OrderNavbar text={"주문완료"} />
      <div className="orderfinish-top">
        <div className="success-img">
          <img src={ShopSuccessImg} alt="img" className="img-width" />
        </div>

        <div className="btn-area">
          <div className="thanks-btn">홈으로</div>
          <div className="orderlist-btn">후원 내역 보기</div>
        </div>
        <div className="orderfinish-detail">
          <div className="detail-txt">
            <span>사용처</span>
            <span className="grey">한솥도시락 신설동역점</span>
          </div>
          <div className="detail-txt">
            <span>금액권 후원자</span>
            <span className="grey">이*림</span>
          </div>
          <div className="detail-txt">
            <span className="medium">결제금액</span>
            <span className="black bolder">12,000원</span>
          </div>
        </div>
      </div>
      <div className="orderfinish-bottom">
        <div className="reco-title">미르미님이 좋아할 만한 다른 식당</div>
        <div className="reco-area">
          <RecoBox />
          <RecoBox />
          <RecoBox />
        </div>
      </div>
    </div>
  );
};
export default ShopFinish;
