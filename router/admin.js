/**
 * Created by Administrator on 2017/6/8 0008.
 */
var express=require("express");
var router=express.Router();
router.get("/",function(req,res,next){
    res.send("我是admin");
});
module.exports=router;