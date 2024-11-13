import React from "react";
import AlarmIcon from "../../assets/img/Order/alarm.png";
import BackIcon from "../../assets/img/Nav/back.png";
const OrderNavbar = ({ text }) => {
  return (
    <div>
      <div className="order-header">
        <img src={BackIcon} className="back-img" alt="img" />
        <span className="header-title">{text}</span>
        <img src={AlarmIcon} className="alarm-img" alt="img" />
      </div>
    </div>
  );
};

export default OrderNavbar;
