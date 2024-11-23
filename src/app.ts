import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { BicycleRoute } from './modules/bicycle/bicycle.route';
import { orderRoute } from './modules/orders/order.route';

const app:Application = express();

//Json parser (default feature in express)
app.use(express.json());

//enable cross origin connection
app.use(cors());


//Application routes
app.use('/api/products/',BicycleRoute);
app.use('/api/order',orderRoute)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.use('*',(req,res,next)=>{
  res.json({
    message: 'Not found'
  })
})
export default app;