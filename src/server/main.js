var connect = require('connect');
var serveStatic = require('serve-static');

var port = process.env.PORT || 8080
var publicDir = __dirname + '/../../public'

connect().use("/", serveStatic(publicDir)).listen(port, function(){
    console.log('Server running on %s...', port);
});
