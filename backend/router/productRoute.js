import { Router } from "express";
import { addProduct, deleteAllProducts, deleteOneProduct, getAllProducts, getOneProduct, updateProduct } from "../controller/productsController.js";
import { isValidId } from "../middleware.js";
const router = Router();

//get all products
router.get("/products", getAllProducts);

//get a product
router.get("/products/:id",isValidId ,getOneProduct)

//add new product
router.post("/products", addProduct)

//update a product
router.put("/products/:id", isValidId ,updateProduct)

//delete a product
router.delete("/products/:id", isValidId, deleteOneProduct)

//delete all products
router.delete("/products",deleteAllProducts);

export default router;