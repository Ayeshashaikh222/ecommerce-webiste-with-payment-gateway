import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SideBar from "../../components/SideBar";
import Product from "../../components/Product/index";
import { ClickAwayListener } from "@mui/material";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

const Listing = () => {
  const [showisOpenDropDown, setShowisOpenDropDown] = useState(false);
  const [shortisOpenDropDown, setShortisOpenDropDown] = useState(false);

  return (
    <section className="listingPage">
      <div className="conatiner-fluid">
        <div className="breadCrumb flex-column">
          <h1>Snack</h1>
          <ul className="list list-inline mb-0">
            <li className="list-inline-item">
              <Link to={""}>
                <HomeOutlinedIcon />
                Home
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to={""}>Shop</Link>
            </li>
            <li className="list-inline-item">
              <Link to={""}>Snack</Link>
            </li>
          </ul>
        </div>

        <div className="listingData">
          <div className="row">
            <div className="col-md-3 sidebarWrapper">
              <SideBar />
            </div>
            <div className="col-md-9 rightContent homeProducts pt-0">
              <div className="topStrip d-flex align-items-center">
                <p className="mb-0">
                  We found <span className="text-success">29</span> items for
                  you!
                </p>
                <div className="ml-auto d-flex align-items-center">
                  <div className="tab_ position-relative  ml-3">
                    <Button
                      className="btn_"
                      onClick={() => setShowisOpenDropDown(!showisOpenDropDown)}
                    >
                      <GridViewOutlinedIcon />
                      Show: 50 <KeyboardArrowDownIcon />
                    </Button>

                    {showisOpenDropDown && (
                      <ClickAwayListener
                        onClickAway={() => setShowisOpenDropDown(false)}
                      >
                        <ul className="dropdownMenu">
                          <li>
                            <Button
                              className="align-item-center"
                              onClick={() => setShowisOpenDropDown(false)}
                            >
                              50
                            </Button>
                          </li>
                          <li>
                            <Button
                              onClick={() => setShowisOpenDropDown(false)}
                            >
                              100
                            </Button>
                          </li>
                          <li>
                            <Button
                              onClick={() => setShowisOpenDropDown(false)}
                            >
                              150
                            </Button>
                          </li>
                          <li>
                            <Button
                              onClick={() => setShowisOpenDropDown(false)}
                            >
                              200
                            </Button>
                          </li>
                          <li>
                            <Button
                              onClick={() => setShowisOpenDropDown(false)}
                            >
                              All
                            </Button>
                          </li>
                        </ul>
                      </ClickAwayListener>
                    )}
                  </div>

                  <div className="tab_ position-relative ml-3">
                    <Button
                      className="btn_"
                      onClick={() =>
                        setShortisOpenDropDown(!showisOpenDropDown)
                      }
                    >
                      <FilterListOutlinedIcon />
                      Sort by: Featured <KeyboardArrowDownIcon />
                    </Button>

                    {shortisOpenDropDown && (
                      <ClickAwayListener
                        onClickAway={() => setShortisOpenDropDown(false)}
                      >
                        <ul className="dropdownMenu">
                          <li>
                            <Button
                              className="align-item-center"
                              onClick={() => setShortisOpenDropDown(false)}
                            >
                              Featured
                            </Button>
                          </li>
                          <li>
                            <Button
                              onClick={() => setShortisOpenDropDown(false)}
                            >
                              Price: Low to High
                            </Button>
                          </li>
                          <li>
                            <Button
                              onClick={() => setShortisOpenDropDown(false)}
                            >
                              Price: High to Low
                            </Button>
                          </li>
                          <li>
                            <Button
                              onClick={() => setShortisOpenDropDown(false)}
                            >
                              Release Date
                            </Button>
                          </li>
                          <li>
                            <Button
                              onClick={() => setShortisOpenDropDown(false)}
                            >
                              Avg Rating
                            </Button>
                          </li>
                        </ul>
                      </ClickAwayListener>
                    )}
                  </div>
                </div>
              </div>
              <div className="productRow pl-3 pr-2">
                <div className="item">
                  <Product tag="best" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="hot" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="best" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="best" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="hot" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="best" />
                </div>
                <div className="item">
                  <Product tag="hot" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="hot" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="best" />
                </div>
                <div className="item">
                  <Product tag="hot" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
