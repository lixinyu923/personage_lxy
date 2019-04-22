let {resolve}=require("path");
let htmlWebpackPlugin=require("html-webpack-plugin");
let webpack=require("webpack");
let extractTextWebpackPlugin=require("extract-text-webpack-plugin");
module.exports={
    entry:resolve(__dirname,"../src/main.js"),
    module:{
        rules:[{
            test:/\.css$/,
            // use:['style-loader','css-loader']
            use:extractTextWebpackPlugin.extract({
                use:"css-loader",
                fallback:"style-loader"
            })
        },{
            test:/.\js$/,
            use:[{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            }]
        },{
            test:/\.(jpg|gif|svg)$/,
            use:['file-loader']
        },{
            test:/\.less$/,
            use:['style-loader','css-loader','less-loader']
        },{
            test:/\.(sass|scss)$/,
            use:['style-loader','css-loader','sass-loader']
        }
    ]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:"index.html",
            template:resolve(__dirname,"../index.html"),
            title:"one"
        }),
        new extractTextWebpackPlugin("index.css"),

        new webpack.HotModuleReplacementPlugin()
    ],
    
    resolve:{
        extensions:['.js','.css'],
        alias:{
            "@":resolve(__dirname,"../src")
        }
    },

}