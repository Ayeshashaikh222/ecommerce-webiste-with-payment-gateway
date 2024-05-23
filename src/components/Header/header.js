import React from "react";
import "../Header/header.css";
import Logo from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../SelectDrop/select";
const header = () => {
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
                <div className="selectDrop cursor position-relative">
                  All Categories
                  <Select />
                </div>

                <div className="search">
                  <input type="text" placeholder="Search for items..." />
                  <SearchIcon className="searchIcon cursor position-relative" />
                </div>
              </div>
            </div>

            {/* headerSearch start here */}
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
