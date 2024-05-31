import React, { useState } from "react";
import "./style.css";
import Slider from "react-slick";

const CategorySlider = () => {
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
            {itemBg.length !== 0 &&
              itemBg.map((item, index) => {
                return (
                  <div className="item">
                    <div className="info" style={{ background: item }}>
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" />
                      <h5>Cake & Milk</h5>
                      <p>26 items</p>
                    </div>
                  </div>
                );
              })}
            {/* <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>

            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CategorySlider;
