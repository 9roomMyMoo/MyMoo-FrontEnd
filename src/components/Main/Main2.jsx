import React, { useEffect, useState } from "react";
import AlarmIcon from "../../assets/img/Main/alarm.svg";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../assets/img/Main/Search.svg";
import RightDirectionIcon from "../../assets/img/Main/right direction.svg";
import Ad1Icon from "../../assets/img/Main/ad.svg";
import Ad2Icon from "../../assets/img/Main/ad.svg";
import Ad3Icon from "../../assets/img/Main/ad.svg";
import RecentImg from "../../assets/img/Main/recent.svg";
import ShopCard from "./ShopCard";
import DonationCard from "./Donation";
import Rank from "./Rank";

// 테스트용 더미 데이터
const dummyRecentShops = [
  {
    id: 1,
    name: "신전 떡볶이 강남점",
    rating: 4.2,
    img: RecentImg,
  },
  {
    id: 2,
    name: "한솥 도시락",
    rating: 4.0,
    img: RecentImg,
  },
  {
    id: 3,
    name: "부산 돼지국밥",
    rating: 4.5,
    img: RecentImg,
  },
];

const user = {
  name: "이*림님",
  birthYear: "92년생",
  gender: "여",
  rank: 23,
  donationAmount: "115,000원",
  lastDonationDate: "2024.11.23",
};

const topRankers = [
  {
    rank: 1,
    name: "이*진님",
    birthYear: "00년생",
    gender: "여",
    donationAmount: 350000, 
    lastDonationDate: "2024.11.23",
    avatar: "https://via.placeholder.com/50",
  },
  {
    rank: 2,
    name: "김*유님",
    birthYear: "89년생",
    gender: "여",
    donationAmount: 315000, 
    lastDonationDate: "2024.11.19",
    avatar: "https://via.placeholder.com/50",
  },
  {
    rank: 3,
    name: "최*권님",
    birthYear: "92년생",
    gender: "남",
    donationAmount: 280000,
    lastDonationDate: "2024.11.20",
    avatar: "https://via.placeholder.com/50",
  },
  {
    rank: 3,
    name: "성*운님",
    birthYear: "87년생",
    gender: "남",
    donationAmount: 275000,
    lastDonationDate: "2024.11.22",
    avatar: "https://via.placeholder.com/50",
  },
];

const useInterval = (callback, delay) => {
  const savedCallback = React.useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const loadKakaoMapScript = () => {
  return new Promise((resolve, reject) => {
    if (window.kakao && window.kakao.maps) {
      resolve(window.kakao.maps);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=43c54f0fc07ce690e0bdb4a55145d1ab&autoload=false&libraries=services;"
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        resolve(window.kakao.maps);
      });
    };

    script.onerror = () => {
      reject(new Error("카카오 맵 스크립트 로드 실패"));
    };

    document.head.appendChild(script);
  });
};

const Main2 = () => {
  const [currentLocation, setCurrentLocation] = useState("위치 정보를 가져오는 중");
  const [bannerIndex, setBannerIndex] = useState(0);
  const navigate = useNavigate();

  const banners = [Ad1Icon, Ad2Icon, Ad3Icon];

  useInterval(() => {
    setBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
  }, 3000);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const kakaoMaps = await loadKakaoMapScript();

        if (!navigator.geolocation) {
          setCurrentLocation("위치 정보를 사용할 수 없습니다.");
          return;
        }

        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            const geocoder = new kakaoMaps.services.Geocoder();
            geocoder.coord2Address(longitude, latitude, (result, status) => {
              if (status === kakaoMaps.services.Status.OK) {
                setCurrentLocation(result[0].address.address_name);
              } else {
                setCurrentLocation("주소 정보를 불러올 수 없습니다.");
              }
            });
          },
          () => {
            setCurrentLocation("위치 정보를 불러올 수 없습니다.");
          }
        );
      } catch {
        setCurrentLocation("위치 정보를 불러올 수 없습니다.");
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="home-container">
      <header className="header">
        <h1>로고</h1>
        <div className="icons">
          <img src={SearchIcon} alt="검색 아이콘" className="icon" onClick={() => navigate('/search')} />
          <img src={AlarmIcon} alt="알림 아이콘" className="icon" />
        </div>
      </header>

      <div className="banner-container">
        <div className="banner">
          {banners.map((banner, index) => (
            <img key={index} src={banner} className={`banner-image ${index === bannerIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
      <div className="location">
        <span>{currentLocation}</span>
      </div>
      <section className="reviews">
  <div className="section-header">
    <h3>후원 랭킹</h3>
    <div className="more">
      <span>더보기</span>
      <img src={RightDirectionIcon} alt="더보기 아이콘" className="right-icon" />
    </div>
  </div>
  <div className="reviews-content">
    <div className="donation-card">
      <DonationCard user={user} topRankers={topRankers} />
    </div>
    <div className="rank-card">
      <Rank topRankers={topRankers} />
    </div>
  </div>
</section>
      <div className="divider" />

      <section className="recent-shops">
        <h3>최근 이용한 가게</h3>
        <div className="shop-list">
          {dummyRecentShops.map((shop) => (
            <ShopCard
              key={shop.id}
              imgSrc={shop.img}
              name={shop.name}
              rating={shop.rating}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Main2;
