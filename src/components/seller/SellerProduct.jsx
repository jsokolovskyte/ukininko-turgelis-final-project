import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const SellerProduct = ({product}) => {

    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 6;
    const pagesVisited = pageNumber * productsPerPage;

    const displayProduct = product.slice(pagesVisited, pagesVisited + productsPerPage).map((pro) => (

        <div className="filter-card">
            <div className="card-header">
                <img src={pro.image} alt={pro.name} />
            </div>
            <div className="card-body">
                <Link to={`../${pro.slug}`}>{pro.name} <FontAwesomeIcon icon={faEye} /></Link>
                <span className="category"> {pro.category}</span>
                <span className="price"> {(pro.price).toFixed(2)}(€/kg)</span>
            </div>
            <div className="card-footer">
                <button>Add to cart</button>
            </div>
        </div>

        ));

    const pageCount = Math.ceil(product.length / productsPerPage);

    const handlePageClick = ({selected}) => {
        setPageNumber(selected);
    }

    return (
        <>
            <div className="filter-cards">
                {displayProduct}
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

export default SellerProduct;