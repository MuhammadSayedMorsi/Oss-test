import React from "react";
import "./Staff.scss";
import Notification from "../../components/notification/Notification";
import Search from "../../components/order/topBar/search/Search";
import SortStaff from "../../components/staff/sortStaff/SortStaff";
import FilterStaff from "../../components/staff/filterStaff/FilterStaff";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

import StaffMembers from "../../components/staff/staffMember/StaffMembers";
const Staff: React.FC = () => {
  return (
    <div className="staff_page">
      <div className="_header">
        <h1 className="_title">Staff</h1>
        <Notification />
      </div>

      <div className="_sort-search-bar-add-new">
        <div className="_search-filter">
          <Search />
          <SortStaff />
          <FilterStaff />
        </div>

        <div className="_add-new-staff">
          <Link to="/my-staffs/add-new-staff">
            <Button className="_add-staff-btn">
              <span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15" r="15" fill="#23AD83" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.75 8.75C14.1977 8.75 13.75 9.19772 13.75 9.75V13.75H9.75C9.19772 13.75 8.75 14.1977 8.75 14.75V15.25C8.75 15.8023 9.19772 16.25 9.75 16.25H13.75V20.25C13.75 20.8023 14.1977 21.25 14.75 21.25H15.25C15.8023 21.25 16.25 20.8023 16.25 20.25V16.25H20.25C20.8023 16.25 21.25 15.8023 21.25 15.25V14.75C21.25 14.1977 20.8023 13.75 20.25 13.75H16.25V9.75C16.25 9.19772 15.8023 8.75 15.25 8.75H14.75Z"
                    fill="white"
                  />
                </svg>
              </span>
              Add new staff
            </Button>
          </Link>
        </div>
      </div>

      <StaffMembers />
    </div>
  );
};

export default Staff;
