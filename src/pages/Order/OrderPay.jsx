import { React, useState } from "react";
import NoticeImg from "../../assets/img/Order/notice.png";
import Price1 from "../../assets/img/Order/price/1.png";
import QrZone from "../../components/Order/QrZone";
const OrderPay = () => {
  const [isShow, setIsShow] = useState(0);
  const closeQrBox = () => {
    console.log("d");
    setIsShow(0);
  };
  return (
    <div className="orderpay-page">
      {isShow ? <QrZone onClose={closeQrBox} /> : null}
      <div className="orderpay-top">
        <div className="menu-name">
          <div className="menu-place">한솥도시락 신설동점</div>
          1,0000원권
          <div className="menu-place">후원자 이*림님</div>
        </div>
        <div>
          <img src={Price1} alt="img" className="img-width" />
        </div>
        <div className="orderpay-notice">
          유의사항
          <br />
          -사용 후 잔액은 현금화하실 수 없습니다
          <br />
          -본 금액권은 타인에게 양도 및 판배할 수 없습니다.
        </div>
        <div className="orderpay-btn" onClick={() => setIsShow(1)}>
          금액권 사용하기
        </div>
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
