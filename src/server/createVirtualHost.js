var vhost = require('vhost');
var sites = global.appRoot + '/sites/';

module.exports = function(domainName, middleware) {
    var handler = require(sites + middleware);

    if (handler && typeof handler === 'function') { 
        console.log('Created vHost for domainName: %s middleware: %s.', domainName, middleware);
        return vhost(domainName, handler);
    }
}
