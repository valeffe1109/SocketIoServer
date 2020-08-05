const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const http = require('http').createServer();
const mongoose = require('mongoose')
const cors = require('cors')

const uri = "mongodb+srv://valeffe1109:Vergine97@cluster0.zv9ag.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.connect(uri , { useNewUrlParser: true,useUnifiedTopology: true })  

const io = require('socket.io')(http);
app.use(express.json())
app.use(cors())

http.listen(port,()=>{
    console.log('Server is listening on localhost:'+port);
})

io.on('connection',(socket,res)=>{
    socket.on('new-operations',function(data){
        io.emit('new-remote-operations',data)
    })
    
})


