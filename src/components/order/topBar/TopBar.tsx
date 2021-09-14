import React from "react";
import ChooseStore from "./ChooseStore/ChooseStore";
import Search from "./search/Search";
import "./TopBar.scss";
import FilterOrders from "./filter/FilterOrders";
import SortOrders from "./sort/SortOrders";
const TopBar: React.FC = () => {
  return (
    <div className="_top-bar">
      <ChooseStore />

      <div className="_search-filter-wrapper">
        <Search />
        <FilterOrders />
        <SortOrders />
      </div>
    </div>
  );
};

export default TopBar;
