const app = require("./config")
const http = require('http').createServer(app)
const io = require('socket.io')(http)

var home = require('./app/routes/home')(app)
var statics = require('./app/routes/statics')(app)

var connectedUsers = []

io.on("connection", (socket) => {
  connectedUsers.push(socket.id)
  console.log(socket.id)
  socket.broadcast.emit("enter", socket.id + ' is Connected')

  socket.on("send", (message) => {
    socket.broadcast.emit("receive", message)
  })

})


http.listen(3000, () =>{
  console.log('Starting Server')
})
