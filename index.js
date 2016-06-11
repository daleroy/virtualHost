var express = require('express');
var settings = require('./src/settings');
var createVirtualHost = require('./src/server/createVirtualHost.js');

var main = express();

settings.hosts.forEach(function(host) {
    var vHost = express();

    vHost.use(createVirtualHost(host.url, host.middleware));
    main.use(vHost);
});

main.listen(settings.port, function() {
    console.log('Express server listening on port %d in %s mode', settings.port, app.settings.env);
});
