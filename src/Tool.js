/*
  模块名称 : Tool
  说明 : 工具类，包含功能：数据类型判断、对象转成URL参数字符串、AJAX
  使用方法 :
  import Tool from '@/Tool'
  Tool.方法名称 ，例如 Tool.get( param )
*/

class Tool {
  constructor( param ){
    this.param = param;
  }
  typeJudge( type , param ){
    let typeString = Object.prototype.toString.call( param );
    typeString = typeString.split(' ')[1].replace( ']' , '' );
    return typeString == type;
  }
  isObject( param ){
    return this.typeJudge( 'Object' , param );
  }
  isArray( param ){
    return this.typeJudge( 'Array' , param );
  }
  isNumber( param ){
    return this.typeJudge( 'Number' , param );
  }
  isString( param ){
    return this.typeJudge( 'String' , param );
  }
  isBoolean( param ){
    return this.typeJudge( 'Boolean' , param );
  }
  getURLparamFromObj( obj ){
    if( !this.isObject(obj) ) return '';
    let str = '?'
    for( let x in obj ){
      str += x + '=' + obj[x] + '&'
    }
    return str.replace( /&$/g , '' );
  }
  ajax( type , url , param ){
    return new Promise(( resolve, reject ) => {
      let xhr = new XMLHttpRequest();
      xhr.open( type , url , false )
      xhr.addEventListener( 'load' , res => {
        let status = xhr.status;
        if( (status >= 200 && status < 300) || xhr.status == 304 ){
          let result = xhr.responseText;
          if( JSON.parse(result) ) result = JSON.parse(result);
          resolve( result , this )
        }else{
          reject({ status : status , error : xhr.responseText })
        }
      })
      xhr.send( null )
    })
  }
  get( url , param ){
    let _url = url;
    if( param ) _url += this.getURLparamFromObj( param );
    return this.ajax( 'GET' , _url );
  }
  post( url , param ){
    return this.ajax( 'POST' , url , param );
  }
}
export default new Tool();
