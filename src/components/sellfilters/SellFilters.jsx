import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SellFilter from "./SellFilter";

const SellFilters = () => {
    return (
        <div className="sell-fill-row">
            <div className="sell-fill-col">
                <input type="search" placeholder="Search..." />
                <button> <FontAwesomeIcon icon={faSearch} /> </button>
            </div>

            <div className="sell-fill-col">
                <SellFilter />
            </div>
        </div>
    )
}

export default SellFilters