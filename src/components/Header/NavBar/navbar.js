import React, { useEffect, useState } from "react";
import "./navbar.css";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { Link } from "react-router-dom";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";

const Navbar = (props) => {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    setNavData(props.data);
  }, []);
  return (
    <div className="nav d-flex align-items-center">
      <div className="container-fluid ">
        <div className="row position-relative">
          <div className="col-sm-3 part1 d-flex align-items-center ">
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
                    <Link to={"/"}>Home</Link>
                    <KeyboardArrowDownIcon />
                  </Button>
                </li>

                {navData.length !== 0 &&
                  navData.map((item, index) => {
                    return (
                      <li className="list-inline-item" key={index}>
                        <Button
                        // onClick={() => openDropdownFun(index)}
                        >
                          <Link
                            to={`/cat/${item.cat_name.toLowerCase()}`}
                            // onClick={() =>
                            //   sessionStorage.setItem(
                            //     "cat",
                            //     item.cat_name.toLowerCase()
                            //   )
                            // }
                          >
                            {item.cat_name}{" "}
                            <KeyboardArrowDownIcon
                            // className={`${
                            //   openDropdownMenu === true &&
                            //   openDropdownMenuIndex === index &&
                            //   "rotateIcon"
                            // }`}
                            />
                          </Link>
                        </Button>
                        {item.items.length !== 0 && (
                          <div className={`dropdown_menu`}>
                            <ul>
                              {item.items.map((item_, index_) => {
                                return (
                                  <li key={index_}>
                                    <Button
                                    // onClick={props.closeNav}
                                    >
                                      <a
                                        href={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name
                                          .replace(/\s/g, "-")
                                          .toLowerCase()}`}
                                        // onClick={() =>
                                        //   sessionStorage.setItem(
                                        //     "cat",
                                        //     item.cat_name.toLowerCase()
                                        //   )
                                        // }
                                      >
                                        {item_.cat_name}
                                      </a>
                                    </Button>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </li>
                    );
                  })}

                {/* <li className="list-inline-item">
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
                </li> */}

                <li className="list-inline-item position-static">
                  <Button>
                    <Link>Mega menu</Link>
                    <KeyboardArrowDownIcon />
                  </Button>

                  <div className="dropdown_menu megaMenu w-100">
                    <div className="row">
                      {props.data.length !== 0 &&
                        props.data.map((item, index) => {
                          return (
                            <div className="col">
                              <a href={`/cat/${item.cat_name.toLowerCase()}`}>
                                {" "}
                                <h4 className="text-g text-capitalize">
                                  {item.cat_name}
                                </h4>
                              </a>
                              {item.items.length !== 0 && (
                                <ul className="mt-4 mb-0">
                                  {item.items.map((item_, index) => {
                                    return (
                                      <li>
                                        <a
                                          // onClick={props.closeNav}
                                          href={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name
                                            .replace(/\s/g, "-")
                                            .toLowerCase()}`}
                                        >
                                          {item_.cat_name}
                                        </a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </div>
                          );
                        })}
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

                {/* <li className="list-inline-item">
                  <Button>
                    <Link>About</Link>
                  </Button>
                </li>

                <li className="list-inline-item">
                  <Button>
                    <Link>Contact</Link>
                  </Button>
                </li> */}
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
