import React from "react";
import { useState, useEffect } from "react";
import PriceBox from "../../components/Order/PriceBox";
import MapIcon from "../../assets/img/Order/map.png";
import CallIcon from "../../assets/img/Order/call.png";
import TimeIcon from "../../assets/img/Order/time.png";
import MenuBox from "../../components/Order/MenuBox";
import HeartIcon from "../../assets/img/Order/heart.png";
import OrderNavbar from "../../components/Nav/OrderNavbar";
import { useNavigate } from "react-router-dom";
const Order = () => {
  const navigate = useNavigate();
  const [menuCnt, setMenuCnt] = useState(0);
  const [storeInfo, setStoreInfo] = useState([]);
  const [menuArr, setMenuArr] = useState([]);
  const [donateData, setDonateDate] = useState([]);
  const token = `eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MzIyMDA2MTYsImV4cCI6MTczMjIwMjQxNiwidXNlcklkIjoyLCJhdXRoIjoiRE9OQVRPUiJ9.5GiYMzzyEF1ZfleX_7hjAWXrhhoyCfrX3s9vFLOzt0XB-JdOMBIJBzxWrRaFl1Dq38BKpS9fpXvcV4dzQx0drQ`;
  // 가게 정보
  const fetchStore = () => {
    fetch(`https://api.mymoo.site/api/v1/stores/1`, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Response status:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setStoreInfo(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  // 메뉴판
  const fetchMenus = () => {
    fetch(`https://api.mymoo.site/api/v1/stores/1/menus`, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Response status:", response.status);
        return response.json();
      })
      .then((data) => {
        setMenuCnt(data.total_count);
        setMenuArr(data.menus);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // 메뉴판
  const fetchDonates = () => {
    fetch(`https://api.mymoo.site/api/v1/donations/stores/3`, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Response status:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setDonateDate(data.donations);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  // fetchDashpage 호출을 useEffect 내부로 이동
  useEffect(() => {
    fetchStore();
    fetchMenus();
    fetchDonates();
  }, []); // 빈 배열([])로 설정해 컴포넌트가 마운트될 때 한 번만 실행

  const [selectId, setSelectId] = useState(1);
  const menuSelect = (id) => {
    setSelectId(id);
  };
  return (
    <div className="order-page">
      <OrderNavbar text={storeInfo.name} />
      <div>
        <div className="order-top">
          <div className="restaurant-img">
            <img
              className="img-width"
              src={storeInfo.imagePath}
              alt="shop-top-img"
            />
          </div>
          <div className="restaurant-info flex-col">
            <div className="info-heart-icon">
              <img src={HeartIcon} alt="img" className="heart-img" />
            </div>
            <div className="restaurant-title">{storeInfo.name}</div>
            <div className="restaurant-star">⭐⭐⭐ 3.9</div>
            <div className="restaurant-place detail-txt">
              <img src={MapIcon} alt="icon" className="icon-img" />
              {storeInfo.address}
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
                누적 후원금{" "}
                <span className="bolder">{storeInfo.allDonation}원</span>
              </div>
              <div className="total-price">
                총 후원금{" "}
                <span className="yellow bolder">
                  {storeInfo.usableDonation}원
                </span>
              </div>
            </div>
            <div className="donate-btn" onClick={() => navigate("/donate")}>
              식당 후원하기
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
              <div className="reco-menu-area">
                <div className="reco-menu">추천 메뉴</div>
                {menuArr.map((menu) => (
                  <MenuBox
                    key={menu.id}
                    menu={menu.name}
                    price={menu.price}
                    img={menu.imagePath}
                    des={menu.description}
                  />
                ))}
              </div>
              <div className="add-menu-area">
                <div className="add-menu">추가 메뉴</div>
                <MenuBox
                  menu="음료수"
                  price={2000}
                  img={
                    "https://i.namu.wiki/i/UUUicJzYIISF6z27yGzgl6c-2vdffpFx0fPSI1gWx00LShUqTOUd5z9mYqPsmO-o8NM5ED6tOVwIa4Jz7NIJ4Q.webp"
                  }
                  des={"시원한 음료수"}
                />
                <MenuBox
                  menu="단무지"
                  price={1000}
                  img={
                    "https://ppss.kr/wp-content/uploads/2016/07/0-540x360.jpg"
                  }
                  des={"시원한 단무지"}
                />
              </div>
            </div>
          )}
          {selectId === 2 && (
            <div className="menu-2-area">
              <div className="donate-rate">5000-10000원</div>
              {donateData.map((donate) => (
                <PriceBox
                  price={donate.point}
                  donator={donate.donator}
                  date={donate.donatedAt}
                  place={storeInfo.name}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
