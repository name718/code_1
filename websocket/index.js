var Websocket = require('websocket').server
var http = require('http')
var httpServer = http.createServer().listen(808,function() {
    console.log("连接成功")
})
var weServer = new Websocket({
    httpServer,
    autoAcceptConnections:false
})

var conArr = []
weServer.on('request', function(request) {
    var connection = request.accept();
    conArr.push(connection);
    connection.on('message', function(msg) {
        console.log(msg);
        for(let i = 0; i < conArr.length; i ++){
            conArr[i].send(msg.utf8Data);
        }
       
    })
})