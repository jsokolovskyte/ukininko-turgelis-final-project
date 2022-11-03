import { faEye, faRefresh, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios"
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Passwords from "../forms/Passwords.jsx";
import AddProduct from "./AddProduct.jsx";
import UserProduct from "./UserProduct.jsx";

const AccountUser = () => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

    const id = userInfo._id;

    const [name, setName] = useState(userInfo.name);
    const [email, setEmail] = useState(userInfo.email);
    const [address, setAddress] = useState(userInfo.address);
    const [phone, setPhone] = useState(userInfo.phone);

    const [image, setImage] = useState(null);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [previewImage, setPreviewImage] = useState(false);

    const [open, setOpen] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);

    const [product, setProduct] = useState([]);

    useEffect(() => {
        if(!localStorage.getItem("userInfo")) {
            localStorage.getItem("userInfo");
            navigate("/");
        }

        const fetchData = async () => {
            try {

                const res = await axios.get(`/api/products/seller/${id}`);
                console.log(res.data)
                setProduct(res.data)

            } catch(error) {
                console.log("error!")
            }
        }
        fetchData();

    }, [navigate, id])

    const handlerUpdate = async (e) => {
        e.preventDefault();

        try {

            const {data} = await axios.put("/api/users/update", {
                _id: userInfo._id,
                name,
                email,
                address,
                phone
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
            alert("Account successfully updated!")

        } catch(error) {
            alert("Account not updated!");
        }
    }

    const validateImage = async (e) => {
        const file = e.target.files[0];
        if(file.size >= 1048574) {
            return alert("Max Size for Image is 1MB");
        } else {
            setImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    }

    const UploadImage = async () => {
        const data = new FormData();
        data.append("file", image)
        data.append("upload_preset", "hsrnwelu")
        try {

            setUploadingImage(true);
            let res = await fetch("https://api.cloudinary.com/v1_1/daklbeheh/image/upload", {
                method: "post",
                body: data
            });
            const urlData = await res.json();
            setUploadingImage(false);
            return urlData.url;

        } catch(error) {

            setUploadingImage(false);
            console.log(error);
        }
    }

    const handlerUpdateImage = async (e) => {
        e.preventDefault();

        if(!image){
            return alert("Please select your Profile Picture");
        }

        const url = await UploadImage(image);
        console.log(url);

        const {data} = await axios.put("/api/users/update", {
            _id: userInfo._id,
            image: url
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
        alert("Profile Picture successfully updated!")
    }

    return (
        <div className="account-row">
            <h1 className="account-title">My Account</h1>
            <div className="account-groups">
                <div className="account-group">
                    <form className="form-image" onSubmit={handlerUpdateImage}>
                        <img src={previewImage || userInfo.image} alt="" />
                        <label htmlFor="image_upload"> <FontAwesomeIcon icon={ faPlusCircle }/>
                        </label>
                        <input type="file" hidden id="image_upload" accept="image/png, image.jpeg" onChange={validateImage}/>
                        <div className="btn-upload">
                        <button>{uploadingImage ? "Uploading..." : "Upload"}</button>
                        </div>
                    </form>

                    <div className="form-row account">
                        <form onSubmit={handlerUpdate}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" onChange={(e) => setAddress(e.target.value)} value={address}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" id="phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
                            </div>
                            <div className="form-group">
                                <span className="change-password" onClick={() => setOpen(true)}>Change Password</span>
                            </div>
                            <div className="form-btn">
                                <button><FontAwesomeIcon icon={faRefresh} /> Update</button>
                            </div>
                        </form>
                    </div>
                    {open && <Passwords setOpen={setOpen} />}
                </div>

                <div className="account-group">
                    <h2 className="account-subtitle">My Products</h2>
                    <button className="add-btn" onClick={() => setOpenAdd(true)}>Add New Product</button>
                    <div className="account-products">
                        {product.length === 0 ? (<h2 className="info">You have no Products yet! </h2>) : (  <UserProduct product={product}/>)}
                    </div>

                    <h2 className="account-subtitle">My Orders</h2>
                    <div className="account-orders">
                        <h4>Order No: 2242342342 <Link to="/"> <FontAwesomeIcon icon={faEye} /></Link></h4>
                        <h4>Order No: 2242342342 <Link to="/"> <FontAwesomeIcon icon={faEye} /></Link></h4>
                        <h4>Order No: 2242342342 <Link to="/"> <FontAwesomeIcon icon={faEye} /></Link></h4>
                        <h4>Order No: 2242342342 <Link to="/"> <FontAwesomeIcon icon={faEye} /></Link></h4>
                        <h4>Order No: 2242342342 <Link to="/"> <FontAwesomeIcon icon={faEye} /></Link></h4>
                    </div>

                    <div className="filter-pagination">
                    <ul>
                        <li ><Link to="#">Prev</Link></li>
                        <li className="pagi-active"><Link to="#">1</Link></li>
                        <li ><Link to="#">Next</Link></li>
                    </ul>
                </div>
                {openAdd && <AddProduct setOpenAdd={setOpenAdd} />}
                </div>
            </div>
        </div>
    )
}

export default AccountUser