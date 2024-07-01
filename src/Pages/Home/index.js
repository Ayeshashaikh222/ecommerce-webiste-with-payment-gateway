import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import HomeSlider from "./HomeSlider/index";
import CategorySlider from "../../components/CategorySlider/index";
import Banners from "../../components/Banners";
import { Link } from "react-router-dom";
import Product from "../../components/Product";
import Banner4 from "../../assets/images/banner4.jpg";
import Slider from "react-slick";
import TopProducts from "./TopProducts";

const Home = (props) => {
  const [prodData, setprodData] = useState(props.data);
  const [catArray, setcatArray] = useState([]);
  const [activeTab, setactiveTab] = useState();
  const [activeTabIndex, setactiveTabIndex] = useState(0);
  const [activeTabData, setActiveTabData] = useState([]);
  const [bestSells, setBestSells] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  const productRow = useRef();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 3000,
  };

  const catArr = [];

  useEffect(() => {
    prodData.length !== 0 &&
      prodData.map((item) => {
        item.items.length !== 0 &&
          item.items.map((item_) => {
            catArr.push(item_.cat_name);
          });
      });

    const list2 = catArr.filter(
      (item, index) => catArr.indexOf(item) === index
    );
    setcatArray(list2);

    setactiveTab(list2[0]);

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    var arr = [];
    setActiveTabData(arr);
    prodData.length !== 0 &&
      prodData.map((item, index) => {
        item.items.map((item_, index_) => {
          if (item_.cat_name === activeTab) {
            {
              item_.products.length !== 0 &&
                item_.products.map((product) => {
                  arr.push({
                    ...product,
                    parentCatName: item.cat_name,
                    subCatName: item_.cat_name,
                  });
                });
              setActiveTabData(arr);
              // setTimeout(() => {
              //   setIsLoadingProducts(false);
              // }, [1000]);
              setActiveTabData(item_.products);
            }
          }
        });
      });
  }, [activeTab, activeTabData]);

  const bestSellsArr = [];

  useEffect(() => {
    prodData.length !== 0 &&
      prodData.map((item) => {
        if (item.cat_name === "Electronics") {
          item.items.length !== 0 &&
            item.items.map((item_) => {
              item_.products.length !== 0 &&
                item_.products.map((product, index) => {
                  bestSellsArr.push(product);
                });
            });
        }
      });

    setBestSells(bestSellsArr);
  }, []);

  return (
    <>
      <HomeSlider />
      <CategorySlider data={prodData} />
      <Banners />

      <section className="homeProducts ">
        <div className="container-fluid">
          <div className="d-flex align-items-center ">
            <h2 className="hd mb-0 mt-0">Popular Products</h2>
            <ul className="list list-inline ml-auto filterTab mb-0">
              {catArray.length !== 0 &&
                catArray.map((cat, index) => {
                  return (
                    <li className="list list-inline-item">
                      <Link
                        className={`cursor text-capitalize 
                                                ${
                                                  activeTabIndex === index &&
                                                  "act"
                                                }`}
                        onClick={() => {
                          // setActiveTabData([]);
                          setactiveTab(cat);
                          setactiveTabIndex(index);

                          // productRow.current.scrollLeft = 0;
                          // setIsLoadingProducts(true);
                        }}
                      >
                        {cat}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="productRow  ">
            {activeTabData.length !== 0 &&
              activeTabData.map((item, index) => {
                // console.log(item.type);
                return (
                  <div className="item" key={index}>
                    <Product tag={item.type} item={item} />
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <section className="homeProducts  homeProductRow2 pt-0">
        <div className="container-fluid">
          <div className="d-flex align-items-center ">
            <h2 className="hd mb-0 mt-0">Daily Best Sales </h2>
            {/* <ul className="list list-inline ml-auto filterTab mb-0">
              <li className="list-inline-item">
                <Link to="" className="cursor">
                  Featured
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="" className="cursor">
                  Popular
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="" className="cursor">
                  New added
                </Link>
              </li>
            </ul> */}
          </div>

          <br />
          <br />
          <div className="row">
            <div className="col-md-3 pr-5">
              <img
                src={Banner4}
                className=""
                style={{ width: "115%", borderRadius: "15px" }}
              />
            </div>

            <div className="col-md-9">
              <Slider {...settings} className="productSlider">
                {bestSells.length !== 0 &&
                  bestSells.map((item, index) => {
                    return (
                      <div className="item">
                        <Product tag={item.type} item={item} />
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="topProductsSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProducts title="Top Selling" />
            </div>
            <div className="col">
              <TopProducts title="Trending Products" />
            </div>
            <div className="col">
              <TopProducts title="recently Added" />
            </div>
            <div className="col">
              <TopProducts title="Top Rated" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
