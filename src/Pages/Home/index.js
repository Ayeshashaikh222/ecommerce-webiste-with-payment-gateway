import React from "react";
import "./style.css";
import HomeSlider from "./HomeSlider/index";
import CategorySlider from "../../components/CategorySlider/index";
import Banners from "../../components/Banners";
import { Link } from "react-router-dom";
import Product from "../../components/Product";
import Banner4 from "../../assets/images/banner4.jpg";
import Slider from "react-slick";
import TopProducts from "./TopProducts";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 3000,
  };
  return (
    <>
      <HomeSlider />
      <CategorySlider />
      <Banners />

      <section className="homeProducts  ">
        <div className="container-fluid">
          <div className="d-flex align-items-center ">
            <h2 className="hd mb-0 mt-0">Popular Products</h2>
            <ul className="list list-inline ml-auto filterTab mb-0">
              <li className="list-inline-item">
                <Link to="" className="cursor">
                  All
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="" className="cursor">
                  Milk & Dairies
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="" className="cursor">
                  Coffee & tea
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="" className="cursor">
                  Pet Foods
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="" className="cursor">
                  Meats
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="" className="cursor">
                  Vegetables
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="" className="cursor">
                  Fruits
                </Link>
              </li>
            </ul>
          </div>

          <div className="productRow ">
            <div className="item">
              <Product tag="sale" />
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
              <Product tag="best" />
            </div>
            <div className="item">
              <Product tag="sale" />
            </div>
            <div className="item">
              <Product tag="new" />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
          </div>
        </div>
      </section>

      <section className="homeProducts  homeProductRow2 pt-0">
        <div className="container-fluid">
          <div className="d-flex align-items-center ">
            <h2 className="hd mb-0 mt-0">Daily Best Sales </h2>
            <ul className="list list-inline ml-auto filterTab mb-0">
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
            </ul>
          </div>

          <br />
          <br />
          <div className="row">
            <div className="col-md-3 pr-5">
              <img src={Banner4} className="w-100" />
            </div>

            <div className="col-md-9">
              <Slider {...settings} className="productSlider">
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
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="best" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="topProductsSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProducts />
            </div>
            <div className="col">
              <TopProducts />
            </div>
            <div className="col">
              <TopProducts />
            </div>
            <div className="col">
              <TopProducts />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
