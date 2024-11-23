import { Schema, model } from 'mongoose';
import { Bicycle } from './bicycle.interface';

const bicycleSchema = new Schema<Bicycle>({
    name:{
        type: String,
        required: true,
        trim:true,
    },
    brand:{
        type: String,
        required: true,
        trim:true,
    },
    price:{
        type: Number,
        required: true,
        trim:true,
    },
    type:{
        type: String,
        enum: {
            values: ["Mountain", "Road", "Hybrid", "BMX", "Electric"],
            message: "{VALUE} is not supported"
        },
        trim:true,
    },
    description:{
        type: String,
        trim:true,
    },
    quantity:{
        type: Number,
        trim:true,
    },
    inStock:{
        type: Boolean,
        required: true,
        trim:true,
    }


},{timestamps:true});

export const BicycleModel = model<Bicycle>('Product',bicycleSchema);