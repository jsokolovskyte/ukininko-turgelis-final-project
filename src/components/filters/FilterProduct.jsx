import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const FilterProduct = ({products}) => {

    const [pageNumber, setPageNumber] = useState(0);
    const sellersPerPage = 5; //for now, change later to 30
    const pagesVisited = pageNumber * sellersPerPage;

    const displayProducts = products.slice(pagesVisited, pagesVisited + sellersPerPage).map((product) => (
        <div className="filter-card" key={product._id}>
            <div className="card-header">
                <img src={product.image} alt={product.name} />
                <Link to={`../seller/${product.sellerId}`}> <img className="card-sellers" src={product.sellerImage} alt={product.seller} /></Link>
            </div>
            <div className="card-body">
                <Link to={`../${product.slug}`}>{product.name} <FontAwesomeIcon icon={faEye} /></Link>
                <span className="category"> {product.category}</span>
                <span className="price"> {(product.price).toFixed(2)}(€/kg)</span>
            </div>
            <div className="card-footer">
                    <button>Add to cart</button>
            </div>
        </div>
        ));

    const pageCount = Math.ceil(products.length / sellersPerPage);

    const handlePageClick = ({selected}) => {
        setPageNumber(selected);
    }

    return(
        <>
             <div className="filter-cards">
                {displayProducts}
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

export default FilterProduct;