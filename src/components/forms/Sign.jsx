import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Sign = () => {
    return (
        <div className="form-row">

            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input required type="text" id="name" />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input required type="email" id="email" />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input required type="password" id="password" />
            </div>

            <div className="form-group">
                <label htmlFor="r_password">Repeat Password</label>
                <input required type="password" id="r_password" />
            </div>

            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input required type="text" id="address" />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input required type="number" id="phone" />
            </div>

            <div className="form-btn">
                <button><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Register</button>
            </div>

            <div className="form-footer">
                <Link to="/login">Have an account already? Login here.</Link>
            </div>
        </div>
    )
}

export default Sign