import React, { useEffect, useRef, useState } from "react";
import "../Header/header.css";
import Logo from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../SelectDrop/select";
import { getCountry } from "../../api/http";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import IconCompare from "../../assets/images/icon-compare.svg";
import IconHeart from "../../assets/images/icon-heart.svg";
import IconCart from "../../assets/images/icon-cart.svg";
import IconUser from "../../assets/images/icon-user.svg";
import Button from "@mui/material/Button";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Navbar from "./NavBar/navbar";

const Header = () => {
  const [categories, setcategories] = useState([
    "Milks and Dairies",
    "Wines & Drinks",
    "Clothing & beauty",
    "Fresh Seafood",
    "Pet Foods & Toy",
    "Fast food",
    "Baking material",
    "Vegetables",
    "Fresh Fruit",
    "Bread and Juice",
  ]);

  const [isOpenDropDown, setisOpenDropDown] = useState(false);

  const [countryList, setCountryList] = useState([]);

  const headerRef = useRef();

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await getCountry(
        "https://countriesnow.space/api/v0.1/countries/"
      );
      setCountryList(countries);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      if (position > 100) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");
      }
    });
  }, []);

  return (
    <>
      <div className="headerWrapper" ref={headerRef}>
        <header>
          <div className="conatiner-fluid">
            <div className="row">
              <div className="col-sm-2">
                <img src={Logo} alt="logo" />
              </div>

              {/* headerSearch start here */}
              <div className="col-sm-5">
                <div className="headerSearch d-flex align-items-center">
                  <Select
                    data={categories}
                    placeholder={"All Categories"}
                    icon={false}
                  />

                  <div className="search">
                    <input type="text" placeholder="Search for items..." />
                    <SearchIcon className="searchIcon cursor position-relative" />
                  </div>
                </div>
              </div>

              {/* headerSearch start here */}
              <div className="col-sm-5 d-flex align-items-center">
                <div className="ml-auto d-flex align-items-center">
                  <div className="countryWrapper ">
                    <Select
                      data={countryList}
                      placeholder="Your Location"
                      icon={
                        <LocationOnOutlinedIcon style={{ opacity: "0.5" }} />
                      }
                    />
                  </div>

                  <ul className="list list-inline mb-0 headerTabs">
                    <li className="list-inline-item">
                      <span>
                        <img src={IconCompare} />
                        <span className="badge bg-success rounded-circle">
                          3
                        </span>
                        Compare
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span>
                        <img src={IconHeart} />
                        <span className="badge bg-success rounded-circle">
                          3
                        </span>
                        Wishlist
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span>
                        <img src={IconCart} />
                        <span className="badge bg-success rounded-circle">
                          3
                        </span>
                        Cart
                      </span>
                    </li>

                    <li className="list-inline-item">
                      <span onClick={() => setisOpenDropDown(!isOpenDropDown)}>
                        <img src={IconUser} />
                        Account
                      </span>

                      {isOpenDropDown && (
                        <ClickAwayListener
                          onClickAway={() => setisOpenDropDown(false)}
                        >
                          <ul className="dropdownMenu">
                            <li>
                              <Button className="align-item-center">
                                <PersonOutlineOutlinedIcon /> Account
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <LocationOnOutlinedIcon />
                                Order Tracking
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <FavoriteBorderOutlinedIcon />
                                My Wishlist
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <SettingsOutlinedIcon />
                                Setting
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <LogoutOutlinedIcon />
                                Sign Out
                              </Button>
                            </li>
                          </ul>
                        </ClickAwayListener>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Navbar />
      </div>

      <div className="afterHeader"></div>
    </>
  );
};

export default Header;
