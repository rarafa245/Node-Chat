module.exports = (app) =>{
  app.get('/', (req, resp) =>{
    resp.sendFile(__dirname + "/views/index.html")
  });
}
