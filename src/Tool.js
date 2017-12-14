import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill();
class Tool {
  get( url='' , option={} ){
    return this.fetch( 'GET' , url + this.formatParameter(option) )
  }
  post( url='' , option={} ){
    return this.fetch( 'POST' , url , option )
  }
  formatParameter( obj ){
    if( JSON.stringify( obj ) == '{}' ) return '';
    let parameter = '?';
    for( let x in obj ){
      parameter += x + '=' + obj[x] + '&';
    }
    return parameter.replace( /&$/g , '' );
  }
  fetch( type='GET' , url='' , option={} ){
    let _fetch = false;
    switch( type ){
      case 'GET' :
        _fetch = fetch( url )
        break;
      case 'POST' :
        _fetch = fetch( url , {
          method : 'POST',
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify( option )
        })
        break;
    }
    return _fetch.then( res => res.json() );
  }
}
export default new Tool();
