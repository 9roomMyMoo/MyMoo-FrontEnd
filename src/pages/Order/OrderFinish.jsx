import React from "react";
import OrderNavbar from "../../components/Nav/OrderNavbar";
import SuccessImg from "../../assets/img/Order/success.png";
import RecoBox from "../../components/Order/RecoBox";
const OrderFinish = () => {
  return (
    <div className="orderfinish-page">
      <OrderNavbar text={"주문완료"} />
      <div className="orderfinish-top">
        <div className="success-img">
          <img src={SuccessImg} alt="img" className="img-width" />
        </div>
        <div className="success-title">주문이 완료되었습니다</div>
        <div className="btn-area">
          <div className="home-btn">홈으로</div>
          <div className="orderlist-btn">주문 내역 보기</div>
        </div>
        <div className="orderfinish-detail">
          <div className="detail-txt">
            <span>주문내역</span>
            <span className="grey">동파육덮밥 x 1</span>
          </div>
          <div className="detail-txt">
            <span>주문금액</span>
            <span className="grey">10,000원</span>
          </div>
          <div className="detail-txt">
            <span>쿠폰할인</span>
            <span className="grey">-0원</span>
          </div>
          <div className="detail-txt">
            <span>포인트 사용</span>
            <span className="grey">10,000p</span>
          </div>
          <div className="detail-txt">
            <span>결제 금액</span>
            <span className="grey">10,000원</span>
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
export default OrderFinish;
