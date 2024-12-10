import { Request, Response } from "express";
import { BicycleModel } from "../bicycle/bicycle.model";
import { Order } from "./order.inferface";
import { orderServices } from "./order.services";

const createAorder = async(req:Request,res:Response)=>{
    try {
        const data = req.body;
        const product = await BicycleModel.findOne({_id:data.product});
        //console.log(product)
        if(product && (product.quantity >= req.body.quantity)){
            const orderObj:Order ={
                email: req.body.email,
                product : req.body.product,
                quantity : req.body.quantity,
                totalPrice : req.body.quantity * product.price
            }
            await BicycleModel.findOneAndUpdate({_id:data.product},{
                $set:{quantity : product.quantity - data.quantity}
            },
            {
                returnDocument: "after",
                upsert: false
            });
            const result = await orderServices.createAorderDb(orderObj)
            res.status(200).json({
                success: true,
                message: 'Successfully create a Order',
                data: result
            });
        }else{
            res.status(400).json({
                success: false,
                message: 'Low stock',
                data: {}
            });
        }
        
    } catch (error) {
         res.status(400).json({
            success: false,
            message: 'Something went wrong',
            error
        });
    }
}

const getRevenueDb = async(req:Request,res:Response)=>{
    try {
        const result = await orderServices.getRevenueDb();
        res.status(200).json({
            success: true, 
            message: 'Successfully retrieve revenue',
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Something went wrong',
            error
        });
    }
}

export const orderController = {
    createAorder,
    getRevenueDb
}