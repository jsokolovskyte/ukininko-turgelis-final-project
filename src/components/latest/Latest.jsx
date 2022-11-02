import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import LatestSeller from "./LatestSeller";

const Latest = () => {

    const [users, setUsers] = useState([]); //default is empty
    const [products, setProducts] = useState([]); //default is empty


    useEffect(() => {

        const fetchData = async () => {

            const result = await axios.get("/api/users/all");
            console.log(result.data);
            setUsers(result.data);

            const res = await axios.get("/api/products");
            console.log(res.data);
            setProducts(res.data);

        }

        fetchData();

    }, []);

    return (
        <div className="latest-row">
            <div className="latest-col">
                <h2>new fresh products</h2>
                <div className="latest-products">

                    {products.slice(-3).map((product) => (
                    <div className="latest-group" key={product._id}>
                        <div className="latest-header">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="latest-body">
                            <Link to={`${product.slug}`}>{product.name} <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> {product.category}</span>
                            <span className="price"> {(product.price).toFixed(2)}(€/kg)</span>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <div className="latest-col">
                <h2>newly registered sellers. check them out!</h2>
                <div className="latest-sellers">

                    {/*I only want last 6 members, not all*/}
                    {users.slice(-6).map((user) => (
                        <LatestSeller key={user._id} user={user} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Latest