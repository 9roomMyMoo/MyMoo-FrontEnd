import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import NoticeImg from "../../assets/img/Order/notice.png";
const OrderPay = () => {
  const navigate = useNavigate();
  return (
    <div className="orderpay-page">
      <div className="orderpay-top">
        <div className="menu-name">
          <div className="menu-place">한솥도시락 신설동점</div>
          (BEST)동파육 덮밥
        </div>
        <div className="Qr-zone">
          <QRCodeCanvas
            className="Qr-img"
            onClick={() => navigate("/finish")}
            value={"주문 완료!"}
          />
        </div>
        <div className="timer-zone">02:29</div>
        <div className="notice-txt">화면 밝기를 최대로 올려주세요.</div>
      </div>
      <div className="orderpay-bottom">
        <div className="notice-title">사용 방법</div>
        <div className="notice-box">
          <img src={NoticeImg} alt="img" className="img-width" />
        </div>
      </div>
    </div>
  );
};
export default OrderPay;
