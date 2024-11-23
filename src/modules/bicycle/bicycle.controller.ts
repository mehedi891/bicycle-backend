import { Request, Response } from "express";
import { BicycleServices } from "./bicycle.services";

const createBicycle = async(req:Request,res:Response) =>{
    const bicycleData = req.body;
   try {
    //console.log(bicycleData)
    const result = await BicycleServices.createBicycleDb(bicycleData);
    res.status(201).json({
        success: true,
        message: 'Successfully created a Bicycle',
        data: result
    });
   } catch (error) {
    console.log(error)
    res.status(400).json({
        success: false,
        message: 'Something went wrong'
    });
   }
}


const getAllBicycle = async (req:Request,res:Response) =>{
   const {searchTerm} = req.query;
   if(searchTerm){
    try {
        const result = await BicycleServices.getSearchResutlDb(searchTerm as string);
        res.status(200).json({
            success: true,
            message: 'Successfully get A Bicycle',
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Something went wrong',
            error
        });
    }
   }else{
    try {
        const result = await BicycleServices.getAllBicycleDb();
        res.status(200).json({
            success: true,
            message: 'Successfully get All Bicycles',
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Something went wrong'
        });
    }
   }
   
}

const getASpecificBicycleDb = async(req: Request,res:Response) =>{
    const {id} = req.params;
    try {
        const result = await BicycleServices.getASpecificBicycleDb(id);
        res.status(200).json({
            success: true,
            message: 'Successfully get A Bicycle',
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Something went wrong'
        });
    }
}

const updateABicycle = async(req:Request,res:Response) =>{
    const data = req.body;
    const {id} = req.params;
    try {
        const result = await BicycleServices.updateABicycleDb(id,data);
        res.status(200).json({
            success: true,
            message: 'Successfully get A Bicycle',
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

const deleteABicycle = async(req:Request,res:Response) =>{
    try {
        const {id} = req.params;
        const result = await BicycleServices.deleteABicycleDb(id);
        res.status(200).json({
            success: true,
            message: 'Successfully get A Bicycle',
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

export const BicycleController = {
    createBicycle,
    getAllBicycle,
    getASpecificBicycleDb,
    updateABicycle,
    deleteABicycle
}