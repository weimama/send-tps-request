'use strict';

var request = require('request');

function sendRequest (options) {
    var reqUrl = options.url;
    var reqTps = options.tps;
    var second = options.second || 1;
    if(!reqTps || reqTps<0) {
        reqTps = 1;
    }

    var timeinterval = 1000/reqTps;
    // console.log(options);
    // console.log('timeinterval:', timeinterval);
    var count = 0;

    var intervalHandler = setInterval(function() {
        request(reqUrl, function (error, response, body) {
            count++;
            // console.log('---count:', count);
            if (!error && response.statusCode == 200) {
                // console.log(body) // Show the HTML for the Google homepage.
            } else {
                // console.log('error:', error);
            }
        });

    } , timeinterval);

    setTimeout(function () {
        //clearInterval;
        clearInterval(intervalHandler);
    }, second*1000 + timeinterval -1);

}

module.exports = {
    sendRequest: sendRequest
};
