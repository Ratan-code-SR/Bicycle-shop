import { model, Schema } from 'mongoose';
import { Bicycle } from './bicycle.interface';

const bicycleSchema =  new Schema <Bicycle>({
  name:{
    type:String,
    require:true
  },
  brand:{
    type:String,
    require:true
  },
 price:{
    type:Number,
    require:true
 },
 type:{
    type:String,
    require:true
 },
 description:{
    type:String,
    require:true
 },
 quantity:{
    type:String,
    require:true
 },
 inStock:{
    type:String,
    enum:["true","false"],
    required:true,
 }
 
  })
const bicycleModel = model("Bicycle",bicycleSchema)
export default bicycleModel