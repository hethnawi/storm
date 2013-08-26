var parse = require('url').parse;
//o hai comment ya kbeer 3'oor ya rajel 27eeee
require('http').createServer(function(req, res) {
    params = parse(req.url, true).query;
    var a = parseInt(params.a, 10);
    var b = parseInt(params.b, 10);
    var result = a + b;
    console.log(a);
    console.log(b);
    res.end(JSON.stringify(result));

}).listen(8080);////
//wala marra sherna sawa//second schange
