import { faEye, faPencil, faRefresh, faTrash, faUpload, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios"
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Passwords from "../forms/Passwords.jsx";

const AccountUser = () => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

    const [name, setName] = useState(userInfo.name);
    const [email, setEmail] = useState(userInfo.email);
    const [address, setAddress] = useState(userInfo.address);
    const [phone, setPhone] = useState(userInfo.phone);

    const [image, setImage] = useState(null);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [previewImage, setPreviewImage] = useState(false);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(!localStorage.getItem("userInfo")) {
            localStorage.getItem("userInfo");
            navigate("/");
        }
    })

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
                    <div className="account-products">
                    <div className="filter-cards">
                <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/melon.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Melon <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Fruit</span>
                            <span className="price"> 1.49(€/kg)</span>
                        </div>
                        <div className="card-footer-account">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>

                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/tomato.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Tomato <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.99(€/kg)</span>
                        </div>
                        <div className="card-footer-account">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/apple.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Apple <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Fruit</span>
                            <span className="price"> 0.49(€/kg)</span>
                        </div>
                        <div className="card-footer-account">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/beetroot.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Beetroot <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.49(€/kg)</span>
                        </div>
                        <div className="card-footer-account">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/carrot.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Carrot <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.39(€/kg)</span>
                        </div>
                        <div className="card-footer-account">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/cucumber.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Cucumber <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.79(€/kg)</span>
                        </div>
                        <div className="card-footer-account">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/potato.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Potato <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.39(€/kg)</span>
                        </div>
                        <div className="card-footer-account">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/pumpkin.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Pumpkin <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.49(€/kg)</span>
                        </div>
                        <div className="card-footer-account">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/strawberry.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Strawberry <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Fruit</span>
                            <span className="price"> 1.49(€/kg)</span>
                        </div>
                        <div className="card-footer-account">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/pear.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Pear <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Fruit</span>
                            <span className="price"> 0.89(€/kg)</span>
                        </div>
                        <div className="card-footer-account">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/lettuce.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Lettuce <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 1.39(€/kg)</span>
                        </div>
                        <div className="card-footer-account">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
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

                </div>
            </div>
        </div>
    )
}

export default AccountUser