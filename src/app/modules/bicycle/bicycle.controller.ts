import { Request, Response } from "express";
import { bicycleServices } from "./bicycle.service";

const createBicycleShop = async (req: Request, res: Response) => {
    try {
      const bicycle = req.body;
      const result = await bicycleServices.createBicycleIntoDB(bicycle)
      res.status(200).json({
        success: true,
        message: 'Bicycle is created successfully',
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  };


 export const bicycleController ={
    createBicycleShop,
  }