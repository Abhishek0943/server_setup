const app = require("./app") //import app from app
const dotenv = require("dotenv") // import env file 
const mongoose = require("mongoose") // import env file 
const bobyParser = require('body-parser')
process.on("uncaughtException", (err) => { // this is err function which is handel uncaught err Ex. consol.log(hii) so in this hii is not decliar 
    //this function always on the top of the code 
    console.log(`error :${err.message}`)
    console.log(`unwante error`)
    process.exit(1)
})
dotenv.config({ path: "./config.env" }) //this give path of env file 
const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI).then((data) => { 
        console.log(`mongodb connected with server ${data.connection.host}`)
    })
}
connectDatabase() // we are calling connectDatabase which is writen in ./config/dataBase 

port = process.env.PORT //initlition of port 
const server = app.listen(port, () => { //listen app on port and store in serveer variable
    console.log(`server is runing on http://localhost:${port}`) 
})

process.on("unhandledRejection", (err) => { // this is function for database err it was first print err then shutting down serverg
    console.log(`error :${err.message}`)
    console.log(`Shutting down the server due to unwanted promise rejection`)
    server.close(() => {
        process.exit(1)
    })
})
