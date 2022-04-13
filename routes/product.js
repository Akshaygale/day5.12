const { Route } = require("express");
const express=require("express");
const controlproduct=require("../controllers/product");
const makeroute=express.Router()

makeroute.route("/")
    .get(controlproduct.mydetails)


module.exports=makeroute;