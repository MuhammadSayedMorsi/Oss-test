import React from "react";
import "./Home.scss";
import Notification from "../../components/notification/Notification";
import { Button, Card, Image } from "react-bootstrap";
import standingGril from "../../assets/icons/girl.svg";
const Home: React.FC = () => {
  return (
    <div className="home_page">
      <div className="_header">
        <h1 className="_title">Home</h1>
        <Notification />
      </div>

      <div className="_build-platform">
        <div>
          <Image src={standingGril} />
        </div>
        <div className="_box-content">
          <Card.Title>Start build your platform</Card.Title>
          <Card.Text>
            Create website or mobile app to grow your business
          </Card.Text>
          <Button>Build now</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
