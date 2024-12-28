import Product from "../models/productSchema.js";

export const getAllProducts = async(req,res) =>{
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.json(error);
    }
}

export const getOneProduct =  async (req,res) =>{
    try {
        let {id} = req.params;
        const product = await Product.findById(id);
        res.json(product);
    } catch (error) {
        res.json(error);
    }
}

export const addProduct = async(req, res)=>{
    const product = req.body;
    
        if(!product.name || !product.price || !product.image){
            return res.status(400).json({success: false, message: "Please provide all fields"});
        }
        const newProduct = new Product(product);
    
        try {
            await newProduct.save();
            res.status(201).json({success: true, data: newProduct})
        } catch (error) {
            console.log(error, "Error in creating product");
        }
}

export const updateProduct = async (req, res)=>{
    const {id} = req.params;

    const product = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new : true});
        res.json({success: true,data:updatedProduct ,message: "Product Updated!!"});
    } catch (error) {
        res.json(error);
    }
}

export const deleteOneProduct = async (req, res)=>{
    try {
        const {id} = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);    
        // res.json("Deleted Successfully...")
        res.json({success: true, data:  deletedProduct, message: "Product Deleted..."})
    } catch (error) {
        res.json(error)
    }
}

export const deleteAllProducts = async (req,res) =>{
    try {
        await Product.deleteMany();
        res.json("Deleted All items...");
    } catch (error) {
        res.json(error);
    }
}