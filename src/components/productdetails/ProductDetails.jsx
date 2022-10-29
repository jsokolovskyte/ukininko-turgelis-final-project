import React from "react";
import { Link } from "react-router-dom"

const ProductDetails = () => {
    return (
        <div className="product-row">
            <div className="product-col">
                <img src="./assets/images/products/tomato.png" alt="" />
                <Link to="/sellers:id"><img className="seller-product" src="./assets/images/sellers/person4.png" alt="" /></Link> 
            </div>
            <div className="product-col">
                <div className="product-info">
                    <h2 className="product-title">Tomato</h2>
                    <span className="category">Vegetable</span>
                </div>

                <div className="product-info">
                    <span className="price">Price: 0.99(€/kg)</span>
                    <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat delectus cumque vitae aliquid expedita reiciendis? Amet nesciunt autem veritatis quibusdam repudiandae nemo veniam modi nulla omnis, voluptatem aspernatur non!
                    Ratione fugit tempora excepturi asperiores atque distinctio pariatur animi minima vel totam dolor ducimus blanditiis omnis, ut quam accusantium aspernatur consectetur temporibus dolores unde, harum corrupti amet necessitatibus officia. Officiis.</span>
                </div>

                <div className="product-add">
                    <button>Add to Cart</button>
                </div>

            </div>
        </div>
    )
}

export default ProductDetails