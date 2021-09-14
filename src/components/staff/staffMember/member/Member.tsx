import React from "react";
import memberPhoto from "../../../../assets/icons/member.png";
import { Button, Image } from "react-bootstrap";
import "./member.scss";
const Member: React.FC = () => {
  return (
    <div className="_member">
      <div className="_photo">
        <Image src={memberPhoto} />
      </div>

      <div className="_member-info">
        <h2>Foroogh Abdi</h2>

        <div className="_member-name">
          <p>Data entry</p>
          <span>
            <svg
              width="3"
              height="3"
              viewBox="0 0 3 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="#16284D" />
            </svg>
          </span>
          <p className="_active">Active</p>
        </div>

        <div className="_hold-edit-details-btns">
          <Button>Edit</Button>

          <Button>See details</Button>
        </div>
      </div>
    </div>
  );
};

export default Member;
