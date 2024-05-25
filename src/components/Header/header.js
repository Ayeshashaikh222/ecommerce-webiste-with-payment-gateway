import React, { useEffect, useState } from "react";
import "../Header/header.css";
import Logo from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../SelectDrop/select";
import { getCountry } from "../../api/http";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

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

  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await getCountry(
        "https://countriesnow.space/api/v0.1/countries/"
      );
      setCountryList(countries);
    };

    fetchCountries();
  }, []);

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
              <div className="countryWrapper ">
                <Select
                  data={countryList}
                  placeholder="Your Location"
                  icon={<LocationOnOutlinedIcon style={{ opacity: "0.5" }} />}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
