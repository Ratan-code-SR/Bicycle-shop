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


  const getAllProducts = async (req: Request, res: Response) => {
    try {
      const result = await bicycleServices.getAllBicycleIntoDB();
  
      res.status(200).json({
        success: true,
        message: 'products are retrieved successfully',
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getSingleProducts = async (req:Request, res:Response)=>{
    try{
      const product = req.params._id
      const result = await bicycleServices.getSingleBicycleIntoDB(product)
      res.status(200).json({
        success:true,
        massage:"product data get successfully",
        data:result
      })
    }
    catch(err){
      console.log(err);
    }
  }

 export const bicycleController ={
    createBicycleShop,
    getAllProducts,
    getSingleProducts,
  }