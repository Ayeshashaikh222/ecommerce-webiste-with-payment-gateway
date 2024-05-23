import React from "react";
import "./header.css";
import Logo from "../../assets/images/logo.svg";

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
                <div className="selectDrop cursor">All Categories</div>
                <div className="search">
                  <input type="text" placeholder="Search for items..." />
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
