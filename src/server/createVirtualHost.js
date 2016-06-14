var ROUTES_PATH = '/src/server/routes';
var vhost = require('vhost');
var express = require('express');
var sites = global.appRoot + '/sites/';

module.exports = {
    createRoutes: function(domainName, middleware) {
        var routes = require(sites + middleware + ROUTES_PATH);

        if (routes && typeof routes === 'function') { 
            console.log('Created vHost for domainName: %s using middleware: %s.', domainName, middleware);

            return vhost(domainName, routes);
        }
    },
    createStatic: function(domainName, middleware) {
        var staticPath = sites + middleware + '/public';

        console.log('Created vHost for domainName: %s using static path: %s.', domainName, staticPath);

        return vhost(domainName, express.static(staticPath));
    }
}
