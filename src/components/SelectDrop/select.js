import React, { useState } from "react";
import "../SelectDrop/select.css";

const Select = () => {
  const [isOpenSelect, setOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleopenSelect = () => {
    setOpenSelect(!isOpenSelect);
  };

  const handleCloseSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="selectDropWapper cursor position-relative">
        <span className="openSelect" onClick={handleopenSelect}>
          All Categories
        </span>

        {isOpenSelect === true && (
          <div className="selectDrop">
            <div className="searchFeild">
              <input type="text" />
            </div>
            <ul className="searchResults">
              <li
                onClick={() => handleCloseSelect(0)}
                className={`${selectedIndex === 0 ? "active" : ""}`}
              >
                {" "}
                All Categories
              </li>
              <li
                onClick={() => handleCloseSelect(1)}
                className={`${selectedIndex === 1 ? "active" : ""}`}
              >
                Milks and Dairies
              </li>
              <li
                onClick={() => handleCloseSelect(2)}
                className={`${selectedIndex === 2 ? "active" : ""}`}
              >
                wines & Drinks
              </li>
              <li
                onClick={() => handleCloseSelect(3)}
                className={`${selectedIndex === 3 ? "active" : ""}`}
              >
                Clothing & beauty
              </li>
              <li
                onClick={() => handleCloseSelect(4)}
                className={`${selectedIndex === 4 ? "active" : ""}`}
              >
                Fresh Seafood
              </li>
              <li
                onClick={() => handleCloseSelect(5)}
                className={`${selectedIndex === 5 ? "active" : ""}`}
              >
                Pet Foods & Toy
              </li>
              <li
                onClick={() => handleCloseSelect(6)}
                className={`${selectedIndex === 6 ? "active" : ""}`}
              >
                Fast Food
              </li>
              <li
                onClick={() => handleCloseSelect(7)}
                className={`${selectedIndex === 7 ? "active" : ""}`}
              >
                Baking material
              </li>
              <li
                onClick={() => handleCloseSelect(8)}
                className={`${selectedIndex === 8 ? "active" : ""}`}
              >
                vegetables
              </li>
              <li
                onClick={() => handleCloseSelect(9)}
                className={`${selectedIndex === 9 ? "active" : ""}`}
              >
                Fresh Fruits
              </li>
              <li
                onClick={() => handleCloseSelect(10)}
                className={`${selectedIndex === 10 ? "active" : ""}`}
              >
                Bread & Juice
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Select;
