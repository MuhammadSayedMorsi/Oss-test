import React from "react";
import { Button } from "react-bootstrap";
import "./Sort.scss";
const SortOrder: React.FC = () => {
  return (
    <div className="sort-filter">
      <Button className="_sort-icon">
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
            d="M46 15.9373C46 17.0071 45.1524 17.8745 44.1063 17.8745H21.8937C20.8479 17.8745 20 17.0074 20 15.9373C20 14.8674 20.8476 14 21.8937 14H44.1066C45.1524 14 46 14.8674 46 15.9373ZM39.7096 24C39.7096 25.0698 38.862 25.9373 37.8159 25.9373H21.8937C20.8479 25.9373 20 25.0701 20 24C20 22.9302 20.8476 22.0627 21.8937 22.0627H37.8162C38.862 22.0627 39.7096 22.9302 39.7096 24ZM28.3804 34C29.4264 34 30.2741 33.1326 30.2741 32.0627C30.2741 30.9929 29.4264 30.1255 28.3807 30.1255H21.8937C20.8476 30.1255 20 30.9929 20 32.0627C20 33.1329 20.8479 34 21.8937 34H28.3804Z"
            fill="#16284D"
          />
        </svg>
      </Button>
    </div>
  );
};
export default SortOrder;
