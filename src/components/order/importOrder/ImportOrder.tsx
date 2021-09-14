import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./ImportOrder.scss";

const ImportOrder: React.FC = () => {
  function MyVerticallyCenteredModal(props: any) {
    return (
      <Modal
        {...props}
        className="import-modal"
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Import order
          </Modal.Title>

          <Button onClick={props.onHide} className="_close-modal">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="28" rx="8" fill="#E8ECF0" />
              <path
                d="M20.698 8.23344L19.7383 7.28517C19.4786 7.02549 19.0496 7.02549 18.7786 7.28517L13.9915 12.0721L9.1142 7.19484C8.85441 6.93505 8.42537 6.93505 8.15452 7.19484L7.19484 8.15452C6.93505 8.4142 6.93505 8.84323 7.19484 9.1142L12.061 13.9803L7.28517 18.7787C7.02549 19.0384 7.02549 19.4674 7.28517 19.7384L8.24484 20.6981C8.50452 20.9577 8.93355 20.9577 9.20452 20.6981L13.9915 15.911L18.7786 20.6981C19.0383 20.9577 19.4673 20.9577 19.7383 20.6981L20.698 19.7384C20.9576 19.4787 20.9576 19.0497 20.698 18.7787L15.8996 13.9916L20.6867 9.20463C20.9576 8.93344 20.9576 8.50441 20.698 8.23344Z"
                fill="#777C85"
              />
            </svg>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="_select-file">
            <Form.Control type="email" placeholder="Upload file" />
            <Button className="_select-btn">Select file</Button>
          </div>
          <Button className="_button-format">Download format file</Button>

          <Button className="_button-import">Import now</Button>
        </Modal.Body>
      </Modal>
    );
  }
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        onClick={() => setModalShow(true)}
        className="_import-order-button"
      >
        Import
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ImportOrder;
