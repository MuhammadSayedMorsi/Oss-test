import React from "react";
import "./Order.scss";
import Notification from "../../components/notification/Notification";
import TopBar from "../../components/order/topBar/TopBar";
import OrderStatus from "../../components/order/orderStatus/OrderStatus";
const Order: React.FC = () => {
  return (
    <div className="order_page">
      <div className="_header">
        <h1 className="_title">Orders</h1>
        <Notification />
      </div>
      <div>
        <TopBar />
        <OrderStatus />
      </div>
    </div>
  );
};

export default Order;
