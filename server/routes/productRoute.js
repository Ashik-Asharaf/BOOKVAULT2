import express from "express"
import { upload } from "../middlewares/multer.js"
import authAdmin from "../middlewares/authAdmin.js"
import { addProduct } from "../controllers/productController.js"
import { listProduct } from "../controllers/productController.js"
import { singleProduct } from "../controllers/productController.js"
import { changeStock } from "../controllers/productController.js"

const productRouter = express.Router()

productRouter.post('/add',upload.array(["images"]),authAdmin,addProduct)
productRouter.get('/list',listProduct)
productRouter.get('/single/:productId',singleProduct)
productRouter.put('/stock/:productId',changeStock)

export default productRouter