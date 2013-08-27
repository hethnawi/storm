var parssse = require('url').parse;//first change
//o hai comment ya kbeer 3'oor ya rajel 27eeee//2na fe master
require('http').createServer(function(req, res) {
    params = parse(req.url, true).query;
    var a = parseInt(params.a, 10);
    var b = parseInt(params.b, 10);
    var result = a + b;
    console.log(a);//hahahahahahah
    console.log(b);
    res.end(JSON.stringify(result));

}).listen(8080);////
//wala marra sherna sawa//second scha

hey hey
hat to 2nshoof shu 25ertha m3hom
dsgdfg
helloo people
