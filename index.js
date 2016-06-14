global.appRoot = __dirname;
var sites = global.appRoot + '/sites/';
var express = require('express');
var settings = require('./src/settings');
var cvh = require('./src/server/createVirtualHost.js');
var vhost = require('vhost');
var main = express();

settings.hosts.forEach(function(host) {
    console.log('Attempting to create Virtual Host for url: %s using middleware: %s.', host.url, host.middleware);

    main.use(cvh.createStatic(host.url, host.middleware));
    main.use(cvh.createRoutes(host.url, host.middleware));
});

main.listen(settings.port, function() {
    console.log('Express server listening on port %d in %s mode', settings.port, main.settings.env);
});
