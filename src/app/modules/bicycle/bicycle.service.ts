import { Bicycle } from "./bicycle.interface";
import bicycleModel from "./bicycle.model";

const createBicycleIntoDB = async (bicycle:Bicycle)=>{
const result =  await bicycleModel.create(bicycle)
return result;
}



export const bicycleServices ={
createBicycleIntoDB,
}