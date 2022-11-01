import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios"

const ProductDetails = () => {

    const [product, setProduct] = useState([]);

    const params = useParams();
    const{slug} = params;

    useEffect(() => {

        const fetchData = async () => {

            try{
                const result = await axios.get(`/api/products/slug/${slug}`);
                console.log(result.data)
                setProduct(result.data)
            } catch(error){
                console.log("error!");
            }
        }
        fetchData();
    }, [slug])

        //to find user's id
        // const location = useLocation();
        // // console.log(location);
        // const id = location.pathname.split(":")[1];
        // console.log(id)
    
        // const {product} = useFetch(`/api/products/${id}`)
        // console.log(product);

    return (
        <div className="product-row">
            <div className="product-col">
                <img src={product.image} alt="" />
                <Link to={`../seller/${product.sellerId}`}><img className="seller-product" src={product.sellerImage} alt={product.seller} /></Link> 
            </div>
            <div className="product-col">
                <div className="product-info">
                    <h2 className="product-title">{product.name}</h2>
                    <span className="category">{product.category}</span>
                </div>

                <div className="product-info">
                    <span className="price">Price:{Number(product.price).toFixed(2)}(€/kg)</span>
                    <span className="desc">{product.description}</span>
                </div>

                <div className="product-add">
                    <button>Add to Cart</button>
                </div>

            </div>
        </div>
    )
}

export default ProductDetails