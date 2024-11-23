Overview
This is a bicycle product backend. This backend build with Node.js, Express,typescript,mongoose and MongoDB.
First, clone the repository

          git clone https://github.com/mehedi891/bicycle-backend.git
          cd bicycle-backend
          
      
Now run this command

            npm install

            
Now for database connection and port you have to add the .env file in the root and add these two

            PORT:YOUR_prt
            MONGO_URI:Your_mongoDB_atlas_URL

            
Now run this command to start it in development mood:

          npm run dev

          
To run with direct JS file

        npm run build
        npm run start

        
Available Routes: 

     Method: POST ->  /api/products/create-new/ //to create a bicycle products
     Method: GET -> /api/products/ //to get all the products
     Method: GET -> /api/products/:id //to get a single product by ID
     Method: PUT -> /api/products/:id //to Update a single product by ID
     Method: DELETE -> api/products/:id //to Delete a single product by ID
     Method: POST -> api/order/ //to create a order
     Method: GET -> api/order/revenue //to get total revenue

     
for Bicycle product create this a example product object 

    {
        "name": "Speedster Pro",
        "brand": "Giant",
        "price": 1799.49,
        "type": "Road",
        "description": "A lightweight road bike built for speed and endurance.",
        "quantity": 15,
        "inStock": true
     }

     
  For creating order this is a exaple object 
  
          {
              "email" : "mehedi2@test.com",
              "product" : "6741feed27b5dd86a950f40d",
              "quantity": 2
          }