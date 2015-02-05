'use strict';

var sendreq = require('../index');

var argv = require('optimist').argv;

sendreq.sendRequest(argv);
