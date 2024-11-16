import React from "react";
import ReviewIcon from "../../assets/img/Order/review.png";
import { useNavigate } from "react-router-dom";
const MenuBox = ({ menu, price }) => {
  const navigate = useNavigate();
  const GoOrderMenu = () => {
    navigate(`/order/${menu}`);
  };
  return (
    <div>
      <div className="flex-row menu-box" onClick={GoOrderMenu}>
        <div className="menu-img">
          <img
            src="https://mblogthumb-phinf.pstatic.net/MjAyMzA2MTRfMTQ0/MDAxNjg2NzA1MjUwMjI4._TxsNijstbohTvEXr-0jcn5AsZxAPLCg8aS_LOfHnHMg.F2hWLrqOk6hQ9qNWnuhw083jkxxWzfsXVdqlKbAY8TUg.JPEG.knh4185/IMG_9010.jpg?type=w800"
            className="img-width"
            alt="food-img"
          />
        </div>
        <div className="menu-detail flex-col">
          <div className="menu-name">{menu}</div>
          <div className="menu-subtxt">
            동파육은 포기못해♥ 셰프가 매일 삶는 감칠맛 최고 동파육 덮밥
          </div>
          <div className="menu-price">{price}</div>
          <div className="menu-review">
            <img src={ReviewIcon} alt="icon" className="icon-img" />
            <span>리뷰쓰기</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBox;
