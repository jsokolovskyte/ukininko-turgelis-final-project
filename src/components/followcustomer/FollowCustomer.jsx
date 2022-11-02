import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../../Store";
import ReactPaginate from "react-paginate";
import FollCustomerInfo from "./FollCustomerInfo";
import "./follcustomer.css"

const FollowCustomer = () => {

    const handlePageClick = ({selected}) => {
        setPageNumber(selected);
    }

    const navigate = useNavigate();

    const {state, dispatch: ctxDispatch} = useContext(Store);
    const {wish: {wishItems}} = state;

    const [pageNumber, setPageNumber] = useState(0);
    const sellersPerPage = 12; 
    const pagesVisited = pageNumber * sellersPerPage;

    const pageCount = Math.ceil(wishItems.length / sellersPerPage);

    useEffect(() => {

        if(!localStorage.getItem("userInfo")){
            localStorage.getItem("userInfo");
            navigate("/");
        }
    });


    return (
        <div className="follow-row">
            <h2 className="follow-title">People You follow</h2>
            {wishItems.length === 0 ? (<h2 className="info">You are not following any sellers at this time.</h2>) : (
                <div className="follow-sellers">
                    {wishItems.slice(pagesVisited, pagesVisited + sellersPerPage).map((item) => (
                        <FollCustomerInfo key={item._id} item ={item}/>
                    ))}
            </div>
            )}

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
        </div>
    )
}

export default FollowCustomer