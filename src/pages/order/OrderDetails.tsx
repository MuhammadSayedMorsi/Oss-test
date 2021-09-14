import React from "react";
import { Button, Image } from "react-bootstrap";
import Item from "../../assets/icons/order.png";
import DHL from "../../assets/icons/dhl.png";
import CreditLogo from "../../assets/icons/credit-logo.png";
import "./orderDetails.scss";
import { Link } from "react-router-dom";
import Proceed from "../../components/order/proceed/Proceed";
import CancelOrder from "../../components/order/cancelOrder/CancelOrder";

const OrderDetails: React.FC = () => {
  return (
    <div className="order-detail">
      <header>
        <Link to="/orders">
          <Button>
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="42" height="42" rx="10" fill="#E8ECF0" />
              <path
                d="M13.3161 20.9959C13.3161 20.5659 13.4803 20.136 13.808 19.8081L24.1241 9.49217C24.7803 8.83594 25.8442 8.83594 26.5002 9.49217C27.1562 10.1481 27.1562 11.2119 26.5002 11.8682L17.372 20.9959L26.4999 30.1236C27.1559 30.7799 27.1559 31.8435 26.4999 32.4994C25.8439 33.156 24.78 33.156 24.1237 32.4994L13.8077 22.1836C13.4799 21.8556 13.3161 21.4257 13.3161 20.9959Z"
                fill="#9AA1AF"
              />
            </svg>
          </Button>
        </Link>
        <div className="_title">
          <h2>My orders</h2>
          <span>Order details</span>
        </div>
      </header>

      <div className="_hold-boxes">
        <div className="_box-one">
          <h4>Order details</h4>
          <div className="_details">
            <div className="_hold-info-action">
              <div className="_info">
                <h2>ID: TRX-2918882910AA</h2>
                <div className="_purchase-status">
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
                {/* <Button className="_cancel">Cancel this order</Button> */}
                <CancelOrder />
              </div>

              <div className="_action">
                {/* <Button className="_proceed">Proceed</Button> */}
                <Proceed />
                <Button className="_print">Print</Button>
              </div>
            </div>

            <div className="_email-info-phone">
              <div className="_line">
                <div>Transaction date</div>
                <div>Jan 2nd, 2021 08:35</div>
              </div>

              <div className="_line">
                <div>Buyer name</div>
                <div>Sophie Asveld</div>
              </div>

              <div className="_line">
                <div>Phone no</div>
                <div>+89281928822</div>
              </div>

              <div className="_line">
                <div>Email</div>
                <div>Sophie@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="_ordered-items">
            <h4>Ordered items</h4>
            <div className="_item">
              <div className="_photo">
                <Image src={Item} />
              </div>
              <div className="_detail">
                <h5>Lorem ipsum dolor item name</h5>
                <span>Color: blue, Size: L</span>
                <div className="_size-price">
                  <span className="_size">x1</span>
                  <span className="_price">$ 20.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="_box-two">
          <h3>Delivery details</h3>
          <div className="_card">
            <div className="_head">
              <div className="_logo-name">
                <Image src={DHL} />
                <h4>DHL courrier</h4>
              </div>
              <span>Normal shipping</span>
            </div>

            <div className="_place-info">
              <span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15" r="15" fill="white" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.5 13.0189C8.5 9.42437 11.4159 6.5 15 6.5C18.5841 6.5 21.4999 9.42437 21.5 13.0189C21.5 17.4798 15.6831 24.0287 15.4355 24.3053C15.2033 24.5647 14.7971 24.5651 14.5645 24.3053C14.3169 24.0287 8.5 17.4798 8.5 13.0189ZM11.7297 13.0189C11.7297 14.8274 13.1967 16.2987 15 16.2987C16.8032 16.2987 18.2702 14.8274 18.2702 13.0189C18.2702 11.2104 16.8032 9.73909 15 9.73909C13.1968 9.73909 11.7297 11.2104 11.7297 13.0189Z"
                    fill="#FF870C"
                  />
                </svg>
              </span>
              <p>
                Old Airport Raod, Kodihalli, Bangalore 560008, Karnataka, India,
                HAL Old Airport Rd, ISRO Colony, Domlur, Bengaluru, Karnataka.
              </p>
            </div>
          </div>

          <div className="_payment-details">
            <div className="_hold-credit">
              <div className="_credit-card">
                <Image src={CreditLogo} />
              </div>
              <div className="_info">
                <h5>Credit card</h5>
                <div className="_card-number">
                  <p>OCBC bank</p>
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

                  <p>918299200089</p>
                </div>
              </div>
            </div>

            <div className="_taxes">
              <div>
                <li>Products/services price</li>
                <li className="bold">$10.00</li>
              </div>

              <div>
                <li>Delivery price</li>
                <li className="bold">$10.00</li>
              </div>

              <div>
                <li>Taxes</li>
                <li className="bold">$10.00</li>
              </div>
              <div className="_add-border-dashed" />
              <div>
                <li>Total price</li>
                <li className="bold">$10.00</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
