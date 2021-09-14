import React from "react";
import { Tab, Nav } from "react-bootstrap";
import Member from "./member/Member";
import "./staffMembers.scss";

const StaffMembers: React.FC = () => {
  return (
    <div className="_staffs">
      <Tab.Container defaultActiveKey="All">
        <div className="wrap-tabs">
          <Nav variant="pills" className="_tabs">
            <Nav.Item>
              <Nav.Link eventKey="All"> All </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Owner">Owner</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="Admin">Admin</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="DataEntry">Data entry</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <div>
          <Tab.Content>
            <Tab.Pane eventKey="All">
              {/* <ActiveOrders /> */}
              <div className="_wrap-all-members">
                <Member />
                <Member />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Owner">
              {/* <PreviousOrders /> */}
              Owner
            </Tab.Pane>
            <Tab.Pane eventKey="Admin">
              {/* <PreviousOrders /> */}
              Admin
            </Tab.Pane>
            <Tab.Pane eventKey="DataEntry">
              {/* <PreviousOrders /> */}
              Data Entry
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  );
};

export default StaffMembers;
