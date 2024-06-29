const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');


const getAllProducts = async (req, res) => {
    const products = await Product.find({}).sort('createdAt');
    res.status(StatusCodes.OK).json({ products, count: products.length });
}

const createProduct = async (req, res) => {
    console.log(req.body);
    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({ product });
}

module.exports = {
    getAllProducts,
    createProduct
}