import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SellerProduct from "./SellerProduct";
import { useContext } from "react";
import { Store } from "../../Store";

const SellerInfo = () => {

    const {state, dispatch: ctxDispatch} = useContext(Store);
    const { wish} = state;

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

    const existUser = localStorage.getItem("userInfo")

    const handlerFollow = () => {

        if(!existUser) {
            window.alert("Sorry, You must log in")
        } else{
    
            //if there is a user one already follows (localStorage), his id from db
            const existItem = wish.wishItems.find((x) => x._id === seller._id);
            const quantity = existItem ? existItem.quantity : 1;

            if(existItem) {
                window.alert("Sorry. You already follow this person.");
                return;
            }
            ctxDispatch({
                type: "WISH_ADD_ITEM",
                payload: {...seller, quantity},
            });
        }
    }

    const sellerExists = wish.wishItems.find((x) => x._id === seller._id)

    const handlerUnfollow = (user) => {

        ctxDispatch({
            type: "WISH_REMOVE_ITEM",
            payload: {...user, user },
        });

    }

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
                    {existUser && sellerExists ? (<span key={seller._id} onClick={() => handlerUnfollow(seller)} className="unfollow">Unfollow</span>) : (<span key={seller._id} onClick={handlerFollow} className="follow"> Follow</span>)}
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
