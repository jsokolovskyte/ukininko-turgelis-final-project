import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserInfoOrders from "./UserInfoOrders";
import axios from "axios"

const AccountUserInfo = () => {

    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

    const id = userInfo && userInfo._id

    const [userOrders, setUserOrders] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const result = await axios.get(`/api/orders/userorders/${id}`)
                console.log(result.data)
                setUserOrders(result.data)

            }catch(error){
                console.log("Error!")
            }
        }
        fetchData();

    }, [id])

    return(
        <>
            <div className="user-info-row">
                <p className="balance">My Earnings: <b>00.00€</b></p>
            </div>

            <div className="user-info-row">
                <p className="user-orders">Users orders:</p>

                <div className="account-orders">
                    {userOrders.length === 0 ? (<h2 className="info">You have no Orders yet! </h2>) : (  <UserInfoOrders userOrders={userOrders}/>)}
                </div>
            </div>
        </>
    )
}

export default AccountUserInfo;