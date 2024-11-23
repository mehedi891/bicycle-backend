import path from 'path'
import dotenv from 'dotenv';


dotenv.config({path: path.join( process.cwd(), '.env') });

export default {
    port : process.env.PORT,
    dbUri : process.env.MONGO_URI

}