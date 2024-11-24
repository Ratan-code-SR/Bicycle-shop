import { Router } from "express";
import { bicycleController } from "./bicycle.controller";


const router = Router()

router.post("/products",bicycleController.createBicycleShop)
router.get("/products",bicycleController.getAllBicycle)
router.get("/products/:productId",bicycleController.getSingleBicycle)
router.put("/products/:productId",bicycleController.updateBicycle)
router.delete("/products/:productId",bicycleController.deleteBicycle)

export const bicycleRouter = router