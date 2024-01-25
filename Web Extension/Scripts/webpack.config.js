const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');


 module.exports={
    mode:"development",
    devtool: 'cheap-module-source-map',
    entry:{
        popup: './src/popup.js',
        background:'./src/background.js'
       
        
         },
    module:{
        rules: [
            {
                use:"ts-loader",
                test:/\.tsx$/,
               
                exclude: /node_modules/
            },
           
             
        ]

    },
    plugins:[
        new CopyPlugin({
            patterns: [
            { 
                from: path.resolve('src/manifest.json'), 
                to: path.resolve('dist') 
            },
            { 
                from: path.resolve('src/assets/icon.png'), 
                to: path.resolve('dist') 
            },
            { from: path.resolve('./src/popup.html'), to:path.resolve( 'dist') },
            { 
                from: path.resolve('./src/content.js'), 
                to: path.resolve('dist') 
            },
           
            
         ],
        }),
       
        
    ],
   
    resolve:{
        extensions:['.tsx','.ts','.js','.jsx']
    },
    output:{
        filename:'[name].js'
    }
 }