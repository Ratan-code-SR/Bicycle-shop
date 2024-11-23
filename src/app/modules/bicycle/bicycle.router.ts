import { Router } from "express";
import { bicycleController } from "./bicycle.controller";


const router = Router()

router.post("/products",bicycleController.createBicycleShop)
router.get("/products",bicycleController.getAllProducts)
router.get("/products/:productId",bicycleController.getSingleProducts)

export const bicycleRouter = router