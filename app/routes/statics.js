module.exports = (app) =>{
  app.get('/static/js/jquery.js', (req, resp) =>{
    resp.sendFile(__dirname + "/views/static/js/jquery.js")
  });

  app.get('/static/js/events.js', (req, resp) =>{
    resp.sendFile(__dirname + "/views/static/js/events.js")
  });

  app.get('/static/css/style.css', (req, resp) =>{
    resp.sendFile(__dirname + "/views/static/css/style.css")
  });
}
