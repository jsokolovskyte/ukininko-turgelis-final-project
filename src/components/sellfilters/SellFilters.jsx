import React, { useEffect, useState } from "react";
import SellFilter from "./SellFilter";
import axios from "axios";

const SellFilters = () => {

    const [seller, setSeller] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {

        const fetchData = async () => {

            const result = await axios.get("/api/users/all");
            console.log(result.data);
            setSeller(result.data);

        }

        fetchData();

    }, []);

    const keys = ["name", "email", "address"];

    const search = () => {
        return seller.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)));
    };

    return (
        <div className="sell-fill-row">
            {seller.length === 0 ? (<h2 className="info">There are no sellers yet </h2>) : (
                <>
                    <div className="sell-fill-col">
                        <input type="search" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
                    </div>

                    <div className="sell-fill-col">
                        <SellFilter seller={search(SellFilter)}/>
                    </div>
                </>
            )}
        </div>
    )
}

export default SellFilters