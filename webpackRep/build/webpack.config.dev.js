const base=require("./webpack.config.base.js");
const webpackMerge=require("webpack-merge");
const config=require("../config/index.js");
const configdev={
    mode:config.dev.mode,
    devServer:{
        host:config.dev.host,
        port:config.dev.port,
        hot:true,
        open:true
        // proxy:{
        //     '/api':{
        //         target:"https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
        //         secure:true,
        //         changeOrigin:true,
        //         pathRewrite:{
        //             '^/api':""
        //         }
        //     }
        // },
        // before(app){
        //     app.get('/list',(req,res)=>{
        //         res.json({code:0,list:"success"})
        //     })
        // }
    },

    devtool:'source-map'
}

module.exports=webpackMerge(configdev,base)