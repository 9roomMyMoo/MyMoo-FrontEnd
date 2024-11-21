import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import NavBar from "./components/Nav/Navbar";
import Search from "./components/Search/Search";
import Map from "./components/Map/Map";
import Order from "./pages/Order/Order";
import OrderPay from "./pages/Order/OrderPay";
import OrderMenu from "./pages/Order/OrderMenu";
import OrderFinish from "./pages/Order/OrderFinish";
import List from "./components/List/List";
import Donate from "./pages/Donate/Donate";
import QrScan from "./pages/shop/QrScan";
import Main2 from "./components/Main/Main2";
import DonateFinish from "./pages/Donate/DonateFinish";
const App = () => {
  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <div className="common-layout">
        <div className="app-main">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/2" element={<Main2 />} />
            <Route path="/order/:place" element={<OrderMenu />} />
            <Route path="/search" element={<Search />} />
            <Route path="/list" element={<List />} />
            <Route path="/map" element={<Map />} />
            <Route path="/order/" element={<Order />} />
            <Route path="/orderpay" element={<OrderPay />} />
            <Route path="/list" element={<List />} />
            <Route path="/finish" element={<OrderFinish />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/scan" element={<QrScan />} />
            <Route path="/donate/finish" element={<DonateFinish />} />
          </Routes>
          <NavBar />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
