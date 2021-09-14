import { Button } from "react-bootstrap";
import "./Failed.scss";
const FailedDownload: React.FC = () => {
  return (
    <div className="failed-box">
      <div className="_download-status">
        <div className="_failed-download">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#F2482F" />
            <path
              d="M22.698 10.2334L21.7383 9.28517C21.4786 9.02549 21.0496 9.02549 20.7786 9.28517L15.9915 14.0721L11.1142 9.19484C10.8544 8.93505 10.4254 8.93505 10.1545 9.19484L9.19484 10.1545C8.93505 10.4142 8.93505 10.8432 9.19484 11.1142L14.061 15.9803L9.28517 20.7787C9.02549 21.0384 9.02549 21.4674 9.28517 21.7384L10.2448 22.6981C10.5045 22.9577 10.9336 22.9577 11.2045 22.6981L15.9915 17.911L20.7786 22.6981C21.0383 22.9577 21.4673 22.9577 21.7383 22.6981L22.698 21.7384C22.9576 21.4787 22.9576 21.0497 22.698 20.7787L17.8996 15.9916L22.6867 11.2046C22.9576 10.9334 22.9576 10.5044 22.698 10.2334Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="_download-text">
          <h6>Download failed</h6>
          <Button className="_dismiss-download">Dismiss</Button>
        </div>
      </div>
    </div>
  );
};
export default FailedDownload;
