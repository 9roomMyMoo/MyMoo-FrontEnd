import React, { useState } from "react";
import SearchIcon from "../../assets/img/Search/Search.svg";
import LocateIcon from "../../assets/img/Search/locate.svg";
import BackIcon from "../../assets/img/Search/back.svg";
import RecentImg from "../../assets/img/Main/recent.svg";
import ArrowIcon from "../../assets/img/List/arrow.svg";
import ArrowIconActive from "../../assets/img/List/arrow2.svg";
import ListCard from "./ListCard";

//테스트용 더미 데이터
const dummyPopularRestaurants = [
  {
    id: 1,
    name: "엄마 김치찌개",
    rating: 4.4,
    priceRange: "8000~12000",
    distance: 540,
    location: "서울 강남구 강남대로84길 6 1층",
    reviewCount: 12,
    imgSrc: RecentImg,
    donationAmount: 180000,
  },
  {
    id: 2,
    name: "경양카츠 강남점",
    rating: 4.2,
    priceRange: "10000~15000",
    distance: 630,
    location: "서울 강남구 강남대로90길 2",
    reviewCount: 8,
    imgSrc: RecentImg,
    donationAmount: 120000,
  },
  {
    id: 3,
    name: "김밥천국",
    rating: 3.9,
    priceRange: "5000~7000",
    distance: 430,
    location: "서울 강남구 역삼로 24",
    reviewCount: 20,
    imgSrc: RecentImg,
    donationAmount: 50000,
  },
];

const SearchPage = () => {
  const [restaurants, setRestaurants] = useState(dummyPopularRestaurants);
  const [selectedSort, setSelectedSort] = useState("기본순");
  const [filterRating, setFilterRating] = useState(false);
  const [priceOrder, setPriceOrder] = useState("고가순");

  const handleSortPrice = () => {
    const nextOrder = priceOrder === "고가순" ? "저가순" : "고가순";
    setPriceOrder(nextOrder);

    const sortedRestaurants = [...restaurants].sort((a, b) =>
      nextOrder === "고가순"
        ? b.priceRange.split("~")[0] - a.priceRange.split("~")[0]
        : a.priceRange.split("~")[0] - b.priceRange.split("~")[0]
    );
    setRestaurants(sortedRestaurants);
    setSelectedSort("가격");
  };

  const handleFilterRating = () => {
    setFilterRating(!filterRating);
    if (!filterRating) {
      const filteredRestaurants = restaurants.filter((r) => r.rating >= 4.0);
      setRestaurants(filteredRestaurants);
    } else {
      setRestaurants(dummyPopularRestaurants);
    }
  };

  const handleDefaultSort = () => {
    setSelectedSort("기본순");
    setRestaurants(dummyPopularRestaurants);
  };

  return (
    <div className="search-page">
      <img src={BackIcon} alt="뒤로가기" className="back-icon" />
      <div className="search-bar">
        <input type="text" placeholder="음식점, 메뉴, 주소를 검색해보세요" />
        <img src={LocateIcon} alt="위치 아이콘" className="icon locate-icon" />
        <img src={SearchIcon} alt="검색" className="icon search-icon" />
      </div>

      <div className="sort-buttons">
        <div className="left-buttons">
          <button
            className={`sort-button ${selectedSort === "가격" ? "active" : ""}`}
            onClick={handleSortPrice}
          >
            가격
            <img
              src={selectedSort === "가격" ? ArrowIconActive : ArrowIcon}
              alt="화살표"
              className="arrow-icon"
              onClick={handleSortPrice}
            />
          </button>
          <button
            className={`sort-button ${filterRating ? "active" : ""}`}
            onClick={handleFilterRating}
          >
            4.0 이상<span>★</span>
          </button>
        </div>
        <div className="right-buttons">
          <button
            className={`sort-button ${selectedSort === "기본순" ? "active" : ""}`}
            onClick={handleDefaultSort}
          >
            기본순
            <img
              src={selectedSort === "기본순" ? ArrowIconActive : ArrowIcon}
              alt="화살표"
              className="arrow-icon"
              onClick={handleDefaultSort}
            />
          </button>
        </div>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <ListCard
            key={restaurant.id}
            imgSrc={restaurant.imgSrc}
            title={restaurant.name}
            rating={restaurant.rating}
            location={restaurant.location}
            distance={restaurant.distance}
            priceRange={restaurant.priceRange}
            reviewCount={restaurant.reviewCount}
            donationAmount={restaurant.donationAmount}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
