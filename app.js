/**
 * Created by Administrator on 2017/5/7 0007.
 */
var express=require("express");
var app=express();
var swig=require("swig");
app.engine("html",swig.renderFile);//定义当前应用所使用的模板引擎
app.set("views","./view");//文件的存放目录
app.set("view engine","html");//注册使用的模板引擎
swig.setDefaults({cache:false});//取消模板缓存，仅限开发中使用
app.use("/public",express.static("./public"));//静态资源托管，express.static用来加载静态资源中间件


app.use("/user",require("./router/user"));//前台页面
app.use("/api",require("./router/api"));//前台api（页面逻辑）
app.use("/admin",require("./router/admin"));//后台

app.listen("8080","localhost");