import { isObject, isArray } from 'lodash'

import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(function( config ){
  // 在发送请求之前做些什么
  return config;
}, function (error){
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function( response ){
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

//前缀
axios.defaults.baseURL = 'http://173.100.1.70:8080'


class Tool {

  constructor(){

  }

  request( method = 'get', url = 'xxxx', data ){
    return axios[ method ]( url , data )
  }

  setLocal( key , data ){
    localStorage[ key ] = JSON.stringify( data )
  }

  getLocal( key ){
    let data = localStorage[ key ]
    if( String(data) == 'null' || String(data) == 'undefined' ) return undefined
    try{
      if( isObject(JSON.parse(data)) || isArray(JSON.parse(data)) ) data = JSON.parse( data )
    }catch(e){
      localStorage.removeItem( 'userInfo' )
    }
    return data
  }

  removeLocal( key ){
    localStorage.removeItem( key )
  }

}

export function request(){ return new Tool().request( ...arguments ) }
export function setLocal(){ return new Tool().setLocal( ...arguments ) }
export function getLocal(){ return new Tool().getLocal( ...arguments ) }
export function removeLocal(){ return new Tool().removeLocal( ...arguments ) }
