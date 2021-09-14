import React from "react";
import { Button } from "react-bootstrap";
import "./sortStaff.scss";
const SortStaff: React.FC = () => {
  return (
    <div className="_sort-staff-button">
      <Button>
        <svg
          width="66"
          height="48"
          viewBox="0 0 66 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="66" height="48" rx="10" fill="#F6F7F8" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46 15.9222C46 16.9837 45.1524 17.8444 44.1063 17.8444H21.8937C20.8479 17.8444 20 16.984 20 15.9222C20 14.8607 20.8476 14 21.8937 14H44.1066C45.1524 14 46 14.8607 46 15.9222ZM42.8548 24.0002C42.8548 25.0617 42.0072 25.9224 40.9611 25.9224H25.0389C23.9931 25.9224 23.1452 25.062 23.1452 24.0002C23.1452 22.9387 23.9928 22.078 25.0389 22.078H40.9614C42.0072 22.078 42.8548 22.9387 42.8548 24.0002ZM36.2433 34C37.2894 34 38.137 33.1393 38.137 32.0778C38.137 31.0163 37.2894 30.1556 36.2436 30.1556H29.7567C28.7106 30.1556 27.863 31.0163 27.863 32.0778C27.863 33.1396 28.7109 34 29.7567 34H36.2433Z"
            fill="#16284D"
          />
        </svg>
      </Button>
    </div>
  );
};

export default SortStaff;
