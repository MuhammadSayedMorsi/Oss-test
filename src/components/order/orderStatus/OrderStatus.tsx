import React, { useState } from "react";
import { Tab, Nav, Button } from "react-bootstrap";
import "./OrderStatus.scss";
import ActiveOrders from "./activeOrders/ActiveOrders";
import ExportAction from "../export/Export";
// import FailedExport from "../export/FailedDownload";
import ImportOrder from "../importOrder/ImportOrder";
import PreviousOrders from "./previousOrders/PreviousOrders";

const OrderStatus: React.FC = () => {
  const [exportShow, setExportShow] = useState(false);
  return (
    <div className="order-status">
      <Tab.Container defaultActiveKey="first">
        <div className="wrap-tabs">
          <Nav variant="pills" className="_tabs">
            <Nav.Item>
              <Nav.Link eventKey="first"> Active orders </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Previous orders</Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="_export-import-btns">
            <Button onClick={() => setExportShow(true)}>Export</Button>
            {/* <Button>Import</Button> */}
            <ImportOrder />
            {exportShow ? <ExportAction /> : ""}

            {/* will show only if the Export Failed. */}
            {/* <FailedExport /> */}
          </div>
        </div>

        <div>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <ActiveOrders />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <PreviousOrders />
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  );
};

export default OrderStatus;
