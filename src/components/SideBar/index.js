import { ClassNames } from "@emotion/react";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import BannerImg from "../../assets/images/banner1.jpg";

function valuetext(value) {
  return `${value}`;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SideBar = () => {
  const [value, setValue] = React.useState([0, 200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="sidebar">
      <div className="card border-0 shadow">
        <h3>Category</h3>

        <div className="categoryList">
          <div className="categoryItem d-flex align-items-center cursor">
            <span className="img">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                width={30}
              />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Milk & Dairies</h4>
            <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
              30
            </span>
          </div>

          <div className="categoryItem d-flex align-items-center cursor">
            <span className="img">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                width={30}
              />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Milk & Dairies</h4>
            <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
              30
            </span>
          </div>

          <div className="categoryItem d-flex align-items-center cursor">
            <span className="img">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                width={30}
              />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Milk & Dairies</h4>
            <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
              30
            </span>
          </div>

          <div className="categoryItem d-flex align-items-center cursor">
            <span className="img">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                width={30}
              />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Milk & Dairies</h4>
            <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
              30
            </span>
          </div>

          <div className="categoryItem d-flex align-items-center cursor">
            <span className="img">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                width={30}
              />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Milk & Dairies</h4>
            <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
              30
            </span>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow">
        <h3>Fill by price</h3>
        <Slider
          min={0}
          step={1}
          max={1000}
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          color="success"
        />

        <div className="d-flex pt-2 pb-2 priceRange">
          <span>
            From: <strong className="text-success">${value[0]}</strong>
          </span>
          <span className="ml-auto">
            From: <strong className="text-success">${value[1]}</strong>
          </span>
        </div>

        <div className="filters">
          <h5>Color</h5>
          <ul className="mb-0">
            <li>
              <Checkbox {...label} color="success" />
              Red (56)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Green (78)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Blue (54)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Blue (54)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Blue (54)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Blue (54)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Blue (54)
            </li>
            <li>
              <Checkbox {...label} color="success" />
              Blue (54)
            </li>
          </ul>
        </div>

        <div className="filters">
          <h5>Item Condition</h5>
          <ul>
            <li>
              <Checkbox {...label} />
              New (1506)
            </li>
            <li>
              <Checkbox {...label} />
              Refurbished (27)
            </li>
            <li>
              <Checkbox {...label} />
              used (45)
            </li>
            <li>
              <Checkbox {...label} />
              New (45)
            </li>
            <li>
              <Checkbox {...label} />
              used (45)
            </li>
            <li>
              <Checkbox {...label} />
              Refurbished (45)
            </li>
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
