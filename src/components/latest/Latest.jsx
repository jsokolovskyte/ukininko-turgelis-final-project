import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Latest = () => {

    const location = useLocation();
    console.log(location.pathname);

    const [users, setUsers] = useState([]); //default is empty

    useEffect(() => {

        const fetchData = async () => {

            const result = await axios.get("/api/users/all");
            console.log(result.data);
            setUsers(result.data);

        }

        fetchData();

    }, []);

    return (
        <div className="latest-row">
            <div className="latest-col">
                <h2>new fresh products</h2>
                <div className="latest-products">
                    <div className="latest-group">
                        <div className="latest-header">
                            <img src="./assets/images/products/melon.png" alt="" />
                        </div>
                        <div className="latest-body">
                            <Link to="/">Melon <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Fruit</span>
                            <span className="price"> 1.49(€/kg)</span>
                        </div>
                    </div>

                    <div className="latest-group">
                        <div className="latest-header">
                            <img src="./assets/images/products/tomato.png" alt="" />
                        </div>
                        <div className="latest-body">
                            <Link to="/">Tomato <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.99(€/kg)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="latest-col">
                <h2>newly registered sellers. check them out!</h2>
                <div className="latest-sellers">

                    {/*I only want last 6 members, not all*/}
                    {users.slice(-6).map((user) => (

                    <div className="sellers-group" key={user._id}>
                        <div className="sellers-header">
                            <img src={user.image} alt={user.name} />
                        </div>
                        <div className="sellers-body">
                            <Link to={`seller:${user._id}`}>{user.name} <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="follow"> Follow</span>
                            <span className="date">Member since: {(user.createdAt).slice(0, 10)}</span>
                        </div>
                    </div>
                    
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Latest