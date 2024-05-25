import React, { useEffect, useState } from "react";
import "../Header/header.css";
import Logo from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../SelectDrop/select";
import axios from "axios";

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

  const countryList = [];

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          res.data.data.map((item, index) => {
            countryList.push(item.country);
            console.log(item.country);
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <header className="">
        <div className="conatiner-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} alt="logo" />
            </div>

            {/* headerSearch start here */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <Select data={categories} />

                <div className="search">
                  <input type="text" placeholder="Search for items..." />
                  <SearchIcon className="searchIcon cursor position-relative" />
                </div>
              </div>
            </div>

            {/* headerSearch start here */}
            <div className="col-sm-5">
              <Select data={countryList} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
