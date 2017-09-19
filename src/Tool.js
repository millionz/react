import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill();
class Tool {
  formatParameter( obj ){
    if( JSON.stringify( obj ) == '{}' ) return '';
    let parameter = '?';
    for( let x in obj ){
      parameter += x + '=' + obj[x] + '&';
    }
    return parameter.replace( /&$/g , '' );
  }
  fetch( _url , _option , headers ){
    let url = _url;
    let method = toLocaleUpperCase( _option.method ) || 'GET';
    let header = '';
    let option = _option;
    if( method == 'GET' ) url += this.formatParameter( _option );
    if( method == 'POST' ) option = JSON.stringify( option );
    if( headers !== undefined ){
      header = new Headers();
      for( let v in headers ){
         header.append( v , headers[v] );
       }
    }
    return fetch( url , {
      method : method,
      header : header,
      body : option
    })
  }
}
export default new Tool();
