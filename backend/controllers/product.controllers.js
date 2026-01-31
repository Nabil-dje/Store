import { get } from "mongoose";
import Product from "../models/product.model.js";

export const getproducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch (error) {
        console.error("error on get products", error.message)
        res.status(500).json({success: false , message:"server error"});
    }

};

export const createproduct = async (req, res) => {
    const product = req.body;
    const newProduct = new Product(product) 
    try {
        await newProduct.save();
        res.status(201).json({success:true, data: newProduct});
    } catch (error) {
        console.error("error on create product", error.message)
        res.status(500).json({success: false , message:"server error"});
    }
};

export const updateproduct = async (req, res) => {
    const {id} = req.params;
    const updates = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success: false, message: "Invalid product ID"});
    }  
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, updates, {new: true});
        res.status(200).json({success: true, data: updatedProduct});
    } catch (error) {
        res.status(404).json({success: false, message: "Product not found"});
    }
};

export const deleteproduct = async(req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success: false, message: "Invalid product ID"});
    } 
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product Delete"});
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    
    }
};