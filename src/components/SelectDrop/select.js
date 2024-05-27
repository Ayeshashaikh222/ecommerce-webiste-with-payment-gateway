import React, { useState } from "react";
import "../SelectDrop/select.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const Select = ({ data, placeholder, icon }) => {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(placeholder);

  const [listData, setListData] = useState(data);
  const [listData2, setListData2] = useState(data);

  const handleopenSelect = () => {
    setisOpenSelect(!isOpenSelect);
  };

  const handleCloseSelect = (index, name) => {
    setSelectedIndex(index);
    setisOpenSelect(false);
    setSelectedItem(name);
  };

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    // console.log(keyword);

    const list = listData2.filter((item) => {
      return item.toLowerCase().includes(keyword);
    });

    console.log(list);
  };

  return (
    <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
      <div className="selectDropWrapper cursor position-relative">
        {icon}
        <span className="openSelect" onClick={handleopenSelect}>
          {selectedItem.length > 14
            ? selectedItem.substr(0, 14) + "..."
            : selectedItem}
          <KeyboardArrowDownIcon className="arrow" />
        </span>

        {isOpenSelect === true && (
          <div className="selectDrop">
            <div className="searchFeild">
              <input
                type="text"
                placeholder="Search here..."
                onChange={filterList}
              />
            </div>
            <ul className="searchResults">
              <li
                key={0}
                onClick={() => handleCloseSelect(0, placeholder)}
                className={`${selectedIndex === 0 ? "active" : ""}`}
              >
                {placeholder}
              </li>

              {data.map((item, index) => (
                <li
                  key={index + 1}
                  onClick={() => handleCloseSelect(index + 1, item)}
                  className={`${selectedIndex === index + 1 ? "active" : ""}`}
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
