import React from "react";
import "./style.css";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import Icon4 from "../../assets/images/icon-4.svg";
import Icon5 from "../../assets/images/icon-5.svg";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import googlePlayImg from "../../assets/images/google-play.jpg";
import AppStore from "../../assets/images/app-store.jpg";
import PaymentImage from "../../assets/images/payment-method.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import newsLetterImg from "../../assets/images/newsletter.png";
import LoginBanner from "../LoginBanner";

const footer = () => {
  return (
    <>
      <section className="newsLetterSection">
        <div className="container-fluid">
          <div className="box d-flex align-items-center">
            <div className="info">
              <h2>
                Stay home & get your daily <br /> needs from our shop
              </h2>
              <p>Start you'r Daily Shopping with Nest Mart</p>
              <LoginBanner />
            </div>
            <div className="img ">
              <img src={newsLetterImg} alt="news letter" className="w-100" />
            </div>
          </div>
        </div>
      </section>

      <div className="footerWrapper">
        <div className="footerBoxes">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon1} alt="icon 1" />
                  </span>
                  <div className="info">
                    <h4>Best prices & offers</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon2} alt="icon 2" />
                  </span>
                  <div className="info">
                    <h4>Free Delivery </h4>
                    <p>24/7 amazing Services</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon3} alt="icon 3" />
                  </span>
                  <div className="info">
                    <h4>Great daily Deal</h4>
                    <p>When you sin up</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon4} alt="icon 4" />
                  </span>
                  <div className="info">
                    <h4>Wide assortment</h4>
                    <p>Mega Discounts</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon5} alt="icon 5" />
                  </span>
                  <div className="info">
                    <h4>Easy Returns</h4>
                    <p>Within 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 part1">
                <Link>
                  <img src={Logo} alt="logo image" />
                </Link>
                <br />
                <br />
                <p className="mt-4">Awesome grocery store website template</p>
                <br />
                <p>
                  <LocationOnOutlinedIcon />
                  <strong>Address:</strong>
                  5171 W campbell Ave undefined Utah 53127 United States
                </p>
                <p>
                  <HeadphonesOutlinedIcon />
                  <strong>Call Us:</strong> (+91) - 540-025-124553
                </p>
                <p>
                  <EmailOutlinedIcon />
                  <strong>Email:</strong>
                  Sale@Nest.com
                </p>
                <p>
                  <WatchLaterOutlinedIcon />
                  <strong>Hours: </strong>
                  10:00 - 18:00, MOn - Sat
                </p>
              </div>

              <div className="col-md-6 part2">
                <div className="row">
                  <div className="col">
                    <h3>Company</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link to="">About Us</Link>
                      </li>
                      <li>
                        <Link to="">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="">Term's &amp; Condition</Link>
                      </li>
                      <li>
                        <Link to="">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="">Support Center</Link>
                      </li>
                      <li>
                        <Link to="">Careers</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <h3>Account</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link to="">Sign In</Link>
                      </li>
                      <li>
                        <Link to="">View Cart</Link>
                      </li>
                      <li>
                        <Link to="">My Wishlist</Link>
                      </li>
                      <li>
                        <Link to="">Track My Order</Link>
                      </li>
                      <li>
                        <Link to="">Help Ticket</Link>
                      </li>
                      <li>
                        <Link to="">Shipping Details</Link>
                      </li>
                      <li>
                        <Link to="">Compare Products</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <h3>Corporate</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link to="">Become a Vender</Link>
                      </li>
                      <li>
                        <Link to="">Affilliate Program</Link>
                      </li>
                      <li>
                        <Link to="">Farm Business</Link>
                      </li>
                      <li>
                        <Link to="">Farm Careers</Link>
                      </li>
                      <li>
                        <Link to="">Our Suppllers</Link>
                      </li>
                      <li>
                        <Link to="">Accessibility</Link>
                      </li>
                      <li>
                        <Link to="">Promotions</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <h3>Popular</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link to="">Milk & Flavoured Milk</Link>
                      </li>
                      <li>
                        <Link to="">Butter and Margarine</Link>
                      </li>
                      <li>
                        <Link to="">Egg Substitutes</Link>
                      </li>
                      <li>
                        <Link to="">Marmalades</Link>
                      </li>
                      <li>
                        <Link to="">Sour Cream and dips</Link>
                      </li>
                      <li>
                        <Link to="">Tea & Kombucha</Link>
                      </li>
                      <li>
                        <Link to="">Cheese</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 part3">
                <h3>Install App</h3>
                <br />
                <p>From App Store or Google Play</p>

                <div className="d-flex">
                  <Link to={""}>
                    <img src={AppStore} width={150} />
                  </Link>
                  <Link to={""}>
                    <img src={googlePlayImg} className="mx-2" width={150} />
                  </Link>
                </div>
                <br />
                <p>Secure payment Gateways</p>
                <img src={PaymentImage} />
              </div>
            </div>

            <hr />
            <div className="row lastStrip">
              <div className="col-md-3">
                <p>@ 2024 Nest - HTML Ecommerce Template All rights reserved</p>
              </div>

              <div className="col-md-6 d-flex">
                <div className="m-auto d-flex align-items-center">
                  <div className="phoneNo d-flex align-items-center mx-5">
                    <span>
                      <HeadphonesOutlinedIcon />
                    </span>
                    <div className="info ml-3">
                      <h4 className="text-g mb-0">1900 - 888</h4>
                      <p className="infotext mb-0">24/7 Support Center</p>
                    </div>
                  </div>

                  <div className="phoneNo d-flex align-items-center mx-5">
                    <span>
                      <HeadphonesOutlinedIcon />
                    </span>
                    <div className="info ml-3">
                      <h4 className="text-g mb-0">1900 - 888</h4>
                      <p className="infotext mb-0">24/7 Support Center</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 part3">
                <div className="d-flex align-items-center">
                  <h5>Follow Us</h5>
                  <ul className="list list-inline">
                    <li className="list-inline-item">
                      <Link to={""}>
                        <FacebookOutlinedIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <TwitterIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <InstagramIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <YouTubeIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default footer;
