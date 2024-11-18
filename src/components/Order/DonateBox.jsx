import React from "react";
import Price1 from "../../assets/img/Order/price/1.png";
import Price2 from "../../assets/img/Order/price/2.png";
import Price3 from "../../assets/img/Order/price/3.png";

const DonateBox = ({ price, date }) => {
  let priceImg;

  if (price <= 10000) {
    priceImg = Price1;
  } else if (price >= 11000 && price <= 20000) {
    priceImg = Price2;
  } else if (price >= 21000) {
    priceImg = Price3;
  } else {
    priceImg = Price3;
  }
  const formattedPrice = price.toLocaleString();

  return (
    <div className="donate-price-box">
      <div className="donate-price-img">
        <img src={priceImg} alt="img" className="img-width" />
      </div>
      <div className="donate-price-detail">
        <div className="yellow">{formattedPrice}원권</div>
        <div className="date">후원날짜 {date}</div>
      </div>
      <div className="donate-checkbox">
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default DonateBox;
