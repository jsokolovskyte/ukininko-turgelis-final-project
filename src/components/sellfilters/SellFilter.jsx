import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const SellFilter = ({seller}) => {

    const [pageNumber, setPageNumber] = useState(0);
    const sellersPerPage = 2; //for now, change later to 10
    const pagesVisited = pageNumber * sellersPerPage;

    const displaySellers = seller.slice(pagesVisited, pagesVisited + sellersPerPage).map((user) => (

        <div className="sell-fill-group" key={user._id}>
                <div className="sell-fill-header">
                    <img src={user.image} alt={user.name} />
                </div>
                <div className="sell-fill-body">
                <Link to={`../seller:${user._id}`}>{user.name} <FontAwesomeIcon icon={faEye} /></Link>
                    <span className="follow"> Follow</span>
                    <span className="date">Member since: {(user.createdAt).slice(0, 10)}</span>
                </div>
            </div>
        ));

    const pageCount = Math.ceil(seller.length / sellersPerPage);

    const handlePageClick = ({selected}) => {

        setPageNumber(selected);

    }

    return (
        <>
    <div className="sell-fill-cards">
        {displaySellers}
    </div>
      <ReactPaginate className="filter-pagination"
        previousLabel = {"Prev"}
        nextLabel = {"Next"}
        breakLabel = {"..."}
        pageCount = {pageCount}
        marginPagesDisplayed = {2}
        pageRangeDisplayed = {3}
        onPageChange = {handlePageClick}
        pageClassName = {"pagi-item"}
        pageLinkClassName = {"pagi-link"}
        activeClassName = {"pagi-active"}
        activeLinkClassName = {"pagi-active-link"}
        previousClassName = {"pagi-item"}
        previousLinkClassName = {"pagi-link"}
        nextClassName = {"pagi-item"}
        nextLinkClassName = {"pagi-link"}
        breakClassName = {"pagi-item"}
        breakLinkClassName = {"pagi-link"}
        disabledClassName = {"disabledPagi"}

      />  
        </>
    )
}

export default SellFilter;