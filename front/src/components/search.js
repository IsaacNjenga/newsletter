import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/search.css";

function Search() {
  const [search, setSearch] = useState("");
  return (
    <div className="search-container">
      <form className="search-form">
        <InputGroup>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder="I am looking for..."
            className="search-bar"
          />
        </InputGroup>
      </form>
    </div>
  );
}

export default Search;
