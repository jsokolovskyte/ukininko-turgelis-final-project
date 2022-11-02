import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faRefresh } from "@fortawesome/free-solid-svg-icons";

const EditProduct = ({setOpenEdit, pro}) => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

    const [name, setName] = useState(pro.name);
    const [slug, setSlug] = useState(pro.slug);
    const [category, setCategory] = useState(pro.category);
    const [description, setDescription] = useState(pro.description);
    const [price, setPrice] = useState(pro.price);
    const [editImageProduct, setEditImageProduct] = useState(null);
    const [editingImageProduct, setEditingImageProduct] = useState(false);
    const [editPreviewImageProduct, setEditPreviewImageProduct] = useState(pro.image);


    const validateEditImageProduct = async (e) => {
        const fileProduct = e.target.files[0];
        if(fileProduct.size >= 1048574) {
            return alert("Max Size for Image is 1MB");
        } else {
            setEditImageProduct(fileProduct);
            setEditPreviewImageProduct(URL.createObjectURL(fileProduct));
        }
    }

    const uploadImageProduct = async () => {
        const dataProduct = new FormData();
        dataProduct.append("file", editImageProduct)
        dataProduct.append("upload_preset", "hsrnwelu")
        try {

            setEditingImageProduct(true);
            let res = await fetch("https://api.cloudinary.com/v1_1/daklbeheh/image/upload", {
                method: "post",
                body: dataProduct
            });
            const urlDataProduct = await res.json();
            setEditingImageProduct(false);
            return urlDataProduct.url;

        } catch(error) {

            setEditingImageProduct(false);
            console.log(error);
        }
    }

    const handlerUpdateProduct = async (e) => {
        e.preventDefault();

        if(editPreviewImageProduct){

        try {
            const {data} = await axios.put("/api/products/update", {
                _id: pro._id,
                name,
                slug,
                category,
                description,
                price,
                image: editPreviewImageProduct,
                sellerId: userInfo._id,
                seller: userInfo.name,
                sellerImage: userInfo.image
            });
            console.log(data)
            alert("You have successfully edited your Product!")
            navigate("/account");
            setOpenEdit(false);

        } catch(error) {

            console.log("Error!");
            alert("Editing your Product failed, please try again!")

        }
    } else {

        const url = await uploadImageProduct(editImageProduct)
        console.log(url);

        try {
            const {data} = await axios.put("/api/products/update", {
                id: pro._id,
                name,
                slug,
                category,
                description,
                price,
                image: url,
                sellerId: userInfo._id,
                seller: userInfo.name,
                sellerImage: userInfo.image
            });
            console.log(data)
            alert("You have successfully edited your Product!");
            navigate('/account');
            setOpenEdit(false);
        } catch(error){
            console.log("Error!")
            alert("Editing your Product failed, please try again!")
        }
    }

}

    return (
        <div className="passwords-row">
            <form onSubmit={handlerUpdateProduct}>
                <div className="close-form" onClick={() => setOpenEdit(false)}>X</div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name} />
                </div>

                <div className="form-group">
                    <label htmlFor="slug">Slug</label>
                    <input type="text" id="slug" onChange={(e) => setSlug(e.target.value)} value={slug} />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input type="text" id="category" onChange={(e) => setCategory(e.target.value)} value={category} />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" id="price" onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>

                <div className="form-group form-image product">
                    <img src={editPreviewImageProduct} alt="" />
                    <label htmlFor="image_update_product"> <FontAwesomeIcon icon={faPlusCircle}/></label>
                    <input type="file" hidden id="image_update_product" accept="image/png, image.jpeg" onChange={validateEditImageProduct}/>
                </div>

                <div className="form-btn">
                    <button type="submit"><FontAwesomeIcon icon={faRefresh}/> {editingImageProduct ? "Editing..." : "Edit Product"}</button>
                </div>
            </form>
        </div>
    )
};

export default EditProduct;