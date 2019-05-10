'use strict';

const router = ( request , response )  => { 
    //console.log('Servidor corriendo'); 
    if ( request.url === '/pag2' ) {
        response.end( 'Bye World' );
    } else {
    response.end ( 'Hello World' );
    }
};

module.exports = router; 