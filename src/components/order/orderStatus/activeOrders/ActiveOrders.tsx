import React from "react";
import { Card, Image, Button } from "react-bootstrap";
import orderPicture from "../../../../assets/icons/order.png";
import "./ActiveOrders.scss";
import Proceed from "../../proceed/Proceed";
import { Link } from "react-router-dom";
const ActiveOrders: React.FC = () => {
  return (
    <>
      <Card className="active-order-card">
        <div className="_hold-inof-details">
          <div className="_name-id">
            <div className="_picture">
              <Image src={orderPicture} />
            </div>
            <div className="_info">
              <div className="_name">
                <span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="11" fill="#CFF4E8" />
                    <mask id="mask0" x="0" y="0" width="22" height="22">
                      <circle cx="11" cy="11" r="11" fill="white" />
                    </mask>
                    <g mask="url(#mask0)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.8 9.2C6.8 6.88412 8.68412 5 11 5C13.3159 5 15.2 6.88412 15.2 9.2C15.2 11.5159 13.3159 13.4 11 13.4C8.68412 13.4 6.8 11.5159 6.8 9.2ZM11.9333 14.3333C13.5514 14.3333 15.0757 14.9763 16.2256 16.1438C17.3698 17.3057 18 18.8392 18 20.4622C18 20.7199 17.7911 20.9289 17.5333 20.9289C17.5333 20.9289 13.0887 23 11 23C8.73319 23 4.46667 20.9289 4.46667 20.9289C4.20894 20.9289 4 20.7199 4 20.4622C4 18.8392 4.63016 17.3057 5.77439 16.1438C6.92426 14.9763 8.44864 14.3333 10.0667 14.3333H11.9333Z"
                        fill="#3ED0A3"
                      />
                    </g>
                  </svg>
                </span>
                <h3>Sophie Asveld</h3>
              </div>
              <h2 className="_id">ID: TRX-2918882910AA</h2>
              <div className="_purchased">
                <p>Mudita Store</p>
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
                <p>Purchased</p>
              </div>
            </div>
          </div>

          <div className="_status-details">
            <div className="_data-payment-info">
              <div>
                <h4>Transaction date</h4>
                <h5>Jan 2nd, 2021 08:35</h5>
              </div>
              <div>
                <h6>Payment</h6>
                <p>Credit card</p>
              </div>
            </div>
            <div className="_items">
              <div className="_numbers">
                <h4>No. of items</h4>
                <p>3 items</p>
              </div>
              <div className="_total-price">
                <span>Total price</span>
                <p>$ 210.89</p>
              </div>
            </div>

            <div className="_actions">
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="#DCDEE3"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.8535 15.4805V14.6367C25.8535 13.1828 24.6707 12 23.2168 12H16.748C15.2942 12 14.1113 13.1828 14.1113 14.6367V15.4805H25.8535ZM15.166 23.2148V27.5039V28.418V28.9453C15.166 29.5278 15.6382 30 16.2207 30H23.7441C24.3266 30 24.7988 29.5278 24.7988 28.9453V28.418V27.5039V23.2148H15.166ZM21.3887 27.7148H18.5762C18.2849 27.7148 18.0488 27.4787 18.0488 27.1875C18.0488 26.8963 18.2849 26.6602 18.5762 26.6602H21.3887C21.6799 26.6602 21.916 26.8963 21.916 27.1875C21.916 27.4787 21.6799 27.7148 21.3887 27.7148ZM18.5762 25.4648H21.3887C21.6799 25.4648 21.916 25.2287 21.916 24.9375C21.916 24.6463 21.6799 24.4102 21.3887 24.4102H18.5762C18.2849 24.4102 18.0488 24.6463 18.0488 24.9375C18.0488 25.2287 18.2849 25.4648 18.5762 25.4648ZM26.3457 16.5352H13.6543C12.2004 16.5352 11.0176 17.718 11.0176 19.1719V23.3906C11.0176 24.8445 12.2004 26.0273 13.6543 26.0273H14.1113V23.2148H13.7949C13.5037 23.2148 13.2676 22.9787 13.2676 22.6875C13.2676 22.3963 13.5037 22.1602 13.7949 22.1602H14.6387H25.3262H26.1699C26.4612 22.1602 26.6973 22.3963 26.6973 22.6875C26.6973 22.9787 26.4612 23.2148 26.1699 23.2148H25.8535V26.0273H26.3457C27.7996 26.0273 28.9824 24.8445 28.9824 23.3906V19.1719C28.9824 17.718 27.7996 16.5352 26.3457 16.5352ZM15.4824 19.8398H13.7949C13.5037 19.8398 13.2676 19.6037 13.2676 19.3125C13.2676 19.0213 13.5037 18.7852 13.7949 18.7852H15.4824C15.7737 18.7852 16.0098 19.0213 16.0098 19.3125C16.0098 19.6037 15.7737 19.8398 15.4824 19.8398Z"
                    fill="#16284D"
                  />
                </svg>
              </div>
              <div className="_btn-actions">
                {/* <Button>Proceed</Button> */}
                <Proceed />
                <Link to="/orders/order-details">
                  <Button className="_see-detail-btn">See details</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default ActiveOrders;
