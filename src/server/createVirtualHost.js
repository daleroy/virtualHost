var express = require('express');
var vhost = require('vhost');

module.exports = function(domainName, dirPath) {
    return vhost(domainName, express.static(dirPath));
}
