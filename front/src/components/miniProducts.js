import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCouch,
  faTv,
  faRecycle,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { MdElectricalServices } from "react-icons/md"; // Another alternative
import { PiOfficeChairLight } from "react-icons/pi";
import { PiDeskLight } from "react-icons/pi";
import "../assets/css/miniproducts.css";
import OfficeChairs from "./officeChairs";
import HomeFurniture from "./homeFurniture";
import Electronics from "./electronics";
import SecondHandItems from "./secondHandItems";
import OfficeDesks from "./officeDesks";
import Accessories from "./accessories";

function MiniProducts() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [display, setDisplay] = useState(<OfficeChairs />);
  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const displaySet = (setter) => {
    if (setter === "office-chairs") {
      setDisplay(<OfficeChairs />);
    } else if (setter === "home-furniture") {
      setDisplay(<HomeFurniture />);
    } else if (setter === "electronics") {
      setDisplay(<Electronics />);
    } else if (setter === "second-hand-items") {
      setDisplay(<SecondHandItems />);
    } else if (setter === "office-desks") {
      setDisplay(<OfficeDesks />);
    } else if (setter === "accessories") {
      setDisplay(<Accessories />);
    }
  };

  return (
    <div className="mini-products-container">
      <button className="mini-products-toggle-btn" onClick={toggleNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav
        className={`side-navigation ${isExpanded ? "expanded" : "collapsed"}`}
      >
        <ul>
          <li onClick={() => displaySet("office-chairs")}>
            <PiOfficeChairLight className="icon" />
            {isExpanded && <p className="icon-description">Office Chairs</p>}
          </li>
          <li onClick={() => displaySet("home-furniture")}>
            <FontAwesomeIcon icon={faCouch} className="icon" />
            {isExpanded && <p className="icon-description">Home Furniture</p>}
          </li>
          <li onClick={() => displaySet("electronics")}>
            <FontAwesomeIcon icon={faTv} className="icon" />
            {isExpanded && <p className="icon-description">Electronics</p>}
          </li>
          <li onClick={() => displaySet("second-hand-items")}>
            <FontAwesomeIcon icon={faRecycle} className="icon" />
            {isExpanded && (
              <p className="icon-description">Second-Hand Items</p>
            )}
          </li>
          <li onClick={() => displaySet("office-desks")}>
            <PiDeskLight className="icon" />
            {isExpanded && <p className="icon-description">Office Desks</p>}
          </li>
          <li onClick={() => displaySet("accessories")}>
            <MdElectricalServices className="icon" />
            {isExpanded && <p className="icon-description">Accessories</p>}
          </li>
        </ul>
      </nav>
      {display}
    </div>
  );
}

export default MiniProducts;
