import React from "react";
import "./navbar.css";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { Link } from "react-router-dom";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";

const Navbar = () => {
  return (
    <div className="nav d-flex align-items-center">
      <div className="container-fluid ">
        <div className="row position-relative">
          <div className="col-sm-3 part1 d-flex align-items-center">
            <Button className="bg-g text-white categoryTab">
              <GridViewOutlinedIcon />
              &nbsp; Browse All Categories
              <KeyboardArrowDownIcon />
            </Button>
          </div>

          <div className="col-sm-7 part2 position-static">
            <nav>
              <ul className="list list-inline mb-0">
                <li className="list-inline-item">
                  <Button>
                    <LocalFireDepartmentOutlinedIcon />
                    &nbsp;
                    <Link>Deals</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Home</Link>
                    <KeyboardArrowDownIcon />
                  </Button>
                </li>

                <li className="list-inline-item">
                  <Button>
                    <Link>Shop</Link>
                    <KeyboardArrowDownIcon />
                  </Button>

                  <div className="dropdown_menu">
                    <ul>
                      <li>
                        <Button>
                          <Link to="/about">About Us</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/contact">Contact Us</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/my-account">My Account</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/login">Login</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/register">Register</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/forget_password">Forget Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/reset_password">Reset Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/purchase_guide">Purchase Guide</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/forget_password">Forget Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/terms_of_service">Terms of Service</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/errorpage">404 Page</Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Venders</Link>
                    <KeyboardArrowDownIcon />
                  </Button>
                </li>
                <li className="list-inline-item position-static">
                  <Button>
                    <Link>Mega menu</Link>
                    <KeyboardArrowDownIcon />
                  </Button>

                  <div className="dropdown_menu megaMenu w-100">
                    <div className="row">
                      <div className="col">
                        <h4 className="text-g">Fruits & Vegetables</h4>
                        <ul className="mt-4 mb-0">
                          <li>
                            <Link to="">Meat & Poultry</Link>
                          </li>
                          <li>
                            <Link to="">Fruits & Vegetables</Link>
                          </li>
                          <li>
                            <Link to="">Herbs & Seasonings</Link>
                          </li>
                          <li>
                            <Link to="">Cuts & Sprouts</Link>
                          </li>
                          <li>
                            <Link to="">Exotic Fruits & Veggies</Link>
                          </li>
                          <li>
                            <Link to="">Packaged Produce</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <h4 className="text-g">Breakfast & Dairy</h4>
                        <ul className="mt-4 mb-0">
                          <li>
                            <Link to="">Milk & Flavoured Milk</Link>
                          </li>
                          <li>
                            <Link to="">Butter and Margarine</Link>
                          </li>
                          <li>
                            <Link to="">Eggs Subtitutes</Link>
                          </li>
                          <li>
                            <Link to="">Marmalades</Link>
                          </li>
                          <li>
                            <Link to="">Sour Cream</Link>
                          </li>
                          <li>
                            <Link to="">Cheese</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <h4 className="text-g">Meat & Seafood</h4>
                        <ul className="mt-4 mb-0">
                          <li>
                            <Link to="">Breakfast Sausage</Link>
                          </li>
                          <li>
                            <Link to="">Dinner Sausage</Link>
                          </li>
                          <li>
                            <Link to="">Chicken</Link>
                          </li>
                          <li>
                            <Link to="">Sliced Deli Meat</Link>
                          </li>
                          <li>
                            <Link to="">Wild Caught Fillets</Link>
                          </li>
                          <li>
                            <Link to="">Crab and Shellfish</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <img
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png"
                          className="w-100"
                          alt="banner"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Blog</Link>
                    <KeyboardArrowDownIcon />
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Pages</Link>
                    <KeyboardArrowDownIcon />
                  </Button>

                  <div className="dropdown_menu">
                    <ul>
                      <li>
                        <Button>
                          <Link to="/about">About Us</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/contact">Contact Us</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/my-account">My Account</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/login">Login</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/register">Register</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/forget_password">Forget Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/reset_password">Reset Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/purchase_guide">Purchase Guide</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/forget_password">Forget Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/terms_of_service">Terms of Service</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/errorpage">404 Page</Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="list-inline-item">
                  <Button>
                    <Link>About</Link>
                  </Button>
                </li>

                <li className="list-inline-item">
                  <Button>
                    <Link>Contact</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-sm-2 part3 d-flex align-items-center">
            <div className="phoneNo d-flex align-items-center ml-4">
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
      </div>
    </div>
  );
};

export default Navbar;
