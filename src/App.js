import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import NavBar from "./components/Nav/Navbar";
import Order from "./pages/Order/Order";
import OrderPay from "./pages/Order/OrderPay";
import OrderMenu from "./pages/Order/OrderMenu";
const App = () => {
  return (
    <BrowserRouter>
      <div className="common-layout">
        <div className="app-main">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/order/:place" element={<OrderMenu />} />
            <Route path="/order/" element={<Order />} />
            <Route path="/pay" element={<OrderPay />} />
          </Routes>
          <NavBar />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
