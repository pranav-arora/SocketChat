var express=require("express");
var app=express();
var socket=require("socket.io");
app.use(express.static("public"));
var server=app.listen(9000,function(){
    console.log("server Start");
});
var io=socket(server);
io.sockets.on('connection',function(socket){
    console.log("connected");
    socket.emit('message',{message:"welcome to chat"});
   socket.on('send',function(data){
       console.log("app send")
        io.sockets.emit('message',data);
    });
    
});
