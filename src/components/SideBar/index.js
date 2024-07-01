import { ClassNames } from "@emotion/react";
import React, { useEffect, useState } from "react";
// import Slider from "@mui/material/Slider";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Checkbox from "@mui/material/Checkbox";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import BannerImg from "../../assets/images/banner1.jpg";
import { Link, useParams } from "react-router-dom";

function valuetext(value) {
  return `${value}`;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SideBar = (props) => {
  const [value, setValue] = React.useState([0, 10000]);
  const [totalLength, setTotalLength] = useState([]);
  const [brandFilters, setBrandFilters] = React.useState([]);
  const [ratingsArr, setRatings] = React.useState([]);

  let { id } = useParams();

  var catLength = 0;
  var lengthArr = [];

  var brands = [];
  var ratings = [];

  useEffect(() => {
    props.data.length !== 0 &&
      props.data.map((item, index) => {
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

  useEffect(() => {
    brands = [];
    ratings = [];
    props.currentCatData.length !== 0 &&
      props.currentCatData.map((item) => {
        brands.push(item.brand);
        ratings.push(parseFloat(item.rating));
      });

    const brandList = brands.filter(
      (item, index) => brands.indexOf(item) === index
    );
    setBrandFilters(brandList);

    const ratings_ = ratings.filter(
      (item, index) => ratings.indexOf(item) === index
    );
    setRatings(ratings_);
  }, [id, props.currentCatData.length]);

  useEffect(() => {
    props.filterByPrice(value[0], value[1]);
  }, [value]);

  const filterByBrand = (keyword) => {
    props.filterByBrand(keyword);
  };

  const filterByRating = (keyword) => {
    props.filterByRating(parseFloat(keyword));
  };

  return (
    <div className="sidebar">
      <div className="card border-0 shadow">
        <h3>Category</h3>

        <div className="categoryList">
          {props.data.length !== 0 &&
            props.data.map((item, index) => (
              <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                <div className="categoryItem d-flex align-items-center cursor">
                  <span className="img">
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                      width={30}
                    />
                  </span>
                  <h4 className="mb-0 ml-3 mr-3">{item.cat_name}</h4>
                  <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto itemCount">
                    {totalLength[index]}
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <div className="card border-0 shadow">
        <h3>Fill by price</h3>
        {/* <Slider
          min={0}
          step={1}
          max={10000}
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          color="success"
        /> */}

        <RangeSlider
          value={value}
          onInput={setValue}
          min={100}
          max={60000}
          step={5}
          style={{ backgroundColor: "green" }}
          color="success"
        />

        <div className="d-flex pt-2 pb-2 priceRange">
          <span>
            From: <strong className="text-success">Rs: {value[0]}</strong>
          </span>
          <span className="ml-auto">
            From: <strong className="text-success">Rs: {value[1]}</strong>
          </span>
        </div>

        <div className="filters">
          <h5>Filter By Brand</h5>
          <ul className="mb-0">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {brandFilters.length !== 0 &&
                brandFilters.map((item, index) => {
                  return (
                    <li key={index}>
                      {" "}
                      <FormControlLabel
                        value={item}
                        control={<Radio onChange={() => filterByBrand(item)} />}
                        label={item}
                      />
                    </li>
                  );
                })}
            </RadioGroup>
          </ul>
        </div>

        <div className="filters">
          <h5>Filter By Rating</h5>
          <ul>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {ratingsArr.length !== 0 &&
                ratingsArr.map((item, index) => {
                  return (
                    <li key={index}>
                      {" "}
                      <FormControlLabel
                        value={item}
                        control={
                          <Radio onChange={() => filterByRating(item)} />
                        }
                        label={item}
                      />
                    </li>
                  );
                })}
            </RadioGroup>
          </ul>
        </div>

        <div className="d-flex">
          <Button className="btn btn-g">
            <FilterAltOutlinedIcon />
            Filter
          </Button>
        </div>
      </div>

      <br />

      <img src={BannerImg} alt="alert" className="w-100 " />
    </div>
  );
};

export default SideBar;
