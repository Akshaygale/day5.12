const express =require("express");
const cors=require("cors");
const routers=require("./routes")
const server=express();

server.use(cors());
server.use("/api/v1",routers)

server.listen(process.env.PORT || 5001,()=>{
    console.log("Server Started");
})
