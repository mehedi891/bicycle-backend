import { Bicycle } from "./bicycle.interface";
import { BicycleModel } from "./bicycle.model";


const createBicycleDb = async (bicycleData: Bicycle) =>{
  const result =   await BicycleModel.create(bicycleData);
  return result ;
}

const getAllBicycleDb = async () =>{
    const result = await BicycleModel.find({});
    return result;
}

const getASpecificBicycleDb = async (id:string) =>{
    const result = await BicycleModel.findOne({_id:id});
    return result;
}

const getSearchResutlDb = async(searchTxt:string) =>{
    const result = await BicycleModel.aggregate([
        {
            $match:{
                $or:[
                    {type:  {$regex: searchTxt.toLowerCase(), $options: "i" } },
                    {name:  {$regex: searchTxt.toLowerCase(), $options: "i" } },
                    {brand:  {$regex: searchTxt.toLowerCase(), $options: "i" } },
                ]
            }
        },
        
    ]);

    return result;
}

const updateABicycleDb = async(id:string,data:object) =>{
    const result = BicycleModel.findOneAndUpdate({_id:id},{
        $set:data
    },
    {
        returnDocument: "after",
        upsert: false
    }
);
    return result
}


const deleteABicycleDb = async (id:string) =>{
    const result = await BicycleModel.deleteOne({_id:id});
    return result
}

export const BicycleServices = {
    createBicycleDb,
    getAllBicycleDb,
    getASpecificBicycleDb,
    getSearchResutlDb,
    updateABicycleDb,
    deleteABicycleDb
}