# react练习


此项目是针对react的学习，将会从零到一步一步完善该项目，共勉!


###  Installation 安装

[Node.js](https://nodejs.org/) v7.7.4

建议使用cnpm（npm很容易被墙）

```sh
$ cnpm install (安装依赖)
$ cnpm run dev (开发模式，默认开启热跟新 http://localhost:8080 )
$ cnpm run build (打包)
```
依赖插件说明：

babel-core : Babel核心文件，提供Babel的Api

babel-loader : Babel预处理器

babel-preset-es2015 : ES2015转码规则

babel-preset-react : react转码规则

react-hot-loader : 热加载，局部刷新

babel-preset-stage-0 : ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个

babel-plugin-transform-runtime  为了支持es7 async await编译

babel-preset-stage-3 : 为了支持es7 async await编译

babel-preset-stage-1

babel-preset-stage-2

babel-preset-stage-3

node-sass : 编译sass时需要依赖的插件

copy-webpack-plugin : 拷贝资源

webpack-dev-server : 小型的静态文件服务器,为webpack打包生成的资源文件提供Web服务

url-loader : 图片转base64

css-loader : 处理css文件中的url()等

style-loader : 将css插入到页面的style标签

sass-loader : 将sass文件编译成css,

jsx-loader : jsx文件预处理器

es6-promise : fetch依赖的插件

isomorphic-fetch
