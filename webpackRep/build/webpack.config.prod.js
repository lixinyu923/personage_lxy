const base=require("./webpack.config.base.js");
const {resolve}=require("path");
const webpackMerge=require("webpack-merge");
const config=require("../config/index.js");

let configProd={
    mode:config.prod.mode,
    output:{
        filename:'[name].js',
        path:resolve(__dirname,"../dist")
    }
}

module.exports=webpackMerge(configProd,base)