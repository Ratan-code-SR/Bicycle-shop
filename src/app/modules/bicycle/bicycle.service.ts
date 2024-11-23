import { Bicycle } from "./bicycle.interface";
import bicycleModel from "./bicycle.model";

const createBicycleIntoDB = async (bicycle:Bicycle)=>{
const result =  await bicycleModel.create(bicycle)
return result;
}

const getAllBicycleIntoDB = async ()=>{
    const result = await bicycleModel.find()
    return result;
}

const getSingleBicycleIntoDB = async (productId:string) =>{
    const result = await bicycleModel.findOne({productId})
    return result;
}


export const bicycleServices ={
createBicycleIntoDB,
getAllBicycleIntoDB,
getSingleBicycleIntoDB,
}