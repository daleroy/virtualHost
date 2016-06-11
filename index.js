global.appRoot = __dirname;
var express = require('express');
var settings = require('./src/settings');
var createVirtualHost = require('./src/server/createVirtualHost.js');

var main = express();

settings.hosts.forEach(function(host) {
    var vHost = express();

    console.log('Creating Virtual Host for url: %s using middleware: %s.', host.url, host.middleware);
    vHost.get('/', createVirtualHost(host.url, host.middleware));
    main.use(vHost);
});

main.listen(settings.port, function() {
    console.log('Express server listening on port %d in %s mode', settings.port, main.settings.env);
});
