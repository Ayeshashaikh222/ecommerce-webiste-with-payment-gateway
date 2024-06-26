import React, { useEffect, useState } from "react";
import "./style.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const CategorySlider = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 2000,
    centerMode: true,
  };

  const [allData, setAllData] = useState(props.data);
  const [totalLength, setTotalLength] = useState([]);
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
  ]);

  var catLength = 0;
  var lengthArr = [];
  useEffect(() => {
    allData.length !== 0 &&
      allData.map((item, index) => {
        item.items.length !== 0 &&
          item.items.map((item_) => {
            catLength += item_.products.length;
          });
        lengthArr.push(catLength);
        catLength = 0;
      });

    const list = lengthArr.filter(
      (item, index) => lengthArr.indexOf(item) === index
    );
    setTotalLength(list);
  }, []);

  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="hd">Featured Categories</h2>
          <Slider
            {...settings}
            className="category_slider_Main"
            id="category_slider_Main"
          >
            {allData.length !== 0 &&
              allData.map((item, index) => (
                <div className="item" key={index}>
                  <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                    <div className="info" style={{ background: itemBg[index] }}>
                      <img src={item.image} width="80" />
                      <h5 className="text-capitalize mt-3">{item.cat_name}</h5>
                      <p>{totalLength[index]} items</p>
                    </div>
                  </Link>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CategorySlider;
