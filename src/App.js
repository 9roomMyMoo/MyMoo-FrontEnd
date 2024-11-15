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
const App = () => {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <div className="common-layout">
        <div className="app-main">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/order/:place" element={<OrderMenu />} />
            <Route path="/search" element={<Search />} />
            <Route path="/map" element={<Map />} />
            <Route path="/order/" element={<Order />} />
            <Route path="/pay" element={<OrderPay />} />
            <Route path="/finish" element={<OrderFinish />} />
          </Routes>
          <NavBar />
        </div>
        </div>
    </BrowserRouter>
  );
};

export default App;
