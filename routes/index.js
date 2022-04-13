const express=require("express");
const mainrouter=require("./product")
const routesfollow=express.Router();

routesfollow.use("/product",mainrouter)

module.exports=routesfollow;