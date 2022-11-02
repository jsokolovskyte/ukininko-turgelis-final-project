import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SellerProduct from "./SellerProduct";

const SellerInfo = () => {

    const [seller, setSeller] = useState([]);
    const [product, setProduct] = useState([]);

    const params = useParams();
    const {id} = params;

    useEffect(() => {

        const fetchData = async () => {

            try {
                const result = await axios.get(`/api/users/user/${id}`);
                console.log(result.data)
                setSeller(result.data)

                const res = await axios.get(`/api/products/seller/${id}`);
                console.log(res.data)
                setProduct(res.data)

            } catch(error) {
                console.log("error!")
            }
        }
        fetchData();
    }, [id])

    // //to find user's id
    // const location = useLocation();
    // // console.log(location);
    // const id = location.pathname.split(":")[1];
    // console.log(id)

    // const {seller} = useFetch(`/api/users/${id}`)
    // console.log(seller);

    return (
        <div className="seller-row">
            <div className="seller-col">
                <div className="seller-info">
                    <div className="seller-header">
                        <img src={seller.image} alt={seller.name} />
                    </div>
                    <div className="seller-body">
                        <span>{seller.name}</span>
                        <span>{seller.email}</span>
                        <span>{seller.address}</span>
                        <span>{seller.phone}</span>
                    </div>
                    <div className="seller-footer">
                        <span className="follow"> Follow</span>
                    </div>
                </div>
            </div>

            <div className="seller-col">
                <h2 className="seller-title">All products of the Seller {seller.name}</h2>
                <div className="seller-products">
                    <SellerProduct product={product} />
                </div>

            </div>
        </div>
    )
}

export default SellerInfo
