import { Router } from "express";
import { bicycleController } from "./bicycle.controller";


const router = Router()

router.post("/products",bicycleController.createBicycleShop)

export const bicycleRouter = router