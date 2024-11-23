import mongoose, { Schema, model } from 'mongoose';
import { Order } from './order.inferface';

const orderSchema = new Schema<Order>({
    email:{
        type: String,
        required: true,
    },
    product:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "BicycleModel",
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    totalPrice:{
        type: Number,
        required: true
    }
},{timestamps:true});

export const OrderModel = model<Order>('Order',orderSchema)