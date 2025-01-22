import {
  faChair,
  faCouch,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function MiniProducts() {
  return (
    <>
      <div>
        <FontAwesomeIcon icon={faTv} />
        <FontAwesomeIcon icon={faChair} />
        <FontAwesomeIcon icon={faCouch} />
      </div>
    </>
  );
}

export default MiniProducts;
