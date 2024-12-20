import app from "./app"
import mongoose from "mongoose";
import config from './config'




  main().catch(err => console.log(err));

  async function main() {
    try {
        await mongoose.connect(config.dbUri as string);
        app.listen(config.port, () => {
            console.log(`server is runnin at http://localhost:${config.port}`)
          });
    } catch (error) {
        console.log(error)
    }
   
  }