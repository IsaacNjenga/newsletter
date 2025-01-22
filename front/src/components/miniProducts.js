import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCouch,
  faTv,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import { HiDesktopComputer } from "react-icons/hi"; // Example alternative icon
import { MdElectricalServices } from "react-icons/md"; // Another alternative
import { PiOfficeChairLight } from "react-icons/pi";
import { PiDeskLight } from "react-icons/pi";
import "../assets/css/miniproducts.css";

function MiniProducts() {
  return (
    <div className="icons-container">
      <nav className="side-navigation">
        <ul>
          <li>
            <PiOfficeChairLight className="icon" />
            Office Chairs
          </li>
          <li>
            <FontAwesomeIcon icon={faCouch} className="icon" />
            Home Furniture
          </li>
          <li>
            <FontAwesomeIcon icon={faTv} className="icon" />
            Electronics
          </li>
          <li>
            <FontAwesomeIcon icon={faRecycle} className="icon" />
            Second-Hand Items
          </li>
          <li>
            <PiDeskLight className="icon" />
            Office Desks
          </li>
          <li>
            <MdElectricalServices className="icon" />
            Accessories
          </li>
        </ul>
      </nav>
      <main className="products-main">
        <h2>Select a Category</h2>
        <p>Explore products from our wide range of categories!</p>
        {/* Dynamic product display can go here */}
      </main>
    </div>
  );
}

export default MiniProducts;
