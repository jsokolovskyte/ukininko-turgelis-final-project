import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const FollowCustomer = () => {
    return (
        <div className="follow-row">
            <h2 className="follow-title">People You follow</h2>
            <div className="follow-sellers">

            <div className="sell-fill-group">
                        <div className="sell-fill-header">
                            <img src="./assets/images/sellers/person1.png" alt="" />
                        </div>
                        <div className="sell-fill-body">
                            <Link to="/sellers:id">Kotryna Kartutė <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="unfollow">Unfollow</span>
                            <span className="date">Member since: 2022.11.01</span>
                        </div>
                    </div>

                    <div className="sell-fill-group">
                        <div className="sell-fill-header">
                            <img src="./assets/images/sellers/person2.png" alt="" />
                        </div>
                        <div className="sell-fill-body">
                            <Link to="/sellers:id">Sigita Sagutė <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="unfollow">Unfollow</span>
                            <span className="date">Member since: 2022.10.31</span>
                        </div>
                    </div>

                    <div className="sell-fill-group">
                        <div className="sell-fill-header">
                            <img src="./assets/images/sellers/person4.png" alt="" />
                        </div>
                        <div className="sell-fill-body">
                            <Link to="/sellers:id">Zigmas Žiogas <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="unfollow">Unfollow</span>
                            <span className="date">Member since: 2022.10.31</span>
                        </div>
                    </div>

                    <div className="sell-fill-group">
                        <div className="sell-fill-header">
                            <img src="./assets/images/sellers/seller3.png" alt="" />
                        </div>
                        <div className="sell-fill-body">
                            <Link to="/sellers:id">Benas Penas <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="unfollow">Unfollow</span>
                            <span className="date">Member since: 2022.09.31</span>
                        </div>
                    </div>
            </div>

            <div className="filter-pagination">
                    <ul>
                        <li ><Link to="#">Prev</Link></li>
                        <li className="pagi-active"><Link to="#">1</Link></li>
                        <li ><Link to="#">Next</Link></li>
                    </ul>
                </div>
        </div>
    )
}

export default FollowCustomer