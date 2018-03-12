var path = require( 'path' );
var webpack = require( 'webpack' );
var CopyWebpackPlugin = require( 'copy-webpack-plugin' );

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve( ROOT_PATH , 'src' ); //__dirname 中的src目录，以此类推
var APP_FILE = path.resolve( APP_PATH , 'App.jsx' ); //根目录文件app.jsx地址
var BUILD_PATH = path.resolve( ROOT_PATH , 'dist' ); //发布文件所存放的目录

module.exports = {
  devtool : 'cheap-module-eval-source-map', //打包模式选择
  entry : { //需要打包的文件目录
    entry : [
      'react-hot-loader/patch',
      APP_FILE
    ]
  },
  output : {  //打包后文件位置
    path : BUILD_PATH,
    filename : 'bundle.js'
  },

  resolve : {

    //查找module的话从这里开始查找(绝对路径)
    // root : 'xxxxxx',

    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions : [ '' , '.js' , '.jsx' , '.scss' ],

    //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    alias : { '@' : APP_PATH }

  },
  module : {
    loaders : [
      {
        test : /\.jsx$/,
        exclude : /node_modules/,
        loader : 'babel',
        query : {
          presets : [ 'react' , 'es2015' ]
        }
      },
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loader : 'babel?presets[]=react,presets[]=es2015'
      },
      {
        test : /\.scss$/,
        loader : 'style!css!sass'
      },
      {
        test : /\.png$/,
        loader : 'url-loader?mimetype=image/png'
      },
      {
        test : /\.jpg$/,
        loader : 'url-loader?mimetype=image/jpg'
      }
    ]
  },
  plugins : [
    //复制文件，把src文件搬到dist目录
    new CopyWebpackPlugin([
      { from : path.resolve( APP_PATH , 'index.html' ) , to : BUILD_PATH },
      { from : path.resolve( APP_PATH , 'assets/img' ) , to : path.resolve( BUILD_PATH , 'assets/img' ) },
      { from : path.resolve( APP_PATH , 'assets/json' ) , to : path.resolve( BUILD_PATH , 'assets/json' ) }
    ]),
    new webpack.HotModuleReplacementPlugin()
  ],

  //webpack-dev-server配置
  devServer : {
    port : 8080,
    inline : true,  //源文件改变时会自动刷新页面
    hot : true, //是否开启热跟新
    contentBase : BUILD_PATH, //localhost:8080指向的陌路
    outputPath : path.join( __dirname , 'dist' )  //涉及到文件复制搬运，这个必须写
  }



};
