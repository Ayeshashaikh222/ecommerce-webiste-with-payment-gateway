import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SideBar from "../../components/SideBar";
import Product from "../../components/Product/index";
import { ClickAwayListener } from "@mui/material";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

const Listing = (props) => {
  const [showisOpenDropDown, setShowisOpenDropDown] = useState(false);
  const [shortisOpenDropDown, setShortisOpenDropDown] = useState(false);
  const [data, setData] = useState([]);
  const [currentId, setCurrentId] = useState();

  const { id } = useParams();

  var itemsData = [];

  useEffect(() => {
    props.data.length !== 0 &&
      props.data.map((item) => {
        // page == single category
        if (props.single == true) {
          if (item.cat_name.toLowerCase() == id.toLowerCase()) {
            item.items.length !== 0 &&
              item.items.map((item_) => {
                item_.products.length !== 0 &&
                  item_.products.map((product__, index__) => {
                    itemsData.push({
                      ...product__,
                      parentCatName: item.cat_name,
                      subCatName: item_.cat_name,
                    });
                  });
              });
          }
        }
        //page == double category
        else {
          item.items.length !== 0 &&
            item.items.map((item_) => {
              if (
                item_.cat_name.split(" ").join("-").toLowerCase() ===
                id.toLocaleLowerCase()
              ) {
                item_.products.length !== 0 &&
                  item_.products.map((product__) => {
                    itemsData.push({
                      ...product__,
                      parentCatName: item.cat_name,
                      subCatName: item_.cat_name,
                    });
                  });
              }
            });
        }
      });

    const list = itemsData.filter(
      (item, index) => itemsData.indexOf(item) === index
    );

    setData(list);

    window.scrollTo(0, 0);
  }, [id]);

  const filterByPrice = (minValue, maxValue) => {
    props.data.length !== 0 &&
      props.data.map((item, index) => {
        //page == single cat
        if (props.single === true) {
          if (id === item.cat_name.toLowerCase()) {
            item.items.length !== 0 &&
              item.items.map((item_) => {
                item_.products.length !== 0 &&
                  item_.products.map((product, prodIndex) => {
                    let price = parseInt(
                      product.price.toString().replace(/,/g, "")
                    );
                    if (minValue <= price && maxValue >= price) {
                      itemsData.push({
                        ...product,
                        parentCatName: item.cat_name,
                        subCatName: item_.cat_name,
                      });
                    }
                  });
              });
          }
        } else {
          item.items.length !== 0 &&
            item.items.map((item_, index_) => {
              if (
                item_.cat_name.split(" ").join("-").toLowerCase() ==
                id.split(" ").join("-").toLowerCase()
              ) {
                item_.products.map((product) => {
                  let price = parseInt(
                    product.price.toString().replace(/,/g, "")
                  );
                  if (minValue <= price && maxValue >= price) {
                    itemsData.push({
                      ...product,
                      parentCatName: item.cat_name,
                      subCatName: item_.cat_name,
                    });
                  }
                });
              }
            });
        }
      });

    const list2 = itemsData.filter(
      (item, index) => itemsData.indexOf(item) === index
    );
    setData(list2);
  };

  const filterByBrand = (keyword) => {
    props.data.length !== 0 &&
      props.data.map((item, index) => {
        //page == single cat
        if (props.single === true) {
          item.items.length !== 0 &&
            item.items.map((item_) => {
              item_.products.map((item__, index__) => {
                if (item__.brand.toLowerCase() === keyword.toLowerCase()) {
                  //console.log(item__)
                  itemsData.push({
                    ...item__,
                    parentCatName: item.cat_name,
                    subCatName: item_.cat_name,
                  });
                }
              });
            });
        }
        //page == double cat
        else {
          item.items.length !== 0 &&
            item.items.map((item_, index_) => {
              // console.log(item_.cat_name.replace(/[^A-Za-z]/g,"-").toLowerCase())
              if (
                item_.cat_name.split(" ").join("-").toLowerCase() ==
                id.split(" ").join("-").toLowerCase()
              ) {
                item_.products.map((item__, index__) => {
                  if (item__.brand.toLowerCase() === keyword.toLowerCase()) {
                    itemsData.push({
                      ...item__,
                      parentCatName: item.cat_name,
                      subCatName: item_.cat_name,
                    });
                  }
                });
              }
            });
        }
      });

    const list2 = itemsData.filter(
      (item, index) => itemsData.indexOf(item) === index
    );
    //console.log(itemsData)

    setData(list2);

    window.scrollTo(0, 0);
  };

  const filterByRating = (keyword) => {
    props.data.length !== 0 &&
      props.data.map((item, index) => {
        //page == single cat
        if (props.single === true) {
          // if (item.cat_name.split(' ').join('-').toLowerCase() == id.split(' ').join('-').toLowerCase()) {
          item.items.length !== 0 &&
            item.items.map((item_) => {
              item_.products.map((item__) => {
                let rating = parseFloat(item__.rating);
                if (rating === keyword) {
                  itemsData.push({
                    ...item__,
                    parentCatName: item.cat_name,
                    subCatName: item_.cat_name,
                  });
                }
              });
            });
          // }
        }
        //page == double cat
        else {
          item.items.length !== 0 &&
            item.items.map((item_, index_) => {
              // console.log(item_.cat_name.replace(/[^A-Za-z]/g,"-").toLowerCase())
              if (
                item_.cat_name.split(" ").join("-").toLowerCase() ==
                id.split(" ").join("-").toLowerCase()
              ) {
                item_.products.map((item__) => {
                  let rating = parseFloat(item__.rating);
                  if (rating === keyword) {
                    itemsData.push({
                      ...item__,
                      parentCatName: item.cat_name,
                      subCatName: item_.cat_name,
                    });
                  }
                });
              }
            });
        }
      });

    const list2 = itemsData.filter(
      (item, index) => itemsData.indexOf(item) === index
    );

    setData(list2);

    data?.map((item) => {
      if (item.rating === keyword) {
        itemsData.push({
          ...item,
          parentCatName: item.cat_name,
          subCatName: item.cat_name,
        });
      }
    });

    const list3 = itemsData.filter(
      (item, index) => itemsData.indexOf(item) === index
    );

    setData(list3);

    window.scrollTo(0, 0);
  };

  return (
    <section className="listingPage">
      <div className="conatiner-fluid">
        <div className="breadCrumb flex-column">
          <h1 className="text-capitalize">{sessionStorage.getItem("cat")}</h1>
          <ul className="list list-inline mb-0">
            <li className="list-inline-item">
              <Link to={"/"}>
                <HomeOutlinedIcon />
                Home
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                to={`/cat/${sessionStorage.getItem("cat")}`}
                className="text-capitalize"
              >
                {sessionStorage.getItem("cat")}
              </Link>
            </li>
            {props.single === false && (
              <li className="list-inline-item text-capitalize">{id}</li>
            )}
          </ul>
        </div>

        <div className="listingData">
          <div className="row">
            <div className="col-md-3 sidebarWrapper">
              {
                <SideBar
                  data={props.data}
                  currentCatData={data}
                  filterByPrice={filterByPrice}
                  filterByBrand={filterByBrand}
                  filterByRating={filterByRating}
                />
              }
            </div>
            <div className="col-md-9 rightContent homeProducts pt-0">
              <div className="topStrip d-flex align-items-center">
                <p className="mb-0">
                  We found <span className="text-success">{data.length}</span>{" "}
                  items for you!
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
                {data.length !== 0 &&
                  data.map((item, index) => (
                    <div className="item relatedItem" key={index}>
                      <Product tag={item.type} item={item} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
