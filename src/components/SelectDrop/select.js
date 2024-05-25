import React, { useState } from "react";
import "../SelectDrop/select.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const Select = ({ data }) => {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState("All Categories");

  const handleopenSelect = () => {
    setisOpenSelect(!isOpenSelect);
  };

  const handleCloseSelect = (index, name) => {
    setSelectedIndex(index);
    setisOpenSelect(false);
    setSelectedItem(name);
  };

  return (
    <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
      <div className="selectDropWapper cursor position-relative">
        <span className="openSelect" onClick={handleopenSelect}>
          {selectedItem}
          <KeyboardArrowDownIcon className="arrow" />
        </span>

        {isOpenSelect === true && (
          <div className="selectDrop">
            <div className="searchFeild">
              <input type="text" placeholder="Search here..." />
            </div>
            <ul className="searchResults">
              {data.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleCloseSelect(index, item)}
                  className={`${selectedIndex === index ? "active" : ""}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
