import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Passwords = ({setOpen}) => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

    const [password, setPassword] = useState("");
    const [rPassword, setRPassword] = useState("");

    const handlerUpdatePassword = async (e) => {
        e.preventDefault();

        //if equal pass with r_pass
        if(password === rPassword) {

            try{
                const {data} = await axios.put("/api/users/update", {
                    _id: userInfo._id,
                    password,
                });
                localStorage.removeItem("userInfo", JSON.stringify(data));
                alert("Password successfully updated!")
                navigate("/login");

            } catch(error) {
                alert("Password not updated")
            }

        } else {
            alert("Passwords don't match!")
        }
    };

    return (
        <div className="passwords-row">
            <form onSubmit={handlerUpdatePassword}>
                <div className="close-form" onClick={() => setOpen(false)}>X</div>
                <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>

                <div className="form-group">
                    <label htmlFor="r_pass">Repeat Password</label>
                    <input type="password" id="r_pass" onChange={(e) => setRPassword(e.target.value)} value={rPassword} />                
                </div>
                <div className="form-btn">
                    <button type="Submit"><FontAwesomeIcon icon={faRefresh}/> Update</button>
                </div>
            </form>
        </div>
    )
}

export default Passwords