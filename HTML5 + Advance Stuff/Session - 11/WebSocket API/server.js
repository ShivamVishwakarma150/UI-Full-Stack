// create the http server
// create the chat server
// assign the port number 
// connect, receive, send and close

// import http module
// http module used to create the HTTP server.
//http module is predefined module
const http = require("http");

// import websocket module
// websocket module used to create the chat server
// create the server
const server = require("websocket").server;

// assign the custom port number to chat server
let socket = new server({
    httpServer : http.createServer().listen(8081,()=>{
        console.log("server listening the port no 8081")
    })
})

// connect, receive data, send data and close connection

socket.on("request",function(request){
    // server accepting request object
    let connection = request.accept(null,request.origin);

    // whatever the message comming from client that is stored in message object.
    connection.on("message",function(message){
        // message coming from client
        console.log(message.utf8Data); // bytecode to string
        
        // sending the data to client
        connection.sendUTF("Hello_1");
        connection.sendUTF("Hello_2");
        setTimeout(()=>{
            connection.sendUTF("Hello_3");
        },10000);
    });

    // close the server
    connection.on("close",function(connection){
        console.log("connection close");
    })
})