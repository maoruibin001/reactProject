/**
 * Created by lenovo on 2017/7/13.
 */
const conf2 = require('./conf2');
const merge = require('webpack-merge');
const webpack = require('webpack');
var conf1 = {
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}
var conf3 = {name: {age: 3}}
conf = merge({}, conf3);
conf.name.age = 4;
console.log(conf.name.age);
console.log(conf3.name.age);
