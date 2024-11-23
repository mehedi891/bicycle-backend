import { Order } from "./order.inferface"
import { OrderModel } from "./order.model"

const createAorderDb = async(data:Order)=>{
    const result = await OrderModel.create(data);
    return result
}

const getRevenueDb = async() =>{
    const result = await OrderModel.aggregate([
        {
            $group:{
                _id: null,
                totalRevenue: {$sum:"$totalPrice"}
            }
        },
        {
            $project:{
                _id: 0,
                totalRevenue:1,
            }
        }

    ]);
    return result[0]
}

export const orderServices = {
    createAorderDb,
    getRevenueDb,
}
