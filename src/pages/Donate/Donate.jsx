import { React, useState } from "react";
import OrderNavbar from "../../components/Nav/OrderNavbar";
import DonateBox from "../../components/Order/DonateBox";
import addDonate from "../../assets/img/Order/add-donate.png";
import { useNavigate } from "react-router-dom";
const Donate = () => {
  const navigate = useNavigate();
  const [selectPrice, setSelectPrice] = useState(12000);

  return (
    <div className="donate-page">
      <OrderNavbar text={"후원하기"} />
      <div className="donate-page-top">
        <DonateBox price={20000} date={"2024.11.11"} />
        <DonateBox price={30000} date={"2024.11.15"} />
        <div>
          <img src={addDonate} alt="img" className="img-width" />
        </div>
      </div>
      <div className="donate-btn-area">
        <div
          className="donate-btn"
          onClick={() =>
            navigate("/donate/finish", {
              state: { selectPrice },
            })
          }
        >
          금액권 후원하기
        </div>
      </div>
    </div>
  );
};
export default Donate;
