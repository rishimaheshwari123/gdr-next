const productModel = require("../models/productModel")
const createProductCtrl = async (req, res) => {
    try {
        const { title, images } = req.body;
        const imageArray = typeof images === 'string' ? JSON.parse(images) : images;
        console.log(req.body)
        if (!title || !imageArray) {
            return res.status(400).json({
                success: false,
                message: "Please Provide All Fields"
            });
        }

        const product = await productModel.create({
            title, images: imageArray
        });

        return res.status(201).json({
            success: true,
            message: "Product created successfully!",
            product
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in creating product"
        });
    }
}




const getAllProductCtrl = async (req, res) => {
    try {
        const products = await productModel.find({});
        return res.status(200).json({
            totalProducts: products.length,
            success: true,
            products,
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in getting all product"
        })
    }
}
const deleteProductCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        await productModel.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: "Product Deleted successfully!"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in deleting product"
        })
    }
}
module.exports = { createProductCtrl, getAllProductCtrl, deleteProductCtrl }