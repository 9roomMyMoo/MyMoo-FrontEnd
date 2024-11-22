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
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Signupadult from "./pages/Signup/SignUpAdult";
import Signupchild from "./pages/Signup/SignUpChild";
import Splash from "./pages/Splash";
import List from "./components/List/List";
import Donate from "./pages/Donate/Donate";
import QrScan from "./pages/shop/QrScan";
import Main2 from "./components/Main/Main2";
import Thanks from "./pages/Thanks/Thanks";
import DonateFinish from "./pages/Donate/DonateFinish";
import ShopFinish from "./pages/shop/ShopFinish";
import ThanksFinish from "./pages/Thanks/ThanksFinish";
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
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signupchild" element={<Signupchild />} />
            <Route path="/signupadult" element={<Signupadult />} />
            <Route path="/splash" element={<Splash />} />
            <Route path="/shop" element={<QrScan />} />
            <Route path="/donate/finish" element={<DonateFinish />} />
            <Route path="/shop/finish" element={<ShopFinish />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/thanks/finish" element={<ThanksFinish />} />
          </Routes>
          <NavBar />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
