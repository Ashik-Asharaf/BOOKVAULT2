import {v2 as cloudinary } from "cloudinary"
import Product from "../models/Product.js"
import { trusted } from "mongoose"

//Controller Function for adding product
export const addProduct = async (req,res) => {
    try {
     
        const productData = JSON.parse(req.body.productData)

        const images = req.files

        //Upload images to cloudinary or use a default image
        let imagesUrl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type: "image"})
                return result.secure_url
            
            
            })
        )

        console.log(productData)
        await Product.create({...productData,image:imagesUrl})
        res.json({success:trusted,message:"Product Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//controller function for product list

export const listProduct = async (req,res) => {
    try {
        const products =await Product.find({})
        res.json({success:true,products})
    } catch (error) {
        console.log(error.mesage)
        res.json({success:false,message:error.message})
    }
}

//controller function for product details
export const singleProduct = async(req,res) => {
    try {
        const {productId} = req.params
        const product = await Product.findById(productId)
        res.json({success:true,product})
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
    }
}

//controller function for product stock update
export const changeStock = async (req,res)=>{
    try{
        const {productId,inStock}=req.body
        await Product.findByIdAndUpdate(productId,{inStock})
        res.json({success:true,message:"Stock Updated"})
    }catch(error){
        console.log(error.message)
        res.json({success:false,message:error.message})
    }
}

