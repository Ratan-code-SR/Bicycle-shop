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

// getAllBicycle
  const getAllBicycle = async (req: Request, res: Response) => {
    try {
      const result = await bicycleServices.getAllBicycleIntoDB();
  
      res.status(200).json({
        success: true,
        message: 'Bicycles retrieved successfully',
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  };
  // getSingleBicycle
  const getSingleBicycle = async (req:Request, res:Response)=>{
    try{
      const product = req.params._id
      const result = await bicycleServices.getSingleBicycleIntoDB(product)
      res.status(200).json({
        success:true,
        massage:"Bicycle retrieved successfully",
        data:result
      })
    }
    catch(err){
      console.log(err);
    }
  }
// updateBicycle
const updateBicycle = async (req:Request, res:Response)=>{
  try{
    const productId = req.params._id
    const body = req.body;
    const result = await bicycleServices.updateBicycle(productId,body)
    res.status(200).json({
      success:true,
      massage:"Bicycle updated successfully",
      data:result
    })
  }
  catch(err){
    console.log(err);
  }
}

// delete bicycle
const deleteBicycle = async (req:Request, res:Response)=>{
  try{
    const productId = req.params._id
    const result = await bicycleServices.deleteBicycle(productId)
    res.status(200).json({
      success:true,
      massage:"Bicycle delete successfully",
      data:result
    })
  }
  catch(err){
    console.log(err);
  }
}


 export const bicycleController ={
    createBicycleShop,
    getAllBicycle,
    getSingleBicycle,
    updateBicycle,
    deleteBicycle
  }