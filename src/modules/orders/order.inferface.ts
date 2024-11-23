import mongoose from "mongoose";

export interface ProductId {
    product: mongoose.Types.ObjectId; 
  }

export type Order = {
    email : string;
    product : ProductId;
    quantity : number;
    totalPrice : number;
}