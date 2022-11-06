import mongoose from "mongoose";

//to create a table in DB for product
const ProductSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        slug: {type: String, required: true, unique: true},
        category: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: Number, required: true},
        image: {type: String, required: true},
        sellerId: {type: String, required: true},
        seller: {type: String, required: true},
        sellerImage: {type: String, required: true}
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;